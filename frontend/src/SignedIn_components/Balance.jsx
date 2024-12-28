import { motion } from "framer-motion";

export function Balance({balance}) {
    return (
        <motion.div 
            className="flex p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="font-bold text-xl">
                Your Balance
            </div>
            <motion.div 
                className="font-semibold text-2xl ml-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
            >
                ₹ {balance}
            </motion.div>
        </motion.div>
    );
}