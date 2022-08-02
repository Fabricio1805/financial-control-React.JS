import * as C from './style';
import Card from '../Card/index';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign
} from 'react-icons/fa'

function Resume({income, expense, total }) {
    return (
      <C.Container>
        <Card
          title="Entradas"   
          Icon={FaRegArrowAltCircleUp} 
          value={income} 
          color="green"
        />
        <Card 
          title="Saidas" 
          Icon={FaRegArrowAltCircleDown}
          value={expense}
          color="red"
        />
        <Card 
          title="Total" 
          Icon={FaDollarSign}
          value={total}
        />
      </C.Container>
    )
  }
  
  export default Resume;