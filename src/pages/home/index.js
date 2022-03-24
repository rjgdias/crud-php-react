import Footer from "../../components/FOOTER";
import Menu from "../../components/HEADER";
import './index.css'
import React, { useState, useEffect } from 'react';
import { AlertSuccess, AlertDanger,Table, Container, ButtonPrimary } from './styles'
import { Link } from "react-router-dom";


function App() {

  const [data, setData] = useState([]);

  const [Status, setStatus] = useState({
    type: '',
    error: ''
  });

  const getProdutos = async () => {
    fetch("http://localhost/crud/index.php")
      .then((response) => response.json())
      .then((responseJson) => (
        setData(responseJson.records)
      ));
  }
  const apagarProduto = async (idProduto) => {
    console.log(idProduto);
    await fetch("http://localhost/crud/apagar.php?id=" + idProduto)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.error) {
          setStatus({
            type: 'erro',
            mensagem: responseJson.mensagem
          })
        } else {
          setStatus({
            type: 'success',
            mensagem: responseJson.mensagem
          })
          getProdutos();
        }
      }).catch(() => {
        setStatus({
          type: 'erro',
          mensagem: 'Erro produto não apagado, tente novamente.'
        })
      })
  }

  useEffect(() => {
    getProdutos()
  }, [])

  return (
    <>
      <Menu />
      <Container>
        {Status.type === 'erro' ? <AlertDanger>{Status.mensagem}</AlertDanger> : ""}
        {Status.type === 'success' ? <AlertSuccess>{Status.mensagem}</AlertSuccess> : ""}
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Titulo</th>
              <th>Descrição</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(data).map(produto => (
              <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.titulo}</td>
                <td>{produto.descricao}</td>
                <td>
                  <Link to={"/visualizar/" + produto.id}><ButtonPrimary>Visualizar</ButtonPrimary></Link>{" "}
                  <Link to={"/editar/" + produto.id}><ButtonPrimary>Editar</ButtonPrimary></Link>{" "}
                  <ButtonPrimary onClick={() => apagarProduto(produto.id)}>Apagar</ButtonPrimary>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <Footer />
    </>
  );
}

export default App;
