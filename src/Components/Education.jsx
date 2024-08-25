import { HeroHighlight } from "./ui/hero-highlight";
import { Meteors } from "./ui/meteors";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";

function Education() {
  return (
    <HeroHighlight containerClassName="h-auto">
      <div className="my-6" >
        <p className="md:text-4xl text-2xl font-semibold w-full text-center">Education</p>
        <p className="w-full text-center md:text-xl text-sm">My schooling and higher education</p>
      </div>
      <div className="flex flex-wrap gap-10 justify-center items-center my-10">
        <Card className="md:w-[408px] sm:w-[80vw] w-[90vw]" data-aos="zoom-in" data-aos-duration="800">
          <CardHeader className="flex gap-3">
            <svg fill="#d4d4d4" className="lg:h-12 h-10" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.535 31.535" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M31.535,13.503V11.1h-3.154V9.441L15.767,0.679L3.154,9.441V11.1H0v2.404h4.224V25.04H0.986L0,30.856h31.535l-0.986-5.816 h-3.238V13.503H31.535z M15.768,4.246c1.113,0,2.015,0.903,2.015,2.017c0,1.113-0.902,2.016-2.015,2.016 c-1.114,0-2.018-0.903-2.018-2.016C13.75,5.148,14.654,4.246,15.768,4.246z M10.688,25.04H7.916V13.503h2.772V25.04z M17.153,25.04 h-2.771V13.503h2.771V25.04z M23.619,25.04h-2.771V13.503h2.771V25.04z"></path> </g> </g></svg>
            <div className="flex flex-col">
              <p className="lg:text-2xl text-lg font-semibold tracking-wider">M.C.A</p>
              <p className="lg:text-lg text-sm text-default-500 tracking-wide">Post Graduation</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody> 
            <p className="lg:text-2xl text-lg font-medium tracking-wide">Silicon Institute of Technology Bhubaneswar, Odisha</p>
            <p className="lg:text-lg text-sm text-default-500">2023 - Present</p>
            <p className="lg:text-lg text-sm text-default-500">CGPA - 9.17</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://silicon.ac.in/bbsr-home/master-in-computer-applications/"
              className="lg:text-base text-sm"
            >
              More About Cource And Institute
            </Link>
          </CardFooter>
          <Meteors number={20} />
        </Card>
        <Card className="md:w-[408px] sm:w-[80vw] w-[90vw]" data-aos="zoom-in" data-aos-duration="800">
          <CardHeader className="flex gap-3">
            <svg fill="#d4d4d4" className="lg:h-12 h-10" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.535 31.535" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M31.535,13.503V11.1h-3.154V9.441L15.767,0.679L3.154,9.441V11.1H0v2.404h4.224V25.04H0.986L0,30.856h31.535l-0.986-5.816 h-3.238V13.503H31.535z M15.768,4.246c1.113,0,2.015,0.903,2.015,2.017c0,1.113-0.902,2.016-2.015,2.016 c-1.114,0-2.018-0.903-2.018-2.016C13.75,5.148,14.654,4.246,15.768,4.246z M10.688,25.04H7.916V13.503h2.772V25.04z M17.153,25.04 h-2.771V13.503h2.771V25.04z M23.619,25.04h-2.771V13.503h2.771V25.04z"></path> </g> </g></svg>
            <div className="flex flex-col">
              <p className="lg:text-2xl text-lg font-semibold tracking-wider">B.Sc ITM</p>
              <p className="lg:text-lg text-sm text-default-500 tracking-wide">Graduation</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="lg:text-2xl text-lg font-medium tracking-wide">B.J.B Autonomous College Bhubaneswar, Odisha</p>
            <p className="lg:text-lg text-sm text-default-500 tracking-wide">2020 - 2023</p>
            <p className="lg:text-lg text-sm text-default-500 tracking-wide">Percentage - 82.16</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://bjbcollege.in/self-financing-ppp-mode-bsc-itm/"
              className="lg:text-base text-sm"
            >
              More About Cource And Institute
            </Link>
          </CardFooter>
          <Meteors number={20} />
        </Card>
        <Card className="md:w-[408px] sm:w-[80vw] w-[90vw]" data-aos="zoom-in" data-aos-duration="800">
          <CardHeader className="flex gap-3">
            <svg fill="#d4d4d4" className="lg:h-12 h-10" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.535 31.535" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M31.535,13.503V11.1h-3.154V9.441L15.767,0.679L3.154,9.441V11.1H0v2.404h4.224V25.04H0.986L0,30.856h31.535l-0.986-5.816 h-3.238V13.503H31.535z M15.768,4.246c1.113,0,2.015,0.903,2.015,2.017c0,1.113-0.902,2.016-2.015,2.016 c-1.114,0-2.018-0.903-2.018-2.016C13.75,5.148,14.654,4.246,15.768,4.246z M10.688,25.04H7.916V13.503h2.772V25.04z M17.153,25.04 h-2.771V13.503h2.771V25.04z M23.619,25.04h-2.771V13.503h2.771V25.04z"></path> </g> </g></svg>
            <div className="flex flex-col">
              <p className="lg:text-2xl text-lg font-semibold tracking-widest">XII</p>
              <p className="lg:text-lg text-sm text-default-500 tracking-wide">Higher Secondary</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="lg:text-2xl text-lg font-medium tracking-wide">Jupiter Science Higher Secondary School Bhubaneswar, Odisha</p>
            <p className="lg:text-lg text-sm text-default-500 tracking-wide">2018 - 2020</p>
            <p className="lg:text-lg text-sm text-default-500 tracking-wide">Percentage - 70.00</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://jupiterplus2.in/"
              className="lg:text-base text-sm"
            >
              More About Cource And Institute
            </Link>
          </CardFooter>
          <Meteors number={20} />
        </Card>
      </div>
    </HeroHighlight>
  )
}

export default Education
