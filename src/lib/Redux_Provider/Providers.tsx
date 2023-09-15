"use client"
import { Provider } from "react-redux";
import {Store} from "../../Redux_Store/Store"
const Providers =({children}:{children:React.ReactNode})=>{
return(
    <Provider store={Store}>{children}</Provider>
)
}
export default Providers