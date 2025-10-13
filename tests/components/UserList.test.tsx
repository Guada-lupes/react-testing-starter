import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";
import { link } from "fs";

describe("UserList", () => {
  it("No renderiza user cuando el array esa vacio", () => {
    render(<UserList users={[]} />);
    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });
    it("Debería renderizar una lista de usuarios", () => {
        const users: User[] = [{id: 1, name: "Guada"}, {id: 2, name: "Tonio"}];

    render(<UserList users={users} />);

        //para cada usuario debemos localizar el link
        users.forEach(user => {
            const link = screen.getByRole('link', {name: user.name})

            //primero checkamos que link esta en el doc
            expect(link).toBeInTheDocument()
                    expect(link).toHaveAttribute("href", `/users/${user.id}`)
        });

  });
});
