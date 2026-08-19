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
  ["등록된 기술자가 아직 없는 지역은 어떻게 하나요?", "기존 작업 문의를 남겨주시면 지역과 조건을 확인해 연결 가능 여부를 안내합니다. 문의만으로 예약이 확정되지는 않습니다."],
  ["기술자 프로필은 누구나 바로 공개되나요?", "아니요. 연락처와 기본 경력, 활동 분야를 확인한 프로필부터 순차적으로 공개합니다."],
  ["기술자에게 문의하면 비용이 드나요?", "기술자 검색과 문의 접수는 무료입니다. 실제 작업 비용은 기술자와 작업 조건을 확인한 뒤 결정합니다."],
  ["기술자 등록은 무료인가요?", "초기 기술자 등록과 문의 수신은 무료입니다. 향후 유료 기능을 운영하는 경우 적용 전에 별도로 안내합니다."],
];

export default function Home() {
  const jsonLd = { "@context":"https://schema.org", "@type":"WebSite", name:SITE.name, url:SITE.url, description:SITE.description };
  return <div className="home-v2">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>

    <section className="home-hero">
      <div className="home-hero-copy">
        <div className="home-badge"><i/> 에어컨 기술자 찾기 · 문의 접수</div>
        <h1>내 주변<br/><em>에어컨 기술자</em>를<br/>찾아보세요</h1>
        <p>지역과 필요한 작업을 검색하고,<br/>등록된 기술자의 경력·가격·작업사진을 확인하세요.</p>
        <form className="tech-search" action="/technicians">
          <label><span>지역</span><input name="area" aria-label="지역" placeholder="예: 서울 동작구"/></label>
          <label><span>필요한 작업</span><select name="service" aria-label="필요한 작업" defaultValue=""><option value="">작업 선택</option><option value="설치">신규 설치</option><option value="이전설치">이전 설치</option><option value="수리">점검·수리</option><option value="청소">분해 청소</option><option value="시스템에어컨">시스템에어컨</option></select></label>
          <button type="submit">기술자 찾기 →</button>
        </form>
        <div className="market-hero-links"><Link href="/estimate">찾는 기술자가 없으면 문의 남기기</Link><Link href="/register/technician">기술자로 등록하기</Link></div>
        <ul className="home-proof"><li><b>직접</b><span>프로필 비교</span></li><li><b>무료</b><span>문의 접수</span></li><li><b>확인 후</b><span>예약 결정</span></li></ul>
      </div>
      <div className="home-hero-media">
        <div className="home-hero-photo" role="img" aria-label="거실 벽걸이 에어컨 설치 예시"></div>
        <div className="home-float-card home-float-top"><span>등록 가능 분야</span><b>설치 · 청소 · 수리</b><small>경력과 작업사진으로 소개</small></div>
        <div className="home-float-card home-float-bottom"><i>A</i><div><b>기술자를 찾는 새로운 방법</b><small>검색하고 확인한 뒤 직접 선택</small></div><strong>→</strong></div>
      </div>
    </section>

    <nav className="home-quick" aria-label="빠른 안내"><span>바로가기</span><Link href="/technicians">기술자 찾기</Link><Link href="/register/technician">기술자 등록</Link><Link href="/price">예상 가격</Link><Link href="/cases">비용 사례</Link><Link href="/estimate">작업 문의</Link></nav>

    <section className="market-split"><div><span>고객이신가요?</span><h2>지역 기술자를<br/>직접 찾아보세요</h2><p>기술과 경력, 활동지역과 서비스 가격을 확인하고 원하는 기술자에게 문의할 수 있습니다.</p><Link href="/technicians">기술자 찾기 →</Link></div><div><span>현장 기술자이신가요?</span><h2>내 경력을 보여줄<br/>프로필을 준비하세요</h2><p>에어컨 설치·청소·수리 경력과 활동지역을 등록하고 고객 문의를 받을 수 있습니다.</p><Link href="/register/technician">무료 등록 신청 →</Link></div></section>

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

    <section className="home-flow"><div className="home-block"><div className="home-flow-title"><span>05 · HOW IT WORKS</span><h2>검색부터 선택까지</h2><p>에어픽이 기술자를 임의로 배정하지 않아요.<br/>고객이 확인하고 직접 결정합니다.</p></div><ol><li><b>01</b><div><strong>지역·작업 검색</strong><span>필요한 조건으로 기술자 찾기</span></div></li><li><b>02</b><div><strong>프로필 확인</strong><span>경력·기술·가격·작업사진 비교</span></div></li><li><b>03</b><div><strong>상담 요청</strong><span>기술자에게 작업 조건 문의</span></div></li><li><b>04</b><div><strong>고객 결정</strong><span>가격과 일정 확인 후 예약 선택</span></div></li></ol></div></section>

    <section className="home-block home-faq"><div className="home-heading"><div><span>06 · FAQ</span><h2>문의 전에 많이 물어보는 내용</h2></div></div><div className="home-faq-list">{faq.map(([question,answer])=><details key={question}><summary>{question}<span>＋</span></summary><p>{answer}</p></details>)}</div></section>

    <section className="home-bottom-cta"><div><span>에어컨 기술자와 고객이 만나는 곳</span><h2>기술자를 찾거나,<br/>내 기술을 등록해보세요.</h2><p>검색할 프로필이 아직 없는 지역은 기존 작업 문의로 연결을 도와드립니다.</p><div className="bottom-cta-actions"><Link href="/technicians">기술자 찾기 <b>→</b></Link><Link href="/register/technician">기술자 등록</Link></div></div><div className="home-bottom-mark">A</div></section>
  </div>;
}
