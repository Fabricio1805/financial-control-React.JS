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
    
    //{Utils.formatCurrency(total)}
    return (
        <C.Tr>
            <C.Td>{item.desc}</C.Td>
            <C.Td >
                {item.expense ? (
                    <p style={{color: "#e92929"}}>{Utils.formatCurrency(total)}</p>
                    
                ) : (
                    <p style={{color: "#12a454"}}>{Utils.formatCurrency(total)}</p>
                )}
            </C.Td>
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