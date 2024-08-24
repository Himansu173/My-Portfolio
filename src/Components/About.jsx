import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import image from '../assets/about-image.png'
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Card, CardHeader, Divider, Image } from "@nextui-org/react";

function About() {
    const words = [
        {
            text: "Who",
        },
        {
            text: "Am",
        },
        {
            text: "I",
            className: "text-violet-700 dark:text-violet-700",
        },
    ];

    return (
        <>
            {/* <div className="h-[100vh] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center sm:justify-around justify-center"> */}
            <div className="h-[100vh] w-full relative flex items-center sm:justify-around justify-center">
            {/* Radial gradient for the container to give a faded look */}
            {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
            <CardContainer className="inter-var sm:block hidden">
                <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border  ">
                    <CardItem translateZ="100" className="w-full my-2">
                        <Image
                            src={image}
                            className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                </CardBody>
            </CardContainer>
            <Card className="sm:max-w-[45vw] max-w-[95vw] bg-transparent shadow-none">
                <CardHeader className="flex p-0">
                    <TypewriterEffectSmooth words={words} />
                </CardHeader>
                <Divider />
                <p className="px-3 py-2 text-xs lg:text-base">Hello, I&apos;m Himansu Sekhar Lenka, a passionate Fullstack Developer with a strong foundation in programming and problem-solving. I specialize in the MERN stack and have hands-on experience with a variety of technologies and tools. I am currently pursuing my Master&apos;s in Computer Application from Silicon Institute of Technology, Bhubaneswar, with a stellar CGPA of 9.17.</p>
                <Divider />
                <p className="px-3 py-2 text-xs lg:text-base">During my internship as a Software Engineer at Juvenilia Technology, I worked on building an Online Assessment web application, Collaborating with a team of developers, I honed my skills in AngularJS, Spring Boot, and MongoDB through practical, real-time development.</p>
                <Divider />
                <p className="px-3 py-2 text-xs lg:text-base">Beyond my technical pursuits, I enjoy exploring new technologies, playing chess, and hiking. I am committed to continuous learning and always seek opportunities to grow both personally and professionally. My goal is to build a successful career as a Full Stack Developer and expand my experience across different industries.</p>
            </Card>
            </div>
        </>
    )
}

export default About
