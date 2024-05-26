// Gasper Software
// By: EduardoBackesDev
import "../Styles/main.css";
import "../assets/background3.jpg";
import { Solidbutton } from "../utils/solidButton";
import {More} from "../modals/more"

export function Main(){



    return(

        <div className="h-lvh bg-white text-white">
                <div className="flex flex-wrap justify-around text-center">
                        <div className="flex-col">

                            <h2 className="t text-black">Teste</h2>
                            <Solidbutton className="mb-3" text="Video"></Solidbutton>
                            <Solidbutton text="Saiba Mais"></Solidbutton>
                            {/* <More className="text-black">
                                <div className="text-black">
                                    <h2 >Titulo</h2>
                                    <h2>Valor</h2>
                                    <h2>Descricao da atividade</h2>
                                </div>
                            </More> */}
                        </div>

                        <div className="flex-col">
                            <h2 className="t text-black">Teste</h2>
                            <Solidbutton className="mb-3"   text="Video"></Solidbutton>
                            <Solidbutton  text="Saiba Mais"></Solidbutton>

                        </div>
                </div>
        </div>

    )


}