
const ImgArea = () => {
  return (
    <div>
      <div className="title">
        <div className="line"></div>
        <h2>1. Visual</h2>
      </div>
      <div className="visual_area">
        <table>
          <tbody>
            <tr style={{display: "flex", marginBottom: "10px"}}>
              <td style={{margin: "3px"}}>
                <img src={require('../img/winter_selfie_01.jpg')}
                style={imgStyle}
                height="100%"
                alt="winter head image" />
              </td>
              <td style={{margin: "3px"}}>
                <img src={require('../img/winter_selfie_02.jpg')}
                style={imgStyle}
                height="100%"
                alt="winter head image" />
              </td>
            </tr>
            <tr className="tr_desc">
              <td>
                <ul style={{paddingLeft: "25px", listStylePosition:"inside", listStyle:"disc"}}>
                  <li style={{textIndent: "0"}}>
                  피부가 굉장히 <b>하얀 편</b>이며, 왼쪽 볼에 보조개가 있고 쌍꺼풀은 또렷하고 아웃라인으로 접힌다. 마른 몸에 비해 <b>볼살이 통통</b>한 편이다. 그게 윈터의 귀여운 느낌을 살리는 데 한몫하고 있다.
                  </li>
                  <li style={{textIndent: "0"}}>
                  평소에나 웃을 때는 귀염상에 가까운데, 무표정일 때는 냉한 느낌이 나서 <b>잘생겼다</b>는 소리를 듣기도 한다.
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  );
}
const PositionArea = () => {
  return (
    <div>
      <div className="title">
        <div className="line"></div>
        <h2>2. Position</h2>
      </div>
      <div className="position_area">
        <table>
          <tbody>
            <tr style={{display: "flex", marginBottom: "10px"}}>
              <td style={{margin: "3px", width: "100%"}}>
                <a href="https://www.youtube.com/watch?v=i-djv0C63RE" target="_blank">
                  <img src={require("../img/winter_vocal_thumb.jpg")}
                  style={imgStyle}
                  height="100%"
                  alt="winter vocal thumbnail image" />
                </a>
              </td>
            </tr>
            <tr className="tr_desc">
              <td>
                <ul style={{paddingLeft: "25px", listStylePosition:"inside", listStyle:"disc"}}>
                  <li style={{textIndent: "0"}}>
                    수많은 아이돌들 중에서도 손에 꼽히는 <b>에이스</b>다. 포지션이 없다고 본인들이 공식적으로 얘기했었지만 노래든, 춤이든 메인급으로 뛰어난 실력 덕에 무대에서 꾸며내는 모습 없이도 늘 주목받는다.
                  </li>
                  <li style={{textIndent: "0"}}>
                    aespa에서 상대적으로 구분되는 포지션은 <b>메인보컬</b>로, 4세대 독보적인 여성 아이돌 보컬리스트들 중 한 명이며 그룹 내에서는 닝닝과 함께 보컬을 이끈다.
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const AlbumArea = () => {
  return (
    <div>
      <div className="title">
        <div className="line"></div>
        <h2>3. Album</h2>
      </div>
      <div className="album_area">
        <table>
          <tbody style={{textAlign: "center"}}>
            <tr>
              <th>no</th>
              <th>분류</th>
              <th>곡명</th>
              <th>앨범 커버</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Digital Single</td>
              <td>Black Mamba</td>
              <td>
                <a href="https://www.youtube.com/watch?v=ZeerrnuLi5E" target="_blank"><img src={require('../img/album_blackmamba.jpg')} width="100%"/>
                </a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Digital Single</td>
              <td>Forever (약속)</td>
              <td>
                <a href="https://www.youtube.com/watch?v=wog1R1d4zls" target="_blank"><img src={require('../img/album_forever.jpg')} width="100%"/></a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Digital Single</td>
              <td>Next Level</td>
              
              <td>
                <a href="https://www.youtube.com/watch?v=4TWR90KJl84" target="_blank"><img src={require('../img/album_nextlevel.png')} width="100%"/></a>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>EP Mini.1</td>
              <td>Savage</td>
              <td>
                <a href="https://www.youtube.com/watch?v=WPdWvnAAurg" target="_blank"><img src={require('../img/album_savage.jpg')} width="100%"/></a>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Digital Single</td>
              <td>Life's Too Short</td>
              <td>
                <a href="https://www.youtube.com/watch?v=z2ZjutyxmjA" target="_blank"><img src={require('../img/album_LTS.jpg')} width="100%"/></a>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>EP Mini.2</td>
              <td>Girls</td>
              <td>
                <a href="https://www.youtube.com/watch?v=dYRITmpFbJ4" target="_blank"><img src={require('../img/album_girls.jpg')} width="100%"/></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
//모듈
const Desc = () => {
  return (
    <div className="desc_area" style={desc}>
      <ImgArea />
      <PositionArea />
      <AlbumArea />
    </div>
  );
}

let desc = {
  marginBottom: "50px"
}
let imgStyle = {
  width: "100%",
}

export default Desc;