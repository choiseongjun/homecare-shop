import type { Metadata } from "next";
import Link from "@/components/HardLink";
import { technicians } from "@/lib/technicians";

export const metadata:Metadata={title:"생활·현장 기술자 찾기",description:"지역과 필요한 기술로 생활·설비·산업 현장 기술자의 경력, 서비스와 활동지역을 확인하세요."};

export default async function Technicians({searchParams}:{searchParams:Promise<{area?:string;service?:string}>}){
  const {area="",service=""}=await searchParams;
  const normalizedArea=area.trim().toLowerCase();
  const normalizedService=service.trim().toLowerCase();
  const results=technicians.filter(item=>{
    const areaMatch=!normalizedArea||item.areas.some(value=>value.toLowerCase().includes(normalizedArea)||normalizedArea.includes(value.toLowerCase()));
    const serviceText=[item.category,...item.services].join(" ").toLowerCase();
    return areaMatch&&(!normalizedService||serviceText.includes(normalizedService));
  });
  const query=[area,service].filter(Boolean).join(" · ");
  return <>
    <section className="directory-hero"><span className="kicker">FIND A TECHNICIAN</span><h1>생활·현장 기술자 찾기</h1><p>지역과 필요한 기술로 기사 프로필을 검색하세요.</p><form action="/technicians"><label><span>지역</span><input name="area" defaultValue={area} placeholder="예: 서울 동작구"/></label><label><span>필요한 기술</span><select name="service" defaultValue={service}><option value="">전체 기술</option><option value="에어컨">에어컨</option><option value="전기">전기</option><option value="배관·수도">배관·수도</option><option value="보일러·난방">보일러·난방</option><option value="청소">청소</option><option value="설치·수리">설치·수리</option><option value="용접·금속">용접·금속</option><option value="시설·통신">시설·통신</option><option value="기타">기타 현장 기술</option></select></label><button>검색하기 →</button></form></section>
    <section className="directory-body"><div className="demo-data-notice"><b>DEMO</b><p>현재 표시되는 기사 이름, 업체, 경력, 가격과 작업사례는 서비스 화면 검증을 위한 가상 데이터입니다. 실제 기사 등록이 시작되면 확인된 프로필로 교체됩니다.</p></div><div className="directory-result-head"><div><small>SEARCH RESULT</small><h2>{query||"전체 현장 기술자"}</h2></div><span>{results.length}개의 데모 프로필</span></div>
      {results.length>0?<div className="technician-grid">{results.map(item=><Link href={`/technicians/${item.slug}`} className="technician-card" key={item.slug}><div className="technician-card-top"><div className="technician-avatar">{item.initial}</div><div><span className="demo-chip">데모 프로필</span><h3>{item.business}</h3><p>{item.name} 기사 · 경력 {item.experience}년</p></div><b>→</b></div><div className="technician-tags"><strong>{item.category}</strong>{item.services.slice(0,2).map(value=><span key={value}>{value}</span>)}</div><p className="technician-intro">{item.intro}</p><footer><span>{item.areas.slice(0,2).join(" · ")}</span><b>상세보기</b></footer></Link>)}</div>:<div className="directory-empty"><div className="empty-mark">A</div><span>검색 조건을 넓혀보세요</span><h3>{query}와 일치하는 데모 프로필이 없습니다</h3><p>지역을 시·도 단위로 입력하거나 전체 기술로 다시 검색해보세요.</p><div><Link href="/technicians" className="btn primary">전체 기술자 보기 →</Link><Link href="/estimate" className="btn secondary">작업 문의 남기기</Link></div></div>}
      <div className="directory-standard"><h2>실제 프로필 전환 시 확인 기준</h2><div><article><b>01</b><h3>연락처 확인</h3><p>실제 연락 가능한 기술자 또는 업체인지 확인합니다.</p></article><article><b>02</b><h3>경력·기술 확인</h3><p>신청한 경력과 작업 분야를 확인한 뒤 표시합니다.</p></article><article><b>03</b><h3>실제 작업사진</h3><p>본인이 수행한 작업사진만 프로필에 등록합니다.</p></article></div></div>
    </section>
  </>;
}
