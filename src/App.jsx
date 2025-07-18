import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {InputBox} from './components'
import useCurrencyInfo from './Hooks/useCurrencyinfo'

function App() {
 const[amount,setAmount] = useState(0)
 const[from,setFrom] = useState("inr")
 const[to,setTo] = useState("usd");
 const[convertedAmount,setconvertedAmount] = useState(0)

 const currencyInfo = useCurrencyInfo(from);


const options = Object.keys(currencyInfo);
 
 const swap = ()=>{
  setFrom(to)
  setTo(from)
  setconvertedAmount(amount)
  setAmount(convertedAmount)
 }
const convert = ()=> {
  
  const rate = currencyInfo[to];
  if (rate) {
    setconvertedAmount(amount * rate);
  } else {
    setconvertedAmount(0); 
  }
}



  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?_gl=1*1wk5n1m*_ga*MTgwMDM2NjExMS4xNzUyNzUzODYy*_ga_8JE65Q40S6*czE3NTI4NDg3NzYkbzMkZzEkdDE3NTI4NDkzMTEkajQwJGwwJGgw')`,
        }}
    >
        <div className="w-full">
            <div className="w-screen h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}

                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);

}
export default App
