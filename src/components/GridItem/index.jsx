import * as C from './style'
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaTrash
} from 'react-icons/fa'



const GridItem = ({item, onDelete}) => {
    
    const Utils = {
        formatCurrency(value){
            const signal = Number(value) < 0 ? "-":""
        
                value = String(value).replace(/\D/g, "")
                value = Number(value) / 100;
        
                value = value.toLocaleString("pt-BR",{
                    style: "currency",
                    currency: "BRL",
                })
            return signal + value         
        }
    }
    var total = parseInt(item.amount).toFixed(2);
    

    return (
        <C.Tr>
            <C.Td>{item.desc}</C.Td>
            <C.Td>{Utils.formatCurrency(total)}</C.Td>
            <C.Td>{item.date}</C.Td>
            <C.Td alignCenter>
                {item.expense ? (
                    <FaRegArrowAltCircleDown color="red"/>
                ) : (
                    <FaRegArrowAltCircleUp color="green"/>
                )}
            </C.Td>
            <C.Td alignCenter>
                <FaTrash cursor="pointer" onClick={() => onDelete(item.id)} />
            </C.Td>
        </C.Tr>
    )
}

export default GridItem