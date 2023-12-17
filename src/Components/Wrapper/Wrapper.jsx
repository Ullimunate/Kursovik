import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'
import * as S from './Wrapper.style'

function Wrapper(){
    return(
        <S.WrapperBox>
        <Header/>
        <Main/>
        <Footer/>
        </S.WrapperBox>
    )
}

export default Wrapper