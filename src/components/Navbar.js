import React from "react";
import styled from 'styled-components';

import { Link } from "react-router-dom";

import logo from "../img/logo.png";

export default function Navbarr() {
  return (
    <div>
      <NavbarContainer bg="light" expand="lg">
        <NavbarLeft as={Link} to="/">
          <img src={logo} alt="coderbook" width="50px" />
          <NavbarForm>
            <input className="form-comtrol" type="text"  placeholder="Search Facebook" />
            <i class="fas fa-search"></i> 
          </NavbarForm>
        </NavbarLeft>
        <NavbarCenter>

        </NavbarCenter>
        <NavbarRight>

        </NavbarRight>
      </NavbarContainer>
    </div>
  );
}

const NavbarForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  border: 1px #ccc solid;
  border-radius: 50px 50px;
  background:  white;

  padding:  0 20px;

  :focus{
    -webkit-text-decoration: none !important;
  }

  >i{
    width: 10%;
    color: black;
  }

  >input{
    width: 90%;
    padding: 7px 5px;
    background: transparent;
    border: none;
    }
  
  >input::placeholder{
    text-decoration: none !important;
    color: #ccc;
  }
  >input:active{
    text-decoration: none;
  }
  >input:focus{
    outline: none;
    text-decoration: none;
  }

`

const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background: lavender;
`

const NavbarLeft= styled.div`
  flex: 1;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
`

const NavbarCenter= styled.div`
  flex: 2;

`

const NavbarRight= styled.div`
  flex: 1;

`