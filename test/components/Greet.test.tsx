import { it, expect, describe } from 'vitest'
import {render, screen} from '@testing-library/react'
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
        expect(heading).toBeInTheDocument()
    })
})