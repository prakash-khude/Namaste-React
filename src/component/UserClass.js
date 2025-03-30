import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
constructor(props){
    super(props);    
    this.state = {
        userInfo: {
            login:'Dummy name',
            id: 'Dummy Location',
            avatar_url: 'dummy contact'
        }
    }    
}

async componentDidMount(){
    const data = await fetch("https://api.github.com/users/khude");
    const json = await data.json();
    this.setState(
        {
            userInfo:json
        }
    )    
}

render(){
        const {login, id, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">    
                <img src={avatar_url}/>            
                <h2>Name: {login}</h2>
                <h3>Location: {id}</h3>
                <h4>Contact: {avatar_url}</h4>
                
                <button onClick={()=>{
                    this.setState({count:this.state.count+1})
                }}>Add</button>
                <div>
                    LoggedIn User:
                    <UserContext.Consumer>
                        {({loggedInUser})=> <h1 className="text-lg font-bold">{loggedInUser}</h1> }
                    </UserContext.Consumer>
                </div>
            </div>
            );
    }
}

export default UserClass;