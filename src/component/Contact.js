import { Suspense, useEffect } from "react";

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

    const fetchData = () => {
        return new Promise((resolve) => {
            setTimeout(()=>{
                resolve("data fetched");
            }, 2000);
        });
    };

    function DataFetchingComponent(){
        const data=fetchData();

        return (
            <div>
                <Suspense fallback={<h1>Loading......</h1>}>
                    <AsyncDataComponent data={data}/>
                </Suspense>
            </div>
        );
    }

    function AsyncDataComponent({data}){
        return <div>{data}</div>
    }

    return (
        <div>
            <h1>Contact us</h1>
            <h2>This is contact us page.</h2>
            <h3>{DataFetchingComponent()}</h3>
        </div>
    );
};
export default Contact;