import { FC } from "react";
const Wrapper:FC<{children:React.ReactNode}>=({children})=>{
    return(
        <div className=" lg:max-w-8xl px-10 md:px-20 ">{children}</div>
    )
};
export default Wrapper;