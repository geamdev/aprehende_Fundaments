import { useRef, useState } from "react"
import { Container, IMG, ContainerNumber1, ContainerNumber2, ContainerNumber3, ContainerNumber4, ContainerNumber5, ContainerNumber6, Span } from "./Arco.styles";

const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
const direccionCPU = numeroAleatorio.toString();
const posicionJugador = ["1", "2", "3", "4", "5", "6"];

const Arco: React.FC = () => {

  //const [loading, setLoading] = useState(false);

  const [number, setNumber] = useState(posicionJugador);

  const imageRef = useRef<HTMLImageElement>(null);



  const handleClick = (position: string ) => {
    if (direccionCPU === position) {
      setNumber(["X"]);
    } else {
      setNumber(["O"]);
    }
  }

  const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;

    const imgCellFuncion = () => {
      if (x >= 0 && x <= 100 && y >= 0 && y <= 80) {
        handleClick("1");
      } else if (x >= 100 && x <= 200 && y >= 0 && y <= 80) {
        handleClick("2");
      } else if (x >= 200 && x <= 300 && y >= 0 && y <= 80) {
        handleClick("3");
      } else if (x >= 0 && x <= 100 && y >= 80 && y <= 160) {
        handleClick("4");
      } else if (x >= 100 && x <= 200 && y >= 80 && y <= 160) {
        handleClick("5");
      } else if (x >= 200 && x <= 300 && y >= 80 && y <= 160) {
        handleClick("6");
      }
    }

    const imgTableFuncion = () => {
      if (x >= 0 && x <= 165 && y >= 0 && y <= 135) {
        handleClick("1");
      }
      if (x >= 165 && x <= 330 && y >= 0 && y <= 135) {
        handleClick("2");
      }
      if (x >= 330 && x <= 495 && y >= 0 && y <= 135) {
        handleClick("3");
      }
      if (x >= 0 && x <= 165 && y >= 135 && y <= 270) {
        handleClick("4");
      }
      if (x >= 165 && x <= 330 && y >= 135 && y <= 270) {
        handleClick("5");
      }
      if (x >= 330 && x <= 495 && y >= 135 && y <= 270) {
        handleClick("6");
      }
    }

    const imgComputerFuncion = () => {
      if (x >= 0 && x <= 265 && y >= 0 && y <= 220) {
        handleClick("1");
      }
      if (x >= 265 && x <= 530 && y >= 0 && y <= 220) {
        handleClick("2");
      }
      if (x >= 530 && x <= 795 && y >= 0 && y <= 220) {
        handleClick("3");
      }
      if (x >= 0 && x <= 265 && y >= 220 && y <= 440) {
        handleClick("4");
      }
      if (x >= 265 && x <= 530 && y >= 220 && y <= 440) {
        handleClick("5");
      }
      if (x >= 530 && x <= 795 && y >= 220 && y <= 440) {
        handleClick("6");
      }
    }

    if (imageRef.current) {
      const { width } = imageRef.current;
      if (width == 300) {
        imgCellFuncion();
      }
      if (width == 500) {
        imgTableFuncion();
      }
      if (width == 800) {
        imgComputerFuncion();
      }

    }
  }

  return (
    <Container>
      <IMG 
        ref={imageRef}
        src="https://www.pngkit.com/png/detail/1006-10066382_football-goal-png-arco-de-futbol-png.png" 
        onClick={handleImageClick} 
      />
      <ContainerNumber1>
        <Span>{number[0]}</Span>
      </ContainerNumber1>

      <ContainerNumber2>
        <Span>{number[1]}</Span>
      </ContainerNumber2>

      <ContainerNumber3>
        <Span>{number[2]}</Span>
      </ContainerNumber3>

      <ContainerNumber4>
        <Span>{number[3]}</Span>
      </ContainerNumber4>

      <ContainerNumber5>
        <Span>{number[4]}</Span>
      </ContainerNumber5>

      <ContainerNumber6>
        <Span>{number[5]}</Span>
      </ContainerNumber6>

    </Container>
  )
}

export default Arco;
