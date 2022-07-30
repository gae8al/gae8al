
import smLogo from '../img/sm_logo.svg'
import aespaLogo from '../img/aespa_logo.svg'
import winterThumb from '../img/winter_thumb.jpg'
const Header = () => {
  return (
    <header>
      <div style={{"width": "100vw", "height" : "5px", "background": "black"}}></div>
      <h1>윈터<br></br>WINTER</h1>
    </header>
  );
}

const ImgArea = () => {
  return (
    <div className="img_area">
      <img src={require('../img/winter.jpg')}
      style={imgHeadStyle}
      alt="winter head image" />
    </div>
  );
}

const DescArea = ({name, birth, from}) => {
  return (
    <div className="desc_area">
        <table>
          <tbody>
            <tr>
              <th>본명</th>
              <td className="tbl_td">{name}</td>
            </tr>
            <tr>
              <th>출생</th>
              <td className="tbl_td">{birth}</td>
            </tr>
            <tr>
              <th>출신</th>
              <td className="tbl_td">{from}</td>
            </tr>
            <tr>
              <th>소속사</th>
              <td className="tbl_td">
                <a href="https://namu.wiki/w/SM%EC%97%94%ED%84%B0%ED%85%8C%EC%9D%B8%EB%A8%BC%ED%8A%B8" target="_blank"><img src={smLogo} height="30px" style={{marginBottom: "-5px"}}/></a>
              </td>
            </tr>
            <tr>
              <th>소속 그룹</th>
              <td className="tbl_td">
                <a href="https://namu.wiki/w/aespa" target="_blank"><img src={aespaLogo} height="25px" style={{marginBottom: "-10px"}} /></a>
              </td>
            </tr>
            <tr>
              <th>외부 페이지 이동 (a)</th>
              <td className="tbl_td">
                <a href="https://youtu.be/5lhpc3kj04k" target="_blank">
                  <img src={winterThumb} 
                  width = "200px"/>
                </a>
              </td>
            </tr>
            <tr>
              <th>영상 (내부 페이지 이동)</th>
              <td className="tbl_td">
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  );
}

//모듈
const Winter = () => {
  return (
    <div className="main_area">
      <Header />
      <ImgArea />
      <DescArea 
      name="김민정, Kim Min-jeong"
      birth="2001년 1월 1일"
      from="경상남도 양산"
      />
    </div>
  );
}

let imgHeadStyle = {
  width: "100%",
  margin: "0 auto 30px",
  display: "flex",
}

export default Winter;