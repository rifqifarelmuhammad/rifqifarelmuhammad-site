import { FaCode, FaCogs, FaLaptop } from 'react-icons/fa'
import { AboutCardProps, SpecialtyCardProps } from '../../types/homeModule'

export const ABOUTS: AboutCardProps[] = [
  {
    number: 1,
    content:
      'I’m a Software Engineer at Mekari with a backend-leaning full-stack background, currently working primarily with Go and microservices across production systems.',
  },
  {
    number: 2,
    content:
      'My professional experience spans backend, frontend, mobile, deployment workflows, distributed tracing, CI pipelines, and system reliability, giving me an end-to-end perspective on building and operating software.',
  },
  {
    number: 3,
    content:
      'I graduated Summa Cum Laude with a Bachelor of Computer Science from the University of Indonesia, with a GPA of 3.91/4.0. I’m also a first author and co-author of two international software engineering publications.',
  },
]

export const SPECIALTIES: SpecialtyCardProps[] = [
  {
    Icon: FaCode,
    content: 'Backend Engineering',
  },
  {
    Icon: FaLaptop,
    content: 'Full-Stack Development',
  },
  {
    Icon: FaCogs,
    content: 'Developer Infrastructure',
  },
]
