import Summary from './DocumentSummary'
import Active from './DocumentActive'
import Phrase from './DocumentPhrase'
import MemberList from './DocumentMemberList'

//모듈
const Document = () => {
  return (
    <div className="document_area">
      <Summary />
      <Active />
      <Phrase />
      <MemberList />
    </div>
  );
}

export default Document;