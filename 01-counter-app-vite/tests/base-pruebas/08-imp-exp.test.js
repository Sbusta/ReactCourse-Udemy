import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('pruebas en 08-imp-exp', () => { 
    test('getHeroeByID dene de retornar heroe por ID', () => { 
         const id = 1;
         const hero = getHeroeById(id);

         expect(hero).toEqual({id: 1, name: 'Batman', owner: 'DC'})
    }) 
    test('getHeroeByID dene de retornar undefined si no existe', () => { 
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
   })
   test('getHeroesByOwner retorna DC', () => { 
    
        const ownerlist = getHeroesByOwner('DC');
        expect(ownerlist.length).toBe(3)

        expect(ownerlist).toEqual(heroes.filter( (heroe) => heroe.owner === 'DC' ))

    })
    test('getHeroesByOwner retorna Marvel', () => { 
        const ownerlist = getHeroesByOwner('Marvel');
        expect(ownerlist.length).toBe(2)

        expect(ownerlist).toEqual(heroes.filter( (heroe) => heroe.owner === 'Marvel' ))

   })   
})