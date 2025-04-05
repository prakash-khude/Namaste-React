import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("Contasct us page test cases", ()=>{
    test ("Should load Contact us component", ()=>{
        render(<Contact/>);
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    });
    
    test ("Should load button inside component", () => {
        render(<Contact/>);
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    });
    
    
    test ("Should load input inside component", () => {
        render(<Contact/>);
    
        const name = screen.getByPlaceholderText("name");
    
        expect(name).toBeInTheDocument();
    });
    
    
    test ("Should load two input boxes inside component", () => {
        render(<Contact/>);
    
        const textboxes = screen.getAllByRole("textbox");
    
        expect(textboxes.length).toBe(2);
    });
});

