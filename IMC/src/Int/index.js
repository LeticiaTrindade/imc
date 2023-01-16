import "./style.css";
import React from "react";

function Int() {
    return (
        <div className="row justify-content-md-center">
            <h1 className=" text-center" >Cálculo IMC</h1>
            <br />
        
            <p className=" col-md-7 text-center">IMC significa <b>Índice de Massa Corpórea</b>
            , parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
            <br/> Para realizar o cálculo utilizamos a seguinte fórmula: <b>peso/altura²</b>
            </p>
        </div>
    );
}

export default Int;