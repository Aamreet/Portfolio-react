import React from "react";
import { useSelector } from "react-redux";

const Container = ({children}) => {
  const checked=  useSelector((store)=>{
        return store.switchBoard;
    })
    
  return (
    <div className={`overflow-x-hidden text-neutral-300 antialiased  selection:bg-cyan-300 selection:text-cyan-900 ${!checked && 'bg-slate-50'}`}>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="w-[95%] mx-auto px-4">
        {children}
      </div>
    </div>
  );
};

export default Container;
