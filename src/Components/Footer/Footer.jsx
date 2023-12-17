import * as S from "./Footer.style";
import InstImg from "../Assets/img/InstImg.svg";
import TwitImg from "../Assets/img/twitImg.svg";
import SnapImg from "../Assets/img/SnapImg.svg";
import LogoImg from "../Assets/img/sitesee.svg";

function Footer() {
  return (
    <S.FooterStyle>
      <S.FooterBox>
        <S.Logo src={LogoImg} />
        <S.SocialBox>
          <S.SocialImg src={InstImg} />
          <S.SocialImg src={TwitImg} />
          <S.SocialImg src={SnapImg} />
        </S.SocialBox>
      </S.FooterBox>
      <S.Avtor>Made by React</S.Avtor>
    </S.FooterStyle>
  );
}

export default Footer;
