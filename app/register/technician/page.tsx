import type { Metadata } from "next";
import TechnicianRegistrationForm from "@/components/TechnicianRegistrationForm";

export const metadata:Metadata={title:"현장 기술자 무료 등록",description:"생활·설비·산업 현장 기술자가 경력, 활동지역과 서비스를 등록하는 홈프라이스 기술자 프로필 신청 페이지입니다."};

export default function TechnicianRegister(){return <section className="tech-register-page"><div className="tech-register-intro"><span className="kicker">FOR TECHNICIANS</span><h1>어떤 현장 기술이든<br/>경력을 보여주세요</h1><p>홈프라이스은 생활·설비·산업 현장 기술자의 경력, 활동지역과 서비스를 프로필로 정리해 고객이 직접 확인할 수 있도록 준비하고 있습니다.</p><ul><li><b>01</b><span><strong>등록 신청</strong>직종·경력과 활동지역 입력</span></li><li><b>02</b><span><strong>정보 확인</strong>연락처·경력·공개 범위 확인</span></li><li><b>03</b><span><strong>프로필 공개</strong>확인된 정보만 순차적으로 노출</span></li></ul><div className="tech-recruit-policy"><b>모든 현장 기술 분야를 등록할 수 있습니다</b><p>목록에 없는 기술은 ‘기타 현장 기술’을 선택해 소개란에 적어주세요. 초기 등록과 문의 수신은 무료입니다.</p></div></div><div className="tech-register-card"><div><span>TECHNICIAN PROFILE</span><h2>기술자 등록 신청</h2><p>필수 정보만 먼저 남겨주세요.</p></div><TechnicianRegistrationForm/></div></section>}
