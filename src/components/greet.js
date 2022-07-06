import React from 'react';
// function greet(){
//     return <h2>Hello Tarun</h2>
// }
const greet=(props)=>{
    console.log(props)
    return <h2>Hello {props.name}</h2>
}
export default greet;
