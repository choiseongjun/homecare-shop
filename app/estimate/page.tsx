import type { Metadata } from "next"; import EstimateForm from "../../components/EstimateForm";
export const metadata:Metadata={title:"무료 에어컨 수요조사 사전상담",description:"서울 지역 에어컨 서비스 무료 수요조사에 참여하고 연결 가능 여부를 안내받으세요."};
export default function Estimate(){return <section className="estimate-page"><div className="estimate-wrap"><div className="estimate-title"><span className="kicker">FREE DEMAND TEST BETA</span><h1>무료 사전상담 신청</h1><p>예약 확정이 아닌 수요조사입니다. 연결 가능한 경우 개별 안내드립니다.</p></div><div className="estimate-card"><EstimateForm/></div></div></section>}
