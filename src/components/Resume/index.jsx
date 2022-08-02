import * as C from './style';
import Card from '../Card/index';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign
} from 'react-icons/fa'

function Resume({income, expense, total}) {
    return (
      <C.Container>
        <Card
          title="Entradas"
          color="#12a454"
          Icon={FaRegArrowAltCircleUp} 
          value={income} 
        />
        <Card 
          title="Saídas"
          color="#e92929" 
          Icon={FaRegArrowAltCircleDown}
          value={expense}
        />
        <Card 
          title="Total" 
          color="#FFF"
          background="#2f3749"
          Icon={FaDollarSign}
          value={total}
        />
      </C.Container>
    )
  }
  
  export default Resume;