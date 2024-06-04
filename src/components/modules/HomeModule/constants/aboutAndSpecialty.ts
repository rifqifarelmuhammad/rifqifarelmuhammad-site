import { FaCode, FaLaptop, FaMobileAlt } from 'react-icons/fa'
import { AboutCardProps, SpecialtyCardProps } from '../../types/homeModule'

export const ABOUTS: AboutCardProps[] = [
  {
    number: 1,
    content:
      'I have experience in Java, TypeScript, JavaScript, Python, Dart, and Golang, with a strong understanding of object-oriented programming.',
  },
  {
    number: 2,
    content:
      'I have also implemented RESTful APIs, built interactive and responsive websites, built microservices architectures, and optimized the performance of the systems.',
  },
  {
    number: 3,
    content:
      'I have worked on several projects, both on the backend and frontend. Creating high-quality products with efficient solutions and exceptional user experiences is what truly brings me fulfillment.',
  },
]

export const SPECIALTIES: SpecialtyCardProps[] = [
  {
    Icon: FaCode,
    content: 'Backend',
  },
  {
    Icon: FaLaptop,
    content: 'Frontend',
  },
  {
    Icon: FaMobileAlt,
    content: 'Mobile',
  },
]
