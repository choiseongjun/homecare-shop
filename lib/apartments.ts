import {kaptApartments} from "./kapt-apartments";

export const aptServices = {
  aircon: { name: "에어컨", short: "설치·이전·청소", icon: "❄" },
  curtain: { name: "커튼·블라인드", short: "실측·타공·설치", icon: "▥" },
  repair: { name: "집수리", short: "수전·환풍기·방충망", icon: "⌂" },
} as const;

export type AptServiceSlug = keyof typeof aptServices;
export type Apartment = {
  code: string;
  kaptCode?: string;
  name: string;
  region?: "서울특별시" | "경기도" | "인천광역시";
  district: string;
  neighborhood: string;
  address?: string;
  roadAddress?: string;
  completed: number;
  households?: number;
  sizes: number[];
  note: string;
  source?: string;
};

const pilotApartments: Apartment[] = [
  { code:"dongjak-sangdo-park-xi", name:"상도파크자이", district:"서울 동작구", neighborhood:"상도동", completed:2016, sizes:[25,34], note:"거실 확장형과 방별 벽걸이 설치 문의가 많은 평형 구성" },
  { code:"dongjak-raemian-sangdo-3", name:"래미안상도3차", district:"서울 동작구", neighborhood:"상도동", completed:2004, sizes:[24,32], note:"준공 20년 전후 배관·수전·환풍기 상태를 함께 확인할 시기" },
  { code:"gwanak-dreamtown", name:"관악드림타운", district:"서울 관악구", neighborhood:"봉천동", completed:2003, sizes:[24,33], note:"이사 전 에어컨 배관 동선과 커튼 타공 위치 확인이 필요한 대단지" },
  { code:"gwanak-prugio", name:"관악푸르지오", district:"서울 관악구", neighborhood:"봉천동", completed:2004, sizes:[24,32], note:"구축 평형의 생활수리와 가전 이전설치를 함께 비교하기 좋은 단지" },
  { code:"yeongdeungpo-acro-tower-square", name:"아크로타워스퀘어", district:"서울 영등포구", neighborhood:"영등포동", completed:2017, sizes:[25,34], note:"고층 작업 조건과 시스템·스탠드형 에어컨 설치 조건 확인 필요" },
  { code:"yeongdeungpo-dangsan-central-ipark", name:"당산센트럴아이파크", district:"서울 영등포구", neighborhood:"당산동", completed:2020, sizes:[24,33], note:"신축급 단지로 커튼·블라인드 실측과 벽체별 타공 방식 확인이 중요" },
  { code:"seocho-raemian", name:"서초래미안", district:"서울 서초구", neighborhood:"서초동", completed:2003, sizes:[26,34], note:"배관과 생활 설비 노후도를 점검하면서 이전설치를 계획할 단지" },
  { code:"seocho-banpo-xi", name:"반포자이", district:"서울 서초구", neighborhood:"반포동", completed:2009, sizes:[25,35], note:"확장형 창호 실측과 다실 에어컨 관리 범위를 구분해야 하는 단지" },
  { code:"gwacheon-prugio-summit", name:"과천푸르지오써밋", district:"경기 과천시", neighborhood:"중앙동", completed:2020, sizes:[25,34], note:"신축급 매립 설비와 천장·벽체 마감 보존을 우선 확인할 단지" },
  { code:"anyang-pyeongchon-the-sharp-central-city", name:"평촌더샵센트럴시티", district:"경기 안양시", neighborhood:"관양동", completed:2016, sizes:[24,33], note:"이사철 커튼 재설치와 에어컨 이전설치 수요를 함께 비교할 단지" },
];

export const apartments: Apartment[] = [...pilotApartments, ...kaptApartments];

export const apartmentRegions = [
  {slug:"seoul",name:"서울특별시"},
  {slug:"gyeonggi",name:"경기도"},
  {slug:"incheon",name:"인천광역시"},
] as const;

export function findApartmentRegion(slug:string){return apartmentRegions.find(item=>item.slug===slug);}
export function apartmentsInRegion(region:string){return kaptApartments.filter(item=>item.region===region);}

export function findApartment(code:string){return apartments.find(item=>item.code===code);}
export function isService(value:string):value is AptServiceSlug{return value in aptServices;}
export function ageOf(apt:Apartment){return new Date().getFullYear()-apt.completed;}

export function estimateFor(apt:Apartment,pyeong:number,service:AptServiceSlug){
  const age=ageOf(apt);
  if(service==="aircon"){
    const low=pyeong>=33?180000:120000;
    const high=low+(age>=15?150000:100000);
    return { low, high, unit:"1대 이전·설치 기준", items:[
      ["기본 설치·이전", `${low.toLocaleString("ko-KR")}원부터`],
      ["추가 배관", "미터당 18,000~25,000원"],
      ["타공·앵글", "현장 조건별 30,000~100,000원"],
      ["분해청소", "대당 70,000~150,000원"],
    ], factors:["기존 매립배관 재사용 가능 여부","실외기 위치와 고층 작업 조건","벽걸이·스탠드·시스템 방식","배관 길이와 타공 횟수"]};
  }
  if(service==="curtain"){
    const width=pyeong>=33?4.2:3.4;
    const low=pyeong>=33?90000:70000;
    const high=low+90000;
    return { low, high, unit:"거실 1곳 설치 공임 기준", width, items:[
      ["거실 예상 창 폭", `약 ${width.toFixed(1)}m 전후 · 현장 실측 필수`],
      ["커튼 레일 설치", "70,000~140,000원"],
      ["블라인드 설치", "개당 30,000~60,000원"],
      ["콘크리트 특수 타공", "개소당 10,000~30,000원 추가"],
    ], factors:["실제 창 폭과 커튼 박스 깊이","콘크리트·석고보드 등 천장 재질","기존 레일 철거 여부","암막·전동 제품과 설치 수량"]};
  }
  const low=age>=20?180000:100000;
  const high=age>=20?450000:300000;
  return { low, high, unit:"생활수리 2~4종 묶음 기준", items:[
    ["수전 교체", "공임 50,000~100,000원"],
    ["욕실 환풍기 교체", "70,000~150,000원"],
    ["방문 손잡이 교체", "개당 30,000~60,000원"],
    ["방충망 교체", "창 크기별 50,000~120,000원"],
  ], factors:[`${age}년차 설비의 부식·노후 상태`,"교체 제품과 자재 포함 여부","벽체·배관의 추가 보수 범위","여러 작업 동시 진행 가능 여부"]};
}
