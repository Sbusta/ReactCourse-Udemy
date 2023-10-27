import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('pruebas 05-funciones', () => { 
    test('getuser retornar obj', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(testUser).toEqual(user);

     });
     test('getUsuarioActivo', () => { 
        
        const name = 'Sebastian';

        const user = getUsuarioActivo(name);

        expect(user).toEqual({
            uid: 'ABC567',
            username: name
        }
        );

      })
 })