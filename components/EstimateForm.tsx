"use client";
import { useState } from "react";
import Link from "@/components/HardLink";

declare global {
  interface Window {
    daum?: {
      Postcode: new (options: {
        oncomplete: (data: { roadAddress: string; jibunAddress: string }) => void;
      }) => { open: () => void };
    };
  }
}

const serviceOptions=["신규 설치","이전 설치","철거","청소","수리","시스템에어컨","상업용 냉난방","기타"];
const airconOptions=["벽걸이","스탠드","2in1","천장형","가정용 시스템","상업용 냉난방","모름"];

export default function EstimateForm(){
  const [step,setStep]=useState(1); const [sent,setSent]=useState(false); const [busy,setBusy]=useState(false); const [files,setFiles]=useState<File[]>([]); const [serviceType,setServiceType]=useState(""); const [airconType,setAirconType]=useState(""); const [address,setAddress]=useState(""); const [addressLoading,setAddressLoading]=useState(false);
  function openAddressSearch(){
    const openPostcode=()=>new window.daum!.Postcode({oncomplete:data=>setAddress(data.roadAddress||data.jibunAddress)}).open();
    if(window.daum?.Postcode){openPostcode();return;}
    setAddressLoading(true);
    const existing=document.querySelector<HTMLScriptElement>('script[data-daum-postcode]');
    if(existing){existing.addEventListener("load",()=>{setAddressLoading(false);openPostcode()},{once:true});return;}
    const script=document.createElement("script");
    script.src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async=true;
    script.dataset.daumPostcode="true";
    script.onload=()=>{setAddressLoading(false);openPostcode()};
    script.onerror=()=>setAddressLoading(false);
    document.head.appendChild(script);
  }
  async function submit(form:HTMLFormElement){setBusy(true);const data=new FormData(form);files.forEach(f=>data.append("images",f));const res=await fetch("/api/leads",{method:"POST",body:data});setBusy(false);if(res.ok)setSent(true);}
  if(sent)return <div className="success-box"><span>✓</span><h2>에어컨 문의가 접수되었습니다</h2><p>남겨주신 내용을 확인한 뒤<br/>상담 가능 여부를 안내드리겠습니다.</p><Link href="/">홈으로 돌아가기</Link></div>;
  return <form onSubmit={e=>{e.preventDefault();submit(e.currentTarget)}}>
    {step>1&&<><input type="hidden" name="serviceType" value={serviceType}/><input type="hidden" name="airconType" value={airconType}/></>}
    <div className="progress"><span style={{width:`${step*33.33}%`}}/></div><div className="step-label">STEP {step} <b>/ 3</b></div>
    {step===1&&<div className="form-step"><h2>어떤 서비스가 필요하세요?</h2><p>해당하는 항목을 선택해주세요.</p><div className="choice-grid">{serviceOptions.map((v,i)=><label key={v}><input required checked={serviceType===v} onChange={()=>setServiceType(v)} type="radio" name="serviceType" value={v}/><span><i>{["＋","↔","−","✦","⚙","▦","▤","…"][i]}</i>{v}</span></label>)}</div><h3>에어컨 종류</h3><div className="pill-grid">{airconOptions.map(v=><label key={v}><input required checked={airconType===v} onChange={()=>setAirconType(v)} type="radio" name="airconType" value={v}/><span>{v}</span></label>)}</div></div>}
    {step===2&&<div className="form-step"><h2>현장 정보를 알려주세요</h2><p>전국 어디든 주소를 검색하거나 직접 입력할 수 있습니다.</p><label className="field"><span>설치 주소 *</span><div className="address-row"><input required name="region" value={address} onChange={e=>setAddress(e.target.value)} placeholder="도로명, 지번 또는 건물명을 입력해주세요"/><button type="button" onClick={openAddressSearch} disabled={addressLoading}>{addressLoading?"불러오는 중":"주소 검색"}</button></div><small className="field-help">전국 도로명·지번 주소를 검색할 수 있어요.</small></label><label className="field"><span>상세주소 <small>선택</small></span><input name="addressDetail" placeholder="동·호수 등 상세주소를 입력해주세요"/></label><label className="field"><span>희망 작업일 <small>선택 · 상담 후 확정</small></span><input type="date" name="desiredDate"/></label><label className="upload-box"><input type="file" accept="image/*" multiple onChange={e=>setFiles(Array.from(e.target.files||[]).slice(0,5))}/><b>＋ 참고 사진 첨부 <small>(선택)</small></b><span>개인정보가 보이지 않는 사진만 첨부해주세요</span><small>JPG, PNG · 최대 5장</small>{files.length>0&&<em>{files.length}장 선택됨</em>}</label></div>}
    {step===3&&<div className="form-step"><h2>안내받을 연락처를 남겨주세요</h2><p>문의 내용 확인과 상담 안내를 위해 연락드립니다.</p><label className="field"><span>이름 *</span><input required name="name" placeholder="이름을 입력해주세요"/></label><label className="field"><span>전화번호 *</span><input required name="phone" inputMode="tel" pattern="[0-9-]{10,13}" placeholder="010-0000-0000"/></label><label className="field"><span>문의사항 <small>선택</small></span><textarea name="message" rows={4} placeholder="필요한 작업이나 현재 상황을 알려주세요"/></label><div className="service-disclosure"><b>문의 접수 및 연결 안내</b><p>문의 접수만으로 작업 예약이 확정되지 않습니다. 연결 가능한 업체가 정해지면 업체 정보를 먼저 안내하고, 동의를 받은 뒤 필요한 연락처를 전달합니다.</p><Link href="/service-policy" target="_blank">서비스 이용 안내 →</Link></div><label className="agree"><input required type="checkbox" name="consent"/><span><Link href="/privacy" target="_blank">개인정보 수집·이용 안내</Link>를 확인하고 동의합니다. (필수)</span></label></div>}
    <div className="form-nav">{step>1&&<button type="button" className="prev" onClick={()=>setStep(step-1)}>← 이전</button>}<button type={step===3?"submit":"button"} className="next" disabled={busy||(step===1&&(!serviceType||!airconType))} onClick={()=>step<3&&setStep(step+1)}>{step===3?(busy?"접수 중...":"무료 문의 접수"):"다음 단계 →"}</button></div>
    <style>{`.progress{height:4px;background:#eee;border-radius:3px;overflow:hidden}.progress span{display:block;height:100%;background:#ff6846;transition:.3s}.step-label{font-size:11px;color:#ff6846;font-weight:900;margin:13px 0 27px}.step-label b{color:#a0a5ad}.form-step h2{font-size:25px;margin:0 0 6px}.form-step>p{color:#7a8290;font-size:14px;margin:0 0 27px}.form-step h3{font-size:15px;margin:28px 0 12px}.choice-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.choice-grid input,.pill-grid input{position:absolute;opacity:0}.choice-grid span{height:82px;border:1px solid #dfe1e4;border-radius:9px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;font-size:13px;font-weight:800;cursor:pointer}.choice-grid i{font-style:normal;color:#ff6846;font-size:19px}.choice-grid input:checked+span,.pill-grid input:checked+span{border-color:#ff6846;background:#fff5f1;color:#e94c2a}.pill-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.pill-grid span{display:grid;place-items:center;height:43px;border:1px solid #dfe1e4;border-radius:7px;font-size:12px;cursor:pointer}.field{display:block;margin-bottom:19px}.field>span{display:block;font-size:13px;font-weight:800;margin-bottom:8px}.field small{font-weight:400;color:#989ea6}.field input,.field select,.field textarea{width:100%;border:1px solid #dfe1e4;border-radius:8px;padding:13px 14px;outline:none;background:#fff}.field input:focus,.field select:focus,.field textarea:focus{border-color:#ff6846}.address-row{display:flex;gap:8px}.address-row input{flex:1;min-width:0}.address-row button{flex:0 0 100px;border:1px solid #12213d;border-radius:8px;background:#12213d;color:#fff;font-size:13px;font-weight:800;cursor:pointer}.address-row button:disabled{opacity:.6}.field-help{display:block;margin-top:7px;font-size:11px}.upload-box{border:1.5px dashed #c9cdd2;background:#fafaf8;border-radius:10px;min-height:150px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer}.upload-box input{display:none}.upload-box b{font-size:14px;color:#ff6846}.upload-box span{font-size:12px;color:#69717e;margin:7px}.upload-box small{font-size:10px;color:#9ca1a8}.upload-box em{font-size:11px;color:#29835f;margin-top:7px}.service-disclosure{margin:18px 0;padding:14px 16px;background:#f5f7fa;border:1px solid #e0e5ec;border-radius:9px}.service-disclosure b{font-size:12px;color:#12213d}.service-disclosure p{font-size:11px;line-height:1.65;color:#69717e;margin:5px 0}.service-disclosure a{font-size:11px;font-weight:800;color:#e94c2a}.agree{display:flex;gap:9px;font-size:12px;color:#626b77}.form-nav{display:flex;gap:10px;margin-top:30px}.form-nav button{height:50px;border-radius:8px;font-weight:900;cursor:pointer}.prev{width:110px;background:#fff;border:1px solid #dfe1e4}.next{flex:1;background:#ff6846;color:#fff;border:0}.next:disabled{opacity:.6}.success-box{text-align:center;padding:45px 0}.success-box>span{margin:auto;display:grid;place-items:center;width:68px;height:68px;background:#def3e9;color:#27825e;border-radius:50%;font-size:30px}.success-box h2{font-size:25px;margin:20px 0 10px}.success-box p{color:#737b87;line-height:1.7}.success-box a{display:inline-block;margin-top:20px;background:#12213d;color:#fff;padding:13px 20px;border-radius:8px;font-weight:800;font-size:13px}@media(max-width:600px){.choice-grid{grid-template-columns:1fr 1fr}.pill-grid{grid-template-columns:1fr 1fr}.address-row{align-items:stretch}.address-row button{flex-basis:88px}}`}</style>
  </form>
}
