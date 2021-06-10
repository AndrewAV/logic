import React, { useState, useEffect } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const statements = [
    ["1", "Calculate Your Salary."],
    ["2", "Sumar, restar, multiplicar o dividir numeros enteros."],
    ["3", "Calculate Your Average Speed."],
    ["4", "Calcular la superficie de un triangulo."],
    ["5", "Calculate Your Salary On A Week."],
    ["6", "Dadas dos variables A y B realizar un intercambio entre ambas."],
    ["7", "Calculate The Distance Of Your Trip."],
    ["8", "Obtener el promedio simple de un estudiente con sus tres notas parciales."],
    ["9", "Total Points On Test."],
    ["10", "Calcular el número de CDs necesarios para hacer un respaldo de un disco duro lleno."]
]

const Menu = () => {
    return (
        <React.Fragment>
            <h1>Elija una opción:</h1>
            {statements.map(stat =>
                <Link to={`/${stat[0]}`} className="link" key={stat[0]}>
                    <Card key={stat[0]} index={stat[0]} text={stat[1]} />
                </Link>
            )}
        </React.Fragment>
    );
}

export default Menu;





