import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const IMG = styled.img`
  /* Estilos para dispositivos móviles */
  @media (max-width: 767px) {
    width: 300px; /* Ancho estático de 300px para dispositivos móviles */
    height: auto; /* Altura automática en proporción al ancho */
  }

  /* Estilos para tabletas */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 500px; /* Ancho estático de 500px para tabletas */
    height: auto; /* Altura automática en proporción al ancho */
  }

  /* Estilos para computadoras */
  @media (min-width: 1024px) {
    width: 800px; /* Ancho estático de 800px para computadoras */
    height: auto; /* Altura automática en proporción al ancho */
  }
`;

export const ContainerNumber1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid #fff;
  width: 33.3%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

export const ContainerNumber2 = styled.div`
  position: absolute;
  top: 0px;
  left: 33.3%;
  background-color: rgba(0, 0, 0, 0.5);
  border 1px solid #fff;
  width: 33.3%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

export const ContainerNumber3 = styled.div`
  position: absolute;
  top: 0px;
  left: 66.6%;
  background-color: rgba(0, 0, 0, 0.5);
  border 1px solid #fff;
  width: 33.3%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

export const ContainerNumber4 = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  border 1px solid #fff;
  width: 33.3%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

export const ContainerNumber5 = styled.div`
  position: absolute;
  bottom: 0px;
  left: 33.3%;
  background-color: rgba(0, 0, 0, 0.5);
  border 1px solid #fff;
  width: 33.3%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  &&:hover {
    background-color: rgb(0, 0, 0);
  }
`;

export const ContainerNumber6 = styled.div`
  position: absolute;
  bottom: 0px;
  left: 66.6%;
  background-color: rgba(0, 0, 0, 0.5);
  border 1px solid #fff;
  width: 33.3%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

export const Span = styled.span`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
