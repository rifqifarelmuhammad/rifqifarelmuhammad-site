import {
  Android,
  Aws,
  Cloudinary,
  Css,
  Dart,
  Django,
  Docker,
  Express,
  Firebase,
  Flutter,
  Gcp,
  Golang,
  Grafana,
  Html,
  Java,
  Javascript,
  Jquery,
  Kotlin,
  Kubernetes,
  Memcached,
  Mysql,
  Nest,
  Next,
  Postgresql,
  Prometheus,
  Python,
  React,
  Redux,
  Rust,
  Spring,
  Tailwind,
  Typescript,
} from '@icons'
import {
  AboutCardProps,
  SpecialtyCardProps,
  TechStackProps,
} from '../types/homeModule'
import { FaCode, FaLaptop, FaMobileAlt } from 'react-icons/fa'
import { IconProps } from 'src/components/icons/interface'
import { FC } from 'react'

export const LANGUAGES: FC<IconProps>[] = [
  Java,
  Typescript,
  Javascript,
  Python,
  Golang,
  Kotlin,
  Dart,
  Rust,
  Html,
  Css,
]

export const FRAMEWORKS: FC<IconProps>[] = [
  Nest,
  Spring,
  Django,
  Express,
  Next,
  React,
  Flutter,
  Android,
]

export const TOOLS: FC<IconProps>[] = [
  Postgresql,
  Mysql,
  Tailwind,
  Redux,
  Jquery,
  Docker,
  Kubernetes,
  Gcp,
  Aws,
  Cloudinary,
  Firebase,
  Prometheus,
  Grafana,
  Memcached,
]

export const TECH_STACK: TechStackProps[] = [
  {
    title: 'Languages',
    logos: LANGUAGES,
  },
  {
    title: 'Frameworks',
    logos: FRAMEWORKS,
  },
  {
    title: 'Tools',
    logos: TOOLS,
  },
]

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
