import type { Metadata } from "next"; import EstimateForm from "../../components/EstimateForm";
export const metadata:Metadata={title:"에어컨 무료 상담 신청",description:"에어컨 설치·이전설치·수리·청소 상담을 간편하게 신청하세요."};
export default function Estimate(){return <section className="estimate-page"><div className="estimate-wrap"><div className="estimate-title"><span className="kicker">FREE CONSULTATION</span><h1>에어컨 무료 상담 신청</h1><p>필요한 서비스와 지역을 알려주시면 확인 후 연락드립니다.</p></div><div className="estimate-card"><EstimateForm/></div></div></section>}
