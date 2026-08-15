import Link from "@/components/HardLink";
import { airconTypes, cases, money, prices, SITE } from "../lib/site";

const inquiryServices = [
  { href: "/install", no: "01", icon: "+", title: "신규 설치", copy: "새 제품 설치가 필요해요" },
  { href: "/relocation", no: "02", icon: "↔", title: "이전 설치", copy: "철거 후 다른 곳에 옮기고 싶어요" },
  { href: "/repair", no: "03", icon: "⚙", title: "점검·수리", copy: "냉방, 누수, 소음 문제가 있어요" },
  { href: "/cleaning", no: "04", icon: "✦", title: "분해 청소", copy: "냄새와 내부 오염이 걱정돼요" },
  { href: "/system-aircon", no: "05", icon: "▦", title: "시스템에어컨", copy: "가정용 천장형 상담이 필요해요" },
  { href: "/commercial-aircon", no: "06", icon: "▤", title: "상업용 냉난방", copy: "매장·사무실용으로 문의할게요" },
];

const faq = [
  ["문의하면 바로 예약되는 건가요?", "아니요. 문의 내용을 확인한 뒤 연결 가능 여부를 안내하며, 업체와 가격·일정·작업 조건을 확인한 후 예약 여부를 결정합니다."],
  ["상담 신청에 비용이 드나요?", "문의 접수와 상담 신청은 무료입니다. 실제 작업 비용은 제품과 현장 조건을 확인한 업체가 별도로 안내합니다."],
  ["사진을 꼭 올려야 하나요?", "사진은 선택사항입니다. 다만 에어컨 전체, 실외기 위치와 배관 경로 사진이 있으면 현장 조건을 파악하는 데 도움이 됩니다."],
  ["어느 지역에서 문의할 수 있나요?", "전국 주소를 입력해 문의할 수 있습니다. 지역과 작업 조건에 따라 연결 가능 여부는 달라질 수 있습니다."],
];

