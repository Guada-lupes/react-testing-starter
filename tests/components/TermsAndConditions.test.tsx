import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe('TermsAndCondicions', () => {
    it('Debe renderizar con texto correcto y estado inicial', () => {
        render(<TermsAndConditions/>)
        //comprobamos que el componente se renderiza a través de tomar su h1
        const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Terms & Conditions')
//checkeamos que el checkbox existe y que no está checkeado
    const checkBox = screen.getByRole('checkbox');
    expect(checkBox).toBeInTheDocument();
    expect(checkBox).not.toBeChecked();
//testeamos que el boton existe y que esta deshabilitado
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    })
    it('Debería habilitar el botón cuando el checkbox esta checkaeado', async() => {
        //primero renderizamos
        render(<TermsAndConditions/>);
        //nos traemos el checkbox
        const checkbox = screen.getByRole('checkbox')
        //userEvent devuelve un objeto con todas las acciones opisiblesque pueda realizar un usuario, .setup nos permite simularlas
        const user = userEvent.setup();
        //usamos el metodo click y dentro la variable que identifica el checkbox para ejecutar el evento de usuario. Este evento es una promesa, por ello tasnformamos la funcoin en asyc await
        await user.click(checkbox);

        //Luego, lo que esperamos una vez se haya producido el evento es lo que sigue:
        expect(screen.getByRole('button')).toBeEnabled();
    })
})