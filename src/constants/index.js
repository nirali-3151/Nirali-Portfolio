import { SKILLS_IMAGES_CONST } from "./images";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import NavigationConst from "@baseNavigator/NavigationConst";

export const SKILL_CONST = [{
    id: 1,
    name: "Javascript",
    icon: SKILLS_IMAGES_CONST.javascript
},
{
    id: 2,
    name: "Typescript",
    icon: SKILLS_IMAGES_CONST.typescript
},
{
    id: 3,
    name: "React",
    isFrontEnd: true,
    isWeb: true,
    icon: SKILLS_IMAGES_CONST.react
},
{
    id: 4,
    name: "Next",
    isFrontEnd: true,
    isWeb: true,
    icon: SKILLS_IMAGES_CONST.next
},
{
    id: 5,
    name: "React Native",
    isFrontEnd: true,
    isWeb: false,
    icon: SKILLS_IMAGES_CONST.reactNative
},
{
    id: 6,
    name: "Redux",
    isBoth: true,
    isFrontEnd: true,
    icon: SKILLS_IMAGES_CONST.redux
},
{
    id: 7,
    name: "Node",
    isFrontEnd: false,
    icon: SKILLS_IMAGES_CONST.node
},
{
    id: 8,
    name: "MongoDB",
    isDB: true,
    icon: SKILLS_IMAGES_CONST.mongoDB
},
{
    id: 9,
    name: "SQL",
    isDB: true,
    icon: SKILLS_IMAGES_CONST.sql
},
{
    id: 10,
    name: "PSQL",
    isDB: true,
    icon: SKILLS_IMAGES_CONST.postgresql
},
{
    id: 11,
    name: "GraphQL",
    isFrontEnd: false,
    icon: SKILLS_IMAGES_CONST.graphql
},
{
    id: 12,
    name: "Firebase",
    isFrontEnd: false,
    icon: SKILLS_IMAGES_CONST.firebase
}
]

export const SERVICES_CONST = [
    { id: 1, name: "Web Development", nav: NavigationConst.webDevelopment, desc: "Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utilizing methods..." },
    { id: 2, name: "Mobile Development", nav: NavigationConst.mobileDevelopment, desc: "Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utilizing methods..." },
    { id: 3, name: "Backend Development & APIs", nav: NavigationConst.backendAndApiDevelopment, desc: "Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utilizing methods..." },
    { id: 4, name: "App maintainance & Code Optimization", nav: NavigationConst.appOptimization, desc: "Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utilizing methods..." },
]

export const CONTACT_US_CONST = [{
    key: 1,
    icon: BiPhoneCall,
    text: "Phone",
    details: "+91 1234567890"
}, {
    key: 2,
    icon: MdOutlineMailOutline,
    text: "Email",
    details: "gerolddesign@mail.com"
}, {
    key: 3,
    icon: IoLocationOutline,
    text: "Address",
    details: "Warne Park Street Pine, FL 33157, New York"
}]

export const navigationBar = [
    {
        id: 1,
        mainMenu: "Services",
        servicesType: SERVICES_CONST
    },
    {
        id: 2,
        mainMenu: "Works",
        nav: NavigationConst?.works
    },
    {
        id: 3,
        mainMenu: "Resume",
    },
    {
        id: 4,
        mainMenu: "Skills",
        servicesType: SKILL_CONST
    },
    {
        id: 5,
        mainMenu: "Contact",
    }
]

export const EXPERIENCE_CONST = [
    {
        id: 1,
        name: "TechnoYuga Soft Pvt. Ltd.",
        technology: "Full Stack Developer",
        duration: "DEC 2023 - FEB 2025"
    },
    {
        id: 2,
        name: "Flawsome Technology",
        technology: "NodeJS Developer",
        duration: "SEP 2021 - NOV 2023"
    },
    {
        id: 3,
        name: "Leocan Technologies LLP",
        technology: "React Native, ReactJS Developer",
        duration: "DEC 2021 - AUG 2023"
    }
]

export const EDUCATION_CONST = [
    {
        id: 1,
        name: "UKA TARSADIA UNIVERSITY",
        education: "B.Tech In Computer Engineering",
        duration: "2018 - 2022"
    },
    {
        id: 2,
        name: "P. P. SAVANI VIDHYA BHAVAN",
        education: "P. P. SAVANI VIDHYA BHAVAN",
        duration: "2015 - 2018"
    },
]

export const projects = [{
    id: 1,
    name: "TalkSync",
    summary: "",
    image: "",
    technology: [3, 6, 7, 8],
    problems: "",
    imagesForSlider: "",
    challenges: "",
    learnings: ""
}]