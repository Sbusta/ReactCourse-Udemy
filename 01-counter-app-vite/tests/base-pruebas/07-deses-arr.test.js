import { number, string } from "prop-types";
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

retornaArreglo
describe('pruebas en 07-deses-arr', () => {
    test('retorna un str y un num', () => { 

        const [letras, numeros] = retornaArreglo();
        
        //JEST
        expect (letras).toEqual(expect.any(String))
        expect (numeros).toEqual(expect.any(Number))

        //JEST+JS
        expect( typeof letras).toBe('string')
        expect( typeof numeros).toBe('number')

     })
 })