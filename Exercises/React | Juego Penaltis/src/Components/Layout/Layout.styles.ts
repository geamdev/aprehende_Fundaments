import styled from "styled-components";

export const Button = styled.button`
  font-size: 35px;
  background: transparent;
  border: none;
  padding: 0.3em 1.5em;
  color: #ffedd3;
  text-transform: uppercase;
  position: relative;
  transition: .3s ease;
  &&:hover {
    color: #1e1e2b;
    transition-delay: .3s;
  }
  &&:hover:before {
    width: 100%;
  }
  &&: after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0;
    width: 100%;
    background-color: #ffc506;
    border-radius: 5px;
    transition: .2s ease;
    z-index: -1;
  }
  &&:hover:after {
    height: 100%;
    transition-delay: .2s;
    color: aliceblue;
  }
`;