import * as C from './style';

const Card = ({ title, Icon, value, color}) => {

  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle >
           {title}     
        </C.HeaderTitle>
        <Icon />
      </C.Header>
      <C.Total>{value}</C.Total>
    </C.Container>
  )
}

export default Card;