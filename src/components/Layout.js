import { Container, Table, } from "@mui/material";
import styled from "styled-components";
import Header from "./Header";
import TableDelivery from "./TableDelivery";

const Layout = () => {
  return (
    <ContainerLayout>
      <Header />
      <TableDelivery />
    </ContainerLayout>
  );
}

const ContainerLayout = styled.div`
margin:10rem auto;
width:60%;
border:thin solid grey;

`



export default Layout