import type { Metadata } from "next";
import Link from "@/components/HardLink";
import { SITE } from "../lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "에어픽 | 에어컨 설치·이전·수리 문의", template: "%s | 에어픽" },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: { title: "에어픽 | 에어컨 설치·이전·수리 문의", description: SITE.description, type: "website", locale: "ko_KR", siteName: SITE.name, images: [{ url: "/og.png", width: 1536, height: 1024, alt: "에어컨 문의, 어디에 물어볼지 막막할 때 - 에어픽" }] },
  twitter: { card: "summary_large_image", title: "에어픽", description: SITE.description, images: ["/og.png"] },
};

function Header() {
  return <header className="site-header"><div className="header-inner">
    <Link href="/" className="brand"><span className="brand-mark">A</span><span>에어픽</span></Link>
    <nav aria-label="주요 메뉴"><Link href="/install">설치</Link><Link href="/relocation">이전설치</Link><Link href="/repair">수리</Link><Link href="/price">가격안내</Link><Link href="/cases">비용사례</Link><Link href="/service-policy">이용안내</Link></nav>
    <Link href="/estimate" className="header-cta">에어컨 문의 <span>→</span></Link>
  </div></header>;
}

function Footer() {
  return <footer className="footer"><div className="footer-inner"><div><div className="brand footer-brand"><span className="brand-mark">A</span><span>에어픽</span></div><p>에어컨 문의는 간편하게,<br/>결정은 충분히 확인하고.</p></div><div className="footer-links"><div><b>문의 분야</b><Link href="/install">신규 설치</Link><Link href="/relocation">이전설치</Link><Link href="/repair">수리</Link><Link href="/cleaning">청소</Link><Link href="/system-aircon">가정용 시스템</Link><Link href="/commercial-aircon">상업용 냉난방</Link></div><div><b>안내</b><Link href="/price">예상 가격</Link><Link href="/cases">비용 사례</Link><Link href="/service-policy">서비스 이용 안내</Link><Link href="/privacy">개인정보 처리방침</Link></div><div><b>문의 안내</b><span>문의 접수 무료</span><span>연결 가능 여부 개별 안내</span><span>예약은 상담 후 확정</span></div></div></div><div className="footer-bottom">© 2026 AIRPICK. 에어픽은 직접 시공하지 않으며 에어컨 문의 접수와 전문가 상담 연결을 돕습니다.</div></footer>;
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body><Header/><main>{children}</main><Footer/><div className="mobile-sticky"><Link href="/price">가격 안내</Link><Link href="/estimate">에어컨 문의</Link></div></body></html>;
}
