import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import UserContext from "./utils/UserContext";

const Grocery = lazy(()=>import("./component/Grocery"));

const AppLayout = () => {

    const[userName, setUserName] = useState();

    useEffect(()=>{
        const data = {
            name: "Prakash Khude"
        }

        setUserName(data.name);
    },[])

    return (
        <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
        <div className ="app">
            <Header/>
            {/** If path is / then it should be boy component
             * if path is /about, then it should be about component
             * SImilar logic
             */}
            <Outlet/>
        </div>
        </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurants/:restaurantId",
                element: <RestaurantMenu/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading......</h1>}><Grocery/></Suspense>
            }
        ],
        errorElement: <Error/>
    }    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);