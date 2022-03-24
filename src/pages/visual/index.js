import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './styles';
import Footer from '../../components/FOOTER';
import Menu from '../../components/HEADER';

export const Visualizar = (props) => {

    const {id} = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        const getProduto = async() => {
            await fetch("http://localhost/crud/visualizar.php?id=" + id)
            .then((response) => response.json())
            .then((responseJson) => {
                /* console.log(responseJson); */
                setData(responseJson.produto);
            });
        }
        getProduto();
    },[id]);
    return (
        <>
            <Menu />
            <Container>
                <p>ID: {data.id}</p>
                <p>Titulo: {data.titulo}</p>
                <p>Descrição: {data.descricao}</p>
            </Container>
            <Footer/>
        </>
    )
}