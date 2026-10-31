import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Link from "@/components/HardLink";
import {apartmentRegions,apartmentsInRegion,findApartmentRegion} from "@/lib/apartments";
import {SITE} from "@/lib/site";

export function generateStaticParams(){return apartmentRegions.map(region=>({region:region.slug}));}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{region:string}>}):Promise<Metadata>{const {region:slug}=await params;const region=findApartmentRegion(slug);if(!region)return{};const count=apartmentsInRegion(region.name).length;const title=`${region.name} 1,000세대 이상 주요 아파트 ${count}곳`;const description=`${region.name}의 실제 1,000세대 이상 주요 아파트 ${count}곳을 단지명, 주소, 세대수, 사용승인연도로 확인하세요.`;const url=`${SITE.url}/apt/region/${region.slug}`;return{title,description,alternates:{canonical:url},openGraph:{title,description,url}};}

export default async function ApartmentRegionPage({params}:{params:Promise<{region:string}>}){const {region:slug}=await params;const region=findApartmentRegion(slug);if(!region)notFound();const items=apartmentsInRegion(region.name);const districts=[...new Set(items.map(item=>item.district))].sort((a,b)=>a.localeCompare(b,"ko"));return <><section className="apt-detail-hero"><div className="apt-breadcrumb"><Link href="/apt">아파트 정보</Link><span>›</span><b>{region.name}</b></div><span>한국부동산원 공개 데이터 기준</span><h1>{region.name}<br/>1,000세대 이상 주요 아파트</h1><p>실제 등록 단지 {items.length}곳을 시·군·구별로 묶었습니다. 지역명만 바꾼 문서가 아니라 각 단지의 주소·세대수·사용승인연도를 제공합니다.</p></section><section className="apt-index apt-region-list">{districts.map(district=><div className="apt-district" key={district}><h3>{district} <small>{items.filter(item=>item.district===district).length}곳</small></h3><div>{items.filter(item=>item.district===district).map(apt=><Link href={`/apt/${apt.code}`} key={apt.code}><span>{apt.neighborhood} · {apt.households?.toLocaleString("ko-KR")}세대</span><b>{apt.name}</b><small>{apt.completed?`${apt.completed}년 사용승인`:"사용승인일 미기재"} · 상세 보기 →</small></Link>)}</div></div>)}<p className="apt-data-credit">출처: 한국부동산원 공동주택 단지 식별정보(2026-08-31)</p></section></>}
