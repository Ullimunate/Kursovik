import { useNavigate } from 'react-router'
import * as S from './NewsCard.style'

function NewsCard(props){
    const navigate = useNavigate()
    return(
        <S.Card>
        <S.NewsImg src={props.img}/>
        <S.NewsBox>
            <S.NewsHeading>{props.heading}</S.NewsHeading>
            <S.NewsText>{props.text}</S.NewsText>
            <S.ReadMore onClick={()=> navigate(`/news/${props.id}`)}>Читать далее</S.ReadMore>
        </S.NewsBox>
        </S.Card>
    )
}

export default NewsCard