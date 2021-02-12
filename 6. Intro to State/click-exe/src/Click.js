import React, { Component } from 'react'


class Click extends Component{
    constructor(props){
        super(props);
        this.state={num:1};
        this.genRandom=this.genRandom.bind(this)
    }
    genRandom=() => {
        let randomNum=Math.floor(Math.random()*10)+1
        this.setState({num:randomNum})
    }

    render(){
        return(
            <div>
                <h1>Number is: {this.state.num}</h1>
                {this.state.num ===7
                    ? <h2> You Win!</h2>
                    :<button onClick={this.genRandom}>Random Number</button>
                }
            </div>
        )
    }
}


export default Click;