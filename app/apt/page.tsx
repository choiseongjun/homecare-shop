import type {Metadata} from "next";
import Link from "@/components/HardLink";
import {apartments,aptServices} from "@/lib/apartments";
import {SITE} from "@/lib/site";

export const metadata:Metadata={title:"전국 아파트 단지별 홈케어·시공 표준 단가",description:"아파트 단지와 평형별로 에어컨, 커튼·블라인드, 집수리 예상 비용과 견적 변수를 확인하세요.",alternates:{canonical:"/apt"},openGraph:{title:"아파트 단지별 홈케어·시공 표준 단가",description:"단지·평형별 에어컨, 커튼, 집수리 예상 단가",url:`${SITE.url}/apt`}};

export default function AptHub(){
  const districts=[...new Set(apartments.map(item=>item.district))];
  return <><section className="apt-hero"><span>PILOT · APARTMENT PRICE INDEX</span><h1>우리 아파트·평형에 맞는<br/><em>홈케어 예상 단가</em></h1><p>에어컨, 커튼·블라인드, 생활 집수리를 한곳에서 비교하세요.<br/>서울 남부·과천·안양 파일럿 단지부터 순차적으로 확장합니다.</p><div className="apt-category-tabs">{Object.entries(aptServices).map(([slug,item])=><a href={`#${slug}`} key={slug}><i>{item.icon}</i><b>{item.name}</b><span>{item.short}</span></a>)}</div></section><section className="apt-index"><div className="apt-index-head"><div><span>SEO PILOT AREA</span><h2>현재 제공 중인 단지</h2></div><p>단지 정보와 예상치는 견적 준비를 돕기 위한 참고 자료이며<br/>실제 비용은 제품과 현장 실측 후 달라질 수 있습니다.</p></div>{districts.map(district=><div className="apt-district" key={district}><h3>{district}</h3><div>{apartments.filter(item=>item.district===district).map(apt=><Link href={`/apt/${apt.code}`} key={apt.code}><span>{apt.neighborhood} · {apt.completed}년 준공</span><b>{apt.name}</b><small>{apt.sizes.map(size=>`${size}평`).join(" · ")} 단가 보기 →</small></Link>)}</div></div>)}</section><section className="apt-seo-guide"><div><span>HOW TO USE</span><h2>단지 하나에서 세 가지 견적을 비교합니다</h2></div><ol><li><b>01</b><span>아파트 단지 선택</span></li><li><b>02</b><span>공급면적 기준 평형 선택</span></li><li><b>03</b><span>에어컨·커튼·집수리 단가 확인</span></li><li><b>04</b><span>사진과 주소로 실제 문의</span></li></ol></section></>;
}
