import { render, screen } from "@testing-library/react";

import { ButtonV1 } from "../button";

describe("ButtonV1", () => {
  it("default", () => {
    render(<ButtonV1>Call to action copy</ButtonV1>);

    const button = screen.getByText("Call to action copy");
    expect(button).toMatchSnapshot();
  });
});
