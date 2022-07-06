import React from 'react';
// function greet(){
//     return <h2>Hello Tarun</h2>
// }
const greet=(props)=>{
    console.log(props)
    return (
        <div>
        <h2>Hello {props.name} a.k.a {props.heroname}</h2>
        {props.children}
        </div>
    ) 
}
export default greet;
