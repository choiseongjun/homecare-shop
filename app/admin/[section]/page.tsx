import Link from "@/components/HardLink";
const names:Record<string,string>={leads:"문의 관리",cases:"시공사례 관리",posts:"블로그 관리",prices:"가격표 관리"};
export default async function AdminSection({params}:{params:Promise<{section:string}>}){const {section}=await params;return <section className="admin-shell"><div className="admin-wrap"><div className="admin-top"><div><span className="kicker">HOMEPRICE INSIGHT</span><h1>{names[section]||"관리"}</h1></div><Link href="/admin">← 상담 현황</Link></div><div className="admin-card"><h2>준비 중인 기능입니다</h2><p>현재는 개인정보를 노출하지 않는 상담 신청 집계 화면만 운영합니다.</p></div></div></section>}
