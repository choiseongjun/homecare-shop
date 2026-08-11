import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "무료 수요조사 베타 운영 안내",
  description: "에어픽 무료 수요조사의 목적과 예약·연결·개인정보 전달 방식을 안내합니다.",
};

const policies = [
  ["현재 운영 목적", "현재 에어픽은 서울 지역에서 어떤 에어컨 서비스가 필요한지 확인하는 무료 베타입니다. 소개비, 예약금, 상담료를 받지 않으며 신청만으로 예약이나 전문가 연결이 확정되지 않습니다."],
  ["신청과 연락", "신청 내용은 수요 확인과 상담 연락에 사용합니다. 희망 작업일은 예약일이 아니며, 연결 가능한 전문가가 없거나 지역·일정이 맞지 않으면 연결이 이루어지지 않을 수 있습니다."],
  ["전문가 연결 전 동의", "연결 가능한 전문가가 정해지면 먼저 업체 또는 작업자 정보를 고객에게 안내합니다. 고객이 해당 업체에 연락처와 필요한 현장 정보를 전달하는 데 별도로 동의한 경우에만 정보를 전달합니다."],
  ["가격과 비용 예시", "사이트의 가격과 사례는 실제 거래 실적이 아닌 이해를 돕기 위한 예상 기준입니다. 최종 견적은 제품 사양과 현장 조건을 확인한 전문가가 별도로 안내하며, 에어픽은 가격을 확정하지 않습니다."],
  ["계약·결제·A/S", "실제 작업을 선택한 경우 계약과 결제는 고객과 작업을 수행하는 전문가 또는 해당 사업자 사이에 이루어집니다. 작업 범위, 추가 비용, 결제 방식과 A/S 조건을 작업 전에 서면으로 확인해 주세요."],
  ["안전 확인", "전기 타는 냄새, 누전, 화재 위험, 냉매 누출이 의심되면 직접 분해하지 말고 전원을 차단한 뒤 제조사 공식 서비스 또는 자격을 갖춘 전문가에게 점검을 요청하세요."],
];

export default function ServicePolicyPage() {
  return <><section className="sub-hero"><span className="kicker">FREE DEMAND TEST BETA</span><h1>무료 수요조사<br/>운영 방식을 알려드립니다</h1><p>예약이나 유료 중개가 아닌 초기 수요 확인 단계입니다.</p></section><div className="content-wrap policy-wrap"><div className="policy-highlight"><b>핵심 안내</b><p>신청은 무료이며 예약이 확정되지 않습니다. 전문가 연결도 보장하지 않으며, 연결 가능한 업체가 있을 때 정보를 먼저 안내하고 별도 동의를 받은 후에만 고객 정보를 전달합니다.</p></div><div className="policy-list">{policies.map(([title, body], index)=><section key={title}><span>0{index + 1}</span><div><h2>{title}</h2><p>{body}</p></div></section>)}</div><div className="policy-check"><h2>실제 작업을 선택하기 전에 확인하세요</h2><ul><li>작업자 또는 사업자 이름과 연락처</li><li>기본 작업과 추가 작업의 구분 및 금액</li><li>총 결제금액과 결제 시점</li><li>재방문·하자 보수 범위와 기간</li></ul></div><div className="cta-band"><div><h3>무료 수요조사에 참여하시겠어요?</h3><p>예약이나 결제 의무 없이 필요한 서비스를 알려주세요.</p></div><Link href="/estimate" className="btn primary">무료 사전상담 신청 →</Link></div></div></>;
}
