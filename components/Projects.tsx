import { amazonImg, cyberImg, noorShop, caramel } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Work I am proud of" titleNo="02" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={amazonImg}
                alt="amazonImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Co-Founder
              </p>
              <h3 className="text-2xl font-bold">OptigenAI/Protocols</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              Generate tailored biohac*ing protocols for your patients using our RAG based heathtech product. {" "}          
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>genAI</li>             
              <li>Prompt Engineering</li>
              <li>Superhuman</li>
              <li>Bioscience</li>
            </ul>
            <div className="text-2xl flex gap-4">

             
              <a
                className="hover:text-textGreen duration-300"
                href="https://optigenai.com"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        


        
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://www.amineerrazi.com/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={cyberImg}
                alt="cyberImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Product @Anywhere RE.
              </p>
              <h3 className="text-2xl font-bold">AI LC Coordinator</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              GenAI POC applied to Real Estate listing Marketing. FCST {" "}
              <span className="text-textGreen">3x faster</span> Listing Marketing,{" "}
              <span className="text-textGreen"> 90%</span> saving in Coordinator cost,{" "}
              <span className="text-textGreen"> ~100% </span> Fair Housing Act compliance. {" "}
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Martech</li>
              <li>OpenAI</li>
              <li>genAI/LLM</li>
              <li>Experimentation</li>
            </ul>
            {/* <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/noorjsdivs"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://youtu.be/49Fx963su1I"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://www.noormohmmad.com/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div> */}
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://amineerrazi.com/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={caramel}
                alt="caramel"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Fractional Consultant
              </p>
              <h3 className="text-2xl font-bold">Caramel</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
            Repositioning the product offering to change the way people buy and sell cars from one another, making the experience safe, simple & sweet.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Strategy</li>
              <li>Product</li>
              <li>Consulting</li>
              <li>Consumer Journey</li>
              <div className="text-2xl flex gap-4">

             
              <a
                className="hover:text-textGreen duration-300"
                href="https://www.drivecaramel.com/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
              
            
            </ul>
            {/* <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/noorjsdivs"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://youtu.be/fi0nQc25xAw"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://noorshop.netlify.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div> */}
          </div>
        </div>
        {/* ============ project Three End here ================== */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://www.amineerrazi.com/"
            target="_blank"
          >
            <div>
            <Image
                className="w-full h-full object-contain"
                src={noorShop}
                alt="noorShop"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Agile Execution 
              </p>
              <h3 className="text-2xl font-bold">Ta-Daa Team</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              While we are still unsure on where the name came from, the crawl to fly maturity of my cross functional team is undeniable. It is one of my proud moments to see a team of T-shaped engineers be {" "}
              <span className="text-textGreen">outcome focused </span> while practicing  <span className="text-textGreen">full agile fluency </span> and <span className="text-textGreen"> extreme automation</span>.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
            <li>Execution</li>
              <li>Delivery</li>
              <li>Agility</li>
              <li>Cross-Skill hats</li>
              <li>Value Stream</li>
            </ul>
           
          </div>
        </div>
      </div>
     
      
    </section>
  );
};

export default Projects;
