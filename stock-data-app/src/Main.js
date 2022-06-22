import React, {Component, useTransition} from 'react';

class Main extends Component {

    render(){ 
        
        
        return(<div>
            <h1>Stock Data For Today</h1>
            <ul>
              
                <li> Amazon:{this.props.AmazonValue} </li>
                <li> Twitter:{this.props.TwitterValue} </li>
                <li> Microsoft:{this.props.Msft}</li>
            </ul>
            <button onClick={this.props.increase}>Increase Stock Values</button>
            <button onClick={this.props.decrease}>Decrease Stock Values</button>
            <button onClick={this.props.jumble}>Jumble</button>
            <ul>
                {console.log("test: ${this.props.value}")}
                { this.props.values.map((items)=>

                    <li>{items.company} : {items.value}</li>)
                }

            </ul>
    </div>)}
}

export default Main; 
