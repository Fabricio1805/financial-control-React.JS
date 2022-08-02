import { useState } from "react";
import Grid from "../Grid";
import * as C from "./style";


const Form = ({handleAdd,transactionsList, setTransactionsList}) => {
  const [desc, setDesc ] = useState("");
  const [amount, setAmount ] = useState("");
  const [date, setDate ] = useState("");
  const [isExpense, setExpense ] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);


  const HandleSave = () => {
    if(!desc || !amount || !date){
      alert("informe todos os campos! ");
      return;
    }else if(amount < 1){
      alert("o valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      date: date,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
    setDate("");
  }


  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)}/>
        </C.InputContent>

        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input value={amount} type="number" onChange={(e) => setAmount(e.target.value)}/>
        </C.InputContent>

        <C.InputContent>
          <C.Label>Data</C.Label>
          <C.Input value={date} type="date" onChange={(e) => setDate(e.target.value)}/>
        </C.InputContent>
        
        <C.RadioGroup>
          <C.Input 
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rIncome">Entrada</C.Label>

          <C.Input 
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rExpenses">Saida</C.Label>
        </C.RadioGroup>
        <C.Button onClick={HandleSave}>Adicionar</C.Button>
      </C.Container>

      <Grid itens={transactionsList} setItens={setTransactionsList}/>
    </>
  )
}

export default Form;