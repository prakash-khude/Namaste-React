import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockRestaurantList.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

/*beforeAll(()=>{
    console.log("Before All");
})

beforeEach(()=>{
    console.log("Before Each");
})

afterAll(()=>{
    console.log("After All");

})

afterEach(()=>{
    console.log("After Each");
})
*/
it("Should render the body Component with search button", async() => {
    
    await act(async()=>render(<BrowserRouter><Body /></BrowserRouter>));

    const searchBtn = screen.getByRole("button",{name:"Search"});

    const inputBox = screen.getByTestId("searchinput");


    const cardBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardBeforeSearch.length).toBe(2);

    fireEvent.change(inputBox,{target:{value:"test"}});

    fireEvent.click(searchBtn);

    const count = screen.getAllByTestId("resCard");

    expect(count.length).toBe(2);
})

it("Should render top rated resturant when Top Restaurant is clicked" ,async ()=>{
    await act(async()=> render(<BrowserRouter><Body/></BrowserRouter>));

    const cardBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardBeforeSearch.length).toBe(2);

    const topRatedButton = screen.getByRole("button",{name:"Top-Ratig button"});

    fireEvent.click(topRatedButton);

    const cardAfterFilter = screen.getAllByTestId("resCard");

    expect(cardAfterFilter.length).toBe(2);
})