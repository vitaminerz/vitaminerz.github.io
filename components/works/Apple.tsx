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
          Enabling 0-1 execution and delivery of B2B and B2C marketing products 🚀     </li>
       
      </ul>
    </motion.div>
  );
};

export default Apple;
