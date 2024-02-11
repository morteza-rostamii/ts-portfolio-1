import {motion} from "framer-motion";
import { SiCreatereactapp } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiReactos } from "react-icons/si";

const HeroImg = () => {
  return (
    <motion.div
      className="grid place-content-center w-20 h-20 text-cyan-500 text-[50px] md:text-[100px] md:w-52 md:h-52 "
      animate={{
        borderRadius: ['10%', '50%', '10%'],
        rotate: [0, 180, 0],
        backgroundColor: ['#4ade80', '#86efac'],
      }}
      transition={{
        duration: 6,
        yoyo: Infinity,
        repeat: Infinity,
      }}
    >
      <SiReactos 
      //size={50}
      />
    </motion.div>
  );
};

export default HeroImg