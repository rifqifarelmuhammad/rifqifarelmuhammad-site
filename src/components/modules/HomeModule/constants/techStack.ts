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
    Sentry,
    SonarCloud,
    SonarQube,
    Spring,
    Tailwind,
    Typescript,
} from '@icons'
import { TechStackProps } from '../../types/homeModule'
import { IconProps } from 'src/components/icons/interface'
import { FC } from 'react'
  
export const LANGUAGES: FC<IconProps>[] = [
    Java,
    Typescript,
    Javascript,
    Python,
    Kotlin,
    Golang,
    Dart,
    Rust,
    Html,
    Css,
]
  
export const FRAMEWORKS: FC<IconProps>[] = [
    Spring,
    Nest,
    Express,
    Django,
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
    Docker,
    Kubernetes,
    Gcp,
    Aws,
    Firebase,
    Prometheus,
    Grafana,
    Sentry,
    SonarQube,
    SonarCloud,
    Jquery,
    Cloudinary,
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