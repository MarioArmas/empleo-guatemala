import logo from './logo.svg';
import './App.css';
import data from './data/sexo.json'
import data2 from './data/edad.json'
import { useEffect, useState } from 'react';

function App() {
  const [men, setMen] = useState(0)
  const [women, setWomen] = useState(0)
  const [total, setTotal] = useState(0)
  const [jovenes, setJovenes] = useState(0)

  useEffect(() => {
    data.forEach(element => {
      element === 1 ?  setMen(prev => prev + 1)
      : setWomen(prev => prev + 1)
    });
  }, [])

  useEffect(() => {
    data2.forEach(element => {
      if (element > 22 && element <= 35) setJovenes(prev => prev + 1)
    });
  }, [])

  useEffect(() => {
    setTotal(men + women);
  }, [men, women])
  
  return (
    <div className="App">
      <h1>Empleo Guatemala</h1>
      <p>Total de personas: {total}</p>
      <p>Hay un total de: {men} hombres</p>
      <p>Hay un total de: {women} mujeres</p>

      <p>Porcentaje de hombres: {((men/total)*100).toFixed(2)}%</p>
      <p>Porcentaje de mujeres: {((women/total)*100).toFixed(2)}%</p>

      <p>Total de jovenes: {jovenes}</p>
    </div>
  );
}

export default App;
