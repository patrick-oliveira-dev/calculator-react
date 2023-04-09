import { Container, Content, Row, Column } from "./styles";
import Input from './components/Input'
import Button from "./components/Button";
import { useState } from "react";

const App =() => {

  const [currentNumber, setCurrentNumber] = useState("0")
  const [firstNumber, setFirstNumber] = useState("0")
  const [operation, setOperation] = useState(null)

  const handleAddNumber = (number) => {
    if(currentNumber === "0") {
      setCurrentNumber(`${number}`)
    } else {
      setCurrentNumber(prev => `${prev}${number}`)
    }
  }

  const handleOnClear = () => {
    setCurrentNumber("0")
    setFirstNumber("0")
    setOperation(null)
  }

  const handleClearOneNumber = () => {
    const crNumber = currentNumber.length -1
    setCurrentNumber(currentNumber.substr(0, crNumber))
  }

  const handleAddOperator = (operatorType) => {
    setFirstNumber(currentNumber)
    setCurrentNumber("")
    setOperation(operatorType)
  }

  const handleDoOperation = () => {

    if (operation === "addition") {
      const result = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(result))    

    } else if (operation === "subtraction") {
      const result = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(result)) 

    } else if (operation === "multiplication") {
      const result = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(result)) 

    } else if (operation === "division") {
      const result = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(result)) 

    } else if (operation === "percentage") {
      const result = (Number(firstNumber) * Number(currentNumber)) / 100
      setCurrentNumber(String(result)) 
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label= "C" style={{backgroundColor:"#9B111E"}} onClick={ () => handleClearOneNumber()}/>
          <Button label= ")" style={{backgroundColor:"#006A89"}} onClick={ () => handleAddNumber(")")}/>
          <Button label= "%" style={{backgroundColor:"#006A89"}} onClick={ () => handleAddOperator("percentage")}/>
          <Button label= "AC" style={{backgroundColor:"#9B111E"}} onClick={ () => handleOnClear()}/>
        </Row>
        <Row>
          <Button label= "7" onClick={ () => handleAddNumber("7")}/>
          <Button label= "8" onClick={ () => handleAddNumber("8")}/>
          <Button label= "9" onClick={ () => handleAddNumber("9")}/>
          <Button label= "÷" style={{backgroundColor:"#006A89"}} onClick={ () => handleAddOperator("division")}/>
        </Row>
        <Row>
          <Button label= "4" onClick={ () => handleAddNumber("4")}/>
          <Button label= "5" onClick={ () => handleAddNumber("5")}/>
          <Button label= "6" onClick={ () => handleAddNumber("6")}/>
          <Button label= "x" style={{backgroundColor:"#006A89"}} onClick={ () => handleAddOperator("multiplication")}/>
        </Row>
        <Row>
          <Button label= "1" onClick={ () => handleAddNumber("1")}/>
          <Button label= "2" onClick={ () => handleAddNumber("2")}/>
          <Button label= "3" onClick={ () => handleAddNumber("3")}/>
          <Button label= "-" style={{backgroundColor:"#006A89"}} onClick={ () => handleAddOperator("subtraction")}/>
        </Row>
        <Row>
          <Button label= "0" onClick={ () => handleAddNumber("0")}/>
          <Button label= "." onClick={ () => handleAddNumber(".")}/>
          <Button label= "=" onClick={handleDoOperation} style={{backgroundColor:"#B8860B"}}/>
          <Button label= "+" style={{backgroundColor:"#006A89"}} onClick={ () => handleAddOperator("addition")}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;