import './App.css';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const statements=[
  ["1","Calcular la paga neta de un trabajador conociendo el número de horas trabajadas, la tarifa horaria y la tasa de impuestos."],
  ["2","Sumar, restar, multiplicar o dividir numeros enteros."],
  ["3","Calcular la velocidad en m/s del corredor en la carrera de 1500m."],
  ["4","Calcular la superficie de un triangulo."],
  ["5","Calcular el salario de un trabajador según la tarifa horaria y las horas trabajadas diariamente."],
  ["6","Dadas dos variables A y B rea lizar un intercambio entre ambas."],
  ["7","Calcular la distancia recorrida en metros de un auto que tienre una velocidad constante 'm/s' en un un tiempo 's'."],
  ["8","Obtener el promedio simple de un estudiente con sus tres notas parciales."],
  ["9","Calcular resultado de una prueba, segun respuestas correctas, incorrectas o en blanco."],
  ["10","Calcular el número de CDs necesarios para hacer un respaldo de un disco duro lleno."]
]


function App() {



  return (
    <div className="App">
      <div className="body">
        <h1>Elija una opción:</h1>
        {statements.map( stat =>
          <Card key={stat[0]} index={stat[0]} text={stat[1]}/>
        )}
        
      </div>
    </div>
  );
}

export default App;
