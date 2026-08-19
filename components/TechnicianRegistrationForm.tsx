"use client";

import { useState } from "react";
import Link from "@/components/HardLink";

const skillOptions = ["에어컨 설치", "에어컨 이전설치", "에어컨 청소", "에어컨 수리", "시스템에어컨", "상업용 냉난방", "냉매·배관"];

export default function TechnicianRegistrationForm(){
  const [busy,setBusy]=useState(false);
  const [sent,setSent]=useState(false);
  const [error,setError]=useState("");

  async function submit(form:HTMLFormElement){
    setBusy(true); setError("");
    const source=new FormData(form);
    const data=new FormData();
    data.set("name",String(source.get("name")||""));
    data.set("phone",String(source.get("phone")||""));
    data.set("region",String(source.get("region")||""));
    data.set("serviceType","기술자 등록 신청");
    data.set("airconType",String(source.get("mainSkill")||""));
    data.set("addressDetail",String(source.get("additionalArea")||""));
    data.set("message",`경력: ${String(source.get("careerYears")||"")}년\n업체명: ${String(source.get("company")||"미입력")}\n소개: ${String(source.get("introduction")||"")}`);
    const response=await fetch("/api/leads",{method:"POST",body:data});
    setBusy(false);
    if(response.ok){setSent(true);return;}
    const result=await response.json().catch(()=>({}));
    setError(result.error||"등록 신청 중 오류가 발생했습니다.");
  }

  if(sent)return <div className="tech-register-success"><span>✓</span><h2>기술자 등록 신청이 접수되었습니다</h2><p>입력한 경력과 활동지역을 확인한 뒤<br/>프로필 공개 절차를 안내드리겠습니다.</p><Link href="/">홈으로 돌아가기</Link></div>;

  return <form className="tech-register-form" onSubmit={event=>{event.preventDefault();submit(event.currentTarget)}}>
    <div className="tech-field-row"><label><span>이름 *</span><input required name="name" placeholder="성함을 입력해주세요"/></label><label><span>업체명 <small>선택</small></span><input name="company" placeholder="업체가 있다면 입력해주세요"/></label></div>
    <div className="tech-field-row"><label><span>전화번호 *</span><input required name="phone" inputMode="tel" pattern="[0-9-]{10,13}" placeholder="010-0000-0000"/></label><label><span>경력 *</span><div className="input-suffix"><input required min="0" max="60" type="number" name="careerYears" placeholder="0"/><i>년</i></div></label></div>
    <label><span>대표 기술 *</span><select required name="mainSkill" defaultValue=""><option value="" disabled>가장 자신 있는 기술을 선택해주세요</option>{skillOptions.map(skill=><option key={skill}>{skill}</option>)}</select></label>
    <label><span>주요 활동지역 *</span><input required name="region" placeholder="예: 서울 동작구·관악구"/></label>
    <label><span>추가 출장 가능지역 <small>선택</small></span><input name="additionalArea" placeholder="예: 서울 전지역, 경기 남부"/></label>
    <label><span>경력과 작업 소개 *</span><textarea required name="introduction" rows={5} placeholder="주로 하는 작업, 보유 자격이나 장비, 고객에게 알리고 싶은 내용을 적어주세요."/></label>
    <div className="tech-register-note"><b>등록 전에 확인해주세요</b><p>신청 즉시 공개되지 않습니다. 허위 경력·사진·자격 정보는 등록이 거절될 수 있으며, 연락처와 프로필 공개 범위는 확인 과정에서 별도로 안내합니다.</p></div>
    <label className="tech-consent"><input required type="checkbox"/><span><Link href="/privacy" target="_blank">개인정보 수집·이용 안내</Link>를 확인하고 등록 심사를 위한 연락에 동의합니다.</span></label>
    {error&&<p className="tech-form-error">{error}</p>}
    <button className="tech-submit" disabled={busy} type="submit">{busy?"접수 중...":"무료 등록 신청 →"}</button>
  </form>;
}
