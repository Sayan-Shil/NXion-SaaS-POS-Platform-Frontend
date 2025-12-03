import { useContext } from "react"
import { SideBarContext } from "../SidebarContext"

export const UseSidebar = () => {
    const context = useContext(SideBarContext)
    if(!context){
        throw new Error("Use Sidebar Must Be Used Within Sidebar Provider")
    }
    return context;
}