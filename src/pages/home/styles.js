import styled from "styled-components";

export const Container = styled.section`
    max-width: 960px;
    margin: 20px auto;
    box-shadow: 0 0 0.25em #6c757d;
    padding: 20px;
`

export const Table = styled.table`
    width: 100%;
    th{
        background-color: #060b26;
        color: white;
        padding: 10px;
    }
    td{
        background-color: #f6f6f6;
        color: #3e3e3e;
        padding: 8px;
        text-align: center;
        
    }
`
export const ButtonPrimary = styled.button`
    background-color: #fff;
    color: #0d6efd;
    padding: 5px 8px;
    border: 1px solid #0d6efd;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
    :hover{
        background-color: #0d6efd;
        color: white;
    }
`
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