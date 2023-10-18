const parent = React.createElement( "div",{ id : "parent"},[
    React.createElement( "div", {id : "child1"},[
        React.createElement("h1", {}, "Hello this is nested message"),
        React.createElement("h2", {}, "Hello this is nested message")
    ]),
    React.createElement( "div", {id : "child2"},[
        React.createElement("h1", {}, "Hello this is nested message"),
        React.createElement("h2", {}, "Hello this is nested message")
    ])
    ]// third argument of parent class, with array of two childrens 
    
    
);



// const add = (x, y) => x+y;

// const sample = React.createElement("div", {id : 'one'}, [
//     React.createElement("div", {id : "two"} ,
//     React.createElement("p", {},"This is the paragraph tag")),
//     React.createElement("div", {id : "two"} ,
//     React.createElement("p", {},"This is the paragraph tag"))
// ]
    
// );



// const heading = React.createElement(
//     "h1",               
//     {id: "heading"},  //attribute
//     "Hello World from React"
//     );  //children

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
    