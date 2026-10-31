import Link from "@/components/HardLink";
import {cases,money,prices,SITE} from "../lib/site";

const mainCategories=[
  {service:"에어컨",no:"01",icon:"❄",title:"에어컨",copy:"설치 · 이전 · 청소 · 수리",href:"/apt#aircon"},
  {service:"커튼·블라인드",no:"02",icon:"▥",title:"커튼·블라인드",copy:"실측 · 타공 · 레일 설치",href:"/apt#curtain"},
  {service:"집수리",no:"03",icon:"⌂",title:"집수리",copy:"수전 · 환풍기 · 방충망",href:"/apt#repair"},
  {service:"전기",no:"04",icon:"↯",title:"전기",copy:"조명 · 콘센트 · 전기 공사",href:"/estimate?service=전기"},
  {service:"배관·수도",no:"05",icon:"≈",title:"배관·수도",copy:"누수 · 막힘 · 수도 교체",href:"/estimate?service=배관·수도"},
  {service:"청소",no:"06",icon:"✦",title:"전문 청소",copy:"에어컨 · 입주 · 가전 청소",href:"/estimate?service=청소"},
];

const faq=[
  ["표준 단가와 실제 견적은 왜 다를 수 있나요?","배관 길이, 타공, 고층 작업, 제품 종류와 현장 상태에 따라 추가 작업이 생길 수 있습니다. 접수한 조건을 확인한 뒤 예상 범위와 추가 가능 항목을 안내합니다."],
  ["견적을 접수하면 바로 예약되나요?","아니요. 작업 조건과 예상 금액, 일정 안내를 확인한 뒤 고객이 동의해야 예약이 확정됩니다."],
  ["견적 신청은 무료인가요?","단가 확인과 견적 접수는 무료입니다. 실제 작업비는 안내받은 조건과 금액을 확인한 뒤 결정합니다."],
  ["우리 아파트가 목록에 없으면 어떻게 하나요?","견적 신청에서 정확한 주소와 작업 내용을 남겨주세요. 단지 정보가 없어도 현장 조건을 기준으로 확인할 수 있습니다."],
];

