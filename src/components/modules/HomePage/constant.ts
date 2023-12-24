import { Aws, AwsColorless, Css, CssColorless, Dart, DartColorless, Django, DjangoColorless, Docker, DockerColorless, Firebase, FirebaseColorless, Flutter, FlutterColorless, Gcp, GcpColorless, Golang, GolangColorless, Grafana, GrafanaColorless, Html, HtmlColorless, Java, JavaColorless, Javascript, JavascriptColorless, Jquery, JqueryColorless, Mysql, MysqlColorless, Nest, NestColorless, Next, NextColorless, Postgresql, PostgresqlColorless, Prometheus, PrometheusColorless, Python, PythonColorless, React, ReactColorless, Spring, SpringColorless, Tailwind, TailwindColorless, Typescript, TypescriptColorless } from "@icons"
import { LogoProps } from "./interface"

export const getLanguages = () => {
    return [
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
    ] as LogoProps[]
}

export const getFrameworks = () => {
    return [
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
    ] as LogoProps[]
}

export const getTools = () => {
    return [
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
            LogoColorless: JqueryColorless
        },
        {
            Logo: Docker,
            LogoColorless: DockerColorless
        },
        {
            Logo: Gcp,
            LogoColorless: GcpColorless
        },
        {
            Logo: Aws,
            LogoColorless: AwsColorless,
        },
        {
            Logo: Firebase,
            LogoColorless: FirebaseColorless
        },
        {
            Logo: Prometheus,
            LogoColorless: PrometheusColorless
        },
        {
            Logo: Grafana,
            LogoColorless: GrafanaColorless
        }
    ] as LogoProps[]
}