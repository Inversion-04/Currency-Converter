import {useEffect,useState} from "react"
//custom hook useCurrencyInfo is created 
//fetch response is converted into json and then currency value
//is extracted from it
function useCurrencyInfo(currency){
    const[data,setData] = useState({})
    useEffect(()=>{
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`)
      .then((res)=>res.json())
      .then((res)=>setData(res[currency]))
    },[currency])
    
    return data
}

export default useCurrencyInfo;