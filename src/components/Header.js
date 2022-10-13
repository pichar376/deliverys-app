import styled from "styled-components";
import FullWidthTextField from "./FullWidthTextField";

const Header = () => {
  return (

    <MyStyleHeader>
      <section className="dronocargo">
        <p>Dronocargo</p>
        <p>Regina Zepeda<span>icon</span></p>

      </section>
      <nav>
        <h1 className="title">Delivery <span className="history">History</span></h1>
        <section className="search">
          <FullWidthTextField />
        </section>
      </nav>
    </MyStyleHeader >




  );
}


const MyStyleHeader = styled.div`

display:flex;
flex-flow:column wrap;
width:100%;
border:thin solid red;
height:10rem;

&>*{
  display:flex;
}
.dronocargo{
  position:relative;
  border:thin solid green;
}
.dronocargo p:first-child{
  position:absolute;
  left:1rem;

  top:1rem;
}
.dronocargo p:last-child{
 position:absolute;
 right:1rem;
 top:1rem;
}
nav{
  position:relative;
  margin-top:3rem;
  border:thin solid blue;
}
.title {
  position:absolute;
  left:1rem;
  top:1rem;
}
.history{
  color:#00000060;
}
.search{
 position:absolute;
 right:1rem;
 top:1rem;
}
`

export default Header;


