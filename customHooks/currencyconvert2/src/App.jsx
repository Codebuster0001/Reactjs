import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState(0);
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');

  const calculateCurrency = () => {
    // Here you would implement the currency conversion logic
    // For now, let's just display the amount as it is
    setResult(amount);
  };

  const swapCurrencies = () => {
    // Swapping the currencies
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <div className="justify-center items-center rounded-2xl m-4 p-4 bg-gray-300 h-auto">
      <div className='text-2xl p-5 font-medium'>Currency Converter</div>
      <div className='flex justify-around items-center m-10'>
        <div className='flex flex-col gap-3'>
          <label className='flex text-lg font-medium mx-2'>Amount</label>
          <input 
            className='p-2 px-4 rounded-lg' 
            type="text" 
            placeholder='Amount' 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        
        <div className='flex flex-col gap-3'>
          <label className='flex text-lg font-medium mx-2'>From Currency</label>
          <select 
            className='p-2 px-4 rounded-lg'
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
          </select>
        </div>

        <div className='flex flex-col gap-3'>
          <label className='flex text-lg font-medium mx-2'>To Currency</label>
            <select 
            className='p-2 px-4 rounded-lg'
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
          </select>
        </div>
      </div>

      <div className='flex m-10'>
        <div className='flex gap-2 items-center mx-16'>
          <label className='flex text-lg font-medium'>Result : {result}</label>
        </div>
      </div>

      <div className='flex justify-center m-10'>
        <div className='flex gap-2 items-center mx-16'>
          <button 
            className='flex px-3 py-1 m-1 rounded-md font-semibold bg-blue-400 hover:bg-black hover:text-stone-300'
            onClick={calculateCurrency}
          >
            Calculate
          </button>
         
        </div>
      </div>
    </div>
  );
}

export default App;
