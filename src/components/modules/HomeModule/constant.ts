import {
  Aws,
  AwsColorless,
  Cloudinary,
  CloudinaryColorless,
  Css,
  CssColorless,
  Dart,
  DartColorless,
  Django,
  DjangoColorless,
  Docker,
  DockerColorless,
  Firebase,
  FirebaseColorless,
  Flutter,
  FlutterColorless,
  Gcp,
  GcpColorless,
  Golang,
  GolangColorless,
  Grafana,
  GrafanaColorless,
  Html,
  HtmlColorless,
  Java,
  JavaColorless,
  Javascript,
  JavascriptColorless,
  Jquery,
  JqueryColorless,
  Mysql,
  MysqlColorless,
  Nest,
  NestColorless,
  Next,
  NextColorless,
  Postgresql,
  PostgresqlColorless,
  Prometheus,
  PrometheusColorless,
  Python,
  PythonColorless,
  React,
  ReactColorless,
  Spring,
  SpringColorless,
  Tailwind,
  TailwindColorless,
  Typescript,
  TypescriptColorless,
} from '@icons'
import {
  AboutCardProps,
  LogoProps,
  SpecialtyCardProps,
  TechStackProps,
} from '../types/homeModule'
import { FaCode, FaLaptop, FaMobileAlt } from 'react-icons/fa'

export const LANGUAGES: LogoProps[] = [
  {
    Logo: Java,
    LogoColorless: JavaColorless,
  },
  {
    Logo: Typescript,
    LogoColorless: TypescriptColorless,
  },
  {
    Logo: Javascript,
    LogoColorless: JavascriptColorless,
  },
  {
    Logo: Python,
    LogoColorless: PythonColorless,
  },
  {
    Logo: Golang,
    LogoColorless: GolangColorless,
  },
  {
    Logo: Dart,
    LogoColorless: DartColorless,
  },
  {
    Logo: Html,
    LogoColorless: HtmlColorless,
  },
  {
    Logo: Css,
    LogoColorless: CssColorless,
  },
]

export const FRAMEWORKS: LogoProps[] = [
  {
    Logo: Nest,
    LogoColorless: NestColorless,
  },
  {
    Logo: Spring,
    LogoColorless: SpringColorless,
  },
  {
    Logo: Django,
    LogoColorless: DjangoColorless,
  },
  {
    Logo: Next,
    LogoColorless: NextColorless,
  },
  {
    Logo: React,
    LogoColorless: ReactColorless,
  },
  {
    Logo: Flutter,
    LogoColorless: FlutterColorless,
  },
]

export const TOOLS: LogoProps[] = [
  {
    Logo: Postgresql,
    LogoColorless: PostgresqlColorless,
  },
  {
    Logo: Mysql,
    LogoColorless: MysqlColorless,
  },
  {
    Logo: Tailwind,
    LogoColorless: TailwindColorless,
  },
  {
    Logo: Jquery,
    LogoColorless: JqueryColorless,
  },
  {
    Logo: Docker,
    LogoColorless: DockerColorless,
  },
  {
    Logo: Gcp,
    LogoColorless: GcpColorless,
  },
  {
    Logo: Aws,
    LogoColorless: AwsColorless,
  },
  {
    Logo: Cloudinary,
    LogoColorless: CloudinaryColorless,
  },
  {
    Logo: Firebase,
    LogoColorless: FirebaseColorless,
  },
  {
    Logo: Prometheus,
    LogoColorless: PrometheusColorless,
  },
  {
    Logo: Grafana,
    LogoColorless: GrafanaColorless,
  },
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
