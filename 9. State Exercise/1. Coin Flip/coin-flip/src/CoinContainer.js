import React, { Component } from 'react'
import  {choice} from './helpers'
import Coin from './Coin'

class CoinContainer extends Component{
    static defaultProps = {
        coins:[
            {side:'heads', imgSrc:"https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg"}, 
            {side:'tails', imgSrc:"http://www.pcgscoinfacts.com/UserImages/71009269r.jpg"} 
        ]
    };
    constructor(props){
        super(props);
        this.state={
            nFlips:0,
            nHeads:0,
            nTails:0,
            curCoin:null
        }
        this.handleClick=this.handleClick.bind(this);
    }

    flipCoin(){
        const newCoin=choice(this.props.coins);
        this.setState(st=>{
            return{
                curCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side==='heads' ? 1 : 0),
                nTails: st.nTails + (newCoin.side==='tails' ? 1 : 0)
            }
        })
    }
    handleClick(){
        this.flipCoin();
    }
    render(){
        return(
            <div className='CoinContariner'>
                <h2>Let's Flip a Coin!</h2>
                {this.state.curCoin && <Coin info={this.state.curCoin}/>}
                <button onClick={this.handleClick}>Flip Me!</button>
                <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails.</p>
            </div>
        )
    }
}


export default CoinContainer;