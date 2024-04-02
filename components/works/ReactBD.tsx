import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Co-Founder
        <a href="https://OptigenAI.com" target="_blank" rel="noopener noreferrer" className="text-textGreen tracking-wide">
           @OptigenAI
        </a>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Nov 2023 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Leading AI-driven product execution, pioneering MVP iterations focused on impactful, data-driven results.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Revolutionizing lab analysis by automating over 120 lab scripts and analyzing 2000+ biomarkers.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Forging strategic partnerships expanding R&D capabilities, significantly enhancing athletic performance optimization.
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
