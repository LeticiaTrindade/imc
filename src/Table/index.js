import "./style.css";
import React from "react";

function Table(){
    return(<>
    <div id="table">
        <h2 className="text-center">Tabela IMC</h2>
        <div className="row justify-content-md-center text-center">
            <h5 className=" col-sm-3">IMC</h5>
            <h5 className=" col-sm-3">CLASSIFICAÇÃO</h5>
            <h5 className=" col-sm-3">OBESIDADE(GRAU)</h5>
        </div>
        <hr/>

        <div className="row justify-content-md-center text-center">
            <h6 className=" col-sm-3">Menor que 18.5</h6>
            <h6 className=" col-sm-3">Magreza</h6>
            <h6 className=" col-sm-3">0</h6>
        </div>
        <hr/>

        <div className="row justify-content-md-center text-center">
            <h6 className=" col-sm-3">Entre 18.5 e 24.9</h6>
            <h6 className=" col-sm-3">Normal</h6>
            <h6 className=" col-sm-3">0</h6>
        </div>
        <hr/>

        <div className="row justify-content-md-center text-center">
            <h6 className=" col-sm-3">Entre 25 e 29.9</h6>
            <h6 className=" col-sm-3">Sobrepeso</h6>
            <h6 className=" col-sm-3">I</h6>
        </div>
        <hr/>

        <div className="row justify-content-md-center text-center">
            <h6 className=" col-sm-3">Entre 30 e 39.9</h6>
            <h6 className=" col-sm-3">Obesidade</h6>
            <h6 className=" col-sm-3">II</h6>
        </div>
        <hr/>

        <div className="row justify-content-md-center text-center">
            <h6 className=" col-sm-3">Maior que 40</h6>
            <h6 className=" col-sm-3">Obesidade grave</h6>
            <h6 className=" col-sm-3">III</h6>
        </div>
        <hr/>
        </div>
    </>
    );
}

export default Table;