export default function Home(){
  const jsonLd={"@context":"https://schema.org","@type":"WebSite",name:SITE.name,url:SITE.url,description:SITE.description};
  return <div className="home-v2"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>
    <section className="home-hero price-first-hero"><div className="home-hero-copy"><div className="home-badge"><i/> 단지별 홈케어 표준 단가</div><h1>우리 아파트<br/><em>시공 단가를 먼저</em><br/>확인하세요</h1><p>에어컨 설치·이전, 커튼·블라인드 타공, 구축 아파트 생활수리까지.<br/>실제 대단지 정보를 기준으로 예상 비용과 추가 작업 조건을 확인합니다.</p><div className="home-hero-actions"><Link href="/apt" className="home-main-cta">우리 아파트 표준 단가 보기 <b>→</b></Link><Link href="/estimate" className="home-sub-cta">현장 추가금 없는 견적 문의하기</Link></div><ul className="home-proof"><li><b>300곳</b><span>수도권 대단지</span></li><li><b>무료</b><span>견적 접수</span></li><li><b>금액 확인 후</b><span>예약 확정</span></li></ul></div><div className="home-hero-media price-hero-visual"><div className="price-visual-card"><span>APARTMENT PRICE GUIDE</span><h2>단지 정보부터<br/>예상 작업비까지</h2><div>{mainCategories.slice(0,3).map(item=><Link href={item.href} key={item.title}><i>{item.icon}</i><span><b>{item.title}</b><small>{item.copy}</small></span><strong>→</strong></Link>)}</div><footer><span>서울 · 경기 · 인천</span><b>1,000세대 이상 주요 단지</b></footer></div></div></section>

    <nav className="home-quick" aria-label="빠른 안내"><span>빠른 메뉴</span><Link href="/apt">단지별 단가</Link><Link href="/apt#aircon">에어컨 단가</Link><Link href="/apt#curtain">커튼·블라인드</Link><Link href="/apt#repair">집수리</Link><Link href="/estimate">무료 견적 신청</Link></nav>

    <section className="home-block home-services"><div className="home-heading"><div><span>01 · CATEGORY</span><h2>필요한 작업을 선택하세요</h2></div><p>표준 단가를 확인하거나 작업 조건을 바로 접수할 수 있습니다.<br/>주소와 현장 사진이 있으면 더 정확하게 안내합니다.</p></div><div className="home-service-grid category-grid">{mainCategories.map(item=><Link href={item.href} className="home-service" key={item.title}><small>{item.no}</small><i>{item.icon}</i><div><h3>{item.title}</h3><p>{item.copy}</p></div><b>→</b></Link>)}</div><div className="home-other"><span>보일러·용접·시설·가구 설치 등 다른 작업이 필요하신가요?</span><Link href="/estimate?service=기타">작업 조건 접수하기 →</Link></div></section>

    <section className="home-block home-price-area"><div className="home-price-copy"><span>02 · STANDARD PRICE GUIDE</span><h2>항목별 표준<br/>시공 단가 가이드</h2><p>자주 요청되는 에어컨 설치·이전·청소·수리 작업의 기본 가격과 추가 비용 발생 조건을 정리했습니다. 현장 접수 전 예상 범위를 먼저 비교하세요.</p><Link href="/price">항목별 예상 가격 확인 →</Link></div><div className="home-price-card"><div className="home-price-head"><b>자주 찾는 예상 가격</b><span>참고용</span></div>{prices.slice(0,5).map((price,index)=><div className="home-price-row" key={`${price.name}-${index}`}><i className={`p${index}`}/><div><b>{price.category} {price.name}</b><small>{price.note}</small></div><strong>{money(price.price)}<small> / {price.unit}</small></strong></div>)}<p>※ 정확한 금액은 제품과 현장 조건을 확인한 뒤 안내합니다.</p></div></section>

    <section className="home-case-section"><div className="home-block"><div className="home-heading"><div><span>03 · COST EXAMPLES</span><h2>현장 조건별 비용 예시</h2></div><Link href="/cases" className="home-section-link">전체 사례 보기 →</Link></div><div className="home-case-grid">{cases.slice(0,3).map(item=><Link href={`/cases/${item.slug}`} className="home-case" key={item.slug}><div className="home-case-photo" style={{backgroundImage:`url('${item.image}')`}}><span>{item.type}</span><small>현장 예시 이미지</small></div><div><small>예상 조건 · {item.region}</small><h3>{item.title}</h3><p>{item.summary}</p><footer><span>예상 작업비</span><b>{money(item.total)}</b></footer></div></Link>)}</div></div></section>

    <section className="home-flow"><div className="home-block"><div className="home-flow-title"><span>04 · HOW IT WORKS</span><h2>단가 확인부터<br/>예약 확정까지</h2><p>작업자가 정해지기 전에 예상 금액과 조건을 먼저 확인합니다.<br/>안내받은 내용에 동의한 뒤 예약을 결정하세요.</p></div><ol><li><b>01</b><div><strong>단지별 표준 단가 확인</strong><span>아파트와 작업 항목별 예상 범위 확인</span></div></li><li><b>02</b><div><strong>작업 조건 접수</strong><span>주소·제품·사진·희망 일정 전달</span></div></li><li><b>03</b><div><strong>기술자 배정 안내</strong><span>표준 단가 준수 가능 여부와 조건 안내</span></div></li><li><b>04</b><div><strong>금액 확인 후 예약 확정</strong><span>총액과 추가 조건을 확인하고 결정</span></div></li></ol></div></section>

    <section className="home-block home-faq"><div className="home-heading"><div><span>05 · FAQ</span><h2>견적 접수 전에 확인하세요</h2></div></div><div className="home-faq-list">{faq.map(([question,answer])=><details key={question}><summary>{question}<span>＋</span></summary><p>{answer}</p></details>)}</div></section>

    <section className="home-bottom-cta"><div><span>표준 단가를 확인한 다음</span><h2>현장 조건에 맞는<br/>견적을 요청하세요.</h2><p>주소와 작업 내용을 남기면 예상 금액과 연결 가능 여부를 안내합니다.</p><div className="bottom-cta-actions"><Link href="/apt">단지별 단가 <b>→</b></Link><Link href="/estimate">무료 견적 신청</Link></div></div><div className="home-bottom-mark">H</div></section>
  </div>;
}
