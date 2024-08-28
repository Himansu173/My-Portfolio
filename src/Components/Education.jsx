import { HeroHighlight } from "./ui/hero-highlight";
import { Meteors } from "./ui/meteors";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";
import { FaUniversity } from "react-icons/fa";

function Education() {
  return (
    <HeroHighlight containerClassName="h-auto">
      <div className="my-7" >
        <p className="md:text-4xl text-2xl font-semibold w-full text-center">Education</p>
        <p className="w-full text-center md:text-xl text-sm">My schooling and higher education</p>
      </div>
      <div className="flex flex-wrap gap-10 justify-center items-center my-12">
        <Card className="md:w-[408px] sm:w-[80vw] w-[90vw]" data-aos="zoom-in" data-aos-duration="800">
          <CardHeader className="flex gap-3">
            <FaUniversity className="lg:text-5xl text-4xl" />
            <div className="flex flex-col">
              <p className="lg:text-2xl text-lg font-semibold tracking-wider">M.C.A</p>
              <p className="lg:text-lg text-sm text-default-500 tracking-wide">Post Graduation</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="lg:text-xl text-base tracking-wider">Silicon Institute of Technology Bhubaneswar, Odisha</p>
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
          <Meteors number={15} />
        </Card>
        <Card className="md:w-[408px] sm:w-[80vw] w-[90vw]" data-aos="zoom-in" data-aos-duration="800">
          <CardHeader className="flex gap-3">
            <FaUniversity className="lg:text-5xl text-4xl" />
            <div className="flex flex-col">
              <p className="lg:text-2xl text-lg font-semibold tracking-wider">B.Sc ITM</p>
              <p className="lg:text-lg text-sm text-default-500 tracking-wide">Graduation</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="lg:text-xl text-base tracking-wider">B.J.B Autonomous College Bhubaneswar, Odisha</p>
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
          <Meteors number={15} />
        </Card>
        <Card className="md:w-[408px] sm:w-[80vw] w-[90vw]" data-aos="zoom-in" data-aos-duration="800">
          <CardHeader className="flex gap-3">
            <FaUniversity className="lg:text-5xl text-4xl" />
            <div className="flex flex-col">
              <p className="lg:text-2xl text-lg font-semibold tracking-widest">XII</p>
              <p className="lg:text-lg text-sm text-default-500 tracking-wide">Higher Secondary</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="lg:text-xl text-base tracking-wider">Jupiter Science Higher Secondary School Bhubaneswar, Odisha</p>
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
          <Meteors number={15} />
        </Card>
      </div>
    </HeroHighlight>
  )
}

export default Education
