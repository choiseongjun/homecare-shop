import type { Metadata } from "next"; import EstimateForm from "../../components/EstimateForm";
export const metadata:Metadata={title:"사진으로 에어컨 견적 받기",description:"에어컨과 실외기 사진을 첨부해 무료 예상 견적을 요청하세요."};
export default function Estimate(){return <section className="estimate-page"><div className="estimate-wrap"><div className="estimate-title"><span className="kicker">FREE PHOTO ESTIMATE</span><h1>사진으로 견적 받기</h1><p>1분이면 충분해요. 견적 신청은 무료입니다.</p></div><div className="estimate-card"><EstimateForm/></div></div></section>}
