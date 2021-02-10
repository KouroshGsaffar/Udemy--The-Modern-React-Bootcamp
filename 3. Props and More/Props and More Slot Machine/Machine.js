class Machine extends React.Component{
    render(){
        let msg;
        const {s1,s2,s3}=this.props;
        if((s1===s2) && (s1===s3)){
            msg="You win!"
        }else{
            msg="You lose!"
        }
        return(
            <div>
                <p>{s1} {s2} {s3}</p>
                {msg}
            </div>
        )
    }
}