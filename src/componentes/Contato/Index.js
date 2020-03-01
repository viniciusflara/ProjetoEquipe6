import React, { useRef } from 'react';
import './Index.css';
import { Label } from 'react-bootstrap';
import * as Yup from 'yup';
import Input from '../Form/Input';
import { Form } from '@unform/web';



const initialData = {
    email: 'example@gmail.com',
}

function Contato() {
    const formRef = useRef(null);


    async function handleSubmit(data, { reset }) {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('O nome é obrigatório!'),
                email: Yup.string().email('Digite um e-mail válido!').required('O e-mail é obrigatório!'),
            });

            await schema.validate(data, {
                abortEarly: false,
            })

            console.log(data);

            formRef.current.setErrors({});

            reset();
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessages = {};

                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message;
                })

                formRef.current.setErrors(errorMessages);
            }
        }
    }
    return (
        <>
            <div id="contato2" className="contato mt-5">
                <h1>Contato</h1>
            </div>
            <div id="contato" className="contato mt-5">
                <h1>Entrar em Contato</h1>
                <p>Entre em contato conosco para solicitar sua cotação, se tiver alguma dúvida ou para falar um oi.</p>
                <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
                    <Input name="name" label="Nome" />
                    <Input type="email" name="email" label="E-mail" />
                    <Input type="tel" name="fone" label="Telefone" />
                    <label for="mensagem">Mensagem</label>
                    <textarea id="mensagem" name="mensagem" rows="10" />

                    <button type="submit">Enviar Mensagem</button>
                </Form>
            </div>
        </>
    );

}

export default Contato;