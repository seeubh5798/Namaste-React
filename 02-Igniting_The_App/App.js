// const heading = React.createElement("h1" , { id : "heading" , abc : "chala jaata hun "}, "hello react");
// console.log(heading);   // heading is a react element || a JS object , not html tag 
// // {
// //     "type": "h1",
// //     "key": null,
// //     "ref": null,
// //     "props": {
// //         "id": "heading",
// //         "abc": "chala jaata hun ",
// //         "children": "hello react" 
// //     },
// //     "_owner": null,
// //     "_store": {}
// // }

// // the above is heading returned from react.createelement 

// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(root);
// root.render(heading); 
import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement("div" , { id : "parent" },
                React.createElement("div" , { id : "child1" },
                 [ 
                    React.createElement("h1" , {} , "Jiyein kyun "),
                    React.createElement("h1" , {} , "Bikharne ka mujhko, shouk hai bada ")
                 ]
                 
                )
                );

console.log(parent);   // please see me , I ma not html element , i am JS Object aka React Element
const root = ReactDOM.createRoot(document.getElementById("root"));



// because of this complexity for simple html rendering , JSX came to the humanity.


const jsx = <h2> I am rendered from JSX</h2>   // JSX is also a react element, not HTML - remember it


const HeadingComponent = ()=>{
   return (
      <div>
         <h2> JSX from function component {jsx}</h2>


         <span> {parent}</span>
      </div>
   )
}

root.render(<HeadingComponent />)   