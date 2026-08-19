export type Technician = {
  slug: string;
  name: string;
  business: string;
  initial: string;
  category: string;
  services: string[];
  areas: string[];
  experience: number;
  intro: string;
  strengths: string[];
  prices: { name: string; price: string; note: string }[];
  works: { title: string; area: string; image: string; description: string }[];
};

const make = (
  slug: string, name: string, business: string, initial: string, category: string,
  services: string[], areas: string[], experience: number, intro: string,
  strengths: string[], prices: Technician["prices"], works: Technician["works"],
): Technician => ({ slug, name, business, initial, category, services, areas, experience, intro, strengths, prices, works });

export const technicians: Technician[] = [
  make("kim-aircon", "김도현", "한결냉동공조", "김", "에어컨", ["설치", "이전설치", "점검·수리"], ["서울 동작구", "서울 관악구", "서울 영등포구"], 12, "가정용 벽걸이부터 상업용 냉난방까지 현장 조건에 맞춰 작업 범위와 추가 비용을 먼저 설명합니다.", ["냉동공조 경력 12년", "가정·상가 모두 상담", "작업 전 비용 안내"], [{name:"벽걸이 기본 설치",price:"120,000원~",note:"기본 배관 범위 기준"},{name:"출장 점검",price:"50,000원~",note:"부품비 별도"}], [{title:"벽걸이 에어컨 이전설치",area:"서울 동작구",image:"/cases/wall-install.png",description:"배관 연장과 실외기 앵글 교체"},{title:"스탠드 에어컨 신규설치",area:"서울 관악구",image:"/cases/stand-install.png",description:"진공 작업과 배관 정리"}]),
  make("lee-system-air", "이준호", "온도시스템", "이", "에어컨", ["시스템에어컨", "상업용 냉난방", "청소·관리"], ["서울 강남구", "서울 서초구", "경기 성남시"], 9, "아파트 시스템에어컨과 매장용 냉난방 설비를 중심으로 상담합니다.", ["천장형·시스템 전문", "상업공간 현장 확인", "다대 설치 상담"], [{name:"시스템에어컨 설치",price:"현장 견적",note:"대수·천장 구조 확인"},{name:"천장형 분해세척",price:"130,000원~",note:"1대 기준"}], [{title:"시스템에어컨 4대 설치",area:"서울 강남구",image:"/cases/system-install.png",description:"배관·드레인·전기 작업 포함"}]),
  make("park-electric", "박민석", "바른전기", "박", "전기", ["조명", "콘센트", "차단기"], ["서울 송파구", "서울 강동구", "경기 하남시"], 14, "작은 콘센트 교체부터 상가 전기 보수까지 안전을 우선으로 작업 범위를 확인합니다.", ["전기 경력 14년", "주택·상가 출장", "누전 원인 점검"], [{name:"출장 점검",price:"50,000원~",note:"30분 이내 기본 점검"},{name:"콘센트 교체",price:"30,000원~",note:"자재에 따라 상이"}], [{title:"상가 조명 회로 정비",area:"서울 송파구",image:"/services/commercial-hvac-v2.png",description:"노후 배선 확인과 LED 조명 교체"}]),
  make("choi-electric", "최성호", "우리동네전기", "최", "전기", ["분전반", "전기 증설", "EV 충전기"], ["인천 연수구", "인천 남동구", "경기 부천시"], 8, "분전반과 전기 증설처럼 사전 확인이 필요한 작업을 사진과 현장 방문으로 구분해 안내합니다.", ["분전반 교체", "전기용량 점검", "공사 전 견적서"], [{name:"분전반 점검",price:"70,000원~",note:"출장 포함"},{name:"전기 증설",price:"현장 견적",note:"계약전력 확인 필요"}], [{title:"매장 분전반 교체",area:"인천 연수구",image:"/services/commercial-hvac-v2.png",description:"부하 확인 후 회로 재구성"}]),
  make("jung-plumbing", "정우진", "막힘없는배관", "정", "배관·수도", ["하수구 막힘", "누수 점검", "수전 교체"], ["서울 마포구", "서울 서대문구", "서울 은평구"], 11, "배관 막힘과 생활 누수 원인을 먼저 확인하고 장비 작업 여부를 설명합니다.", ["배관 내시경 점검", "싱크대·욕실 배관", "야간 상담 가능"], [{name:"배관 기본 점검",price:"50,000원~",note:"장비 사용 별도"},{name:"수전 교체",price:"60,000원~",note:"수전 제품 별도"}], [{title:"주방 배수관 막힘 해결",area:"서울 마포구",image:"/cases/repair-service.png",description:"내시경 확인 후 고압 세척"}]),
  make("han-water", "한지훈", "한빛누수설비", "한", "배관·수도", ["누수 탐지", "배관 교체", "욕실 설비"], ["경기 수원시", "경기 용인시", "경기 화성시"], 16, "눈에 보이지 않는 누수는 탐지 범위와 보수 공사를 나눠 안내합니다.", ["누수 탐지 경력 16년", "보수 범위 사전 설명", "보험 서류 상담"], [{name:"누수 탐지",price:"180,000원~",note:"범위에 따라 상이"},{name:"배관 보수",price:"현장 견적",note:"파손 구간 확인"}], [{title:"아파트 온수배관 누수 탐지",area:"경기 수원시",image:"/cases/repair-service.png",description:"압력 검사와 누수 지점 확인"}]),
  make("yoon-boiler", "윤재호", "따뜻한보일러", "윤", "보일러·난방", ["보일러 점검", "온도조절기", "난방 배관"], ["서울 노원구", "서울 도봉구", "서울 강북구"], 13, "난방 불량과 온수 문제를 증상별로 확인하고 수리와 교체를 구분해 안내합니다.", ["가정용 보일러 점검", "난방 배관 세척", "겨울철 긴급 상담"], [{name:"출장 점검",price:"50,000원~",note:"부품비 별도"},{name:"난방 배관 세척",price:"150,000원~",note:"평형에 따라 상이"}], [{title:"보일러 온수 불량 점검",area:"서울 노원구",image:"/cases/repair-service.png",description:"삼방밸브 상태 확인과 부품 교체"}]),
  make("im-heating", "임성진", "온누리난방", "임", "보일러·난방", ["보일러 교체", "분배기", "바닥난방"], ["대전 유성구", "대전 서구", "세종시"], 10, "보일러 교체와 분배기 보수 등 난방 설비 작업을 진행합니다.", ["교체 전 용량 상담", "분배기·밸브 보수", "대전·세종 출장"], [{name:"보일러 교체",price:"현장 견적",note:"제품·용량별 상이"},{name:"분배기 밸브 교체",price:"80,000원~",note:"1구 기준"}], [{title:"노후 보일러 교체",area:"세종시",image:"/cases/repair-service.png",description:"배기통과 온도조절기 함께 정비"}]),
  make("seo-clean", "서유진", "맑은집케어", "서", "청소", ["입주청소", "가전청소", "욕실청소"], ["서울 광진구", "서울 성동구", "서울 중랑구"], 7, "공간과 오염 상태에 맞춰 기본 청소와 추가 작업을 구분해 안내합니다.", ["입주·이사 청소", "주방·욕실 집중", "친환경 세제 선택"], [{name:"입주청소",price:"12,000원~ / 평",note:"공실 기준"},{name:"욕실 집중청소",price:"70,000원~",note:"1실 기준"}], [{title:"24평 아파트 입주청소",area:"서울 성동구",image:"/cases/stand-install.png",description:"창틀·주방·욕실 전체 청소"}]),
  make("kang-clean", "강하늘", "클린메이트", "강", "청소", ["에어컨 청소", "세탁기 청소", "매트리스"], ["부산 해운대구", "부산 수영구", "부산 동래구"], 6, "가전 분해청소 전 제품 형태와 설치 위치를 확인해 비용을 안내합니다.", ["가전 분해세척", "작업 전후 사진", "부산 동부권 출장"], [{name:"벽걸이 에어컨 청소",price:"70,000원~",note:"오염도별 상이"},{name:"통돌이 세탁기",price:"90,000원~",note:"제품별 상이"}], [{title:"벽걸이 에어컨 분해세척",area:"부산 수영구",image:"/cases/wall-install.png",description:"송풍팬과 열교환기 세척"}]),
  make("oh-install", "오태경", "척척설치수리", "오", "설치·수리", ["가구 조립", "TV 설치", "커튼·블라인드"], ["서울 구로구", "서울 금천구", "경기 광명시"], 9, "가구와 생활용품 설치를 사진으로 미리 확인하고 필요한 공구와 작업시간을 안내합니다.", ["가구·가전 설치", "벽체 종류 확인", "소형 작업 묶음 상담"], [{name:"가구 조립",price:"40,000원~",note:"제품 크기별 상이"},{name:"TV 벽걸이 설치",price:"80,000원~",note:"브라켓 별도"}], [{title:"거실 TV 벽걸이 설치",area:"경기 광명시",image:"/cases/system-install.png",description:"콘크리트 벽 타공과 선 정리"}]),
  make("bae-repair", "배정훈", "생활수리연구소", "배", "설치·수리", ["문·손잡이", "방충망", "실리콘"], ["대구 수성구", "대구 중구", "대구 동구"], 8, "문, 손잡이, 방충망처럼 집 안의 작지만 불편한 문제를 한 번에 상담합니다.", ["생활수리 다품목", "작업 사진 사전 견적", "자재 선택 안내"], [{name:"방문 손잡이 교체",price:"35,000원~",note:"자재 포함 여부 확인"},{name:"방충망 교체",price:"50,000원~",note:"창 크기별 상이"}], [{title:"거실 미세방충망 교체",area:"대구 수성구",image:"/cases/wall-install.png",description:"창틀 점검과 모헤어 정리"}]),
  make("shin-welding", "신동욱", "동우현장용접", "신", "용접·금속", ["현장 용접", "철제 난간", "스테인리스"], ["경기 안산시", "경기 시흥시", "인천 남동구"], 18, "철재와 스테인리스 현장 보수부터 소형 제작까지 작업 환경을 먼저 확인합니다.", ["용접 경력 18년", "철재·스테인리스", "산업현장 출장"], [{name:"현장 출장 용접",price:"150,000원~",note:"2시간 기본"},{name:"난간 보수",price:"현장 견적",note:"길이·소재 확인"}], [{title:"공장 안전난간 보수",area:"경기 안산시",image:"/services/commercial-hvac-v2.png",description:"파손 구간 절단 후 재용접"}]),
  make("moon-metal", "문재민", "정직한금속", "문", "용접·금속", ["금속 제작", "캐노피", "간판 프레임"], ["광주 북구", "광주 광산구", "전남 나주시"], 12, "금속 구조물 제작은 실측 후 소재와 마감 방식을 구분해 견적을 안내합니다.", ["맞춤 금속 제작", "실측 후 도면 확인", "분체도장 연계"], [{name:"현장 실측",price:"50,000원~",note:"계약 시 협의"},{name:"금속 구조물",price:"현장 견적",note:"소재·규격별 상이"}], [{title:"상가 캐노피 프레임 제작",area:"광주 광산구",image:"/services/commercial-hvac-v2.png",description:"아연각관 제작과 현장 설치"}]),
  make("nam-network", "남현우", "스마트홈네트워크", "남", "시설·통신", ["CCTV", "네트워크", "출입통제"], ["서울 강남구", "서울 서초구", "경기 과천시"], 10, "가정과 매장의 CCTV·와이파이·출입통제 장비를 환경에 맞춰 구성합니다.", ["CCTV·네트워크 통합", "배선 동선 사전 확인", "설치 후 사용 안내"], [{name:"CCTV 2대 설치",price:"350,000원~",note:"장비 사양별 상이"},{name:"네트워크 점검",price:"70,000원~",note:"출장 포함"}], [{title:"카페 CCTV·와이파이 구축",area:"서울 서초구",image:"/services/commercial-hvac-v2.png",description:"카메라 4대와 공유기·AP 설치"}]),
  make("song-facility", "송인호", "한길시설관리", "송", "시설·통신", ["환기시설", "시설 점검", "소방 보조설비"], ["울산 남구", "울산 중구", "경남 양산시"], 15, "상가와 소규모 사업장의 환기·시설 설비를 정기 또는 단건으로 점검합니다.", ["시설관리 경력 15년", "상가·사무실 점검", "정기관리 상담"], [{name:"시설 기본 점검",price:"100,000원~",note:"2시간 기준"},{name:"환기팬 교체",price:"현장 견적",note:"용량·설치 위치 확인"}], [{title:"상가 환기팬 교체",area:"울산 남구",image:"/services/commercial-hvac-v2.png",description:"덕트 상태 확인과 저소음 팬 교체"}]),
];

export const findTechnician = (slug: string) => technicians.find(item => item.slug === slug);
