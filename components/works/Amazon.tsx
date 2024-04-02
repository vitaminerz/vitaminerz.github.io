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
       ERP Analyst
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
          Spearheaded the customization of the GOLD ERP system, improving inventory management efficiency by 25%.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Streamlined order processing, resulting in a 15% reduction in times, enhancing supply chain responsiveness.
        </li>
      </ul>
    </motion.div>
  );
};

export default Amazon;
