import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "../lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "에어픽 베타 | 서울 에어컨 무료 수요조사", template: "%s | 에어픽 베타" },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: { title: "에어픽 베타 | 서울 에어컨 무료 수요조사", description: SITE.description, type: "website", locale: "ko_KR", siteName: SITE.name },
  twitter: { card: "summary", title: "에어픽 베타", description: SITE.description },
};

function Header() {
  return <><div className="beta-bar">무료 수요조사 베타 · 상담 신청은 예약 확정이 아니며 연결을 보장하지 않습니다</div><header className="site-header"><div className="header-inner">
    <Link href="/" className="brand"><span className="brand-mark">A</span><span>에어픽</span></Link>
    <nav aria-label="주요 메뉴"><Link href="/install">설치</Link><Link href="/relocation">이전설치</Link><Link href="/repair">수리</Link><Link href="/price">예상가격</Link><Link href="/cases">비용예시</Link><Link href="/service-policy">베타안내</Link></nav>
    <Link href="/estimate" className="header-cta">무료 상담 <span>→</span></Link>
  </div></header></>;
}

function Footer() {
  return <footer className="footer"><div className="footer-inner"><div><div className="brand footer-brand"><span className="brand-mark">β</span><span>에어픽 베타</span></div><p>서울 지역 에어컨 서비스의<br/>무료 수요를 확인하는 베타 프로젝트</p></div><div className="footer-links"><div><b>서비스 정보</b><Link href="/install">신규 설치</Link><Link href="/relocation">이전설치</Link><Link href="/repair">수리</Link><Link href="/cleaning">청소</Link><Link href="/system-aircon">가정용 시스템</Link><Link href="/commercial-aircon">상업용 냉난방</Link></div><div><b>베타 안내</b><Link href="/price">예상 가격</Link><Link href="/cases">비용 예시</Link><Link href="/service-policy">무료 베타 운영 안내</Link><Link href="/privacy">개인정보 처리방침</Link></div><div><b>현재 운영</b><span>소개비·예약금 없음</span><span>연결 가능 시 개별 연락</span><span>예약 확정 서비스 아님</span></div></div></div><div className="footer-bottom">© 2026 AIRPICK BETA. 무료 수요조사이며 신청만으로 예약이나 전문가 연결이 확정되지 않습니다.</div></footer>;
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body><Header/><main>{children}</main><Footer/><div className="mobile-sticky beta-sticky"><Link href="/service-policy">베타 안내</Link><Link href="/estimate">무료 상담 신청</Link></div></body></html>;
}
