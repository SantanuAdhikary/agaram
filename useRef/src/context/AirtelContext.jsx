import { createContext, useContext } from "react";


// !  first step : create context

 const AirtelContext  = createContext()



//  ! second step : create Provider

 const AirtelProvider = ({children})=>{
    return(
        <AirtelContext.Provider  value={{sim:"airtel", price:300, type:"micro"}}>

         {children}
        
        </AirtelContext.Provider>
    )
 }


//  !  4th step: create custom hooks

export const useAirtel =()=>{

    let a = useContext(AirtelContext)
    return a;
}


export default AirtelProvider