import { Docker, Gcp, Golang, Grafana, Java, Nest, NextLight, Postgresql, Prometheus, Spring, Tailwind, Typescript } from '@icons'
import { ProjectCardProps } from './interface'

export const PROJECTS: ProjectCardProps[] = [
    {
        title: "Personal Website",
        imageUrl: "v1703529675/socket-programming_bqzibr.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        techStacks: [NextLight, Typescript, Tailwind],
        webProps: {
            logoUrl: "/icons/favicon.ico",
            webUrl: "https://rifqifarelmuhammad.vercel.app/",
        },
        githubUrl: "https://github.com/orgs/SIUUU-CORP/repositories"
    },
    {
        title: "Warecloud",
        imageUrl: "v1703596001/warecloud_xhravc.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        techStacks: [Nest, Typescript, Postgresql, NextLight, Tailwind, Docker, Gcp],
        webProps: {
            logoUrl: "/icons/warecloud.ico",
            webUrl: "https://web.warecloud.net/",
        },
        githubUrl: "https://github.com/orgs/SIUUU-CORP/repositories"
    },
    {
        title: "Worldie",
        imageUrl: "v1703595536/worldie_iwnrvs.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        techStacks: [Nest, Typescript, Postgresql, NextLight, Tailwind, Docker, Gcp],
        webProps: {
            logoUrl: "/icons/worldie.png",
            webUrl: "https://worldie-atw.vercel.app/",
        },
        githubUrl: "https://github.com/orgs/WorldieATW/repositories"
    },
    {
        title: "Atmos Game",
        imageUrl: "v1703602048/atmos_mushl9.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        techStacks: [Spring, Java, Postgresql, NextLight, Typescript, Tailwind, Docker, Gcp, Prometheus, Grafana],
        githubUrl: "https://github.com/AtmosGame"
    },
    {
        title: "Socket Programming",
        imageUrl: "v1703529675/socket-programming_bqzibr.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        techStacks: [Golang],
        githubUrl: "https://github.com/rifqifarelmuhammad/socket-programming"
    }
]
