import type { Metadata } from "next";
import Link from "@/components/HardLink";
import { SITE } from "../lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "에어픽 | 아파트 단지별 홈케어·시공 표준 단가", template: "%s | 에어픽" },
  description: SITE.description,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  other: { "format-detection": "telephone=no" },
  icons: { icon: "/favicon.svg" },
  applicationName: SITE.name,
  category: "home services",
  keywords: ["아파트 시공 단가", "홈케어", "에어컨 설치", "에어컨 이전설치", "커튼 설치", "집수리"],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/", types: { "application/rss+xml": `${SITE.url}/rss.xml` } },
  openGraph: { title: "에어픽 | 아파트 단지별 홈케어·시공 표준 단가", description: SITE.description, type: "website", locale: "ko_KR", siteName: SITE.name, images: [{ url: "/og-homecare-marketplace.png", width: 1536, height: 1024, alt: "아파트 단지별 홈케어·시공 표준 단가 - 에어픽" }] },
  twitter: { card: "summary_large_image", title: "에어픽", description: SITE.description, images: ["/og-homecare-marketplace.png"] },
  verification: process.env.NAVER_SITE_VERIFICATION ? { other: { "naver-site-verification": process.env.NAVER_SITE_VERIFICATION } } : undefined,
};

function Header() {
  return <header className="site-header"><div className="header-inner">
    <Link href="/" className="brand"><span className="brand-mark">A</span><span>에어픽</span></Link>
    <nav aria-label="주요 메뉴"><Link href="/apt">단지별 단가</Link><Link href="/technicians">기술자 찾기</Link><Link href="/technicians?service=에어컨">에어컨</Link><Link href="/technicians?service=전기">전기</Link><Link href="/price">가격안내</Link><Link href="/register/technician">기술자 등록</Link></nav>
    <Link href="/apt" className="header-cta">단지 단가 <span>→</span></Link>
  </div></header>;
}

function Footer() {
  return <footer className="footer"><div className="footer-inner"><div><div className="brand footer-brand"><span className="brand-mark">A</span><span>에어픽</span></div><p>단지·평형별 표준 단가를 먼저 보고,<br/>필요한 현장 기술자를 찾습니다.</p></div><div className="footer-links"><div><b>단지별 단가</b><Link href="/apt">아파트 찾기</Link><Link href="/apt#aircon">에어컨</Link><Link href="/apt#curtain">커튼·블라인드</Link><Link href="/apt#repair">집수리</Link></div><div><b>마켓플레이스</b><Link href="/technicians">기술자 찾기</Link><Link href="/register/technician">기술자 등록</Link><Link href="/estimate">작업 문의</Link><Link href="/service-policy">이용 방식</Link></div><div><b>가격 정보</b><Link href="/price">에어컨 예상 가격</Link><Link href="/cases">비용 사례</Link><Link href="/privacy">개인정보 처리방침</Link><span>예약은 조건 확인 후 결정</span></div></div></div><div className="footer-bottom">© 2026 AIRPICK. 단지별 금액은 참고용 예상치이며 실제 비용은 현장 실측과 계약 조건에 따라 달라집니다.</div></footer>;
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body><Header/><main>{children}</main><Footer/><div className="mobile-sticky"><Link href="/technicians">기술자 찾기</Link><Link href="/estimate">작업 문의</Link></div></body></html>;
}
