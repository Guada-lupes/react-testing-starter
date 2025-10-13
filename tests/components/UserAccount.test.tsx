import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

const userExample: User = { id: 1, name: "Guada", isAdmin: true };
const userExample2: User = { id: 1, name: "Guada", isAdmin: false };
describe("useAccount", () => {
  it("Debería renderizar el name cuando la props es pasada", () => {
    render(<UserAccount user={userExample} />);
    expect(screen.getByText(userExample.name)).toHaveTextContent(/guada/i);
  });
  it("Debería renderizar button cuando admin es true", () => {
    render(<UserAccount user={userExample} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i)
  });
    it("Debería no renderizar cunado admin es false", () => {
    render(<UserAccount user={userExample2} />);
    //no podemos utilizar getByRole porque dará fallo cuando el boton no se renderice
    const button = screen.queryByRole('button');
    expect(button).not.toBeInTheDocument()
  });
});
