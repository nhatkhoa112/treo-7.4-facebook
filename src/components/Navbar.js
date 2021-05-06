import React from "react";
import styled from 'styled-components';
import {Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import {useSelector} from 'react-redux';



export default function Navbarr() {
  const {auth} = useSelector(state => state)
  const {isAuthenticated} = auth;

  return (
    <div>
      <NavbarContainer bg="light" expand="lg">
        <NavbarLeft>
          <Nav.Link className="d-flex align-items-center" style={{padding: "0", marginRight: "5px"}} as={Link} to="/" >
            <img src={logo} alt="coderbook" width="40px" />
          </Nav.Link>
          <NavbarForm>
            <input className="form-comtrol" type="text"  placeholder="Search Facebook" />
            <i class="fas fa-search"></i> 
          </NavbarForm>
        </NavbarLeft>
        <NavbarCenter>
        {isAuthenticated ? (
          <NavbarCenterContainer>
            <NavbarCenterIcon >
              <span>Home</span>
              <i class="fas fa-home"></i>
            </NavbarCenterIcon>
            <NavbarCenterIcon >
              <span>Watch</span>
              <i class="fas fa-tv"></i>
            </NavbarCenterIcon>
            <NavbarCenterIcon >
              <span>Marketplace</span>
              <i class="fas fa-store"></i>
            </NavbarCenterIcon>
            <NavbarCenterIcon > 
              <span>Groups</span>
              <i class="fas fa-users"></i>
            </NavbarCenterIcon>
            <NavbarCenterIcon >
              <span>Gameing</span>
              <i class="fas fa-dice-d20"></i>
            </NavbarCenterIcon>
          </NavbarCenterContainer>
        ) : ("")}
        </NavbarCenter>
        <NavbarRight>
          <NavbarIcon1>
          </NavbarIcon1>
          <NavbarIcon>
            <i class="fas fa-bars"></i>
          </NavbarIcon>
          <NavbarIcon>
            <i class="fab fa-facebook-messenger"></i>
          </NavbarIcon>
          <NavbarIcon>
            <i class="fas fa-caret-down"></i>
          </NavbarIcon>
        </NavbarRight>
      </NavbarContainer>
    </div>
  );
}

const NavbarIcon1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  border-radius: 20px 20px;
  background: #3A3B3C;
  margin-right: 15px;

  :hover{
    background: #787878;
    >i{
      color: white;
    }
  }

  >i{
    color: #ccc;
    font-size: 20px;
  }
`
const NavbarIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: #3A3B3C;
  margin-right: 15px;

  :hover{
    background: #787878;
    >i{
      color: white;
    }
  }

  >i{
    color: #ccc;
    font-size: 20px;
  }

`

const NavbarForm = styled.div`
  width: 85%;
  margin: 5px;
  display: flex;
  align-items: center;
  padding: 7px 20px;
  border: 1px black solid;
  justify-content: space-between;
  border-radius: 50px 50px;
  background: #3A3B3C;
  

  >i{
    color: #ccc;
  }

  >input{
    width: 90%;
    border: none;
    background: transparent;
    color: white;
  }

  >input::placeholder{
    color: #ccc;
  }

  >input:focus{
    outline: none;
  }

  @media (max-width: 1200px){
    width: 40px;
    height: 40px;
    justify-content: center;
    >input{display: none}
  }


`

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background: #242526;
`

const NavbarLeft= styled.div`
  flex: 1;
  display: flex;
  padding: 0 40px;
  justify-content: flex-start;
`

const NavbarCenter = styled.div`
  width: 100%;
  height: 100%;
  flex: 2;
  

`

const NavbarCenterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px;
`

const NavbarCenterIcon = styled.button`
  width: 18%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #242526;
  border: none;

  :hover{
    background:  #3A3B3C;
    >i{
      color: white;
    }
    >span{
      display: flex;
    }
  }

  >i{
    color: #ccc;
    font-size: 20px;
  }

  >span{
    display: none;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 35px;
    position: absolute;
    top: 60px;
    background:rgba(188, 188, 200, 0.8);
    border: none;
    border-radius: 5px;
    box-shadow: 0 3px 6px darkgray;
    font-size: 12px;
    color: black;
    
  }

`;

const NavbarRight= styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 40px;

`