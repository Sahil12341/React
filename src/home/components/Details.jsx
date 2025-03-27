import React, { useEffect, useState } from 'react'
import InputField from './InputField';
import Chart from './Chart';
import '/src/home/components/details.css'

function Details() {
    const [principal,setPrincipal] = useState(10000);
    const [rate,setRate] = useState(6.5);
    const [time,setTime] = useState(3);
    const [compound,setCompound] = useState(1);
    const [maturity,setMaturity] = useState(0)
    const [returns, setReturns] = useState(0);
    
    useEffect(() => {
        const r = rate / 100;
        const amount = principal * Math.pow( 1 + r / compound , compound * time);
        setMaturity(Number(amount.toFixed(2)));
        setReturns(Number(amount - principal).toFixed(2));
      
    },[principal, rate, time, compound]);
    
    return(
        <div className='flex justify-evenly items-center border-2 border-gray-400 my-20 mx-40'>
      <div className="py-6 space-y-4">
        <div>
          <InputField 
          label="Total Investment"
          type='number'
          value={principal}
          onInput={setPrincipal}
          max={100000}
          min={1000}
          step={1000}
          />
  
          <InputField 
          label="Rate of Interest(p.a.)"
          type='number'
          value={rate}
          onInput={setRate}
          max={15}
          min={1}
          step={0.1}
          />
  
          <InputField 
          label="Time Period"
          value={time}
          onInput={setTime}
          max={25}
          min={1}
          step={1}
  
          />
        </div>

        <div className='flex flex-col gap-8'>
        <div className='flex justify-between '>
        <p className='text-gray-600'>Invested Amount</p>
        <p>${principal}</p>
        </div>
        <div className='flex justify-between '>
            <p className='text-gray-600'>Est. returns</p>
            <p>${returns}</p>
        </div>

        <div className='flex justify-between '>
            <p className='text-gray-600'>Total value</p>
            <p>${maturity}</p>
        </div>
        </div>
      </div>

        <div>
            <Chart principal={principal} returns={returns}/>
        </div>

      </div>
    );
}

export default Details;
