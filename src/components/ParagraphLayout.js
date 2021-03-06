import React from "react"
import "../style.css"
// import pic from "../assets/pic.jpg"

export default function About(props){
    const flexDirection = props.colReverse === "true" ? "sl:flex-row-reverse" : "sl:flex-row"
    const img = props.img ? require(`../assets/${props.img}`) : null

    return(
        <div className="wrapper">
            <div className={`flex justify-between gap-12 lg:gap-18 xl:gap-24 items-center flex-col-reverse ${flexDirection}`}>
                <div className={`max-w-xl sl:max-w-none flex flex-col gap-8 ${img ? `sl:w-3/5` : `w-full`}`}>
                    <div><h2>{props.title}</h2></div>
                    <p>{props.desc}</p>
                </div>
                {img ? <img className="rounded-2xl w-full max-w-md sl:w-2/5" src={img} alt="" /> : ""}
            </div>
        </div>
    )
}