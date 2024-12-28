import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export function Appbar() {
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem("token");
        navigate("/signin");
    };

    return (
        <motion.div 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="shadow-lg h-16 flex justify-between items-center px-6 bg-gradient-to-r from-slate-800 to-slate-900"
        >
            <motion.div 
                whileHover={{ scale: 1.1 }}
                className="text-2xl font-bold cursor-pointer"
                onClick={() => navigate("/dashboard")}
            >
                <span className="text-purple-400">Pay</span>
                <span className="text-white">zer</span>
            </motion.div>
            
            <div className="flex items-center space-x-6">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSignOut}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition-colors"
                >
                    Sign Out
                </motion.button>
                <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full h-12 w-12 bg-gradient-to-r from-purple-400 to-purple-600 text-white flex items-center justify-center text-xl font-bold shadow-lg"
                >
                    U
                </motion.div>
            </div>
        </motion.div>
    );
}
