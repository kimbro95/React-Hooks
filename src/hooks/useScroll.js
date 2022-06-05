import { useEffect, useState } from "react";

export const useScroll  = () => {
    const [state, setState ] = useState({
        x: 0,
        y: 0
    });
    const onScroll = () => {
        setState({
        y: window.pageYOffset,
        x: window.pageYOffset
        });
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    return state;
}