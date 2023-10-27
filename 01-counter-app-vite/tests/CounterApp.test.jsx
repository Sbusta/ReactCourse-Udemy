import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp"

describe('pruebas en CounterApp', () => {
    test('debe de ser igual al snapshot', () => { 

        const {container} = render(<CounterApp value={20}/>);
        expect(container).toMatchSnapshot();

     })
     test('debe de ser igual al snapshot', () => { 
        render(<CounterApp value={100} />);
        expect(screen.getByText(100)).toBeTruthy();

     })

     test('debe de incrementar +1 ', () => { 
        render(<CounterApp value={10} />);
        fireEvent.click(screen.getByText('+1') )
        expect( screen.getByText('11')).toBeTruthy();
        
      })

      test('debe de decrementar -1 ', () => { 
        render(<CounterApp value={10} />);
        fireEvent.click(screen.getByText('-1') )
        expect( screen.getByText('9')).toBeTruthy();
        
      })
      test('debe de reset al valor inicial ', () => { 
        render(<CounterApp value={10} />);
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('Reset'))
        
        //fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));

        expect( screen.getByText(10)).toBeTruthy();
        
      })
})