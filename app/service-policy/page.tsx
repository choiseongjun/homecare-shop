import type { Metadata } from "next";
import Link from "@/components/HardLink";

export const metadata: Metadata = {
  title: "서비스 이용 및 상담 연결 안내",
  description: "홈프라이스의 표준 단가 확인, 견적 접수, 기술자 배정 안내와 예약 방식을 설명합니다.",
};

const policies = [
  ["홈프라이스의 역할", "홈프라이스은 단지별 표준 단가와 비용 기준을 제공하고 고객의 작업 조건을 접수해 연결 가능 여부를 안내합니다. 홈프라이스이 직접 시공하거나 계약 당사자가 되지는 않습니다."],
  ["기술자 배정 안내", "접수된 지역, 작업 종류와 일정에 맞춰 연결 가능한 작업자를 확인합니다. 배정 안내만으로 작업 품질이나 계약 이행을 보증하지는 않습니다."],
  ["신청과 연락", "신청 내용은 필요한 작업을 확인하고 상담을 안내하는 데 사용합니다. 희망 작업일은 상담 후 업체와 일정을 확인해 확정합니다."],
  ["전문가 연결 전 동의", "연결 가능한 전문가가 정해지면 먼저 업체 또는 작업자 정보를 고객에게 안내합니다. 고객이 해당 업체에 연락처와 필요한 현장 정보를 전달하는 데 별도로 동의한 경우에만 정보를 전달합니다."],
  ["가격과 비용 예시", "사이트의 가격과 사례는 이해를 돕기 위한 예상 기준입니다. 최종 견적은 제품 사양과 현장 조건을 확인한 전문가가 별도로 안내합니다."],
  ["계약·결제·A/S", "실제 작업을 선택한 경우 계약과 결제는 고객과 작업을 수행하는 전문가 또는 해당 사업자 사이에 이루어집니다. 작업 범위, 추가 비용, 결제 방식과 A/S 조건을 작업 전에 서면으로 확인해 주세요."],
  ["안전 확인", "전기 타는 냄새, 누전, 화재 위험, 냉매 누출이 의심되면 직접 분해하지 말고 전원을 차단한 뒤 제조사 공식 서비스 또는 자격을 갖춘 전문가에게 점검을 요청하세요."],
];

export default function ServicePolicyPage() {
  return <><section className="sub-hero"><span className="kicker">SERVICE INFORMATION</span><h1>표준 단가와 견적 연결<br/>방식을 알려드립니다</h1><p>단가 확인부터 접수, 배정 안내와 예약 결정까지의 기준입니다.</p></section><div className="content-wrap policy-wrap"><div className="policy-highlight"><b>핵심 안내</b><p>표준 단가 확인과 견적 접수는 무료이며 작업 예약은 일정·가격·작업 조건을 확인한 후 확정됩니다. 홈프라이스은 직접 시공하거나 계약 당사자가 되지 않습니다.</p></div><div className="policy-list">{policies.map(([title, body], index)=><section key={title}><span>{String(index + 1).padStart(2,"0")}</span><div><h2>{title}</h2><p>{body}</p></div></section>)}</div><div className="policy-check"><h2>실제 작업을 선택하기 전에 확인하세요</h2><ul><li>작업자 또는 사업자 이름과 연락처</li><li>기본 작업과 추가 작업의 구분 및 금액</li><li>총 결제금액과 결제 시점</li><li>재방문·하자 보수 범위와 기간</li></ul></div><div className="cta-band"><div><h3>현장 조건에 맞는 견적이 필요하신가요?</h3><p>주소와 작업 내용을 남기면 예상 금액과 연결 가능 여부를 안내합니다.</p></div><Link href="/estimate" className="btn primary">무료 견적 신청 →</Link></div></div></>;
}
