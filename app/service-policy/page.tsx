import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "서비스 운영 및 협력 전문가 연결 안내",
  description: "에어픽의 협력 전문가 연결 방식과 견적, 계약, 결제, 시공, A/S 및 취소 기준을 안내합니다.",
};

const policies = [
  ["에어픽의 역할", "에어픽은 고객의 견적 요청을 접수하고 현장 조건에 맞는 협력 전문가를 연결하는 서비스입니다. 별도로 명시하지 않는 한 에어픽이 직접 철거·설치·청소·수리 작업을 수행하지 않습니다."],
  ["가격과 최종 견적", "사이트의 가격표와 시공사례 금액은 이해를 돕기 위한 예상 기준입니다. 제품 사양, 배관 길이, 타공, 실외기 위치, 전기·천장 공사 등을 확인한 뒤 협력 전문가가 최종 견적을 안내합니다."],
  ["계약과 결제", "실제 작업 계약과 결제는 고객과 작업을 수행하는 협력 전문가 또는 해당 사업자 사이에 이루어집니다. 작업 전 사업자 정보, 세부 작업 범위, 추가 비용, 결제 방법을 확인하고 견적서나 문자로 남겨주세요."],
  ["시공과 A/S", "시공 품질과 하자 보수의 구체적인 범위·기간은 작업을 수행하는 협력 전문가와의 계약 내용에 따릅니다. 작업 전 A/S 조건을 서면으로 확인해 주세요. 에어픽은 연결 과정과 분쟁 접수에 필요한 확인을 지원합니다."],
  ["취소와 환불", "견적 신청과 전문가 연결 전 상담은 무료입니다. 출장이나 일정이 확정된 이후의 취소 비용은 사전에 안내되고 고객이 동의한 경우에만 적용될 수 있습니다. 작업 후 환불·재시공 기준은 개별 계약과 관련 법령에 따릅니다."],
  ["안전 확인", "전기 타는 냄새, 누전, 화재 위험, 냉매 누출이 의심되면 직접 분해하지 말고 전원을 차단한 뒤 제조사 공식 서비스 또는 자격을 갖춘 전문가에게 점검을 요청하세요."],
];

export default function ServicePolicyPage() {
  return <><section className="sub-hero"><span className="kicker">SERVICE INFORMATION</span><h1>안심하고 연결받을 수 있도록<br/>운영 기준을 먼저 알려드립니다</h1><p>에어픽의 역할과 실제 시공 계약에서 확인해야 할 내용을 투명하게 안내합니다.</p></section><div className="content-wrap policy-wrap"><div className="policy-highlight"><b>핵심 안내</b><p>에어픽은 직접 시공업체가 아닌 협력 전문가 연결 서비스입니다. 최종 견적과 계약·결제·시공·A/S 조건은 배정된 전문가와 작업 전에 확인합니다.</p></div><div className="policy-list">{policies.map(([title, body], index)=><section key={title}><span>0{index + 1}</span><div><h2>{title}</h2><p>{body}</p></div></section>)}</div><div className="policy-check"><h2>작업 전에 꼭 확인하세요</h2><ul><li>작업자 또는 사업자 이름과 연락처</li><li>기본 작업과 추가 작업의 구분 및 금액</li><li>총 결제금액과 결제 시점</li><li>재방문·하자 보수 범위와 기간</li></ul></div><div className="cta-band"><div><h3>안내 내용을 확인하셨나요?</h3><p>현장 사진을 보내면 협력 전문가 연결을 도와드립니다.</p></div><Link href="/estimate" className="btn primary">무료 견적 요청 →</Link></div></div></>;
}
