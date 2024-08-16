'use client'

import React, { useRef, useEffect, ReactNode } from "react"

const vertexShaderSource = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`

const fragmentShaderSource = `
  precision mediump float;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform float u_time;
  uniform float u_opacity;

  vec3 colorA = vec3(0.149,0.141,0.912);
  vec3 colorB = vec3(1.000,0.833,0.224);

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 mouse = u_mouse / u_resolution.xy;
    float dist = distance(st, mouse);
    float ripple = sin(dist * 50.0 - u_time * 15.0) * 0.5 + 0.5;
    float alpha = smoothstep(0.3, 0.0, dist) * ripple * u_opacity;
    
    vec3 color = mix(colorA, colorB, smoothstep(0.0, 0.3, dist));
    
    gl_FragColor = vec4(color, alpha);
  }
`

interface CursorProps {
  children: ReactNode
}

function debounce<F extends (...args: any[]) => void>(func: F, wait: number): (...args: Parameters<F>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null
  return (...args: Parameters<F>) => {
    if (timeout !== null) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => func(...args), wait)
  }
}

export default function Cursor({ children }: CursorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const trail = useRef<{ x: number; y: number; opacity: number }[]>([])
  const lastMoveTime = useRef(Date.now())

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl", { alpha: true })
    if (!gl) return

    const program = createProgram(gl, vertexShaderSource, fragmentShaderSource)
    if (!program) return

    gl.useProgram(program)

    const positionAttributeLocation = gl.getAttribLocation(program, "a_position")
    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    const positions = [-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)

    const resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution")
    const mouseUniformLocation = gl.getUniformLocation(program, "u_mouse")
    const timeUniformLocation = gl.getUniformLocation(program, "u_time")
    const opacityUniformLocation = gl.getUniformLocation(program, "u_opacity")

    const handleMouseMove = debounce((e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      lastMoveTime.current = Date.now()
    }, 5)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)
    handleResize()

    let animationFrameId: number

    const render = (time: number) => {
      time *= 0.001 // Convert to seconds

      gl.clear(gl.COLOR_BUFFER_BIT)

      gl.enable(gl.BLEND)
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

      gl.enableVertexAttribArray(positionAttributeLocation)
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
      gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0)

      gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height)
      gl.uniform1f(timeUniformLocation, time)

      // Fade out effect when mouse is not moving
      const timeSinceLastMove = (Date.now() - lastMoveTime.current) / 1000
      const fadeOutFactor = Math.max(0, 1 - timeSinceLastMove / 0.5)

      // Update trail
      trail.current.unshift({ ...mousePos.current, opacity: fadeOutFactor })
      trail.current = trail.current.slice(0, 30).map((point, index) => ({
        ...point,
        opacity: point.opacity * (1 - index / 30) * fadeOutFactor,
      }))

      // Render trail
      trail.current.forEach((point, index) => {
        gl.uniform2f(mouseUniformLocation, point.x, gl.canvas.height - point.y)
        gl.uniform1f(opacityUniformLocation, point.opacity)
        gl.drawArrays(gl.TRIANGLES, 0, 6)
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render(0)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="relative">
      {children}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-50"
        style={{ mixBlendMode: "screen" }}
      />
    </div>
  )
}

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)
  if (!shader) return null

  gl.shaderSource(shader, source)
  gl.compileShader(shader)

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    return null
  }

  return shader
}

function createProgram(gl: WebGLRenderingContext, vertexSource: string, fragmentSource: string) {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource)
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource)
  if (!vertexShader || !fragmentShader) return null

  const program = gl.createProgram()
  if (!program) return null

  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error("Unable to initialize the shader program: " + gl.getProgramInfoLog(program))
    return null
  }

  return program
}