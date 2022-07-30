function ListArea() {
  return (
    <div className="index_area">
      <div>목차</div>
      <ul>
        <li><a href="#summary">1.</a> 개요</li>
        <li><a href="#active">2.</a> 시기별 활동 내역
          <ul>
            <li><a href="#act-child_01">2.1.</a> 강여상 애매따리 사건</li>
            <li><a href="#act-child_02">2.2.</a> 직장인 8 분 전</li>
            <li><a href="#act-child_03">2.3.</a> 정우영 *** 부대 의혹</li>
            <li><a href="#act-child_04">2.4.</a> 정윤호 대선 출마 사건</li>
            <li><a href="#act-child_05">2.5.</a> 슈스티즈 데이</li>
            <li><a href="#act-child_06">2.6.</a> 정우영 아모르 파티 발언</li>
            <li><a href="#act-child_07">2.7.</a> 안 어울리는 ~ 찾기</li>
          </ul>
        </li>
        <li><a href="#catch_phrase">3.</a> 유행어</li>
        <li><a href="#member_list">4.</a> 멤버
          <ul>
            <li><a href="#member_list_01">4.1.</a> 멤버 간 케미</li>
              <ul>
                <li><a href="#member-child_01">4.1.1.</a> 막사단</li>
                <li><a href="#member-child_02">4.1.2.</a> 금연홍보위원회</li>
                <li><a href="#member-child_03">4.1.3.</a> 빡빡이</li>
                <li><a href="#member-child_04">4.1.4.</a> 절노즈</li>
                <li><a href="#member-child_05">4.1.5.</a> 취객즈</li>
                <li><a href="#member-child_06">4.1.6.</a> 투호</li>
                <li><a href="#member-child_07">4.1.7.</a> 심괴즈</li>
              </ul>
            <li><a href="#member_list_02">4.2.</a> 개인</li>
          </ul>
        </li>
        {/* <li><a>5.</a>개팔에게 하고 싶은 말</li> */}
      </ul>
    </div>
  );
}
function DescArea() {
  return (
    <div className="desc_area">
      <div className="logo_area">
        <img src={'https://i.postimg.cc/ncmG0NM6/image.png'}
        alt="gaepal logo" />
        <span>개판 8 분 전</span>
      </div>
      <table>
        <tbody>
          <tr>
            <th>결성일</th>
            <td className="tbl_td">2021 년 12 월 8 일<sup>&#91;1&#93;</sup></td>
          </tr>
          <tr>
            <th>방장</th>
            <td >최산</td>
          </tr>
          <tr>
            <th>멤버</th>
            <td >박성화, 김홍중, 정윤호, <span>강여상</span>, 최산, 송민기, 정우영, 최종호</td>
          </tr>
          <tr>
            <th>이름 변천사</th>
            <td >
              우산 금지 &rarr; 우산화 &rarr; 우산화상 &rarr; 개판 8 분 전
            </td>
          </tr>
          <tr>
            <th>기본 공지 글</th>
            <td >
              공지 및 멤표, 박제판, 개나무숲
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

//모듈
const List = () => {
  return (
    <div className="list">
      <ListArea />
      <DescArea />
    </div>
  );
}

export default List;