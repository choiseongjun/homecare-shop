import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보 처리방침",
  description: "에어픽 상담 서비스의 개인정보 수집과 이용 기준입니다.",
};

export default function PrivacyPage() {
  return <><section className="sub-hero"><span className="kicker">PRIVACY</span><h1>개인정보 처리방침</h1><p>상담에 필요한 최소한의 정보만 수집합니다.</p></section><div className="content-wrap policy-wrap"><div className="policy-highlight"><b>중요</b><p>접수 단계에서는 고객 정보를 전문가에게 자동 전달하지 않습니다. 연결 가능한 업체가 정해지면 업체 정보를 먼저 알리고 별도 동의를 받은 경우에만 필요한 정보를 전달합니다.</p></div><div className="policy-list"><section><span>01</span><div><h2>수집 항목</h2><p>필수: 이름, 전화번호, 희망 지역, 서비스 종류, 에어컨 종류. 선택: 상세 지역, 희망일, 문의 내용, 첨부사진 정보.</p></div></section><section><span>02</span><div><h2>수집 목적</h2><p>상담 신청 내용 확인, 상담 연락 및 전문가 연결 가능 여부 안내에 사용합니다.</p></div></section><section><span>03</span><div><h2>제3자 제공</h2><p>접수와 동시에 제3자에게 제공하지 않습니다. 연결할 업체가 정해진 경우 제공받는 업체, 목적, 항목과 보유기간을 별도로 알리고 동의를 받은 후 제공합니다.</p></div></section><section><span>04</span><div><h2>보관과 파기</h2><p>상담 확인에 필요한 기간 동안 보관하며, 목적이 끝나거나 삭제 요청을 받으면 관련 법령상 보관 의무가 없는 정보는 지체 없이 삭제합니다.</p></div></section><section><span>05</span><div><h2>동의 거부와 권리</h2><p>개인정보 수집에 동의하지 않을 수 있으나 상담 신청은 제한됩니다. 열람·정정·삭제를 원하면 상담 신청란의 문의사항에 “개인정보 요청”이라고 남겨주세요.</p></div></section><section><span>06</span><div><h2>개인정보 보호 담당</h2><p>담당: 에어픽 운영자. 개인정보 관련 요청은 사이트의 상담 신청란을 통해 접수합니다.</p></div></section></div><div className="cta-band"><div><h3>서비스 이용 방식도 확인하세요</h3><p>상담부터 예약까지의 진행 방식을 안내합니다.</p></div><Link href="/service-policy" className="btn primary">이용 안내 보기 →</Link></div></div></>;
}
