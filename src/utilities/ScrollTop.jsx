import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const ScrollTop = () =>{
    const { pathRuta } = useLocation()


    useEffect ( ()=>
    {
        window.scroll (0,0)
    },[pathRuta]);

    return null;
    
}
