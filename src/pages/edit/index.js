import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from "../../components/FOOTER";
import Menu from "../../components/HEADER";
import { AlertSuccess, AlertDanger, Container, Form, ConteudoForm, Label, Input, ButtonSuccess } from './styles'

export const Editar = (props) => {

    const { id } = useParams();
    const [titulo, setTitulo] = useState();
    const [descricao, setDescricao] = useState();
    const [Status, setStatus] = useState({
        type: '',
        error: ''
    });

    const editProduto = async e => {
        e.preventDefault();
        await fetch("http://localhost/crud/editar.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, titulo, descricao })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.erro) {
                    setStatus({
                        type: 'erro',
                        mensagem: responseJson.mensagem
                    });
                } else {
                    setStatus({
                        type: 'success',
                        mensagem: responseJson.mensagem
                    });
                }
            }).catch(() => {
                setStatus({
                    type: 'error',
                    mensagem: "Produto não editado com sucesso, tente novamente."
                });
            });
    }

    useEffect(() => {
        const getProduto = async () => {
            await fetch("http://localhost/crud/visualizar.php?id=" + id)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    setTitulo(responseJson.produto.titulo);
                    setDescricao(responseJson.produto.descricao);
                });
        }
        getProduto();
    }, [id]);
    return (
        <>
            <Menu />
            <Container>
                <ConteudoForm>
                    {Status.type === 'erro' ? <AlertDanger>{Status.mensagem}</AlertDanger> : ""}
                    {Status.type === 'success' ? <AlertSuccess>{Status.mensagem}</AlertSuccess> : ""}

                    <Form onSubmit={editProduto}>
                        <Label>Título: </Label>
                        <Input type="text" name="titulo" value={titulo} placeholder='Título do produto'
                            onChange={e => setTitulo(e.target.value)}
                        /> <br />
                        <Label>Descrição: </Label>
                        <Input type="text" name="descricao" value={descricao} placeholder='Descrição do produto'
                            onChange={e => setDescricao(e.target.value)}
                        /> <br />

                        <ButtonSuccess type="submit">Editar</ButtonSuccess>
                    </Form>
                </ConteudoForm>
            </Container>
            <Footer />
        </>
    );
}