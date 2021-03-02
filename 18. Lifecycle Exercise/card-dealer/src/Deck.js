import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'
import './Deck.css'



const API_BASE_URL="https://deckofcardsapi.com/api/deck"

export default class Deck extends Component {
    constructor(props){
        super(props);
        this.state={deck:null, drawn:[]}
        this.getCard=this.getCard.bind(this);
    }
    async componentDidMount(){
        let deck= await axios.get(`${API_BASE_URL}/new/shuffle/`)
        this.setState({deck:deck.data});
    }

    async getCard(){
        try{
            let cardRes=await axios.get(`${API_BASE_URL}/${this.state.deck.deck_id}/draw/`);
            if(!cardRes.data.success){
                throw new Error('No card remaining!')
            }
            let card = cardRes.data.cards[0];
            this.setState(st=> ({
                drawn: [
                    ...st.drawn,
                    {
                        id:card.code,
                        image: card.image,
                        name:`${card.value} of ${card.suit}`
                    }
                ]
            }));
        } catch(err){
            alert(err)
        }
    }
    render() {
        const cards=this.state.drawn.map(c=>(
            <Card image={c.image} name={c.name} key={c.id}/>
        ))
        return (
            <div>
                <h1 className='Deck-title'>♦ Card Dealer ♦</h1>
                <h2 className='Deck-title subtitle'>♦ A little demo made by React ♦</h2>
                <button className='Deck-btn' onClick={this.getCard}>Get Card!</button>
                <div className='Deck-cardarea'>{cards}</div>
            </div>
        )
    }
}
