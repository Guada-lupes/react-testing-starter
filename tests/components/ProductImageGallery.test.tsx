import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("El DOM debe esta vacio si el array lo está ", () => {
    const rendeObjetct = render(<ProductImageGallery imageUrls={[]} />);
    //render devuelve un objeto que contiene "options" y "result"
    // Dentro de result encontramos "container" que contiene el nodo del DOM, es decir los elementos html que se cargan
    expect(rendeObjetct.container).toBeEmptyDOMElement;
  });
  it("Renderizar un li por cada imagen", () => {
    const imgUrl = ["url1", "url2"];
    render(<ProductImageGallery imageUrls={imgUrl} />);
      //no podemos traer las img con getByRole poque en este caso no podemos usar name para especificar cada imagen
      //vamos a traer todas las imagenes
      const imagenes = screen.getAllByRole("img");
      console.log(imagenes);
      
      //comporbamos la longitud
      expect(imagenes).toHaveLength(2);
      //comprobamos que la url de cada imagen es la correcta. Para ello iteramos el array que creamos con falsas urls y extraemos la url y el indice. Cogemos el array de imagenes del DOM y segun su indice comprobamos que contiene la src del array incial.
      imgUrl.forEach((src, index) => {
        expect(imagenes[index]).toHaveAttribute("src", src);
      });

  });
});
