
{/* <div>
    <div>
        <h1>i am h1 tag</h1>
    </div>
</div> */}

//this how create nested html tag in react 
const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div",{id:"child"},
    React.createElement("h1",{},"i am h tag"))
)



const heading=React.createElement(
    "h1",
    {id:"heading"},
    "hello shubham from react"
)
console.log(parent)
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)

