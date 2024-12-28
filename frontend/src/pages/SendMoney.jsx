import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";

export default function SendMoney() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const id = searchParams.get("userId");
  const [amount, setAmount] = useState(0);
  const handleTransfer = async () => {
      const response = await axios.post("https://payzen-backend.onrender.com/api/v1/account/transfer", {
          to:id,
          amount,
      }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
      }});
      //   console.log(response);
      alert("₹ "+amount+" sent to "+name);
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 flex justify-center items-center p-4">
      <motion.div 
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="text-3xl font-bold text-white text-center mb-8">Send Money</div>
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-2xl text-white">{name[0].toUpperCase()}</span>
              </div>
              <h3 className="text-2xl font-semibold">{name}</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="amount"
                >
                  Amount (in Rs)
                </label>
                <input
                  type="number"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  id="amount"
                  placeholder="Enter amount"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <motion.button 
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                onClick={handleTransfer} 
                className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600"
              >
                Initiate Transfer
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
