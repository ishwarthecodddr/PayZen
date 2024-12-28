import axios from "axios";
import { Appbar } from "../SignedIn_components/Appbar";
import { Balance } from "../SignedIn_components/Balance";
import { Users } from "../SignedIn_components/Users";
import { useEffect, useState } from "react";
export default function Dashboard() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
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
    <div>
      <Appbar></Appbar>
      <div className="m-8">
        <Balance balance={balance}></Balance>
        <Users></Users>
      </div>
    </div>
  );
}
