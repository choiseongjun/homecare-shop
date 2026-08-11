import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "../lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "에어픽 | 에어컨 설치비, 방문 전에 확인하세요", template: "%s | 에어픽" },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: { title: "에어픽 | 에어컨 설치비, 방문 전에 확인하세요", description: SITE.description, type: "website", locale: "ko_KR", siteName: SITE.name, images: [{url:"/og.png",width:1792,height:939,alt:"에어픽 에어컨 설치비 사진 견적"}] },
  twitter: { card: "summary_large_image", title: "에어픽", description: SITE.description, images:["/og.png"] },
};

function Header() {
  return <header className="site-header"><div className="header-inner">
    <Link href="/" className="brand"><span className="brand-mark">A</span><span>에어픽</span></Link>
    <nav aria-label="주요 메뉴"><Link href="/install">설치</Link><Link href="/relocation">이전설치</Link><Link href="/price">가격표</Link><Link href="/cases">시공사례</Link><Link href="/blog">에어컨 가이드</Link></nav>
    <Link href="/estimate" className="header-cta">사진 견적 <span>→</span></Link>
  </div></header>;
}

function Footer() {
  return <footer className="footer"><div className="footer-inner"><div><div className="brand footer-brand"><span className="brand-mark">A</span><span>에어픽</span></div><p>가격은 투명하게, 연결은 정확하게.<br/>에어컨 서비스 전문가 연결 플랫폼</p></div><div className="footer-links"><div><b>서비스</b><Link href="/install">신규 설치</Link><Link href="/relocation">이전설치</Link><Link href="/cleaning">청소</Link></div><div><b>안내</b><Link href="/price">가격표</Link><Link href="/cases">시공사례</Link><Link href="/blog">가이드</Link></div><div><b>고객센터</b><a href={SITE.phoneHref}>{SITE.phone}</a><span>평일 09:00–18:00</span></div></div></div><div className="footer-bottom">© 2026 AIRPICK. 에어픽은 검증된 협력 전문가를 연결하는 서비스입니다.</div></footer>;
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body><Header/><main>{children}</main><Footer/><div className="mobile-sticky"><a href={SITE.phoneHref}>전화 상담</a><Link href="/estimate">사진 견적</Link></div></body></html>;
}
