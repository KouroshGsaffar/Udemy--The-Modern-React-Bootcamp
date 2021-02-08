function getNum(){
    return Math.floor(Math.random()*10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num =  getNum()
        let msg;
        if (num ===7){
            msg=
            <div>
                <h2>CONGRATS YOU WIN!</h2>
                <img src='https://media4.giphy.com/media/Wwe6DNWWOvfBbr9Gbc/source.gif' />
            </div>
        }else{
            msg='SORRY YOU LOSE!'
        }
        return(
            <div>
                <h1>Your number is {num} </h1>
                {msg}
            </div>
        )
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));