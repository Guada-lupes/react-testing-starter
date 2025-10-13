import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";

describe("UserList", () => {
  it("No renderiza user cuando el array esa vacio", () => {
    render(<UserList users={[]} />);
    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });
});
