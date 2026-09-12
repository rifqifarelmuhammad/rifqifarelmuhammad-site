// Exported so the file stays a module: it no longer imports anything, and a
// declaration file without either is treated as a global script.
export interface ProjectCardProps {
  title: string
  imageUrl: string
  imageAlt: string
  description: string
  techStacks: string[]
  role?: string
  website?: string
  git?: string
  documentation?: string
  isPriority?: boolean
}
