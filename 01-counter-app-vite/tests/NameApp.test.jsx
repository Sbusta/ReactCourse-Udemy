import { render, screen } from "@testing-library/react";
import { NameApp } from "../src/NameApp"


describe('Pruebas de NameApp', () => { 
    const title = 'Buen Título'
    const subtitle = 2516

    test('debe de ser igual al snapshot', () => { 
        const {container} = render(<NameApp title={title}/>);

        expect(container).toMatchSnapshot();

     })
     test('titulo debe de ser igual "Buen Título"', () => { 
        render(<NameApp title={title}/>);

        expect(screen.getByText(title)).toBeTruthy();
        
     })
     test('titulo en un h1', () => { 

        render(<NameApp title={title}/>);

        expect(screen.getByRole('heading',{level:3}).innerHTML).toContain(title);
     })

     test('subtitulo pasado por la sp props', () => { 

        render(<NameApp 
                    title={title}
                    subtitle={subtitle}

                />);

        expect(screen.getAllByText(subtitle).length).toBe(1);
     })
 })