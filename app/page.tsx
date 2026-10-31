import Link from "@/components/HardLink";
import { cases, money, prices, SITE } from "../lib/site";

const mainCategories = [
  { service: "에어컨", no: "01", icon: "❄", title: "에어컨", copy: "설치 · 이전 · 청소 · 수리" },
  { service: "전기", no: "02", icon: "↯", title: "전기", copy: "조명 · 콘센트 · 전기 공사" },
  { service: "배관·수도", no: "03", icon: "≈", title: "배관·수도", copy: "누수 · 막힘 · 수도 교체" },
  { service: "보일러·난방", no: "04", icon: "♨", title: "보일러·난방", copy: "점검 · 수리 · 교체" },
  { service: "청소", no: "05", icon: "✦", title: "청소", copy: "가전 · 입주 · 전문 청소" },
  { service: "설치·수리", no: "06", icon: "+", title: "설치·수리", copy: "가구 · 가전 · 생활 수리" },
  { service: "용접·금속", no: "07", icon: "◇", title: "용접·금속", copy: "동관 · 철재 · 현장 용접" },
  { service: "시설·통신", no: "08", icon: "⌁", title: "시설·통신", copy: "CCTV · 네트워크 · 시설관리" },
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
        <div className="home-badge"><i/> 생활·현장 기술자 찾기 플랫폼</div>
        <h1>우리 동네<br/><em>현장 기술자</em>를<br/>찾아보세요</h1>
        <p>에어컨·전기·배관·보일러부터 용접·시설 작업까지,<br/>지역 기술자의 경력과 서비스를 확인하세요.</p>
        <form className="tech-search" action="/technicians">
          <label><span>지역</span><input name="area" aria-label="지역" placeholder="예: 서울 동작구"/></label>
          <label><span>필요한 기술</span><select name="service" aria-label="필요한 기술" defaultValue=""><option value="">기술 선택</option><option value="에어컨">에어컨</option><option value="전기">전기</option><option value="배관·수도">배관·수도</option><option value="보일러·난방">보일러·난방</option><option value="청소">청소</option><option value="설치·수리">설치·수리</option><option value="용접">용접</option><option value="냉동·환기">냉동·환기</option><option value="CCTV·네트워크">CCTV·네트워크</option><option value="기타">기타 현장 기술</option></select></label>
          <button type="submit">기술자 찾기 →</button>
        </form>
        <div className="market-hero-links"><Link href="/estimate">찾는 기술자가 없으면 문의 남기기</Link><Link href="/register/technician">기술자로 등록하기</Link></div>
        <ul className="home-proof"><li><b>직접</b><span>프로필 비교</span></li><li><b>무료</b><span>문의 접수</span></li><li><b>확인 후</b><span>예약 결정</span></li></ul>
      </div>
      <div className="home-hero-media market-visual"><div className="market-visual-panel"><div className="market-visual-head"><span>NEARBY TECHNICIANS</span><b>필요한 기술을 선택하세요</b></div><div className="market-visual-categories">{mainCategories.slice(0,6).map(item=><span key={item.title}><i>{item.icon}</i>{item.title}</span>)}</div><div className="market-profile-preview"><div className="profile-avatar">A</div><div><b>확인된 기술자 프로필</b><span>경력 · 활동지역 · 서비스 가격</span></div><strong>보기 →</strong></div></div><div className="market-count-card"><b>모든 현장 기술</b><span>직종 제한 없이 등록 신청</span></div></div>
    </section>

    <section className="apt-home-entry"><div><span>NEW · APARTMENT PRICE INDEX</span><h2>우리 아파트·평형별<br/>시공 단가를 먼저 확인하세요</h2><p>에어컨 설치·이전, 커튼·블라인드 타공, 구축 아파트 생활수리를 단지별로 비교합니다.</p><Link href="/apt">단지별 표준 단가 보기 →</Link></div><div className="apt-home-categories"><Link href="/apt#aircon"><i>❄</i><b>에어컨</b><span>설치·이전·청소</span></Link><Link href="/apt#curtain"><i>▥</i><b>커튼·블라인드</b><span>실측·타공·설치</span></Link><Link href="/apt#repair"><i>⌂</i><b>집수리</b><span>수전·환풍기·방충망</span></Link></div></section>

    <nav className="home-quick" aria-label="빠른 안내"><span>빠른 메뉴</span><Link href="/apt">단지별 단가</Link><Link href="/technicians?service=에어컨">에어컨 기사</Link><Link href="/technicians?service=전기">전기 기사</Link><Link href="/technicians?service=배관·수도">배관 기사</Link><Link href="/technicians">전체 기술</Link><Link href="/register/technician">기술자 등록</Link></nav>

    <section className="market-split"><div><span>고객이신가요?</span><h2>지역 기술자를<br/>직접 찾아보세요</h2><p>기술과 경력, 활동지역과 서비스 가격을 확인하고 원하는 기술자에게 문의할 수 있습니다.</p><Link href="/technicians">기술자 찾기 →</Link></div><div><span>현장 기술자이신가요?</span><h2>어떤 기술이든<br/>프로필로 등록하세요</h2><p>생활·설비·산업 현장의 경력과 활동지역을 등록하고 고객에게 내 기술을 알릴 수 있습니다.</p><Link href="/register/technician">무료 등록 신청 →</Link></div></section>

    <section className="home-block home-services">
      <div className="home-heading"><div><span>01 · CATEGORY</span><h2>어떤 기술이 필요하세요?</h2></div><p>등록된 기술 분야부터 검색 결과에 표시합니다.<br/>찾는 직종이 없다면 기타 작업으로 문의하세요.</p></div>
      <div className="home-service-grid category-grid">{mainCategories.map(item=><Link href={`/technicians?service=${encodeURIComponent(item.service)}`} className="home-service" key={item.title}><small>{item.no}</small><i>{item.icon}</i><div><h3>{item.title}</h3><p>{item.copy}</p></div><b>→</b></Link>)}</div>
      <div className="home-other"><span>방충망·타일·도배·철거·간판 등 다른 현장 기술이 필요하신가요?</span><Link href="/technicians?service=기타">전체 기술 검색 →</Link></div>
    </section>

    <section className="home-type-section skill-open"><div className="home-block"><div><span>02 · OPEN REGISTRATION</span><h2>목록에 없는 기술도<br/>등록할 수 있습니다</h2><p>처음부터 직종을 제한하지 않습니다. 실제 현장에서 제공하는 기술과 경력을 알려주시면 확인 후 적절한 분야로 분류합니다.</p><Link href="/register/technician">내 기술 무료 등록 →</Link></div><div className="skill-cloud">{["냉동공조","용접","방충망","타일","도배","철거","CCTV","네트워크","간판","환기","시설관리","가구조립","가전설치","기타 현장 기술"].map((skill,index)=><span className={`skill-${index%4}`} key={skill}>{skill}</span>)}</div></div></section>

    <section className="home-block home-price-area">
      <div className="home-price-copy"><span>03 · FIRST CATEGORY</span><h2>에어컨 분야부터<br/>정보를 쌓고 있어요</h2><p>현재는 에어컨 설치·이전·수리의 참고 가격과 비용 사례를 먼저 제공합니다. 다른 분야는 실제 기술자와 서비스가 등록되는 순서대로 공개합니다.</p><Link href="/price">에어컨 예상 가격 확인 →</Link></div>
      <div className="home-price-card"><div className="home-price-head"><b>자주 찾는 예상 가격</b><span>참고용</span></div>{prices.slice(0,5).map((price,index)=><div className="home-price-row" key={`${price.name}-${index}`}><i className={`p${index}`}/><div><b>{price.category} {price.name}</b><small>{price.note}</small></div><strong>{money(price.price)}<small> / {price.unit}</small></strong></div>)}<p>※ 정확한 금액은 상담 및 현장 조건 확인 후 결정됩니다.</p></div>
    </section>

    <section className="home-case-section"><div className="home-block">
      <div className="home-heading"><div><span>04 · AIRCON COST EXAMPLES</span><h2>먼저 공개한 에어컨 비용 예시</h2></div><Link href="/cases" className="home-section-link">전체 사례 보기 →</Link></div>
      <div className="home-case-grid">{cases.slice(0,3).map(item=><Link href={`/cases/${item.slug}`} className="home-case" key={item.slug}><div className="home-case-photo" style={{backgroundImage:`url('${item.image}')`}}><span>{item.type}</span><small>현장 예시 이미지</small></div><div><small>예상 조건 · {item.region}</small><h3>{item.title}</h3><p>{item.summary}</p><footer><span>예상 작업비</span><b>{money(item.total)}</b></footer></div></Link>)}</div>
    </div></section>

    <section className="home-flow"><div className="home-block"><div className="home-flow-title"><span>05 · HOW IT WORKS</span><h2>검색부터 선택까지</h2><p>에어픽이 기술자를 임의로 배정하지 않아요.<br/>고객이 확인하고 직접 결정합니다.</p></div><ol><li><b>01</b><div><strong>지역·작업 검색</strong><span>필요한 조건으로 기술자 찾기</span></div></li><li><b>02</b><div><strong>프로필 확인</strong><span>경력·기술·가격·작업사진 비교</span></div></li><li><b>03</b><div><strong>상담 요청</strong><span>기술자에게 작업 조건 문의</span></div></li><li><b>04</b><div><strong>고객 결정</strong><span>가격과 일정 확인 후 예약 선택</span></div></li></ol></div></section>

    <section className="home-block home-faq"><div className="home-heading"><div><span>06 · FAQ</span><h2>문의 전에 많이 물어보는 내용</h2></div></div><div className="home-faq-list">{faq.map(([question,answer])=><details key={question}><summary>{question}<span>＋</span></summary><p>{answer}</p></details>)}</div></section>

    <section className="home-bottom-cta"><div><span>생활·현장 기술자와 고객이 만나는 곳</span><h2>기술자를 찾거나,<br/>내 기술을 등록해보세요.</h2><p>직종과 관계없이 등록 신청할 수 있으며, 확인된 프로필부터 검색 결과에 공개합니다.</p><div className="bottom-cta-actions"><Link href="/technicians">기술자 찾기 <b>→</b></Link><Link href="/register/technician">기술자 등록</Link></div></div><div className="home-bottom-mark">A</div></section>
  </div>;
}
