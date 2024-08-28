import { HeroHighlight } from "./ui/hero-highlight";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub, FaJava } from 'react-icons/fa';
import { SiBootstrap, SiOracle, SiC, SiCplusplus, SiChakraui } from 'react-icons/si';
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandMysql } from "react-icons/tb";

export default function Skills() {
    const skills = [
        { name: "React", icon: <FaReact />, percentage: 70 },
        { name: "Java ", icon: <FaJava />, percentage: 65 },
        { name: "C Language ", icon: <SiC />, percentage: 80 },
        { name: "C++ Language ", icon: <SiCplusplus />, percentage: 55 },
        { name: "HTML5", icon: <FaHtml5 />, percentage: 90 },
        { name: "CSS3", icon: <FaCss3Alt />, percentage: 80 },
        { name: "JavaScript", icon: <FaJsSquare />, percentage: 50 },
        { name: "Bootstrap", icon: <SiBootstrap />, percentage: 85 },
        { name: "Chakra Ui", icon: <SiChakraui />, percentage: 75 },
        { name: "Tailwind Css", icon: <RiTailwindCssFill />, percentage: 80 },
        { name: "Oracle", icon: <SiOracle />, percentage: 75 },
        { name: "MySql", icon: <TbBrandMysql />, percentage: 60 },
        { name: "Git", icon: <FaGitAlt />, percentage: 80 },
        { name: "Github", icon: <FaGithub />, percentage: 85 },
    ];

    return (
        <HeroHighlight containerClassName="h-auto py-10">
            <div className="text-center">
                <p className="md:text-4xl text-2xl font-semibold">Skills</p>
                <p className="md:text-xl text-sm font-normal mt-2">Tools and Technologies I&apos;m Experienced With</p>
            </div>
            <div className="flex flex-wrap justify-evenly lg:gap-x-12 sm:gap-x-8 gap-x-4 gap-y-8 mt-10 md:w-[85vw]">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center text-center" data-aos="flip-right" data-aos-duration="800">
                        <div className="text-6xl mb-2">{skill.icon}</div>
                        <p className="text-lg">{skill.name}</p>
                        <div className="mt-2 w-[120px]">
                            <div className="w-full bg-gray-200 w-[120px] rounded-full h-2 dark:bg-gray-700">
                                <div
                                    className="bg-neutral-300 h-2 rounded-full"
                                    style={{ width: `${skill.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </HeroHighlight>
    );
}
