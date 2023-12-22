import React, { useState } from 'react';
import './App.css';
import "./Style.css"
//Girilen ve çıkışı verilen yani değeri döndürülen sıcaklık değerlerini depolamaya yarar. 
const App = () => {
  const [celsius, setCelsius] = useState('');
  const [kelvin, setKelvin] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

/*Dönüştür düğmesine tıklandığında convertTemperature fonksiyonu çağrılır.
Giriş sıcaklığını celsiusdan bir ondalık sayıya çevirir. Eğer geçerli bir sayı ise,
Kelvin ve Fahrenheit'a dönüştürme işlemlerini gerçekleştirir ve durum değişkenlerini günceller.*/

  const convertTemperature = () => {
    const celsiusValue = parseFloat(celsius);

    if (!isNaN(celsiusValue)) {
      const kelvinValue = celsiusValue + 273.15;
      const fahrenheitValue = (celsiusValue * 9/5) + 32;

      setKelvin(kelvinValue.toFixed(2));
      setFahrenheit(fahrenheitValue.toFixed(2));
    } else {
      setKelvin('');
      setFahrenheit('');
    }
  };

/*Sıfırla düğmesine tıklandığında resetValues fonksiyonu çağrılır.
Tüm sıcaklık değerlerini boş bir dizeye sıfırlar.*/

  const resetValues = () => {
    setCelsius('');
    setKelvin('');
    setFahrenheit('');
  };
/*Burada Değer Kullanıcıdan Alındıktan Sonra && koşulu ile Null Dönmediyse Ekrana Yazdırıyor.
Aynı Zamanda Dönüştür Ve Sıfırla Butonlarınıda İçinde Barındırıyor.*/
  return (
    <div className="app">
      <h1>Derece Dönüştürücü</h1>
      <div className="input-container">
        <label>Santigrat:</label>
        <input
          type="number"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
        />
        <button style={{margin:"10px"}} onClick={convertTemperature}>Dönüştür</button>
        <button onClick={resetValues}>Sıfırla</button>
      </div>
      <div className="result-container">
        {kelvin && <p>Kelvin: {kelvin} K</p>} 
        {fahrenheit && <p>Fahrenayt: {fahrenheit} °F</p>}
      </div>
    </div>
  );
};

export default App;
