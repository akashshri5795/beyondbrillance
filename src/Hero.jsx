import { motion } from "framer-motion";

export default function Hero() {

  return (
    <div className="relative w-screen min-h-screen overflow-hidden bg-[#050816] flex justify-center items-center">

      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Content */}
      <div className="relative z-10 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-black text-white"
        >
          FUTURE OF
          <span className="text-cyan-400">
            {" "}LEARNING
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 mt-6 text-xl"
        >
          Gaming + AI + Education
        </motion.p>

        {/* Floating Card */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="mt-16 mx-auto w-[300px] h-[200px] rounded-[40px] bg-white/5 border border-cyan-400/20 backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,255,0.2)] flex justify-center items-center"
        >

          <h2 className="text-cyan-300 text-3xl font-bold">
            AI Learning
          </h2>

        </motion.div>

      </div>
    </div>
  );
}