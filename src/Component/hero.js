import React from "react"
import "../App.css"

function Hero({children,hero}){
    return(
    <header className={hero}>{children}</header>
    )
}
export default Hero;

Hero.defaultProps ={
    hero:"default-hero"
}