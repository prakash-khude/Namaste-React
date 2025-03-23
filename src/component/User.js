import { useState } from "react";
const User = ({name}) => {

    const [count] = useState(0);

    return (
    <div className="user-card">
        <h1>Count: {count}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: Canad</h3>
        <h4>Contact: Prakash_khude@yahoo.com</h4>

    </div>
    );
}

export default User;