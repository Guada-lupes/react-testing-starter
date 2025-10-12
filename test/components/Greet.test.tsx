
import {render, screen} from  '@testing-library/react'
import Greet from '../../src/components/Greet'

//comenzamos importando las funciones de vitest
describe('greet', () => {
    it('deberia renderizar Hello con el nombre cuando el name es dado', () => {
        //renderizamos componente primero, para lo cual importamos desde react library
        render(<Greet name='Guada'/>)
        //nos muestra el componente en dom virtual, de prueba
        screen.debug()
        //utilizmos las queries de React para traer los componentes del DOM y guardamos en un const. En este caso usamos getByRole y'heading' nos traerá cualquier titulo
        const heading = screen.getByRole('heading');
        //debemos importa jest para comenzar a utilizar sus custom matchers
        expect(heading).toBeInTheDocument();
        //utilizamos una expresión regular para el text. La i es para que no sea sensible a mayusculas
        expect(heading).toHaveTextContent(/guada/i)
    })
        it('deberia renderizar Button cuando name no es dado', () => {
        //renderizamos componente primero, para lo cual importamos desde react library
        render(<Greet/>)
        //utilizmos las queries de React para traer los componentes del DOM y guardamos en un const. En este caso usamos getByRole y'heading' nos traerá cualquier titulo
        const button = screen.getByRole('button');
        //debemos importa jest para comenzar a utilizar sus custom matchers
        expect(button).toBeInTheDocument();
        //utilizamos una expresión regular para el text. La i es para que no sea sensible a mayusculas
        expect(button).toHaveTextContent(/login/i)
    })
})