import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string ', () => { 
    
    test('getSaludo retorna "Hola Sebastian"', () => {

            const name = 'Sebastian';
            const message = getSaludo(name);

            expect(message).toBe(`Hola ${name}`)
        })

 })