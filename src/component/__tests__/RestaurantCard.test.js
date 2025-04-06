import { render, screen } from "@testing-library/react"
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it ("Should render restaurant card component with props data", ()=>{
    render(
        <RestaurantCard resData={MOCK_DATA}/>
    );

    const name = screen.getByText("test");

    expect(name).toBeInTheDocument();
})

it("Should lod higher order component", () => {
    const PromotedLabel = withPromotedLabel(RestaurantCard);

    render(<PromotedLabel resData={MOCK_DATA}/>)

    const name = screen.getByText("Promoted");
    expect(name).toBeInTheDocument();
})
