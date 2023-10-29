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

const parent = React.createElement("div" , { id : "parent" },
                React.createElement("div" , { id : "child1" },
                 [
                    React.createElement("h1" , {} , "Jiyein kyun "),
                    React.createElement("h1" , {} , "Bikharne ka mujhko, shouk hai bada ")
                 ]
                
                )
                );

console.log(heading);   // please see me , I ma not html element , i am JS Object aka React Element
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)

// because of this complexity for simple html rendering , JSX came to the humanity.
