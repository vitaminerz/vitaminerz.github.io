import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Amazon = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
       ERP System Analyst
        <span className="text-textGreen tracking-wide">@Auchan</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
       2013 - 2015
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Molding the ERP to fit the retail frenzy 🛒        </li>
        
      </ul>
    </motion.div>
  );
};

export default Amazon;
