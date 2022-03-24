import styled from 'styled-components';

export const Container = styled.section`
    max-width: 960px;
    margin: 20px auto;
    box-shadow: 0 0 0.25em #6c757d;
`;

export const AlertSuccess = styled.p`
    background-color: #d1e7dd;
    color: #0f5132;
    margin: 20px 0;
    border: 1px solid #badbcc;
    border-radius: 5px;
    padding: 7px;
`;

export const AlertDanger = styled.p`
    background-color: #f8d7da;
    color: #842029;
    margin: 20px 0;
    border: 1px solid #f5c2c9;
    border-radius: 5px;
    padding: 7px;
`;

export const ConteudoForm = styled.section`
    max-width: 960px;
    padding: 10px 30px 30px;
`

export const Form = styled.form`
    margin: 0px auto;
`
export const Label = styled.label`
    width: 100%;
    padding: 12px;
    margin-top: 6px;
    margin-bottom: 16px;
    font-size: 15px;
`;
export const Input = styled.input`
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
`;
export const ButtonSuccess = styled.button`
    background-color: #fff;
    color: #198754;
    padding: 8px 12px;
    border: 1px solid #198754;
    border-radius: 4px;
    cursor: pointer;
    :hover{
        background-color: #157347;
        color: white;
    }
`;