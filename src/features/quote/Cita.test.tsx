import {render,screen} from "../../test-utils";
import Cita from "./Cita";
import { fireEvent, getByAltText, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
describe("Test en <Cita/>", ()=>{
    test("Debe renderisarse el párrafo 'No se encontro ninguna cita'", ()=>{
        render(<Cita/>)
        
        expect(screen.getByText('No se encontro ninguna cita')).toBeInTheDocument();
    })

    test('Debe mostrar en el imput el placeholder "Ingresa el nombre del autor"', ()=>{
        render(<Cita/>)

        expect(screen.getByPlaceholderText('Ingresa el nombre del autor')).toBeInTheDocument();
    })

    

    test('Deberia mostrar el mensaje de CARGANDO', async()=>{
        render(<Cita/>)
        const buttonAleatorio = screen.getByText("Obtener cita aleatoria")

        userEvent.click(buttonAleatorio)

      

        expect(await screen.findByText('CARGANDO...')).toBeInTheDocument();
    })

    test('Mostrar la cita del personaje "Marge Simpson"', async()=>{
        render(<Cita/>)
        const imputCita = screen.getByPlaceholderText('Ingresa el nombre del autor');
        const buttonQuote = screen.getByTestId("quote-button")

        userEvent.type(imputCita, "Marge");
        userEvent.click(buttonQuote);
        

        await waitFor(() => expect(screen.queryByText("Marge Simpson")))
    })

    test('Al ingresar números en el imput mostrar mensaje de alerta "Por favor ingrese un nombre válido"', async()=>{
        render(<Cita/>);
        const imputCita = screen.getByPlaceholderText('Ingresa el nombre del autor');
        const buttonQuote = screen.getByTestId("quote-button")

        userEvent.type(imputCita, "123");
        userEvent.click(buttonQuote);
        

        expect(await screen.findByText('Por favor ingrese un nombre válido')).toBeInTheDocument();
    })


    // test('Se debe poder visualizar una cita', async() => {
    //     render(<Cita/>);

    //     let cita = "Eat my shorts"
    //     const imputCita =screen.getByPlaceholderText("Ingresa el nombre del autor");
    //     await userEvent.type(imputCita, "Bart Simpson");
    //     const button = screen.getByText(/Obtener cita/i);
    //     await userEvent.click(button)

    //     // eslint-disable-next-line testing-library/no-debugging-utils
    //     screen.debug()
    //     expect(await screen.findByText(cita)).toBeInTheDocument()
    // })

    test("Debe limpiar lo que esta en el imput", async()=>{
        render(<Cita/>);

        const imputCita = screen.getByPlaceholderText('Ingresa el nombre del autor');
        await userEvent.type(imputCita,"Homer Simpson");
        expect(imputCita as HTMLInputElement).toHaveValue("Homer Simpson");

        const button = screen.getByText("Borrar");
        await userEvent.click(button);
        expect(imputCita as HTMLInputElement).toHaveValue("");

    })





})