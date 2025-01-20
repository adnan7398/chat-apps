"use client"
import {TextInput} from "@repo/ui/Text-input"
import { SelfButton } from "@repo/ui/Self-Button";
import { useRouter } from "next/navigation";
export default function Home() {
  const Router = useRouter(); 
  return (
    <div style = {{
      height :"100vh",
      width:"100vw",
      background:"black",
      display:"flex",
      justifyContent:"center",
      justifyItems:"center"
    }}>
      <div style={{
        display :"flex",
        justifyContent:"center",
        flexDirection:"column"
      }}>
        <TextInput size="small" placeholder={"Room Name"}></TextInput>

       <button onClick = {()=>{
          Router.push("/chat/123")
       }}>join Room </button>
      </div>
    </div>
  );
}
