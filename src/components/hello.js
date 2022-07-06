import React from "react";
const Hello=()=>{
    // return(
    //     <div>
    //         <h2>Hello Class</h2>
    //     </div>
    // )
    return React.createElement('div',{id:'hello',className:'dummy'},React.createElement('h1',null,'Hello vishvas'))
}
export default Hello;