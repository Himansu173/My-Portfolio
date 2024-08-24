import { HeroHighlight } from "./ui/hero-highlight";
import { Button, Image, Tooltip } from "@nextui-org/react";
import profileImage from '../assets/portfolio-image.png'
import { FlipWords } from "./ui/flip-words";
import { Fade } from "react-awesome-reveal";

export default function Home() {
    const words = ["MERN Developer","Web Developer", "Frontend Developer", "Fullstack Developer", "Java Developer"];

    return (
        <HeroHighlight containerClassName="h-[90vh] overflow-hidden items-center" className="w-[100vw] h-full">
            <div className="flex items-center sm:justify-around justify-center h-[90vh]">
                <div>
                    <Fade duration={1000} direction={"down"} >
                        <p className="md:text-3xl sm:text-1xl font-medium text-xl">Hello, It&apos;s Me</p>
                    </Fade>
                    <Fade duration={1000} direction={"down"}>
                        <p className="md:text-5xl md:font-semibold sm:text-4xl text-4xl py-2  text-violet-700">Himansu Sekhar Lenka</p>
                    </Fade>
                    <Fade duration={1000} direction={"up"}>
                        <div className="md:text-4xl font-semibold sm:text-2xl text-2xl mt-2">and I&apos;m a<FlipWords words={words} /></div>
                    </Fade>
                    <Fade duration={1000} direction={"up"} delay={400}>
                        <div className="mt-6 flex :items-center gap-x-5 sm:justify-start justify-center">
                            <Tooltip color={"secondary"} placement={"buttom"} content="https://www.linkedin.com/in/himansu173/">
                                <Button isIconOnly onPress={() => window.open("https://www.linkedin.com/in/himansu173/", '_blank')} color="secondary" variant="faded" >
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28px" height="28px" viewBox="0,0,255.99452,255.99452">
                                        <g fill="#6d28d9" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(5.12,5.12)"><path d="M8,3.00977c-3.47,0 -5.99023,2.07945 -5.99023,4.93945c0,2.87 2.58023,5.04102 5.99023,5.04102c3.47,0 5.99023,-2.11961 5.99023,-5.09961c-0.16,-2.87 -2.63023,-4.88086 -5.99023,-4.88086zM3,15c-0.55,0 -1,0.45 -1,1v29c0,0.55 0.45,1 1,1h10c0.55,0 1,-0.45 1,-1v-29c0,-0.55 -0.45,-1 -1,-1zM18,15c-0.55,0 -1,0.45 -1,1v29c0,0.55 0.45,1 1,1h9c0.552,0 1,-0.448 1,-1v-15v-0.25v-0.25c0,-2.37 1.82062,-4.30047 4.14063,-4.48047c0.12,-0.02 0.23938,-0.01953 0.35938,-0.01953c0.12,0 0.23938,-0.00047 0.35938,0.01953c2.32,0.18 4.14063,2.11047 4.14063,4.48047v15.5c0,0.552 0.448,1 1,1h9c0.55,0 1,-0.45 1,-1v-17c0,-6.47 -3.47094,-13 -11.21094,-13c-3.52,0 -6.17906,1.36023 -7.78906,2.49023v-1.49023c0,-0.55 -0.45,-1 -1,-1z"></path></g></g>
                                    </svg>
                                </Button>
                            </Tooltip>
                            <Tooltip color={"secondary"} placement={"top"} content="https://github.com/Himansu173">
                                <Button isIconOnly onPress={() => window.open("https://github.com/Himansu173", '_blank')} color="secondary" variant="faded" >
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" viewBox="0,0,255.99452,255.99452">
                                        <g fill="#6d28d9" fillRule="evenodd" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(8,8)"><path d="M16,4c-6.62891,0 -12,5.37109 -12,12c0,5.30078 3.4375,9.80078 8.20703,11.38672c0.60156,0.10938 0.82031,-0.25781 0.82031,-0.57812c0,-0.28516 -0.01172,-1.03906 -0.01562,-2.03906c-3.33984,0.72266 -4.04297,-1.60937 -4.04297,-1.60937c-0.54687,-1.38672 -1.33203,-1.75781 -1.33203,-1.75781c-1.08984,-0.74219 0.08203,-0.72656 0.08203,-0.72656c1.20313,0.08594 1.83594,1.23438 1.83594,1.23438c1.07031,1.83594 2.80859,1.30469 3.49219,1c0.10938,-0.77734 0.42188,-1.30469 0.76172,-1.60547c-2.66406,-0.30078 -5.46484,-1.33203 -5.46484,-5.92969c0,-1.3125 0.46875,-2.38281 1.23438,-3.22266c-0.12109,-0.30078 -0.53516,-1.52344 0.11719,-3.17578c0,0 1.00781,-0.32031 3.30078,1.23047c0.95703,-0.26562 1.98438,-0.39844 3.00391,-0.40234c1.01953,0.00391 2.04688,0.13672 3.00391,0.40234c2.29297,-1.55078 3.29688,-1.23047 3.29688,-1.23047c0.65625,1.65234 0.24609,2.875 0.12109,3.17578c0.76953,0.83984 1.23047,1.91016 1.23047,3.22266c0,4.60938 -2.80469,5.62109 -5.47656,5.92188c0.42969,0.36719 0.8125,1.10156 0.8125,2.21875c0,1.60547 -0.01172,2.89844 -0.01172,3.29297c0,0.32031 0.21484,0.69531 0.82422,0.57813c4.76563,-1.58984 8.19922,-6.08594 8.19922,-11.38672c0,-6.62891 -5.37109,-12 -12,-12z"></path></g></g>
                                    </svg>
                                </Button>
                            </Tooltip>
                            <Tooltip color={"secondary"} placement={"buttom"} content="https://www.x.com/himansu173">
                                <Button isIconOnly onPress={() => window.open("https://www.x.com/himansu173/", '_blank')} color="secondary" variant="faded" >
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px" height="30px" viewBox="0,0,255.99452,255.99452">
                                        <g fill="#6d28d9" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(10.66667,10.66667)"><path d="M17.47656,2.99023c-0.2942,0.00949 -0.56928,0.1481 -0.75195,0.37891l-4.21484,5.18555l-3.45313,-4.7832c-0.35,-0.484 -0.91081,-0.77148 -1.50781,-0.77148h-3.4707c-0.658,0 -1.0393,0.7463 -0.6543,1.2793l5.91016,8.18359l-5.60937,6.90625c-0.239,0.2756 -0.30898,0.65947 -0.1826,1.00167c0.12637,0.34221 0.42904,0.58846 0.7898,0.64258c0.36076,0.05412 0.72236,-0.09248 0.94359,-0.38253l5.27344,-6.48828l4.39453,6.08594c0.35,0.484 0.91081,0.77148 1.50781,0.77148h3.4707c0.658,0 1.0393,-0.7463 0.6543,-1.2793l-6.85156,-9.48828l4.55078,-5.60156c0.25245,-0.30234 0.30394,-0.72469 0.13151,-1.07882c-0.17243,-0.35413 -0.53666,-0.57407 -0.93034,-0.5618zM6.41016,5h1.06641l10.11133,14h-1.06445z"></path></g></g>
                                    </svg>
                                </Button>
                            </Tooltip>
                            <Tooltip color={"secondary"} placement={"top"} content="https://www.instagram.com/himansu__173">
                                <Button isIconOnly onPress={() => window.open("https://www.instagram.com/himansu__173/", '_blank')} color="secondary" variant="faded" >
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34px" height="34px" viewBox="0,0,255.99452,255.99452">
                                        <g fill="#6d28d9" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(10.66667,10.66667)"><path d="M8,3c-2.74952,0 -5,2.25048 -5,5v8c0,2.74952 2.25048,5 5,5h8c2.74952,0 5,-2.25048 5,-5v-8c0,-2.74952 -2.25048,-5 -5,-5zM8,5h8c1.66848,0 3,1.33152 3,3v8c0,1.66848 -1.33152,3 -3,3h-8c-1.66848,0 -3,-1.33152 -3,-3v-8c0,-1.66848 1.33152,-3 3,-3zM17,6c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM12,7c-1.58333,0 -2.89811,0.62976 -3.74805,1.58594c-0.84994,0.95618 -1.25195,2.19184 -1.25195,3.41406c0,1.22222 0.40201,2.45788 1.25195,3.41406c0.84994,0.95618 2.16471,1.58594 3.74805,1.58594c1.58333,0 2.89811,-0.62976 3.74805,-1.58594c0.84994,-0.95618 1.25195,-2.19184 1.25195,-3.41406c0,-1.22222 -0.40201,-2.45788 -1.25195,-3.41406c-0.84994,-0.95618 -2.16471,-1.58594 -3.74805,-1.58594zM12,9c1.08333,0 1.76856,0.37024 2.25195,0.91406c0.48339,0.54382 0.74805,1.30816 0.74805,2.08594c0,0.77778 -0.26465,1.54212 -0.74805,2.08594c-0.48339,0.54382 -1.16862,0.91406 -2.25195,0.91406c-1.08333,0 -1.76856,-0.37024 -2.25195,-0.91406c-0.48339,-0.54382 -0.74805,-1.30816 -0.74805,-2.08594c0,-0.77778 0.26465,-1.54212 0.74805,-2.08594c0.48339,-0.54382 1.16862,-0.91406 2.25195,-0.91406z"></path></g></g>
                                    </svg>
                                </Button>
                            </Tooltip>
                            <Tooltip color={"secondary"} placement={"buttom"} content="https://www.facebook.com/himansus.lenka.9">
                                <Button isIconOnly onPress={() => window.open("https://www.facebook.com/himansus.lenka.9/", '_blank')} color="secondary" variant="faded" >
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34px" height="34px" viewBox="0,0,255.99452,255.99452">
                                        <g fill="#6d28d9" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.523,0 -10,4.477 -10,10c0,5.013 3.693,9.153 8.505,9.876v-7.226h-2.474v-2.629h2.474v-1.749c0,-2.896 1.411,-4.167 3.818,-4.167c1.153,0 1.762,0.085 2.051,0.124v2.294h-1.642c-1.022,0 -1.379,0.969 -1.379,2.061v1.437h2.995l-0.406,2.629h-2.588v7.247c4.881,-0.661 8.646,-4.835 8.646,-9.897c0,-5.523 -4.477,-10 -10,-10z"></path></g></g>
                                    </svg>
                                </Button>
                            </Tooltip>
                        </div>
                    </Fade>
                </div>
                <Image src={profileImage} className="sm:h-[90vh] sm:block hidden" style={{ filter: 'drop-shadow(0 0 0.75rem #6d28d9)' }} />
            </div>
        </HeroHighlight>
    );
}
