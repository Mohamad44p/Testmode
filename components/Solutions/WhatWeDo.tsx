import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Component() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="min-h-screen p-8 md:p-16 flex flex-col"
    >
      <motion.h1 variants={itemVariants} className="text-6xl font-bold mb-6">
        What we do
      </motion.h1>
      <motion.p variants={itemVariants} className="text-lg mb-12 max-w-3xl">
        We help our healthcare partners unleash the power of their technology
        with relevant, compliant, and effective solutions. We do this through
        ground-up builds, product optimizations, and streamlining data,
        analytics, and AI.
      </motion.p>
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: "📱", title: "Mobile Apps" },
          { icon: "🖥️", title: "Web Apps" },
          { icon: "🔗", title: "Platforms & Infrastructure" },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="border-2 border-black p-8 flex flex-col items-center justify-center text-center aspect-[3/2]"
          >
            <span className="text-4xl mb-4">{item.icon}</span>
            <h2 className="text-xl font-semibold">{item.title}</h2>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
