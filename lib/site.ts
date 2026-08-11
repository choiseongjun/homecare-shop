export const SITE = {
  name: "에어픽",
  phone: "1588-0426",
  phoneHref: "tel:15880426",
  kakao: "https://pf.kakao.com/",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://airpick.kr",
  description: "에어컨 설치비를 미리 확인하고 사진으로 간편하게 견적을 요청하세요.",
};

export const services = [
  { slug: "install", icon: "01", name: "신규 설치", title: "에어컨 신규 설치", price: "12만원~", copy: "제품과 현장 조건에 맞는 설치 방법을 안내합니다." },
  { slug: "relocation", icon: "02", name: "이전 설치", title: "에어컨 이전 설치", price: "15만원~", copy: "철거부터 이동, 재설치까지 한 번에 연결합니다." },
  { slug: "cleaning", icon: "03", name: "에어컨 청소", title: "에어컨 분해 청소", price: "7만원~", copy: "냄새와 오염 상태에 맞춰 청소 범위를 안내합니다." },
  { slug: "system-aircon", icon: "04", name: "시스템에어컨", title: "시스템에어컨 설치", price: "현장 견적", copy: "주거·상업 공간의 대수와 구조를 먼저 확인합니다." },
];

export const prices = [
  { category: "벽걸이", name: "기본 설치", price: 120000, unit: "대", note: "기본 배관 5m 포함" },
  { category: "스탠드", name: "기본 설치", price: 180000, unit: "대", note: "기본 배관 8m 포함" },
  { category: "2in1", name: "기본 설치", price: 280000, unit: "세트", note: "벽걸이 + 스탠드" },
  { category: "추가 비용", name: "벽걸이 배관 추가", price: 18000, unit: "m", note: "현장 실측 기준" },
  { category: "추가 비용", name: "스탠드 배관 추가", price: 22000, unit: "m", note: "현장 실측 기준" },
  { category: "추가 비용", name: "앵글 설치", price: 70000, unit: "개", note: "설치 위치에 따라 상이" },
  { category: "추가 비용", name: "타공", price: 30000, unit: "회", note: "벽체 재질에 따라 상이" },
  { category: "철거", name: "기본 철거", price: 30000, unit: "대", note: "운반·폐기 별도" },
];

export const cases = [
  { slug: "dongjak-wall-relocation", region: "서울 동작구 상도동", title: "벽걸이 에어컨 이전설치", type: "벽걸이", total: 234000, summary: "실외기 앵글 교체와 배관 3m 추가 작업", tone: "mint", items: [["기본 설치",150000],["추가 배관 3m",54000],["타공",30000]] as [string, number][] },
  { slug: "gwanak-stand-install", region: "서울 관악구 봉천동", title: "스탠드 에어컨 신규설치", type: "스탠드", total: 246000, summary: "기본 배관 8m 포함, 진공 작업 진행", tone: "blue", items: [["기본 설치",180000],["추가 배관 3m",66000]] as [string, number][] },
  { slug: "seocho-twoinone", region: "서울 서초구 방배동", title: "2in1 에어컨 이전설치", type: "2in1", total: 352000, summary: "벽걸이·스탠드 동시 이전과 배관 정리", tone: "coral", items: [["기본 설치",280000],["추가 배관 2m",44000],["철거",28000]] as [string, number][] },
];

export const posts = [
  { slug: "relocation-cost-guide", category: "이전설치", title: "에어컨 이전설치 비용은 얼마나 나올까?", excerpt: "기본 설치비부터 배관, 타공, 앵글까지 견적을 좌우하는 항목을 정리했습니다.", date: "2026. 08. 04", read: "5분" },
  { slug: "wall-aircon-price", category: "설치비용", title: "벽걸이 에어컨 설치비 총정리", excerpt: "기본 배관 길이와 현장 조건에 따라 달라지는 실제 설치비 기준을 확인하세요.", date: "2026. 07. 28", read: "4분" },
  { slug: "pipe-extra-cost", category: "에어컨 문제", title: "에어컨 배관 추가 비용은 왜 발생할까?", excerpt: "배관 종류와 길이, 보온재까지 추가 비용이 생기는 이유를 쉽게 설명합니다.", date: "2026. 07. 21", read: "6분" },
  { slug: "system-aircon-four", category: "시스템에어컨", title: "시스템에어컨 4대 설치 비용 안내", excerpt: "아파트 평형과 천장 구조에 따른 공사 범위와 확인사항을 살펴봅니다.", date: "2026. 07. 15", read: "7분" },
];

export const regions: Record<string, { name: string; intro: string }> = {
  dongjak: { name: "동작구", intro: "상도동·흑석동·사당동을 중심으로 에어컨 설치와 이전설치 상담을 연결합니다." },
  gwanak: { name: "관악구", intro: "봉천동·신림동·남현동 현장 조건을 잘 아는 협력 전문가와 연결합니다." },
  seocho: { name: "서초구", intro: "방배동·서초동·반포동의 아파트와 상가 에어컨 작업을 안내합니다." },
};

export const money = (value: number) => new Intl.NumberFormat("ko-KR").format(value) + "원";
