import React from "react"
import ReactDOM from "react-dom/client"

//element 
const heading=React.createElement("h1",{id:"heading"},"namste React")
console.log(heading)
const root=ReactDOM.createRoot(document.getElementById("root"));

//jsx=>it is html-like or xml-like sysntax
//babael is converted to jsx to react element
const jsxHeading=<h1 className="head">namste lwc</h1>
//given attribute to jsx its camelcase
//react component=>there are to type of componenet=>classBased componenet=>functional componenet
//Functional component=>is javascript function return a jsx 
const elem=<span>React Element</span>
const Title=()=>{
    {elem}
    return(
        <h1>this tiltile function componeent</h1> 
        
    )
}
//componenet composition 
const number=10000
    const HeadingComponent=()=>{//this is functonal component
        {elem}
        return(
            <> 
            {/* componenet compositionone componenet into another component is componenet compostion */}
            <Title/>
            <Title/>
            
            <div id="container">
                <h2>{number+number}</h2>

            </div>
            <h1>lwc functional  copnenet </h1>
            </>
        )
    }

root.render(<HeadingComponent/>)