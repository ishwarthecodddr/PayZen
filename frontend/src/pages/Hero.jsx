import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaMoneyBillWave, FaShieldAlt, FaBolt } from "react-icons/fa";
import { BsCashStack, BsGraphUpArrow } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";

export const Hero = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaBolt className="w-8 h-8 text-purple-400" />,
      title: "Instant Transfers",
      description: "Send money in seconds, not days. Experience lightning-fast transactions across the platform.",
      image: "/api/placeholder/80/80"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-purple-400" />,
      title: "Bank-Grade Security",
      description: "Your money is protected with state-of-the-art encryption and security protocols.",
      image: "/api/placeholder/80/80"
    },
    {
      icon: <BsCashStack className="w-8 h-8 text-purple-400" />,
      title: "Zero Fees",
      description: "No hidden charges or transaction fees. Keep more of your money.",
      image: "/api/placeholder/80/80"
    },
    {
      icon: <RiSecurePaymentLine className="w-8 h-8 text-purple-400" />,
      title: "Secure Payments",
      description: "End-to-end encrypted transactions ensure your money reaches safely.",
      image: "/api/placeholder/80/80"
    },
    {
      icon: <BsGraphUpArrow className="w-8 h-8 text-purple-400" />,
      title: "Track Expenses",
      description: "Monitor your spending patterns and manage your finances better.",
      image: "/api/placeholder/80/80"
    },
    {
      icon: <FaMoneyBillWave className="w-8 h-8 text-purple-400" />,
      title: "Smart Transfers",
      description: "Intelligent system for recurring payments and scheduled transfers.",
      image: "/api/placeholder/80/80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <nav className="p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            className="text-3xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-purple-400">Pay</span>
            <span className="text-white">zen</span>
          </motion.div>
          <div className="space-x-4">
            <motion.button
              className="px-6 py-2 text-white hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/signin")}
            >
              Sign In
            </motion.button>
            <motion.button
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </motion.button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-white">Experience </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Seamless
            </span>
            <br />
            <span className="text-white">Payments with </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Payzen
            </span>
          </h1>

          <motion.p
            className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Send money instantly, securely, and without boundaries.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center items-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/signup")}
            >
              Get Started
            </motion.button>
            <motion.button
              className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-lg text-lg font-semibold hover:bg-white/20 transition-all w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/learn-more")}
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 rounded-lg bg-white/5 backdrop-blur-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.2 }}
              >
                <div className="flex flex-col items-center">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default Hero;