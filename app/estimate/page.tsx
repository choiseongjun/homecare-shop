import type { Metadata } from "next"; import EstimateForm from "../../components/EstimateForm";
export const metadata:Metadata={title:"에어컨 설치·이전·수리 무료 문의",description:"에어컨 설치·이전설치·수리·청소 문의를 간편하게 접수하세요."};
export default function Estimate(){return <section className="estimate-page"><div className="estimate-wrap"><div className="estimate-title"><span className="kicker">AIRCON INQUIRY</span><h1>에어컨 무료 문의 접수</h1><p>필요한 작업과 지역을 알려주시면 상담 가능 여부를 확인해드립니다.</p></div><div className="estimate-card"><EstimateForm/></div></div></section>}
