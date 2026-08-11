import type { Metadata } from "next";
import ServicePage from "../../components/ServicePage";

export const metadata: Metadata = {
  title: "상업용 에어컨·냉난방기 설치 비용",
  description: "카페, 상가, 사무실의 상업용 에어컨과 냉난방기 설치 비용 및 용량 선정 기준을 안내합니다.",
};

export default function Page() {
  return <ServicePage slug="commercial-aircon" />;
}
