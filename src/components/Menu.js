import React, { useState, useEffect } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const statements = [
    ["1", "Calcular la paga neta de un trabajador conociendo el número de horas trabajadas, la tarifa horaria y la tasa de impuestos."],
    ["2", "Sumar, restar, multiplicar o dividir numeros enteros."],
    ["3", "Calcular la velocidad en m/s del corredor en la carrera de 1500m."],
    ["4", "Calcular la superficie de un triangulo."],
    ["5", "Calcular el salario de un trabajador según la tarifa horaria y las horas trabajadas diariamente."],
    ["6", "Dadas dos variables A y B realizar un intercambio entre ambas."],
    ["7", "Calcular la distancia recorrida en metros de un auto que tienre una velocidad constante 'm/s' en un un tiempo 's'."],
    ["8", "Obtener el promedio simple de un estudiente con sus tres notas parciales."],
    ["9", "Calcular resultado de una prueba, segun respuestas correctas, incorrectas o en blanco."],
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





