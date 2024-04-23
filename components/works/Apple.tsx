import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Apple = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Technical Product Manager 
        <span className="text-textGreen tracking-wide">@Realogy</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Mar 2018 - Jun 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Directed top-tier adoption of 3 B2C Real Estate SaaS and B2B PaaS from concept to market 
        </li>
       
      </ul>
    </motion.div>
  );
};

export default Apple;
