import { Link } from "react-router-dom";

const MemberList = () => {
  return (
    <div id="member_list">
      <details open>
        <summary><img src={'https://i.postimg.cc/y6gm82hk/image.png'} /><h1><a>4.</a> 멤버</h1></summary>
        <div id="member_all" className="member_tbl">
          <table>
            <tbody>
              <tr><th colSpan = "4"><span>멤버</span></th></tr>
              <Link to="/gae8al/member" target={"_blank"}>
              <tr>
                <td>
                  <a><img src={'https://i.postimg.cc/50PsWvMT/image.png'} /></a>
                  <div><h4><b>박성화</b></h4></div>

                </td>
                <td>
                  <a><img src={'https://i.postimg.cc/vZdkzr8t/image.png'} /></a>
                  <div><a><h4><b>김홍중</b></h4></a></div>
                </td>
                <td>
                  <a><img src={'https://i.postimg.cc/CKxvPJ3k/image.png'} /></a>
                  <div><a><h4><b>정윤호</b></h4></a></div>
                </td>
                <td>
                  <a><img src={'https://i.postimg.cc/63RCYvpC/image.png'} /></a>
                  <div><a><h4><b>강여상</b></h4></a></div>
                </td>
              </tr>
              <tr>
                <td>
                  <a><img src={'https://i.postimg.cc/t4YZBxr7/image.png'} /></a>
                  <div><a><h4><b>최산</b></h4></a></div>
                </td>
                <td>
                  <a><img src={'https://i.postimg.cc/bJHsZHvV/image.png'} /></a>
                  <div><a><h4><b>송민기</b></h4></a></div>
                </td>
                <td>
                  <a><img src={'https://i.postimg.cc/T1N2bkv0/image.png'} /></a>
                  <div><a><h4><b>정우영</b></h4></a></div>
                </td>
                <td>
                  <a><img src={'https://i.postimg.cc/Gmy3BJ7P/image.png'} /></a>
                  <div><a><h4><b>최종호</b></h4></a></div>
                </td>
              </tr>
              </Link>
            </tbody>
          </table>
        </div>

        <details id="member_list_01" open>
          <summary><img src={'https://i.postimg.cc/y6gm82hk/image.png'} /><h2 className="depths_01"><a>4.1.</a> 멤버 간 케미</h2></summary>
          
          <div id="member-child_01" className="member member_01 common_txt">
            <details open>
              <summary><img src={'https://i.postimg.cc/y6gm82hk/image.png'} /><h2><a>4.1.1.</a> 막사단</h2></summary>
              <div className="img_area">
                <img src={'https://i.postimg.cc/nLK3hgqy/image.png'} />
                <img src={'https://i.postimg.cc/CM8shWYm/image.png'} />
              </div>
              <h4>개팔의 황금막내 종호를 시도때도 없이 귀여워하고 칭찬하는 조합<sup className="eleven">&#91;11&#93;</sup>으로, 종호 외 7 명으로 구성되어 있다. 막둥이 사랑단을 줄인 것이다.</h4>
            </details>
          </div>

          <div id="member-child_02" className="member member_02 common_txt">
            <details open>
              <summary><img src={'https://i.postimg.cc/y6gm82hk/image.png'} /><h2><a>4.1.2.</a> 금연홍보위원회</h2></summary>
              <div className="img_area">
                <img src={'https://i.postimg.cc/jjTWtFxn/image.png'} />
              </div>
              <h4>개팔 내 비흡연자인 멤버들로 구성되어 있으며, 흡연자인 멤버들의 금연을 종용하는 조합. 그러나 아직까지 금연에 성공한 멤버는 아무도 없다. <s>제발 담배 끊어. 성화 소원.</s></h4>
            </details>
          </div>

          <div id="member-child_03" className="member member_03 common_txt">
            <details open>
              <summary><img src={'https://i.postimg.cc/y6gm82hk/image.png'} /><h2><a>4.1.3.</a> 빡빡이</h2></summary>
              <div className="img_area">
                <img src={'https://i.postimg.cc/c4YwWYRj/image.png'} />
              </div>
              <h4>윤빡이와 우빡이가 합쳐진 조합으로, 정윤호와 정우영을 뜻한다. 빡대가리인 것이 특징<sup className="twelve">&#91;12&#93;</sup>이다.</h4>
            </details>
          </div>

          <div id="member-child_04" className="member member_04 common_txt">
            <details open>
              <summary><img src={'https://i.postimg.cc/y6gm82hk/image.png'} /><h2><a>4.1.4.</a> 절노즈</h2></summary>
              <h4>개팔 절친 노트 참여를 위해 만들어진 조합이다.</h4>
              <div className="friends member_tbl"> 
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <div className="img_area">
                        <img src={'https://i.postimg.cc/L41ZZtc4/2.jpg'} />
                        </div>
                        <h4>강민이 (송민기, 강여상)</h4>
                      </td>
                      <td>
                        <div className="img_area">
                          <img src={'https://i.postimg.cc/8cQcbY2p/3.jpg'} />
                        </div>
                        <h4>빡빡이 (정윤호, 정우영)</h4>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="img_area">
                          <img src={'https://i.postimg.cc/jSsW9GLC/image.jpg'} />
                        </div>
                        <h4>놈놈놈 (박성화, 최종호)</h4>
                      </td>
                      <td>
                        <div className="img_area">
                          <img src={'https://i.postimg.cc/fRB3hB9C/image.jpg'} />
                        </div>
                        <h4>깍두기 (최산, 김홍중)</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </details>
          </div>

          <div id="member-child_05" className="member member_05 common_txt">
            <details open>
              <summary><img src={'https://i.postimg.cc/y6gm82hk/image.png'} /><h2><a>4.1.5.</a> 취객즈</h2></summary>
              <div className="img_area">
                <img src={'https://i.postimg.cc/FsxzjDDv/image.jpg'} />
              </div>
              <h4>박성화와 정윤호로 이루어진 개팔 음주티즈 전적을 가진 조합이다. 많은 이들에게 지나친 음주는 멤생에도 해롭다는 교훈을 남겼다.</h4>
            </details>
          </div>

          <div id="member-child_06" className="member member_06 common_txt">
            <details open>
              <summary><img src={'https://i.postimg.cc/y6gm82hk/image.png'} /><h2><a>4.1.6.</a> 투호</h2></summary>
              <div className="img_area">
                <img src={'https://i.postimg.cc/rp7w8bF1/2.jpg'} />
              </div>
              <h4>최종호의 ㅈㄴㄱㄷ 시절, 그를 잡기 위해 정윤호가 ‘투호’라고 한 것에서부터 시작되었다.<sup className="thirteen">&#91;13&#93;</sup> 하지만 정윤호는 투호보다는 투정에 더 큰 애정을 쏟고 있다.</h4>
            </details>
          </div>

          <div id="member-child_07" className="member member_07 common_txt">
            <details open>
              <summary><img src={'https://i.postimg.cc/y6gm82hk/image.png'} /><h2><a>4.1.7.</a> 심괴즈</h2></summary>
              <div className="img_area">
                <img src={'https://i.postimg.cc/Y0x44Ndq/image.png'} />
              </div>
              <h4>심야 괴담회에 미친 송민기와 최종호를 부르는 말. 어느 순간 심야 괴담회에 꼭 빠지지 않는 멤버가 되었으며, 둘을 주축으로 정윤호, ㅈㄴㄱㄷ 양정원과 장원영이 끼기도 한다.</h4>
            </details>
          </div>
        </details>

        <details id="member_list_02" open>
          <summary><img src={'https://i.postimg.cc/y6gm82hk/image.png'} /><h2 className="depths_01"><a>4.2.</a> 개인</h2></summary>
            <h4>자세한 내용은<Link to="/gae8al/member" target={"_blank"}> 개팔위키/개인 </Link>
            문서를 참고하십시오.</h4>
        </details>

      </details>
    </div>
  );
  
}

export default MemberList;