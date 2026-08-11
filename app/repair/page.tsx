import type { Metadata } from "next"; import ServicePage from "../../components/ServicePage";
export const metadata:Metadata={title:"에어컨 수리 비용 | 냉방 불량·누수·소음 점검",description:"에어컨이 시원하지 않거나 물이 새고 소음이 날 때 출장 점검과 수리 비용 기준을 확인하세요."}; export default function Page(){return <ServicePage slug="repair"/>}
