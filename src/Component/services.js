import React, { Component } from "react"
import {FaCocktail,FaHiking,FaBeer,FaShuttleVan} from "react-icons/fa"
import "../App.css"


class Services extends Component{
    constructor(){
        super()
        this.state={
            service:[{
                icon:<FaCocktail/>,
                title:"Free cocktail",
                info:"Bceause we loved it!"
            },
            {
                icon:<FaBeer/>,
                title:"Free cocktail",
                info:"Bceause we loved it!"
            },
            {
                icon:<FaShuttleVan/>,
                title:"Van",
                info:"Bceause we loved it!"
            },
            {
                icon:<FaHiking/>,
                title:"Free cocktail",
                info:"Bceause we loved it!"
            }]
        }
    }
    render(){
        return(
            <section className="service">
                <h1>Service</h1>
                <div className="service-center">
                    {this.state.service.map((items,index)=>{
                        return(
                            <article key={index}>
                                <span>{items.icon}</span>
                                <h6>{items.title}</h6>
                                <p>{items.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}

export default Services