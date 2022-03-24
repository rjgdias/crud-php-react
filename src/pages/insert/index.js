import React, { useState } from 'react';
import Footer from '../../components/FOOTER';
import Menu from '../../components/HEADER';
import { AlertSuccess, AlertDanger, Container, Form, ConteudoForm, Label, Input, ButtonSuccess } from './styles'

function Insert() {

    const [produto, setProduto] = useState({
        titulo: '',
        descricao: ''
    });

    const [Status, setStatus] = useState({
        type: '',
        error: ''
    });

    const valorInput = e => setProduto({ ...produto, [e.target.name]: e.target.value });

    const cadProduto = async e => {
        e.preventDefault()
        await fetch("http://localhost/crud/cadastrar.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ produto })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                /* console.log(responseJson) */
                if (responseJson.erro) {
                    setStatus({
                        type: 'erro',
                        mensagem: responseJson.mensagem
                    })
                }
                else {
                    setStatus({
                        type: 'success',
                        mensagem: responseJson.mensagem
                    })
                }
            }).catch(() => {
                setStatus({
                    type: 'erro',
                    mensagem: 'Produto não cadastrado, tente mais tarde.'
                })
            })
    }
    return (
        <>
            <Menu />
            <Container>
                <ConteudoForm>
                    {Status.type === 'erro' ? <AlertDanger>{Status.mensagem}</AlertDanger> : ""}
                    {Status.type === 'success' ? <AlertSuccess>{Status.mensagem}</AlertSuccess> : ""}

                    <Form onSubmit={cadProduto}>
                        <Label>Título: </Label>
                        <Input type="text" name="titulo" placeholder='Título do produto' onChange={valorInput} /> <br />
                        <Label>Descrição: </Label>
                        <Input type="text" name="descricao" placeholder='Descrição do produto' onChange={valorInput} /> <br />

                        <ButtonSuccess type="submit">Cadastrar</ButtonSuccess>
                    </Form>
                </ConteudoForm>
            </Container>
            <Footer />
        </>
    );
}

export default Insert;