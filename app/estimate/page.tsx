import type { Metadata } from "next";
import EstimateForm from "../../components/EstimateForm";
import { findTechnician } from "@/lib/technicians";

export const metadata:Metadata={title:"생활·현장 작업 무료 문의",description:"에어컨·전기·배관·보일러·청소·설치·수리 등 필요한 현장 작업을 간편하게 문의하세요."};

export default async function Estimate({searchParams}:{searchParams:Promise<{technician?:string}>}){
  const {technician:slug}=await searchParams;
  const technician=slug?findTechnician(slug):undefined;
  return <section className="estimate-page"><div className="estimate-wrap"><div className="estimate-title"><span className="kicker">WORK INQUIRY</span><h1>현장 작업 무료 문의</h1><p>필요한 기술과 지역을 알려주시면 상담 가능 여부를 확인해드립니다.</p></div><div className="estimate-card"><EstimateForm technician={technician}/></div></div></section>;
}
