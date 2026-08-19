import type { Metadata } from "next";
import Link from "@/components/HardLink";
import { SITE } from "../lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "에어픽 | 내 주변 에어컨 기술자 찾기", template: "%s | 에어픽" },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: { title: "에어픽 | 내 주변 에어컨 기술자 찾기", description: SITE.description, type: "website", locale: "ko_KR", siteName: SITE.name, images: [{ url: "/og-marketplace.png", width: 1536, height: 1024, alt: "내 주변 에어컨 기술자 찾기 - 에어픽" }] },
  twitter: { card: "summary_large_image", title: "에어픽", description: SITE.description, images: ["/og-marketplace.png"] },
};

function Header() {
  return <header className="site-header"><div className="header-inner">
    <Link href="/" className="brand"><span className="brand-mark">A</span><span>에어픽</span></Link>
    <nav aria-label="주요 메뉴"><Link href="/technicians">기술자 찾기</Link><Link href="/install">설치</Link><Link href="/relocation">이전설치</Link><Link href="/repair">수리</Link><Link href="/price">가격안내</Link><Link href="/register/technician">기술자 등록</Link></nav>
    <Link href="/estimate" className="header-cta">작업 문의 <span>→</span></Link>
  </div></header>;
}

function Footer() {
  return <footer className="footer"><div className="footer-inner"><div><div className="brand footer-brand"><span className="brand-mark">A</span><span>에어픽</span></div><p>현장 기술자는 경력을 알리고,<br/>고객은 직접 확인하고 선택합니다.</p></div><div className="footer-links"><div><b>마켓플레이스</b><Link href="/technicians">기술자 찾기</Link><Link href="/register/technician">기술자 등록</Link><Link href="/estimate">작업 문의</Link><Link href="/service-policy">이용 방식</Link></div><div><b>작업 분야</b><Link href="/install">신규 설치</Link><Link href="/relocation">이전설치</Link><Link href="/repair">수리</Link><Link href="/cleaning">청소</Link><Link href="/system-aircon">시스템에어컨</Link></div><div><b>안내</b><Link href="/price">예상 가격</Link><Link href="/cases">비용 사례</Link><Link href="/privacy">개인정보 처리방침</Link><span>예약은 조건 확인 후 결정</span></div></div></div><div className="footer-bottom">© 2026 AIRPICK. 에어픽은 직접 시공하지 않으며 기술자 프로필 검색과 상담 연결을 돕습니다.</div></footer>;
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body><Header/><main>{children}</main><Footer/><div className="mobile-sticky"><Link href="/technicians">기술자 찾기</Link><Link href="/estimate">작업 문의</Link></div></body></html>;
}
