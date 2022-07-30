const VideoArea = () => {
  return (
    <div className="desc_area">
      <table>
        <tbody>
          <tr>
            <th>출신</th>
            <td></td>
          </tr>
          <tr>
            <th>소속사</th>
            <td>
              
            </td>
          </tr>
          <tr>
            <th>소속 그룹</th>
            <td>
            </td>
          </tr>
          <tr>
            <th>외부 페이지 이동 (a)</th>
            <td>
            </td>
          </tr>
          <tr>
            <th>영상 (내부 페이지 이동)</th>
            <td>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

//모듈
const WinterVideo = () => {
  return (
    <div className="winter_video">
      <VideoArea 
      />
    </div>
  );
}
export default WinterVideo;