"use client"
interface ProtoType{
    placeholder : string,
    size : "big"|"small"
}
export function TextInput({
    placeholder,
    size ,
 
}:ProtoType){
    return <input placeholder={placeholder} style={{
        padding : size === "big" ? 20:10,
        margin : size === "small" ? 20:10,
        borderColor:"black",
        borderWidth:1

    }}>
    </input>
}