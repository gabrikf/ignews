import { render, screen } from "@testing-library/react";
import { ActiveLink } from ".";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/",
      };
    },
  };
});

describe("ActiveLink component", () => {
  it("renders correctly", () => {
    render(
      <ActiveLink href="/" isActive="active">
        <a>Home</a>
      </ActiveLink>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
  it("adds active class if the href is the same as current path", () => {
    render(
      <ActiveLink href="/" isActive="active">
        <a>Home</a>
      </ActiveLink>
    );
    expect(screen.getByText("Home")).toHaveClass("active");
  });
});
