import { createPrismaClient } from "../../lib/prisma";

export const dynamic = "force-dynamic";

function startOfKoreanDay(daysAgo = 0) {
  const now = new Date();
  const koreanDate = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
  const start = new Date(`${koreanDate}T00:00:00+09:00`);
  start.setUTCDate(start.getUTCDate() - daysAgo);
  return start;
}

export default async function Admin() {
  const prisma = createPrismaClient();
  try {
    const [total, today, week, recent, byService] = await Promise.all([
      prisma.lead.count(),
      prisma.lead.count({ where: { createdAt: { gte: startOfKoreanDay() } } }),
      prisma.lead.count({ where: { createdAt: { gte: startOfKoreanDay(6) } } }),
      prisma.lead.findMany({
        orderBy: { createdAt: "desc" },
        take: 10,
        select: { id: true, region: true, serviceType: true, airconType: true, createdAt: true, status: true },
      }),
      prisma.lead.groupBy({ by: ["serviceType"], _count: { _all: true }, orderBy: { _count: { serviceType: "desc" } } }),
    ]);

    return <section className="admin-shell"><div className="admin-wrap"><div className="admin-top"><div><span className="kicker">AIRPICK BETA</span><h1>실제 수요 현황</h1></div><span>개인정보 없이 집계만 표시합니다</span></div><div className="stats">{[["전체 신청",total],["오늘 신청",today],["최근 7일",week],["서비스 유형",byService.length],["연결 수수료",0]].map(([label,value])=><div className="stat" key={label}><small>{label}</small><strong>{value}</strong></div>)}</div><div className="admin-grid"><div className="admin-card"><h2>최근 수요</h2>{recent.length===0?<p className="notice">아직 접수된 수요가 없습니다.</p>:<table className="lead-table"><thead><tr><th>지역</th><th>서비스</th><th>제품</th><th>접수일</th><th>상태</th></tr></thead><tbody>{recent.map(lead=><tr key={lead.id}><td>{lead.region}</td><td><b>{lead.serviceType}</b></td><td>{lead.airconType}</td><td>{new Intl.DateTimeFormat("ko-KR",{timeZone:"Asia/Seoul",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(lead.createdAt)}</td><td><span className="status">{lead.status}</span></td></tr>)}</tbody></table>}</div><div className="admin-card"><h2>서비스별 수요</h2><div className="admin-links">{byService.length===0?<span>집계 대기 중</span>:byService.map(item=><span key={item.serviceType}><b>{item.serviceType}</b> · {item._count._all}건</span>)}</div><div className="notice" style={{marginTop:20}}>이 화면에는 이름, 전화번호, 상세주소를 표시하지 않습니다.</div></div></div></div></section>;
  } finally {
    await prisma.$disconnect();
  }
}
