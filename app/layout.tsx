import type { Metadata } from "next";
import Link from "@/components/HardLink";
import { SITE } from "../lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "홈프라이스 | 아파트 단지별 홈케어·시공 표준 단가", template: "%s | 홈프라이스" },
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
  openGraph: { title: "홈프라이스 | 아파트 단지별 홈케어·시공 표준 단가", description: SITE.description, type: "website", locale: "ko_KR", siteName: SITE.name, images: [{ url: "/og-homecare-marketplace.png", width: 1536, height: 1024, alt: "아파트 단지별 홈케어·시공 표준 단가 - 홈프라이스" }] },
  twitter: { card: "summary_large_image", title: "홈프라이스", description: SITE.description, images: ["/og-homecare-marketplace.png"] },
  verification: process.env.NAVER_SITE_VERIFICATION ? { other: { "naver-site-verification": process.env.NAVER_SITE_VERIFICATION } } : undefined,
};

function Header() {
  return <header className="site-header"><div className="header-inner">
    <Link href="/" className="brand"><span className="brand-mark">H</span><span>홈프라이스</span></Link>
    <nav aria-label="주요 메뉴"><Link href="/apt">단지별 단가</Link><Link href="/apt#aircon">에어컨 단가</Link><Link href="/apt#curtain">커튼·블라인드</Link><Link href="/apt#repair">집수리</Link><Link href="/estimate">무료 견적 신청</Link></nav>
    <Link href="/estimate" className="header-cta">무료 견적 <span>→</span></Link>
  </div></header>;
}

function Footer() {
  return <footer className="footer"><div className="footer-inner"><div><div className="brand footer-brand"><span className="brand-mark">H</span><span>홈프라이스</span></div><p>단지별 표준 단가를 먼저 확인하고,<br/>현장 조건에 맞는 견적을 접수합니다.</p></div><div className="footer-links"><div><b>단지별 단가</b><Link href="/apt">아파트 찾기</Link><Link href="/apt#aircon">에어컨</Link><Link href="/apt#curtain">커튼·블라인드</Link><Link href="/apt#repair">집수리</Link></div><div><b>견적 안내</b><Link href="/estimate">무료 견적 신청</Link><Link href="/price">항목별 예상 가격</Link><Link href="/cases">비용 사례</Link><Link href="/service-policy">이용 방식</Link></div><div><b>서비스 정보</b><Link href="/register/technician">기술자 등록</Link><Link href="/privacy">개인정보 처리방침</Link><span>예약은 금액 확인 후 결정</span></div></div></div><div className="footer-bottom">© 2026 HOMEPRICE. 단지별 금액은 참고용 예상치이며 실제 비용은 현장 실측과 계약 조건에 따라 달라집니다.</div></footer>;
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body><Header/><main>{children}</main><Footer/><div className="mobile-sticky"><Link href="/apt">단지별 단가</Link><Link href="/estimate">무료 견적 신청</Link></div></body></html>;
}
