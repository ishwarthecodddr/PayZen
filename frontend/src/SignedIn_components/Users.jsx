import { useState } from "react";
import { Button } from "../components/Button";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    fetchUsers();
  }, [filter]);
  async function fetchUsers() {
    try {
      const res = await axios.get(
        "https://payzen-backend.onrender.com/api/v1/user/bulk?filter=" +
          encodeURIComponent(filter) // encodeURIComponent is used to encode the filter string so that it can be used in the URL to take care of special characters
      );
      setUsers(res.data.user);
    } catch (error) {
      console.log(error);
      setUsers([]); // Keep it as an array even on failure
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="font-bold mt-6 text-2xl text-gray-800">Users</div>
      <motion.div 
        className="my-4"
        whileHover={{ scale: 1.01 }}
      >
        <input
          type="text"
          placeholder="Search users..."
          className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          onChange={(e) => setFilter(e.target.value)}
        />
      </motion.div>
      <motion.div className="space-y-4">
        {users.map((user, index) => (
          <motion.div
            key={user._id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <User user={user} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

function User({ user }) {
  const navigate = useNavigate();
  return (
    <motion.div 
      className="flex justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex">
        <motion.div 
          className="rounded-full h-12 w-12 bg-gradient-to-r from-purple-500 to-blue-500 flex justify-center mt-1 mr-2 text-white"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </motion.div>
        <div className="flex flex-col justify-center">
          <div className="font-semibold text-gray-800">
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <Button label={"Send Money"} onPress={() => {
          navigate("/send/?userId=" + user._id + "&name=" + user.firstName);
        }} />
      </div>
    </motion.div>
  );
}
