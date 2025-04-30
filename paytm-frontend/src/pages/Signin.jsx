import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setLoggedInCredentials } from "../feature/userSlice"

export const Signin = () => {
const[username,setUsername]=useState("");
const[password,setPassword]=useState("");
const navigate=useNavigate();
const dispatch=useDispatch();
async function handleSignin(){
  const response= await axios.post("http://localhost:3000/api/v1/user/signin",{username,password});
  const token=response.data.token;
  localStorage.setItem("token",token);
  localStorage.setItem("user", JSON.stringify(response.data.user)); 
dispatch(setLoggedInCredentials({userDetails:response.data.user,token:token}))
 navigate("/dashboard")
}
    return <div className="bg-slate-300 h-screen w-full flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox placeholder="enter your email" label={"Email"} onChange={(e)=>{setUsername(e.target.value)}} />
        <InputBox placeholder="password" label={"Password"}  onChange={(e)=>{setPassword(e.target.value)}} />
        <div className="pt-4">
          <Button onClick={handleSignin} label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}


