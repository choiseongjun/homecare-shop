import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "@/components/HardLink";
import { findTechnician, technicians } from "@/lib/technicians";
import { SITE } from "@/lib/site";

export function generateStaticParams(){return technicians.map(item=>({slug:item.slug}));}
export const dynamicParams=false;

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params; const item=findTechnician(slug); if(!item)return {};
  const title=`${item.business} ${item.name} 기사 · ${item.category}`;
  const description=`${item.areas.join(", ")}에서 ${item.services.join(", ")} 작업을 상담하는 경력 ${item.experience}년 데모 기사 프로필입니다.`;
  return {title,description,openGraph:{title,description,url:`${SITE.url}/technicians/${item.slug}`,images:[]},twitter:{title,description,images:[]}};
}

export default async function TechnicianDetail({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const item=findTechnician(slug); if(!item)notFound();
  return <main className="technician-detail"><div className="tech-detail-demo"><b>DEMO PROFILE</b><span>화면 검증을 위한 가상 기사 정보이며 실제 업체나 작업 후기가 아닙니다.</span></div><section className="tech-profile-hero"><div className="tech-profile-main"><div className="tech-profile-avatar">{item.initial}</div><div><span>{item.category}</span><h1>{item.business}</h1><p>{item.name} 기사 · 경력 {item.experience}년</p><div>{item.services.map(value=><b key={value}>{value}</b>)}</div></div></div><aside><small>주요 활동지역</small><strong>{item.areas.join(" · ")}</strong><Link href={`/estimate?technician=${item.slug}`}>이 기사에게 문의하기 →</Link></aside></section><div className="tech-detail-layout"><div><section className="tech-detail-section"><span>INTRODUCTION</span><h2>기사 소개</h2><p className="tech-long-intro">{item.intro}</p><ul className="tech-strengths">{item.strengths.map(value=><li key={value}><b>✓</b>{value}</li>)}</ul></section><section className="tech-detail-section"><span>WORK EXAMPLES</span><h2>대표 작업사례</h2><div className="tech-work-grid">{item.works.map(work=><article key={work.title}><div style={{backgroundImage:`url('${work.image}')`}}><span>데모 이미지</span></div><small>{work.area}</small><h3>{work.title}</h3><p>{work.description}</p></article>)}</div></section></div><aside className="tech-price-panel"><span>SERVICE PRICE</span><h2>서비스 참고 가격</h2>{item.prices.map(price=><div key={price.name}><b>{price.name}</b><strong>{price.price}</strong><small>{price.note}</small></div>)}<p>표시된 금액은 데모용 참고 가격입니다. 실제 견적은 기사 등록 후 현장 조건을 확인해 안내합니다.</p><Link href={`/estimate?technician=${item.slug}`}>무료 작업 문의 →</Link></aside></div><section className="tech-detail-bottom"><div><h2>이 기사에게 필요한 작업을 문의해보세요</h2><p>작업 종류와 현장 주소를 남기면 상담 가능 여부를 확인할 수 있습니다.</p></div><Link href={`/estimate?technician=${item.slug}`}>문의 남기기 →</Link></section></main>;
}
