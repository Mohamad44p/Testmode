import { Suspense } from 'react'
import CardCase from './CardCase'

async function getProjects() {
  const res = await fetch('https://befoundonline.ps/wp-json/wp/v2/project?_embed&per_page=5', { next: { revalidate: 3600 } })
  if (!res.ok) {
    throw new Error('Failed to fetch projects')
  }
  return res.json()
}

export default async function CardProjectssr() {
  const projects = await getProjects()

  return (
    <Suspense fallback={<p>
        loading...
    </p>}>
      <CardCase initialProjects={projects} />
    </Suspense>
  )
}