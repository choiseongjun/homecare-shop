import type { Metadata } from "next";
import Link from "@/components/HardLink";

export const metadata:Metadata={title:"생활·현장 기술자 찾기",description:"지역과 필요한 기술로 생활·설비·산업 현장 기술자의 경력, 서비스와 활동지역을 확인하세요."};

export default async function Technicians({searchParams}:{searchParams:Promise<{area?:string;service?:string}>}){
  const {area="",service=""}=await searchParams;
  const query=[area,service].filter(Boolean).join(" · ");
  return <>
    <section className="directory-hero"><span className="kicker">FIND A TECHNICIAN</span><h1>생활·현장 기술자 찾기</h1><p>지역과 필요한 기술로 등록된 기술자를 검색하세요.</p><form action="/technicians"><label><span>지역</span><input name="area" defaultValue={area} placeholder="예: 서울 동작구"/></label><label><span>필요한 기술</span><select name="service" defaultValue={service}><option value="">전체 기술</option><option value="에어컨">에어컨</option><option value="전기">전기</option><option value="배관·수도">배관·수도</option><option value="보일러·난방">보일러·난방</option><option value="청소">청소</option><option value="설치·수리">설치·수리</option><option value="용접·금속">용접·금속</option><option value="시설·통신">시설·통신</option><option value="기타">기타 현장 기술</option></select></label><button>검색하기 →</button></form></section>
    <section className="directory-body"><div className="directory-result-head"><div><small>SEARCH RESULT</small><h2>{query||"전체 현장 기술자"}</h2></div><span>실제 등록된 직종과 확인된 프로필만 표시합니다</span></div><div className="directory-empty"><div className="empty-mark">A</div><span>초기 기술자 등록 진행 중</span><h3>{query?`${query} 검색 결과를 준비하고 있습니다`:"등록 확인을 마친 기술자부터 공개합니다"}</h3><p>빈 카테고리를 채우기 위한 가짜 프로필이나 확인되지 않은 후기를 표시하지 않습니다.<br/>지금 필요한 작업이 있다면 문의를 남겨 연결 가능 여부를 확인해보세요.</p><div><Link href="/estimate" className="btn primary">작업 문의 남기기 →</Link><Link href="/register/technician" className="btn secondary">기술자로 등록하기</Link></div></div><div className="directory-standard"><h2>에어픽 기술자 프로필 공개 기준</h2><div><article><b>01</b><h3>연락처 확인</h3><p>실제 연락 가능한 기술자 또는 업체인지 확인합니다.</p></article><article><b>02</b><h3>경력·기술 확인</h3><p>신청한 경력과 작업 분야를 확인한 뒤 표시합니다.</p></article><article><b>03</b><h3>실제 작업사진</h3><p>본인이 수행한 작업사진만 프로필에 등록합니다.</p></article></div></div></section>
  </>;
}
