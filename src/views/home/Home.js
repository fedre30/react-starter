import React from "react";
import styled from 'styled-components';
import Colors from "../../styles/Colors";
import Footer from '../../components/footer/Footer';


const HomeContainer = styled.div`
width: 100%;
height: 100vh;
background-color: ${Colors.background};
position: relative;
overflow: hidden;

.Home-title {
   font-size: 3rem;
   color: ${Colors.text};
   text-align: center;
   margin: 2rem 0;
   font-weight: 900;
}

a {
color: black;
text-decoration: none;
cursor: pointer;
}

`

const Home = () => (
    <HomeContainer>
      <h1 className="Home-title">Hi, welcome to react-starter</h1>
      <Footer/>
    </HomeContainer>
  )
;


export default Home;
