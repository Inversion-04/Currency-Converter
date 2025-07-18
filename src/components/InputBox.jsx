import React,{useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency= "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId()

    return (
        <div className={`bg-white bg-opacity-90 p-4 rounded-xl text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id = {amountInputId}
                    value = {amount}
                    className="outline-none w-full bg-white text-black py-2 px-3 rounded-lg placeholder:text-black/60"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} 
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-400 cursor-pointer outline-none"
                    value = {selectCurrency}
                    disabled = {currencyDisable}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)} 
                    
                    >
                    {currencyOptions.map((currency)=>
                    (
                        <option key = {currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                    
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
