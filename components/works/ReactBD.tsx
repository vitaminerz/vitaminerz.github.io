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
        Product 
        <a  target="_blank" rel="noopener noreferrer" className="text-textGreen tracking-wide">
           
        </a>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Dec 2023 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Building the bridge to functional health practice ✨  </li>
        
      </ul>
    </motion.div>
  );
};

export default ReactBD;