export default function Home() {
  const jsonLd = { "@context":"https://schema.org", "@type":"WebSite", name:SITE.name, url:SITE.url, description:SITE.description };
  return <div className="home-v2">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>

    <section className="home-hero">
      <div className="home-hero-copy">
        <div className="home-badge"><i/> 설치 · 이전 · 수리 · 청소 문의</div>
        <h1>에어컨 문제,<br/><em>어디에 문의할지</em><br/>막막하셨나요?</h1>
        <p>제품 종류와 필요한 작업만 알려주세요.<br/>참고 비용과 상담 가능 여부를 확인해드립니다.</p>
        <div className="home-hero-actions">
          <Link href="/estimate" className="home-main-cta">에어컨 문의하기 <span>→</span></Link>
          <Link href="/price" className="home-sub-cta">예상 가격 먼저 보기</Link>
        </div>
        <ul className="home-proof"><li><b>무료</b><span>문의 접수</span></li><li><b>1분</b><span>간편 신청</span></li><li><b>전국</b><span>지역 입력</span></li></ul>
      </div>
      <div className="home-hero-media">
        <div className="home-hero-photo" role="img" aria-label="거실 벽걸이 에어컨 설치 예시"></div>
        <div className="home-float-card home-float-top"><span>지금 필요한 작업</span><b>설치부터 수리까지</b><small>한 번에 문의하세요</small></div>
        <div className="home-float-card home-float-bottom"><i>A</i><div><b>에어픽 문의 접수</b><small>작업 조건 확인 후 개별 안내</small></div><strong>무료</strong></div>
      </div>
    </section>

    <nav className="home-quick" aria-label="빠른 안내"><span>무엇이 궁금하세요?</span><Link href="/price">예상 가격</Link><Link href="/cases">비용 사례</Link><Link href="/service-policy">이용 방식</Link><Link href="/estimate">기타 문의</Link></nav>

    <section className="home-block home-services">
      <div className="home-heading"><div><span>01 · SERVICE</span><h2>어떤 작업이 필요하세요?</h2></div><p>가장 가까운 항목을 선택하면<br/>해당 서비스의 비용과 확인사항을 볼 수 있어요.</p></div>
      <div className="home-service-grid">{inquiryServices.map(service=><Link href={service.href} className="home-service" key={service.title}><small>{service.no}</small><i>{service.icon}</i><div><h3>{service.title}</h3><p>{service.copy}</p></div><b>→</b></Link>)}</div>
      <div className="home-other"><span>철거, 냉매 충전 또는 정확한 작업명을 모르시나요?</span><Link href="/estimate">기타 문의 남기기 →</Link></div>
    </section>

    <section className="home-type-section">
      <div className="home-block">
        <div className="home-heading light"><div><span>02 · AIRCON TYPE</span><h2>제품 종류별로 확인하세요</h2></div><p>벽걸이부터 시스템·상업용까지<br/>사진을 보고 내 제품과 가까운 유형을 선택하세요.</p></div>
        <div className="home-type-grid">{airconTypes.map((type,index)=><Link href={`/estimate?aircon=${type.slug}`} className="home-type-card" key={type.slug}><div className={`home-type-photo photo-${type.photo}`} role="img" aria-label={`${type.name} 예시 사진`}><span>0{index+1}</span></div><div><h3>{type.name}</h3><p>{type.copy}</p><small>참고 시작가 <b>{type.price}</b></small></div></Link>)}</div>
      </div>
    </section>

    <section className="home-block home-price-area">
      <div className="home-price-copy"><span>03 · PRICE GUIDE</span><h2>문의 전,<br/>대략적인 비용부터</h2><p>표시된 금액은 일반적인 조건을 기준으로 한 참고 가격입니다. 배관 길이, 실외기 위치와 제품 상태에 따라 실제 비용은 달라질 수 있어요.</p><Link href="/price">전체 예상 가격 확인 →</Link></div>
      <div className="home-price-card"><div className="home-price-head"><b>자주 찾는 예상 가격</b><span>참고용</span></div>{prices.slice(0,5).map((price,index)=><div className="home-price-row" key={`${price.name}-${index}`}><i className={`p${index}`}/><div><b>{price.category} {price.name}</b><small>{price.note}</small></div><strong>{money(price.price)}<small> / {price.unit}</small></strong></div>)}<p>※ 정확한 금액은 상담 및 현장 조건 확인 후 결정됩니다.</p></div>
    </section>

    <section className="home-case-section"><div className="home-block">
      <div className="home-heading"><div><span>04 · COST EXAMPLES</span><h2>비슷한 조건의 비용 예시</h2></div><Link href="/cases" className="home-section-link">전체 사례 보기 →</Link></div>
      <div className="home-case-grid">{cases.slice(0,3).map(item=><Link href={`/cases/${item.slug}`} className="home-case" key={item.slug}><div className="home-case-photo" style={{backgroundImage:`url('${item.image}')`}}><span>{item.type}</span><small>현장 예시 이미지</small></div><div><small>예상 조건 · {item.region}</small><h3>{item.title}</h3><p>{item.summary}</p><footer><span>예상 작업비</span><b>{money(item.total)}</b></footer></div></Link>)}</div>
    </div></section>

    <section className="home-flow"><div className="home-block"><div className="home-flow-title"><span>05 · HOW IT WORKS</span><h2>문의부터 결정까지</h2><p>신청만으로 예약되지 않아요.<br/>확인하고 나서 결정하시면 됩니다.</p></div><ol><li><b>01</b><div><strong>문의 접수</strong><span>서비스·제품·지역 입력</span></div></li><li><b>02</b><div><strong>내용 확인</strong><span>현장 조건과 상담 가능 여부 확인</span></div></li><li><b>03</b><div><strong>상담 안내</strong><span>연결 가능한 업체 정보 안내</span></div></li><li><b>04</b><div><strong>고객 결정</strong><span>가격과 일정 확인 후 예약 선택</span></div></li></ol></div></section>

    <section className="home-block home-faq"><div className="home-heading"><div><span>06 · FAQ</span><h2>문의 전에 많이 물어보는 내용</h2></div></div><div className="home-faq-list">{faq.map(([question,answer])=><details key={question}><summary>{question}<span>＋</span></summary><p>{answer}</p></details>)}</div></section>

    <section className="home-bottom-cta"><div><span>에어컨 설치·이전·수리·청소</span><h2>무엇부터 확인해야 할지 몰라도<br/>편하게 문의하세요.</h2><p>필요한 작업과 지역을 남겨주시면 확인 후 연락드립니다.</p><Link href="/estimate">무료로 문의하기 <b>→</b></Link></div><div className="home-bottom-mark">A</div></section>
  </div>;
}
