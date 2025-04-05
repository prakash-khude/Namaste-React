import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";


it ("should load header component with login button", () => {    
    render (
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>);

    const loginButton = screen.getByRole("button", {name:"Login"});

    expect(loginButton).toBeInTheDocument();
});

it ("should load Cart component with login button", () => {    
    render (
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>);

    const cartItem = screen.getByText("Cart (0 items)");

    expect(cartItem).toBeInTheDocument();
});


it ("should load header component with login button", () => {    
    render (
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>);

    const loginButton = screen.getByRole("button", {name:"Login"});

    expect(loginButton).toBeInTheDocument();
});

it ("should load Cart component with login button", () => {    
    render (
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>);

    const cartItem = screen.getByText(/Cart/);

    expect(cartItem).toBeInTheDocument();
});

it ("should change login button to logout on click", () => {    
    render (
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>);

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});


    expect(logoutButton).toBeInTheDocument();
});