import "./style.css";
import React from "react";

function Calculate() {

    function result(){
        var height = document.getElementById("height").value;
        console.log(height);
        var kilos = document.getElementById("kilos").value;
        console.log(kilos);

        var calculation = (kilos/(height**2));
        var result = calculation.toFixed(1);
        console.log(result);

        calculation = parseFloat(result);
        console.log(calculation);

        if(calculation < 18.5){
            document.getElementById("result").innerHTML = "Seu IMC é "+calculation+" você está abaixo do peso.";
        }
        else if(calculation >= 18.5 && calculation <= 24.9){
            document.getElementById("result").innerHTML = "Seu IMC é "+calculation+" seu peso está normal.";
        }
        else if(calculation >= 25 && calculation <= 29.9){
            document.getElementById("result").innerHTML = "Seu IMC é "+calculation+" O resultado é sobrepeso.";
        }
        else if(calculation >= 30 && calculation <= 39.9){
            document.getElementById("result").innerHTML = "Seu IMC é "+calculation+". O resultado é Obesidade";
        }
        else{
            document.getElementById("result").innerHTML = "Seu IMC é "+calculation+". O resultado é obesidade grave";
        }
    }
    return (
        <>

            <div className="row justify-content-md-center text-center" >
                <div className="col-sm-6 col-xxl-6">
                    <h3>Altura(ex.: 1.64)</h3>
                    <input id="height" type="number" placeholder="Metros"></input>
                </div>

                <div className=" col-sm-6 col-xxl-6" >
                    <h3>Peso(ex.: 58.2)</h3>
                    <input id="kilos" type="number" placeholder="Quilos"></input>
                </div>
            </div>


            <div className="d-flex justify-content-center">
                <button  onClick={result}>Calcular</button>
            </div>

            <div className="d-flex justify-content-center">
                <h2 id="result">Resultado Aqui</h2>
            </div>
        </>
    );
}

export default Calculate;