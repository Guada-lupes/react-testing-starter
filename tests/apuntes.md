Mockear funciones.

vi es un objeto que con su metodo de vitest fn() nos permite crear un mock de una funcion tal que asi:
vi.fn() en jest: jest.fn()

guardamos la funcion en una const greet= vi.fn();
en principio esta funcion, no hace nada, para ello debemos utilizar diferentes metodo

greet.mockReturnValue("hello") para devolver un valor
retornar una promesa con greet.mockResolvedValue('hello') luego debemos hacer greet().then(result=> conocle.log(result)) con lo que sea que devuelva la promesa
añadir logica a la funcion greet.mockImplementation(name=> 'hello' + name) lueo llamamos greet(`mosh`)

Assertions para los mock
expect(greet).toHaveBeenCall()  / .toHaveBeenCallWith(argumento)  // to HaveBeenCallOnce()  

Mockear módulos
Si queremos testear una funcion que en su interior alberga otra función alojada en un archivo js diferente vamos a necesitar mockear el archivo modular de la siguiente manera:
vi.mock('../src/libs/currency) vitests va a mockear todas las funciones que se exporten en dicho archivo.

Ahora la función esta mockeada, pero no hace nada, hay que programar lo que queramos que haga. Para ello:
vi.mocked(getExchangeRate).mockReturnValue(1) en este caso le diremos que devuelva un valor.

Tener presente que la función no existe, si queremos que devuelva null hay que especificarlo también.

Luego, cuando testemos la función principal, no es necesario llamar a la mockeada, la ejecuta automático.

IMPORTANTE! guardar resultados en constantes para verificar expect(result).toMatch(/cost/i) en este caso verificamos que el texto del return coincida con // llamar a las funciones con sus props simulandolas

COSAS A COMPROBAR EN LAS FUNCIONES DENTRO DE OTRAS
-Que son llamadas
-Que son llamadas con los argumentos dados

Assertions para comparar objeto
.toBeEqual