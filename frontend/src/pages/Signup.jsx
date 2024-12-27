  import { useState } from "react";
  import { BottomWarning } from "../components/BottomWarning";
  import { Button } from "../components/Button";
  import { Heading } from "../components/Heading";
  import { Inputbox } from "../components/Inputbox";
  import { SubHeading } from "../components/SubHeading";
  import axios from "axios";

  export default function Signup() {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {ba
      try {
        const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
          username,
          firstname,
          lastname,
          password,
        });
        console.log("Signup successful:", response.data);
        // Handle success (e.g., redirect to another page, show a success message, etc.)
      } catch (error) {
        console.error("Error signing up:", error);
        // Handle error (e.g., show an error message to the user)
      }
    };

    return (
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign up"} />
            <SubHeading label={"Enter your information to create an account"} />
            <Inputbox
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="John"
              label={"First Name"}
            />
            <Inputbox
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Doe"
              label={"Last Name"}
            />
            <Inputbox
              onChange={(e) => setUsername(e.target.value)}
              placeholder="ishwar@gmail.com"
              label={"Email"}
            />
            <Inputbox
              onChange={(e) => setPassword(e.target.value)}
              placeholder="123456"
              label={"Password"}
            />
            <div className="pt-4">
              <Button onPress={handleSignup} label={"Sign up"} />
            </div>
            <BottomWarning
              label={"Already have an account?"}
              buttonText={"Sign in"}
              to={"/signin"}
            />
          </div>
        </div>
      </div>
    );
  }
