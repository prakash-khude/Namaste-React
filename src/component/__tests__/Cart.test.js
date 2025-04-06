import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCk_DATA from "../mocks/mockResMenu.json";
import appStore from "../../utils/appStore"
import {Provider} from "react-redux";
import Header from "../Header";
import "@testing-library/jest-dom";
import Cart from "../Cart";
import { hasUncaughtExceptionCaptureCallback } from "process";
import { BrowserRouter } from "react-router-dom";
global.fetch= jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCk_DATA);
        }
    })
});

it ("Should update CART in header and CART page", async ()=>{
    await act(async()=> render(<BrowserRouter><Provider store={appStore}><Header/><RestaurantMenu/><Cart/></Provider></BrowserRouter>));

    const accordionHeader = screen.getByText("Dosas (10)");

    fireEvent.click(accordionHeader);   

    const itemsLength = screen.getAllByTestId("fooditems");

    expect(itemsLength.length).toBe(10);

    const addBtn = screen.getAllByRole("button", {name: "Add +"});

    fireEvent.click(addBtn[0]);

    const cart = screen.getByText("Cart (1 items)");

    expect (cart).toBeInTheDocument();

    fireEvent.click(addBtn[1]);

    const cart1 = screen.getByText("Cart (2 items)");

    expect (cart1).toBeInTheDocument();

    const checkingCartItems = screen.getAllByTestId("fooditems");

    expect(checkingCartItems.length).toBe(12);

    const clearCart = screen.getByRole("button", {name: "Clear"});

    fireEvent.click(clearCart);

    const checkingCartItems1 = screen.getAllByTestId("fooditems");

    expect(checkingCartItems1.length).toBe(10);
})