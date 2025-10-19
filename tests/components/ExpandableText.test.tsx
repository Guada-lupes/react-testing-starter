import { render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("ExpandableText", () => {
  it("El articulo se renderiza y contiene un texto breve", () => {
    //lo primero que haré sera traer el article y verificar que se renderiza con su texto.
    render(<ExpandableText text="Hola" />);
    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
    expect(article).toHaveTextContent(/hola/i);
  });
  //comprubeo que el boton no se renderiza en caso de texto pequeño, para ello utilizo queryByRole para que no me fallo
  it("No debería renderizar el boton con texto pequeño", () => {
    render(<ExpandableText text="Hola" />);
    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
  //compruebo que el boton se renderiza en caso de texto grande y que su texto cambia con la interaccion del user
  it("Debería renderizar boton con texto grande y cambiar texto con evento de usuaria", async() => {
    render(
      <ExpandableText text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium alias ipsum laudantium, perferendis illum odit quae consectetur molestiae aliquam quisquam velit corporis reprehenderit mollitia temporibus accusamus fugiat maxime libero consequuntur voluptatem! Obcaecati perspiciatis fuga voluptatibus nesciunt est dicta quae libero nemo aliquid ut, vitae quasi praesentium voluptates accusantium odit sint! Nam nesciunt praesentium molestiae rerum in ab debitis, fugiat est reiciendis dolor sequi quidem unde magni libero atque totam ullam, dolores culpa non vel neque velit inventore? Sapiente assumenda eos iste hic iusto vitae facere eaque quia maxime eveniet. Dolor ipsum a cupiditate, soluta autem temporibus est in placeat quisquam!" />
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/more/i);

    const user = userEvent.setup();
    await user.click(button)

    expect(button).toHaveTextContent(/less/i)
  });
  //vamos a comporbar que el texto aparece cortado cunado es mas de 255 caracteres.
  it('Deberia cortar el texto', () => {
    const text = "a".repeat(260)
    render(<ExpandableText text={text} />)
    const sliptext = text.substring(0, 255) + "..."
    expect(screen.getByText(sliptext)).toBeInTheDocument()
  })
});
