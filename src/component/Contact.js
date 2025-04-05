import { Suspense, useEffect } from "react";

const Contact = () => {

    /*useEffect(()=>{
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
*/
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact us</h1>
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="name"/>
                
                <input type="text" className="border border-black p-2 m-2" placeholder="message"/>

                <button className="border border-black p-2 m-2 bg-gray-50 rounded-lg">Submit</button>
            </form>
                   

        </div>
    );
};
export default Contact;