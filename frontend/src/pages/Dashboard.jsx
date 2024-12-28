import axios from "axios";
import { Appbar } from "../SignedIn_components/Appbar";
import { Balance } from "../SignedIn_components/Balance";
import { Users } from "../SignedIn_components/Users";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get("https://payzen-backend.onrender.com/api/v1/account/balance", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        });
        setBalance(response.data.balance);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };
    fetchBalance();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <Appbar />
      <motion.div 
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        <Balance balance={balance} />
        <Users />
      </motion.div>
    </motion.div>
  );
}
