import '../../css/DetailMember.css';

function DetailListArea() {
  return (
    <div className="index_area">
      <div>목차</div>
      <ul>
        <li><a href="#sh">1.</a> 박성화
          <ul>
            <li><a href="#sh_index">1.1.</a> 개요</li>
            <li><a href="#sh_desc">1.2.</a> 캐릭터</li>
          </ul>
        </li>
        <li><a href="#hj">2.</a> 김홍중
          <ul>
            <li><a href="#hj_index">2.1.</a> 개요</li>
            <li><a href="#hj_desc">2.2.</a> 캐릭터</li>
          </ul>
        </li>
        <li><a href="#yh">3.</a> 정윤호
          <ul>
            <li><a href="#yh_index">3.1.</a> 개요</li>
            <li><a href="#yh_desc">3.2.</a> 캐릭터</li>
          </ul>
        </li>
        {/* <li><a href="#ys">4.</a> 강여상</li> */}
        <li><a href="#sn">4.</a> 최산
          <ul>
            <li><a href="#sn_index">4.1.</a> 개요</li>
            <li><a href="#sn_desc">4.2.</a> 캐릭터</li>
          </ul>
        </li>
        <li><a href="#mg">5.</a> 송민기
          <ul>
            <li><a href="#mg_index">5.1.</a> 개요</li>
            <li><a href="#mg_desc">5.2.</a> 캐릭터</li>
          </ul>
        </li>
        <li><a href="#wy">6.</a> 정우영
          <ul>
            <li><a href="#wy_index">6.1.</a> 개요</li>
            <li><a href="#wy_desc">6.2.</a> 캐릭터</li>
          </ul>
        </li>
        <li><a href="#jh">7.</a> 최종호
          <ul>
            <li><a href="#jh_index">7.1.</a> 개요</li>
            <li><a href="#jh_desc">7.2.</a> 캐릭터</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

function MemberTbl ({no, id, imgSrc}) {
  var no_char = parseInt(no) + 1; 
  var id_index = id+"_index";
  var id_desc = id+"_desc";
  return (

    <div id={id} className="desc_area">
      <details open>
        <summary><img src={'https://i.postimg.cc/y6gm82hk/image.png'} /><h1><a>{no_char}.</a> <span dangerouslySetInnerHTML={ {__html: nameArr[no]} }></span></h1></summary>
        <div className='tbl_position'>
          <table>
            <thead>
              <th colSpan={2}>
                <img src={imgSrc} />
              </th>
            </thead>
            <tbody>
              <tr>
                <th>이름</th>
                <td ><span dangerouslySetInnerHTML={ {__html: nameArr[no]} }></span></td>
              </tr>
              <tr>
                <th>소속 뻘필</th>
                <td >개판 8 분 전</td>
              </tr>
              <tr>
                <th>포지션</th>
                <td ><span dangerouslySetInnerHTML={ {__html: positionArr[no]} }></span></td>
              </tr>
              <tr>
                <th>MBTI</th>
                <td ><span dangerouslySetInnerHTML={ {__html: MBTIArr[no]} }></span></td>
              </tr>
              <tr>
                <th>취미</th>
                <td ><span dangerouslySetInnerHTML={ {__html: HobbyArr[no]} }></span></td>
              </tr>
              <tr>
                <th>특기</th>
                <td ><span dangerouslySetInnerHTML={ {__html: specialityArr[no]} }></span></td>
              </tr>
              <tr>
                <th>말버릇</th>
                <td ><span dangerouslySetInnerHTML={ {__html: talkingArr[no]} }></span></td>
              </tr>
              <tr>
                <th>별명</th>
                <td ><span dangerouslySetInnerHTML={ {__html: nicknameArr[no]} }></span></td>
              </tr>
            </tbody>
          </table>
        </div>


        <details id={id_index} className="memberD memberD_01 common_txt" open>
          <summary><img src={'https://i.postimg.cc/y6gm82hk/image.png'} /><h2><a>{no_char}.1.</a> 개요</h2></summary>
          <h4 dangerouslySetInnerHTML={ {__html: indexArr[no]} }></h4>
        </details>

        <details id={id_desc} className="memberD memberD_02 common_txt" open>
          <summary><img src={'https://i.postimg.cc/y6gm82hk/image.png'} /><h2><a>{no_char}.2.</a> 캐릭터</h2></summary>
          <h4 dangerouslySetInnerHTML={ {__html: descArr[no]} }></h4>
        </details>
      </details>
    </div>
  );
}

const DetailMember = () => {
  return (
    <div id="wrap" className="member_detail">
      <div className="list">
        <DetailListArea/>
      </div>
      <div className="list document_area">
        <MemberTbl 
        no="0" id="sh" name={nameArr[0]}
        imgSrc="https://i.postimg.cc/50PsWvMT/image.png"
        />

        <MemberTbl 
        no="1" id="hj" name={nameArr[1]}
        imgSrc="https://i.postimg.cc/vZdkzr8t/image.png"
        />

        <MemberTbl 
        no="2" id="yh" name={nameArr[2]}
        imgSrc="https://i.postimg.cc/CKxvPJ3k/image.png"
        />

        <MemberTbl 
        no="3" id="sn" name={nameArr[3]}
        imgSrc="https://i.postimg.cc/t4YZBxr7/image.png"
        />

        <MemberTbl 
        no="4" id="mg" name={nameArr[4]}
        imgSrc="https://i.postimg.cc/bJHsZHvV/image.png"
        />

        <MemberTbl 
        no="5" id="wy" name={nameArr[5]}
        imgSrc="https://i.postimg.cc/T1N2bkv0/image.png"
        />

        <MemberTbl 
        no="6" id="jh" name={nameArr[6]}
        imgSrc="https://i.postimg.cc/Gmy3BJ7P/image.png"
        />
      </div>
    </div>
  );
}


let nameArr = [
  "박성화",
  "김홍중",
  "정윤호",
  "최산",
  "송민기",
  "정우영",
  "최종호"
]
let positionArr = [
  "개팔의 엄마이자 금쪽이",
  "개팔의 갓생 담당",
  "개팔의 화력멤, 강아지",
  "개팔의 유일무의 <s>퇴직을 바라는</s> 방장",
  "고인물 개팔의 새 멤이자 정체성, 넝수 주인, 뒷북 담당",
  "개팔의 분위기 메이커",
  "개팔의 유일무이 사랑둥이 황금막내",
]
let MBTIArr = [
  "ENTP",
  "INFP",
  "ISTP",
  "INTP",
  "ISTP",
  "ESFJ / ENFJ",
  "ISTJ, CUTE",
]
let HobbyArr = [
  "노래 듣기, 감성 타기, 짤꾸 공장 돌리기",
  "노래 들으러 왔다가 개팔 들어오기",
  "개팔에 글 쓰기, 노래 듣기, 술 마시기",
  "방장 양도하기, 멤표 꾸미기, 영화 보기",
  "넝수 산책, 심괴 보기",
  "떠들기, 방귀 뀌기",
  "햄쮝이 짤 쓰기<sup id='jh_one'>&#91;1&#93;</sup>, 형들 일 시키기",
]

let specialityArr = [
  "나사 풀기<sup id='sh_one'>&#91;1&#93;</sup>, 사서 고생하기, 멤버들에게 놀림당하기",
  "갓생 살기, 따봉 날리기",
  "글 써 달라고 애원하기<sup id='yh_one'>&#91;1&#93;</sup>, 노래 추천하기<sup id='yh_two'>&#91;2&#93;</sup>",
  "날뛰는 개팔 잠재우기, 환멸 느끼기, 비연애로 살기<sup id='sn_one'>&#91;1&#93;</sup>",
  "개판인 멤버들 사이에서 평정심 잃지 않기, 밈 사용<sup id='mg_one'>&#91;1&#93;</sup>",
  "맞춤법 파괴하기, 현구주의 글 쓰기",
  "형들 담배 고나리 하기, 형들의 사랑 한 몸에 받기",
]
let talkingArr = [
  "얘들아 제발, 에구, 헉",
  "에구……, ㄷ",
  "~, 저기……, 에?",
  "낫왼 여친 구합니다",
  "뭐쩌고......, 심괴 보자",
  "뿡, 꺽, 우헤헤",
  "아~, 진씹, ㄷ",
]
let nicknameArr = [
  "명예 대학원생<sup id='sh_two'>&#91;2&#93;</sup>, 밥팔이<sup id='sh_three'>&#91;3&#93;</sup>",
  "따봉중<sup id='hj_one'>&#91;1&#93;</sup>, 홍길동</span>",
  "야노윤호<sup id='yh_three'>&#91;2&#93;</sup>, 윤빡이<sup id='yh_four'>&#91;3&#93;</sup>",
  "짭펫왼, 방산<sup id='sn_two'>&#91;2&#93;</sup>",
  "만기, 송밈기, 넝수<sup id='mg_two'>&#91;2&#93;</sup>",
  "우쪽이",
  "쮝둥이, 짐종호<sup id='jh_two'>&#91;2&#93;</sup>"
]
let indexArr = [
  "개판 8 분 전의 멤버이자, 뻘필의 맏형. 감성적이고 다정한 성격의 소유자로 멤버들을 잘 챙기지만, 가끔씩 금쪽이 같은 면모를 보이기도 한다.",
  "개판 8 분 전의 멤버이자, 박성화와 함께 개팔의 맏형 라인이다. 노래를 추천하는 우영이의 글에서 냅다 개팔의 일원이 되었다.",
  "개판 8 분 전의 멤버이자, 유일무이 화력 담당. 하루에도 몇 번씩 멤버들이 보고 싶다는 글을 올리곤 한다. 성격이 둥글고 순한 편이지만 개팔이라는 딱지를 붙이고 있는 만큼 이상하다.",
  "개판 8 분 전의 조물주이자 방장. 시초부터 현재까지 모든 과정을 겪었다는 점에서 개팔의 살아 있는 역사라고도 할 수 있다.",
  "개판 8 분 전의 멤버이자 정체성. 어딘가 묘하게 아방한 것 같은 말투와 밈에 절여진 그는 인간 개팔이라고 할 수 있다.",
  "개판 8 분 전의 멤버이자, 공식 금쪽이. 끊임없는 돌발 행동으로 멤버들을 당황하게 하며, 대형견 느낌의 윤호와는 달리 발발거리는 소형견에 가까운 모습을 보인다.",
  "개판 8 분 전의 멤버이자 황금막내. 개팔의 꾸준한 구애와 공세를 한참이나 거절하다 결국 못 이기는 척 개팔에 들어오게 되었다.<sup id='jh_three'>&#91;3&#93;</sup>",
]
let descArr = [
  "맑은 눈 광인이라는 말이 잘 어울리는 멤버로, 평소에는 차분하고 정상적인 것처럼 보이지만 어떨 때는 제일 개판이기도 하다. 그에 대한 근거로 스펀지밥, 토마스 등의 짤을 웹피로 들고 다닌다거나 의외로 개팔 유행어의 시초<sup id='sh_four'>&#91;4&#93;</sup>를 담당하고 있다는 점 등을 들 수 있다.<br></br>동물 모에화가 판을 치는 개팔에서 토끼를 담당하고 있으며, 가끔씩 토끼 짤을 달고 등장해 멤버들에게 귀여움을 받곤 한다. 안 어울리는 직업으로 ENTP가 꼽힐 정도로 말랑하고 다정자다감한 성격인 만큼 멤버들에게 잘 맞춰 주고 잘 당하는 모습도 보이지만, 실은 본인도 즐기고 있는 듯하다.<br></br>손재주가 많기 때문에 콘텐츠의 이것저것<sup id='sh_five'>&#91;5&#93;</sup> 다 담당하는 편이며, 뻘필 내에서 멤버들의 짤꾸를 담당하고 있다. 상황에 맞는 짤이 시시각각 튀어나올 정도로 다양한 짤을 보유하고 있는 탓에 멤버들의 시기와 질투를 살 때도 있다. 최근에는 즐겨 먹는 주먹밥을 시도 때도 없이 영업하며 멤버들의 원성을 사고 있다.",

  "꽤 길었던 장기 사정 중 얼굴을 보일 때마다 많은 이들의 환대를 받은 개팔의 홍길동. 현생에 갈려 힘들 때면 우는 짤을 써, 보는 사람으로 하여금 안타까움을 자아내고는 한다. 바쁜 와중에도 종종 저녁과 새벽 사이에 나타나 따봉 짤로 생존 신고를 한다. 개팔 중 그 누구보다 열심히 갓생을 살고 있다.<br></br>최근 길었던 사정을 마치고 누구보다 높은 텐션으로 개팔에 출몰하기 시작했다. 여전히 월루 타임이나 자기 전 심심한 시간에 홀연히 나타났다 홀연히 사라지는 것으로 홍길동의 위치를 굳건히 지키고 있다.<br></br>꽤나 확고한 짤 취향이 있는 듯하다. 개그 짤을 선호하는 편이며, 가벼운 드립에도 쉽게 웃지만 본인 마음에 들지 않으면 가차 없이 주먹 짤을 날리곤 한다. 최근 사정 기간을 마친 후 급격히 올라간 텐션으로 인해 주먹을 더 자주 날리고 있다.<br></br>쉽게 신나고 쉽게 지치는 편이다. 높은 텐션으로 와다다 나타났다가도 금방 지쳐 얼마 지나지 않아 사라지는 모습을 자주 볼 수 있다. 바빴던 현생 탓도 있지만, 드러눕거나 엎어진 짤을 많이 쓰는 것으로 보아 금방 달아오르고 금방 식는 한국인의 근성을 그대로 가졌다고도 볼 수 있다.",

  "개팔 내 명실상부 글 화력 담당. 얼마나 글 쓰기에 미쳐 있냐면, 주기적으로 글을 써 달라는 글감으로 사용하기도 한다. ㅈㄴㄱㄷ의 말에 의하면 누군가의 글을 찾기 위해 목록에서 아무 글이나 누르면 그것이 정윤호의 글일 확률이 높다고 한다. <s>목록에서 정윤호가 쓴 글이 아닌 글을 누른다면 조용히 뒤로 가기를 누르세요. 그것은 개팔에서 작성된 글이 아닙니다.</s><br></br>자주 음주티즈를 하는 것으로 보아 술꾼으로 보인다. 술을 마시고 자주 후회하기 때문에 술 그만 마시겠다는 말을 남발하고 다닌다.<sup id='yh_five'>&#91;5&#93;</sup> 한 가지 걱정되는 점이 있다면 잦은 회식으로 인해 그의 간이 고통받고 있다는 사실이다.<br></br>가끔 자기를 강아지로 모에화하는 면모를 보인다. 요가하는 강아지, 무는 강아지, 혓바닥을 내밀고 있는 강아지 등 다양한 짤을 첨목에 두고 사용하는 것으로 보아 본인도 이 모에화에 나름 만족하는 중인 듯하다.<br></br>짤이 정말, 매우 많다. 이것은 정윤호뿐 아닌 다른 얼굴도 포함되는 말이며 여멤, 남멤 가리지 않고 많다. 언젠가 개팔 내에서 모르는 얼굴을 마주한다면 거의 99 퍼센트 정윤호일 확률이 높다.",

  "방장 하기 싫다는 말을 입에 달고 살지만 누구보다 방장이라는 역할에 책임감을 가지고 최선을 다하는 개팔의 기둥. 자신은 방장이 아니라며 아나키즘을 종종 언급하였지만 결국 자신이 방장이라는 것을 인정하였다. 개팔 멤버들 앞에서는 틱틱거리는 것 같지만 누구보다 개팔에 애정이 크다.<br></br>표면적으로 흥분한 멤버들을 진정시키는 것은 박성화처럼 보이지만, 실은 비교적 텐션이 일정한 산이 많은 노력을 기울이고 있다. 멤버들 몰래 깜짝 이벤트를 진행하는 등 개팔을 향한 진한 애정을 드러낼 때면 멤버들은 너만 한 방장이 없다고 말하곤 한다.<br></br>평소 가오 낫왼 이미지를 고수하나 개팔 내에서는 때때로 본인을 내려놓은 모먼트를 보인다. 일례로 '짤꾸 대란'<sup id='sn_three'>&#91;3&#93;</sup>을 들 수 있다. 가끔씩 '낫왼 여친 구함'이라는 글을 올리며 하트를 뿌린다..<sup id='sn_four'>&#91;4&#93;</sup> '연애 말린다'는 소리를 자주 하는 멤버들 중 한 명이다. 어느 정도는 습관성인 듯하다.",

  "개팔에 송민기 짤을 주우러 왔다가<sup id='mg_three'>&#91;3&#93;</sup> 별안간 납치가 되어 개판 8 분 전 송민기가 되었다. 초반에 제 발로 걸어 들어온 것 마냥 빠르게 적응해서 모두가 안심했지만 사실 본인은 낯을 많이 가리는 편이라고 언급한 적이 있다. 강여상과 어사즈가 되어 개팔의 절친 노트를 열게 만든 일 등 공신.<sup id='mg_four'>&#91;4&#93;</sup><br></br>심야괴담회 마니아일 정도로 겁이 없으며 다른 멤버들이 놀랄 때 혼자 덤덤한 모습을 보이기도 한다. 같은 멤버 최산 <s>그리고 겁쟁이 정윤호</s>와 자주 공포 영화를 시청하는 모습을 보인다.<br></br>밈잘알이다. 얼마나 잘 알고 있냐 하면 별명이 ‘송밈기’일 정도. 특유의 힘 없는 말투와 합쳐져 굉장한 시너지를 낸다. 묘하게 재미있으면서도 아무런 물욕 없어 보이는 그 말투가 웃음 코드인 사람 또한 존재한다.",

  "개팔의 인싸, 분위기 메이커를 맡고 있을 정도로 쾌활하고 활달하다. 때로는 달걀 장조림으로 캐해를 당해도 그러려니 하고 넘기는 호탕한 성격의 소유자이다. 따라서 이따금 현구에 아주 관대한 모습<sup id='wy_one'>&#91;1&#93;</sup><br></br>을 보이는데, 이상한 사진이나 썰이 담긴 현구주의 글을 작성하는 것은 다 정우영이라고 보면 된다.<sup id='wy_two'>&#91;2&#93;</sup><br></br>개팔에서 유일하게 자기 마음대로 맞춤법을 파괴한다. 지금은 이것이 그의 아이덴티티로 자리 잡았기 때문에 정상적인 글이나 댓글이 올라온다면 진짜 정우영이 아니거나 기분이 안 좋은 것이라는 추측이 만연하다.<br></br>평상시에도 다른 멤버들보다 몇 배의 텐션을 자랑하기 때문에 멤버들이 감당하기 버거워할 때도 있지만, 분위기 메이커답게 꾸준히 멤버들을 웃겨 주는 멤버 중 하나이다. 멤버들이 부당한 일을 당하거나 스트레스를 받으면 본인이 직접 겪은 것마냥 진심으로 화를 내 주고 욕을 해 줄 정도로 속이 깊고 정이 많다.",

  "ㅈㄴㄱㄷ 시절 '형들 진짜 개판 같아요'라는 유행어를 남긴 장본인이다. 매사에 부지런한 편으로 가끔 형들에게 지나친 업무를 맡겨 혀를 내두르게 하기도 한다. <s>막내온탑</s><br></br>언제나 형들의 건강을 생각하는 속이 깊은 모습 또한 보여 주곤 한다. 일례로 자리를 비웠다가도 담배 타임 가자는 이야기만 나오면 날려와 금연을 외칠 정도로 열렬한 흡연 단속반 반장이다. 호랑이와도 같은 모습에 흡연자 멤버들에게 종호는 가끔 공포의 대상이다.<br></br>드라마광이라 불릴 정도로 드라마, 특기 한드에 환장하며 멤버들에게 보고 있는 드라마를 적극적으로 영업하는 모습을 보이기도 한다. 처음 영업을 시작한 드라마는 ‘해피니스’인데, 한창 지나가는 멤버들을 강제로 붙잡고 인물들을 번갈아 언급하며 앓을 정도로 진심이었다. <s>귀엽다</s>"
]
export default DetailMember;