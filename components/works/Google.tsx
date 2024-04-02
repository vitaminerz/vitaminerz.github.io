import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Senior Product Manager
        <a href="https://anywhere.re/" target="_blank" rel="noopener noreferrer" className="text-textGreen tracking-wide">
    @Anywhere
  </a>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jun 2022 - Nov 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Launched Listing and Design Concierge, becoming a primary tool for over 50% of Coldwell Banker listings.

        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Spearheaded AI and ML initiatives, forecasting $3 million/yr in operational cost savings.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>

          Pioneered organization-wide product evaluation initiatives, integrating A/B testing and OKRs, which enhanced PM efficiency and effectiveness.</li>
      </ul>
    </motion.div>
  );
};

export default Google;
