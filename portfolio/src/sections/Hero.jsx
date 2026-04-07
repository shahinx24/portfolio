import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold"
      >
        Hi, I'm Shahin 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-gray-500"
      >
        React Developer | Building Clean & Smart UI
      </motion.p>

    </section>
  );
}   