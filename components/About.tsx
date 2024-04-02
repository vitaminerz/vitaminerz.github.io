import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
          Operating across sectors such as retail, real estate, bioscience, and finance, I bring a nuanced understanding of customer needs and devise innovative solutions.{" "}
          <span className="text-textGreen">
          Agile
            </span>
            {" "} methodologies, {" "}  
            <span className="text-textGreen">
          Scrum
            </span>
            {" "} mastery, and {" "} 
            <span className="text-textGreen">
          Design-Thinking
            </span>
            {" "} thinking are my frameworks for driving efficient and impactful product cycles. 
          </p>
          <p>
          My expertise in {" "}
            <span className="text-textGreen">
            AI, ML, LLM, Blockchain, and DAO
            </span>
            {" "} navigates the complexities of digital transformation, fostering iterative value delivery while achieving strategic OKRs{" "}
            <span className="text-textGreen">
            OKRs.
            </span>
          </p>
          <p>
          In the twilight hours, I am a hybrid athlete, striving for a world where every App embraces dark mode.
          </p>
          <p>My flex forte list:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Product Planning {" "} 
              <span className="text-textGreen">
              Roadmunk|ProductPlan
            </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Product Delivery {" "} 
              <span className="text-textGreen">
              Jira | Confluence | Trello 
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Product Design {" "} 
              <span className="text-textGreen">
              Figma | Adobe XD | Paint
              </span>
              -Yes! MS Paint...- 
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Data & BI {" "} 
              <span className="text-textGreen">
              GA | Tableau | eazyBI
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              AI & ML
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              OpenAI API | Vertex AI | LangChain
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Tailwindcss
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
