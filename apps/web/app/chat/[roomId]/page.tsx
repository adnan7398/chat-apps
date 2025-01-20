import { TextInput } from "@repo/ui/Text-input"
export default function (){
    return <div style={
        {width:"100vw",
            height:"100vh",
            display:"flex",
            justifyContent:"space-between",
            flexDirection:"column"
        }
    }>
        <div>
        Chat room 
        </div>
        <TextInput size="big" placeholder={"Type Your message here "}></TextInput>
        
    </div>
}