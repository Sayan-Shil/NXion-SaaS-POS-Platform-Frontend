import { useState } from "react";
import { SideBarContext } from "./SidebarContext";

export const SidebarProvider=({children})=>{
   const [sideBarOpen, setSideBarOpen] = useState(false);
   return (<SideBarContext.Provider value={{sideBarOpen,setSideBarOpen}}>
    {children}
   </SideBarContext.Provider>)
}