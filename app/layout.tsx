import type { Metadata } from "next";
import Link from "@/components/HardLink";
import { SITE } from "../lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "에어픽 | 에어컨 설치비, 방문 전에 확인하세요", template: "%s | 에어픽" },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: { title: "에어픽 | 에어컨 설치비, 방문 전에 확인하세요", description: SITE.description, type: "website", locale: "ko_KR", siteName: SITE.name },
  twitter: { card: "summary", title: "에어픽", description: SITE.description },
};

function Header() {
  return <header className="site-header"><div className="header-inner">
    <Link href="/" className="brand"><span className="brand-mark">A</span><span>에어픽</span></Link>
    <nav aria-label="주요 메뉴"><Link href="/install">설치</Link><Link href="/relocation">이전설치</Link><Link href="/repair">수리</Link><Link href="/price">가격안내</Link><Link href="/cases">비용사례</Link><Link href="/service-policy">이용안내</Link></nav>
    <Link href="/estimate" className="header-cta">상담 신청 <span>→</span></Link>
  </div></header>;
}

function Footer() {
  return <footer className="footer"><div className="footer-inner"><div><div className="brand footer-brand"><span className="brand-mark">A</span><span>에어픽</span></div><p>가격은 알기 쉽게,<br/>상담은 부담 없이.</p></div><div className="footer-links"><div><b>서비스</b><Link href="/install">신규 설치</Link><Link href="/relocation">이전설치</Link><Link href="/repair">수리</Link><Link href="/cleaning">청소</Link><Link href="/system-aircon">가정용 시스템</Link><Link href="/commercial-aircon">상업용 냉난방</Link></div><div><b>안내</b><Link href="/price">예상 가격</Link><Link href="/cases">비용 사례</Link><Link href="/service-policy">서비스 이용 안내</Link><Link href="/privacy">개인정보 처리방침</Link></div><div><b>상담 안내</b><span>상담 신청 무료</span><span>연결 가능 여부 개별 안내</span><span>예약은 상담 후 확정</span></div></div></div><div className="footer-bottom">© 2026 AIRPICK. 에어픽은 직접 시공하지 않으며 전문가 상담 연결을 돕습니다.</div></footer>;
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body><Header/><main>{children}</main><Footer/><div className="mobile-sticky"><Link href="/price">가격 안내</Link><Link href="/estimate">상담 신청</Link></div></body></html>;
}
