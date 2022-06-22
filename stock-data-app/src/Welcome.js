import { render } from "@testing-library/react";
import React, { Component } from "react";
import './App.css';
// class Welcome extends Component { 

//     render(){
//         return(<div> Welcome</div>);
//     }
    
// };

function Welcome(props){

    const date = new Date()
    const hour = date.getHours();
    let timeOfDay; 
    let classNameValue;
    let display = true;

    if (hour < 12){
        timeOfDay = 'morning';
        classNameValue= 'Morning';

    }else if(hour > 12  && hour < 17){
        timeOfDay = 'afternoon';
        classNameValue= 'Afternoon';
    }else{
        timeOfDay= 'night';
        classNameValue= 'Night'; 
    }
    return(<div>
        
        Welcome {props.firstname} {props.lastname}
        {display ? <p class={classNameValue}>Current Hour: {hour}, {timeOfDay}</p> : null}
    </div>
    )

}

export default Welcome;