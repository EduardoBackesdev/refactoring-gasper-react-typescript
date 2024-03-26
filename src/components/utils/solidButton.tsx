import './class.css';
import { ComponentProps } from "react";


// Isso significa as propriedades que eu quero que meu button tenha
interface propriedadesButton extends ComponentProps<"button">{
    text: string;
    className?: string;
}



export function Solidbutton({text,className}:propriedadesButton){

    return(
        <div>

            <button className={"class " + className}>
                <h2>{text}</h2>
            </button>
        
        </div>
        
        
    )



}