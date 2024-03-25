import { Id } from "@reduxjs/toolkit/dist/tsHelpers";
import { text } from "stream/consumers";
import './class.css';


// Isso significa as propriedades que eu quero que meu button tenha
interface propriedadesButton{
    text: string;
    onClick: Function;
    className?: string;
}



export function Solidbutton(props:propriedadesButton){

    return(
        <div>

            <button className={"class" + props.className}>
                <h2>{props.text}</h2>
            </button>
        
        </div>
        
        
    )



}