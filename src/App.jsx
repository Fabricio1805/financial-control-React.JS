import GlobalStyle from './styles/global'
import Header from './components/Header/index'
import Resume from './components/Resume/index'
import Form from './components/Form/index.jsx';

import { useState, useEffect } from 'react';

function App() {

  const data = localStorage.getItem("transactions");
  const [ transactionsList, setTransactionsList ] = useState(
    data ? JSON.parse(data) : []
  );
  
  const [income, setIncome ] = useState(0);
  const [expense, setExpense ] = useState(0);
  const [total, setTotal ] = useState(0);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur ) => acc + cur, 0).toFixed(2);
    
    const total = Math.abs(income - expense).toFixed(2);

    // formatação dos valores
    const formatCurrency = (value) => {
      const signal = Number(value) < 0 ? "-":""

      value = String(value).replace(/\D/g, "")
      value = Number(value) / 100 

      value = value.toLocaleString("pt-BR",{
          style: "currency",
          currency: "BRL"
      })
      return signal + value
    }

    setIncome(formatCurrency(income));
    setExpense(formatCurrency(expense));
    const totalizador = (`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
    setTotal(formatCurrency(totalizador))
  },[transactionsList]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));

  }

  return (
    <>
      
        <Header/> 
          <Resume income={income} expense={expense} total={total} /> 
            <Form 
              handleAdd={handleAdd} 
              transactionsList={transactionsList} 
              setTransactionsList={setTransactionsList}
            />
        <GlobalStyle /> 
    </>
  );
}

export default App;