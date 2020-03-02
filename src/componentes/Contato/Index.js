import React, { useRef } from 'react';
import './Index.css';
import {Row} from 'react-bootstrap';
import * as Yup from 'yup';
import Input from '../Form/Input';
import { Form } from '@unform/web';


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
        <div className="contato mt-5">
            <Row>
                <img src="./img/contato1.png" />
                <div id="sla">
                <h1 className="titulo">Tire seu site do papel.<span className="titulo2">Entre em contato com a gente.</span></h1>
                <p>Retornamos o mais rápido possível.</p>
                </div>
            </Row>
            
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Input id="input1" name="name" placeholder="Nome" />
                <Input id="input2" type="email" name="email" placeholder="E-mail" />
                <Input id="input3" type="tel" name="fone" placeholder="Telefone" />
                <textarea id="mensagem" name="mensagem" rows="10" placeholder="Mensagem" />
                <button type="submit">Enviar Mensagem</button>
            </Form>
            <img className="img2" src="./img/contato2.png" />
        </div>

    );

}

export default Contato;