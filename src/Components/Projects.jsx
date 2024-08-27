import { Image, Link } from "@nextui-org/react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import fintrack from '../assets/fintrack.png'
import newsmonkey from '../assets/newsmonkey.png'
import limeroad from '../assets/limeroad.png'
import rtas from '../assets/rtas.png'

export default function Projects() {
    return (
        <div className="h-auto w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="relative z-20 pt-5 w-full h-auto">
                <div>
                    <p className="md:text-4xl text-2xl font-semibold w-full text-center">Projects</p>
                    <p className="w-full text-center md:text-xl text-sm font-normal mt-1.5">Some of the projects  I&apos;ve crafted and collaborated on</p>
                </div>
                <div className="py-10 flex flex-wrap gap-y-10 gap-x-5 xl:gap-x-0 justify-evenly items-center">
                    <div data-aos="flip-up" data-aos-duration="800">
                        <CardContainer containerClassName="py-0" className="inter-var">
                            <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-[90vw] xl:w-[29.5vw] md:w-[408px] sm:w-[80vw] h-auto rounded-xl p-6 border">
                                <CardItem
                                    translateZ="50"
                                    className="lg:text-2xl text-lg font-semibold tracking-wider"
                                >
                                    News Monkey
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="lg:text-base text-sm text-default-500 tracking-wide"
                                >
                                    A Latest News And Breaking News Website
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-2">
                                    <Image
                                        src={newsmonkey}
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="lg:text-base text-sm text-default-500 tracking-wide mt-2"
                                >
                                    Developed a website for Latest News and Breaking News, delivering up-to-the-minute updates with a user-friendly interface for easy access to top stories and headlines.
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="lg:text-base text-sm text-default-500 tracking-wide mt-2"
                                >
                                    Tech Stack - React JS, bootstrap 5

                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                >
                                    <Link
                                        isExternal
                                        showAnchorIcon
                                        href="https://github.com/Himansu173/NewsMonkey"
                                        className="lg:text-base text-sm tracking-wider mt-2"
                                    >
                                        Visit On GitHub
                                    </Link>
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                    <div data-aos="flip-up" data-aos-duration="800">
                        <CardContainer containerClassName="py-0" className="inter-var">
                            <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-[90vw] xl:w-[29.5vw] md:w-[408px] sm:w-[80vw] h-auto rounded-xl p-6 border">
                                <CardItem
                                    translateZ="50"
                                    className="lg:text-2xl text-lg font-semibold tracking-wider"
                                >
                                    EveHunt
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="lg:text-base text-sm text-default-500 tracking-wide"
                                >
                                    An Event Related Resource Provider
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-2">
                                    <Image
                                        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="lg:text-base text-sm text-default-500 tracking-wide mt-2"
                                >
                                    A platform that connects event-related service providers with customers, by creating a mobile interface that facilitates easy connections between users and nearby service providers.
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="lg:text-base text-sm text-default-500 tracking-wide mt-2"
                                >
                                    Tech Stack - React Native, Firebase, GraphQL

                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                >
                                    <Link
                                        isExternal
                                        showAnchorIcon
                                        href="https://github.com/Himansu173/EVEHUNT"
                                        className="lg:text-base text-sm tracking-wider mt-2"
                                    >
                                        Visit On GitHub
                                    </Link>
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                    <div data-aos="flip-up" data-aos-duration="800">
                        <CardContainer containerClassName="py-0" className="inter-var">
                            <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-[90vw] xl:w-[29.5vw] md:w-[408px] sm:w-[80vw] h-auto rounded-xl p-6 border">
                                <CardItem
                                    translateZ="50"
                                    className="lg:text-2xl text-lg font-semibold tracking-wider"
                                >
                                    Fintract
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="lg:text-base text-sm text-default-500 tracking-wide"
                                >
                                    An Intuitive Expense Management System
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-2">
                                    <Image
                                        src={fintrack}
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="lg:text-base text-sm text-default-500 tracking-wide mt-2"
                                >
                                    An application that simplifies financial tracking with features like expense categorization, expense trend,  real-time reporting, expense history and seamless integration.

                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="lg:text-base text-sm text-default-500 tracking-wide mt-2"
                                >
                                    Tech Stack - Java Swing, Java AWT

                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                >
                                    <Link
                                        isExternal
                                        showAnchorIcon
                                        href="https://github.com/Himansu173/FINTRACK"
                                        className="lg:text-base text-sm tracking-wider mt-2"
                                    >
                                        Visit On GitHub
                                    </Link>
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                    <div data-aos="flip-up" data-aos-duration="800">
                        <CardContainer containerClassName="py-0" className="inter-var">
                            <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-[90vw] xl:w-[29.5vw] md:w-[408px] sm:w-[80vw] h-auto rounded-xl p-6 border">
                                <CardItem
                                    translateZ="50"
                                    className="lg:text-2xl text-lg font-semibold tracking-wider"
                                >
                                    Limeroad Clone
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="lg:text-base text-sm text-default-500 tracking-wide"
                                >
                                    An E-commerce Website
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-2">
                                    <Image
                                        src={limeroad}
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="lg:text-base text-sm text-default-500 tracking-wide mt-2"
                                >
                                    Developed a clone of the Limeroad eCommerce website, replicating key features like product browsing, selecting, quantity set, and checkout to demonstrate web development skills.
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="lg:text-base text-sm text-default-500 tracking-wide mt-2"
                                >
                                    Tech Stack - React JS, JSON Server, Chakra Ui

                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                >
                                    <Link
                                        isExternal
                                        showAnchorIcon
                                        href="https://github.com/Himansu173/limeroad_clone.com"
                                        className="lg:text-base text-sm tracking-wider mt-2"
                                    >
                                        Visit On GitHub
                                    </Link>
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                    <div data-aos="flip-up" data-aos-duration="800">
                        <CardContainer containerClassName="py-0" className="inter-var">
                            <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-[90vw] xl:w-[29.5vw] md:w-[408px] sm:w-[80vw] h-auto rounded-xl p-6 border">
                                <CardItem
                                    translateZ="50"
                                    className="lg:text-2xl text-lg font-semibold tracking-wider"
                                >
                                    Online Exam Portal
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="lg:text-base text-sm text-default-500 tracking-wide"
                                >
                                    A Remote Testing and Assessment System
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-2">
                                    <Image
                                        src={rtas}
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="lg:text-base text-sm text-default-500 tracking-wide mt-2"
                                >
                                    A tool designed to transform the way evaluations are conducted remotely, making it easier and more reliable for educational institutions to manage testing and assessments.

                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="lg:text-base text-sm text-default-500 tracking-wide mt-2"
                                >
                                    Tech Stack - Angular, Spring Boot and MangoDB

                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                >
                                    <Link
                                        isExternal
                                        showAnchorIcon
                                        href="https://github.com/Himansu173/Remote-Testing-and-Assessment-System-2.0.1-"
                                        className="lg:text-base text-sm tracking-wider mt-2"
                                    >
                                        Visit On GitHub
                                    </Link>
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}