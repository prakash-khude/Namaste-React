import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        
    }

    render(){
        return (
            <div>
                <h1>About</h1>
                <h2>This is a new series</h2>
                <UserClass name={"Prakash from class"} location={"Canada (class)"} contact={"prakash.b.khude@gmail.com"}/>
            </div>
        );
    }

}

export default About;