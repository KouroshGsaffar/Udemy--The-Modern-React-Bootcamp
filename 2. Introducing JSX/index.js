function getMood() {
	const moods = [ 'Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid' ];
	return moods[Math.floor(Math.random() * moods.length)];
}
class JSXDemo extends React.Component{
    render(){
        return(
            <div>
                {/* <h1>My Image!</h1>
                <img src="https://images.unsplash.com/photo-1529978755210-7f13333beb13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" /> */}
                <h1>My Current Mood is: {getMood()}</h1>
            </div>
        );
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));