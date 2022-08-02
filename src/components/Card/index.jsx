import * as C from './style';

const Card = ({ title, Icon, value, color,background}) => {
  return (
    <C.Container style={{background: background}}>
      <C.Header>
        <C.HeaderTitle style={{color: color}}>{title}</C.HeaderTitle>
        <Icon style={{color: color}}/>
      </C.Header>
      <C.Total style={{color: color}}>{value}</C.Total>
    </C.Container>
  )
}

export default Card;