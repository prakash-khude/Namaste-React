import { useEffect } from "react";

const Contact = () => {

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("start interval")
        },1000)

        return ()=>{
            console.log("Unmount");
            clearInterval(timer);
            console.log("cleared interval")
        }
    },[]);

    return (
        <div>
            <h1>Contact us</h1>
            <h2>This is contact us page.</h2>
        </div>
    );
};
export default Contact;