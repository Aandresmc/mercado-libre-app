import React from "react";
import { render } from "@testing-library/react";
import { Error } from "./error"

describe("Error Component", function () {
    it("should have error message", function () {

        const { getByText } = render(<Error error={'error message'} />)
        expect(getByText('error message')).toBeInTheDocument()

    });
});