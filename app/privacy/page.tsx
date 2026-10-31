import type { Metadata } from "next";
import Link from "@/components/HardLink";

export const metadata: Metadata = {
  title: "개인정보 처리방침",
  description: "홈프라이스 고객 문의와 기술자 등록 서비스의 개인정보 수집 및 이용 기준입니다.",
};

const sections = [
  ["수집 항목", "고객 문의 필수: 이름, 전화번호, 희망 지역, 기술 분야·작업 종류. 기술자 등록 필수: 이름, 전화번호, 경력, 대표 기술, 활동지역과 소개. 그 밖의 상세 지역, 희망일, 업체명과 첨부사진은 선택 항목입니다."],
  ["수집 목적", "고객 상담과 연결 가능 여부 안내, 기술자 등록 신청 확인과 프로필 공개 절차 안내에 사용합니다."],
  ["제3자 제공", "고객 문의 접수와 동시에 제3자에게 제공하지 않습니다. 연결할 기술자가 정해진 경우 제공받는 사람, 목적, 항목과 보유기간을 별도로 알리고 동의받은 후 제공합니다."],
  ["프로필 공개", "기술자 등록 신청 시 제출한 정보 중 공개할 이름 또는 업체명, 경력, 기술과 활동지역은 신청자와 공개 범위를 확인한 후 프로필에 표시합니다. 전화번호는 별도 확인 없이 공개하지 않습니다."],
  ["보관과 파기", "상담과 등록 확인에 필요한 기간 동안 보관하며, 목적이 끝나거나 삭제 요청을 받으면 관련 법령상 보관 의무가 없는 정보는 지체 없이 삭제합니다."],
  ["동의 거부와 권리", "개인정보 수집에 동의하지 않을 수 있으나 문의 또는 기술자 등록 신청은 제한됩니다. 열람·정정·삭제 요청은 사이트의 작업 문의를 통해 접수할 수 있습니다."],
  ["개인정보 보호 담당", "담당: 홈프라이스 운영자. 개인정보 관련 요청은 사이트의 작업 문의란을 통해 접수합니다."],
];

export default function PrivacyPage() {
  return <><section className="sub-hero"><span className="kicker">PRIVACY</span><h1>개인정보 처리방침</h1><p>문의와 기술자 등록에 필요한 최소한의 정보만 수집합니다.</p></section><div className="content-wrap policy-wrap"><div className="policy-highlight"><b>중요</b><p>접수 단계에서는 고객 정보를 기술자에게 자동 전달하지 않습니다. 기술자 등록 신청 정보 또한 확인 전 자동 공개되지 않습니다.</p></div><div className="policy-list">{sections.map(([title,body],index)=><section key={title}><span>{String(index+1).padStart(2,"0")}</span><div><h2>{title}</h2><p>{body}</p></div></section>)}</div><div className="cta-band"><div><h3>서비스 이용 방식도 확인하세요</h3><p>기술자 검색부터 상담과 예약 결정까지의 방식을 안내합니다.</p></div><Link href="/service-policy" className="btn primary">이용 안내 보기 →</Link></div></div></>;
}
