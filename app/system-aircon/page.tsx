import type { Metadata } from "next"; import ServicePage from "../../components/ServicePage";
export const metadata:Metadata={title:"시스템에어컨 설치 비용 안내",description:"주거 및 상업 공간 시스템에어컨 설치 비용과 현장 확인 항목을 안내합니다."}; export default function Page(){return <ServicePage slug="system-aircon"/>}
