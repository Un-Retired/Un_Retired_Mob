import { categories } from "./categories";

export const recommendedCourses = [
  // 사전예약
  {
    id: 6,
    ...categories["사전 예약하기"],
    isPreReservation: true,
    title: "사전 예약하고 가장 먼저 시청해 보세요!",
    description:
      "AI 활용 / 유아 교육 / SDGs / 클래식 인문학 / 알파 세대 이해하기 등의 콘텐츠가 추가될 예정입니다.",
    iconButton: "assets/button_subscribe.svg",
  },
  // 권문현
  {
    id: 1,
    image: "assets/images/권문현.png",
    ...categories["인문학 · 교양"],
    title: "47년 호텔경력",
    introDesc:
      "웨스턴 조선 호텔,\n권문현 지배인이 들려주는\n호텔서비스의 모든 것.",
    description:
      "웨스턴 조선 호텔,\n권문현 지배인이 들려주는 호텔서비스의\n 모든 것.",
    detailedImage: "assets/detailed_kwon2.png",
    chaptertime: "챕터 1개 · 0시간 30분",
    instructor: {
      name: "권문현",
      role: "47년 호텔 지배인",
      role2: "호텔 지배인",
      profile: "assets/avatar_kwon2.png",
    },
    introduction:
      "안녕하세요.\n웨스틴 조선호텔 서울 지배인 권문현입니다.\n47년 호텔생활을 하며 쌓아온 호텔 서비스의 마음가짐과\n필요한 역량을 포함한 모든 것을 호텔리어를 꿈꾸는\n젊은 세대들에게 핵심만을 담아 전달하려 합니다.",
    curriculum: [
      {
        episode: "Episode 1",
        episodeDescription: "언어가 아닌 태도가 만든 서비스의 시작",
        chapters: [
          {
            key: 1,
            title: "1",
            description: "1. 권문현 지배인이 들려주는 호텔서비스의 모든 것",
            duration: "30:00",
          },
        ],
      },
    ],
    introImages: [
      "assets/intro1.png",
      "assets/detailed_intro_kwon1.png",
      "assets/detailed_intro_kwon2.png",
      "assets/intro2.png",
    ],
    introReason:
      "안녕하세요. 웨스틴 조선호텔 서울 지배인 권문현입니다. \n47년 호텔생활을 하며 쌓아온 호텔 서비스의 마음가짐과\n필요한 역량을 포함한 모든 것을 호텔리어를 꿈꾸는\n젊은 세대들에게 핵심만을 담아 전달하려 합니다.",
    introBenefit:
      "• 호텔리어에게 기본이 되는 고객응대방법\n• 호텔리어가 가져야 하는 목표와 행동방식\n• 47년 노하우의 고객감동서비스 제공법\n• 장기 근속을 할 수 있었던 권문현 지배인만의 노하우",
    curriculumProlog: "경험이 만든 철학-47년 호텔리어의 조언",
    career: [
      "• 글래드 서울호텔 지배인 (10년 근무)",
      "• 웨스틴 조선호텔 지배인 (36년 근무)",
      "• 서강대 호텔 MBA 과정 수료",
      "• 신문, 잡지, 방송 다수 출연",
    ],
    achievements: [
      "• 웨스틴 조선호텔 모범사원 3회 수상",
      "• 웨스틴 조선호텔 장기근속상 수상",
      "• 콘래드 서울호텔 총지배인상 수상",
      "• 감사패 다수 수상",
    ],
    isOnline: false,
  },
  // 이기훈
  {
    id: 2,
    image: "assets/images/이기훈.png",
    ...categories["인사 · 교육"],
    title: "25년 은퇴설계",
    introDesc:
      "은퇴설계 25년 경력의\n베테랑 이기훈 강사의 직장이 아닌 직업 만드는 법",
    description:
      "은퇴설계 25년 경력의 베테랑,\n이기훈 강사가 들려주는 직장이 아닌 직업\n만드는 법 - 시즌 1",
    detailedImage: "assets/detailed_lee2.png",
    chaptertime: "챕터 5개 · 1시간 15분",
    instructor: {
      name: "이기훈",
      role: "경영 컨설턴트",
      role2: "경영 컨설턴트",
      profile: "assets/avatar_lee2.png",
    },
    introduction:
      "안녕하세요. 경영 컨설팅 전문가 이기훈입니다.\n25년 간 약 1000개의 기업을 대상으로 자기경영, 셀프리더십, 경력관리(CDP), 은퇴· 퇴직 설계, 리더십 등 강의 및 경영 컨설팅을 수행해왔습니다. 25년 노하우를 기반으로 은퇴를 앞둔 사람들에게 어떤 것을 준비해야 하는지 전달하려합니다.",
    curriculum: [
      {
        episode: "Episode 1",
        episodeDescription: "당신의 경력을 디자인하라 - 1",
        chapters: [
          {
            key: 1,
            title: "1",
            description: "1. 당신의 경력을 디자인하라",
            duration: "15:00",
          },
          {
            key: 2,
            title: "2",
            description: "2. 직장인의 메멘토모리",
            duration: "15:00",
          },
          {
            key: 3,
            title: "3",
            description: "3. 멧돼지와 집돼지",
            duration: "15:00",
          },
        ],
      },
      {
        episode: "Episode 2",
        episodeDescription: "당신의 경력을 디자인하라 - 2",
        chapters: [
          {
            key: 4,
            title: "4",
            description: "4. 직장과 직업을 디자인하라",
            duration: "15:00",
          },
          {
            key: 5,
            title: "5",
            description: "5. 평생 자신을 고용하라",
            duration: "15:00",
          },
        ],
      },
    ],
    introImages: [
      "assets/lecture_png.png",
      "assets/detailed_intro_lee1.png",
      "assets/detailed_intro_lee2.png",
      "assets/lecture_png2.png",
    ],
    introReason:
      "100시대에 평균 근속 14~15년의 짧은 직장 생활과 40대\n중반 강제 퇴직이라는 위기를 해결하기 위해 기획되었습니다.\n또한, 주된 직장에서 평생직업을 만들 수 있는 노하우를\n제시하여 지속 가능한 경력 관리 방법을 제공합니다.",
    introBenefit:
      "• 직장에서 성공한 사람들의 성공포인트 벤치마킹\n• 평생직업을 창출할 수 있는 경력관리(CDP)노하우\n• 3단계에서 다단계로 변하는 경력관리의 스킬\n• 퇴직 후 30년을 준비할 수 있는 절정의 고수가 되는 방법",
    curriculumProlog: "평생 현역으로 사는 법 – 은퇴 이후를 디자인하라",
    career: [
      "• 연세대 EMBA 과정 수료.",
      "• 30년 삼성그룹,현대그룹,LG그룹 등 1000개 기업 강의 경영컨설팅 및 다수 대학 강의.",
      "• 인간관계/리더십/경력관리(CDP)/생애설계/은퇴,퇴직관리 컨설팅 전문가.",
    ],
    achievements: [
      "• NCS 자기개발능력 공저",
      "• 행복한 은퇴를 위한 생애설계 공저",
      "• 퇴직과 은퇴사이 출간",
    ],
    isOnline: true,
  },
  // 김태연
  {
    id: 3,
    image: "assets/images/김태연.png",
    ...categories["인사 · 교육"],
    title: "37년 유아교육 전문가",
    introDesc:
      "37년 유아교육 경력 영어유치원 원장 출신이 전하는 우리 아이 영어유치원 선택 필살 전략",
    description:
      "강남 • 서초 영어유치원 설립자, 원장이 전하는 35년 경력의 우리 아이 영어유치원 선택 필살 전략",
    detailedImage: "assets/images/김태연.png",
    chaptertime: "챕터 6개 · 1시간 30분",
    instructor: {
      name: "김태연",
      role: "유아교육 전문가",
      role2: "유아교육 전문가",
      profile: "assets/avatar_김태연.png",
    },
    introduction:
      "안녕하세요. 35년 이상의 유아교육 경력을 가진 전문가로 강남 서초 지역에서 13년간 영어 유치원을 운영하며 글로벌 교육 환경을 구축하고 놀이 교육을 통해 아이들이 행복하게 성장할 수 있도록 지원해왔습니다.  제 경험과 노하우를 바탕으로 교육의 질을 높이고 학부모님과 차세대 교육 전문가들에게 소중한 지식을 전수하겠습니다.",
    curriculum: [
      {
        episode: "Episode 1",
        episodeDescription: "영어유치원 A to Z: 정의, 선택, 맞춤 교육",
        chapters: [
          {
            key: 1,
            title: "1",
            description: "1. 영어유치원이란?",
            duration: "15:00",
          },
          {
            key: 2,
            title: "2",
            description: "2. 영어유치원 선택 시 고려해야 할 요소",
            duration: "15:00",
          },
          {
            key: 3,
            title: "3",
            description: "3. 우리 아이에게 적합한 영어유치원",
            duration: "15:00",
          },
        ],
      },
      {
        episode: "Episode 2",
        episodeDescription: "영어유치원 입학 준비와 적응 전략",
        chapters: [
          {
            key: 4,
            title: "1",
            description: "1. 입학 전 준비 단계",
            duration: "15:00",
          },
          {
            key: 5,
            title: "2",
            description: "2. 입학 초기 적응하기",
            duration: "15:00",
          },
          {
            key: 6,
            title: "3",
            description: "3. 지속적인 성장과 학습 지원하기",
            duration: "15:00",
          },
        ],
      },
    ],
    introImages: [
      "assets/intro_유진초이_1.png",
      "assets/intro_유니초이_2.png",
      "assets/intro_유니초이_3.png",
      "assets/intro_유진초이_4.png",
    ],
    introReason:
      "영어유치원의 개념과 역할을 이해하고, 자녀에게 맞는 유치원을 선택하는 방법을 배우도록 돕기 위해 기획되었습니다. 또한, 입학 전 준비와 초기 적응 전략을 제공하여 아이들이 새로운 환경에 안정적으로 적응하고 부모님도 효과적으로 지원할 수 있도록 돕는 것이 목표입니다.",
    introBenefit:
      "• 영어유치원에 대한 정확한 개념, 교육 방식 장단점 이해\n• 우리 자녀의 성향, 학습 스타일에 따른 유치원 선택 기준 제공\n• 입학 전 준비 및 초기 적응 노하우 전략 습득\n• 지속적인 영어 학습, 가정 내 학습 전략 지원법 안내",
    curriculumProlog: "영어유치원 로드맵: 정의부터 선택·입학·적응까지",
    career: [
      "• 37년 유아교육 경력.",
      "• 강남 서초 지역 14년간 영어유치원(원장) 설립 및 운영.",
      "• 유아교육과 교수 & 강의 경력 10년.",
      "• 유치원 교사양성 교육 및 연수강의.",
      "• 놀이교육 및 부모교육 전문가",
    ],
    achievements: [
      "• 서울시 스승의 날 공로 표창.",
      "• 서울시 교육청 지정 기본 생활습관 시범 공개 수업 발표.",
      "• 서울시 교육청 지정 부모교육 시범 공개 수업 발표.",
    ],
    isOnline: true,
  },
  // 이현구
  {
    id: 4,
    image: "assets/images/이현구.png",
    ...categories["공학 · 기술"],
    title: "30년 마케팅 전문가",
    introDesc: "30년 마케팅 베테랑의\nAI 활용 비법: 데이터에서\n혁신으로.",
    description: "30년 마케팅 베테랑의 AI 활용 비법:\n데이터에서 혁신으로",
    detailedImage: "assets/detailed_이현구2.png",
    chaptertime: "챕터 5개 · 1시간 15분",
    instructor: {
      name: "이현구",
      role: "AI 마케팅 전문가",
      role2: "AI 마케팅 전문가",
      profile: "assets/avatar_이현구.png",
    },
    introduction:
      "안녕하세요.이현구입니다.\n저는 AI를 활용한 비지니스 혁신과 데이터 분석을 중심으로 강의와 컨설팅을 진행하고 있습니다.삼성전자와 삼성자동차에서 전략 기획 경험을 바탕으로 현재 AI융합비지니스포럼 회장으로서 AI를 통해 더 스마트한 미래를 설계할 수 있도록 돕는 데 집중하고 있습니다.",
    curriculum: [
      {
        episode: "Episode 1",
        episodeDescription: "AI마케팅 전략-생성형 AI부터 데이터 활용까지",
        chapters: [
          {
            key: 1,
            title: "1",
            description: "1. 생성형 AI와 마케팅의 융합",
            duration: "15:00",
          },
          {
            key: 2,
            title: "2",
            description: "2. 데이터 기반 마케팅 전략",
            duration: "15:00",
          },
          {
            key: 3,
            title: "3",
            description: "3. AI기반 STP 전략",
            duration: "15:00",
          },
        ],
      },
      {
        episode: "Episode 2",
        episodeDescription: "AI소셜미디어 마케팅-데이터 분석과 전략 수립",
        chapters: [
          {
            key: 4,
            title: "1",
            description: "1. AI활용 소셜미디어 분석",
            duration: "15:00",
          },
          {
            key: 5,
            title: "2",
            description: "2. 소셜미디어 분석기반 전략수립",
            duration: "15:00",
          },
        ],
      },
    ],
    introImages: [
      "assets/intro_이현구_1.png",
      "assets/intro_이현구_2.png",
      "assets/intro_이현구_3.png",
      "assets/intro_이현구_4.png",
    ],
    introReason:
      "AI는 단순한 기술을 넘어 현대 비지니스의 핵심 도구로 자리 잡았습니다. 변화하는 시장에서 효율성과 경쟁령을 높이기 위해 기업과 개인이 AI를 효과적으로 활용할 수 있는 방법을 배우는 것은 필수적입니다. 이 강의는 AI의 본질과 활용 사례를 통해 참가자들이 마케팅 전략과 비즈니스 혁신을 실질적으로 연결할 수 있도록 돕고자 기획되었습니다.",
    introBenefit:
      "• AI의 개념과 비즈니스 적용 방법을 익혀 실무에서의 활용\n• AI 기반 데이터 분석과 자동화 전략으로 마케팅 효과를 극대화\n• 실전 사례와 도구를 활용해 배운 내용을 바로 비즈니스에 적용\n• AI 기술과 윤리적 이슈를 다루며 변화하는 시장에 대비",
    curriculumProlog: "AI가 바꾸는 비지니스,이제는 선택이 아닌 필수",
    career: [
      "• 강남대 산학협력단 교수(PhD)",
      "• AI융합비지니스포럼 회장",
      "• 前 삼성전자(무선 전략마케팅,글로벌마케팅)",
      "• 前 삼성자동차(전략기획,상품전략)",
      "• 前 삼성경제연구소 (컨설팅),기아자동차 (마케팅)",
    ],
    achievements: [
      "• 경기 스타트업 플랫폼 전문가",
      "• 창업진흥원 평가위원",
      "• 메가트렌드 ESG•DX•AI연구('24.8월, 공저)",
      "• 챗GPT활용의 정석('24.6월,공저)",
      "• ChatGPT AI로 데이터분석 마스터하기('23.5월,공저)",
    ],
    isOnline: true,
  },
  // 이재원
  {
    id: 5,
    image: "assets/images/이재원.png",
    ...categories["인사 · 교육"],
    title: "15년 문화산업 전문가",
    introDesc:
      "15년 경력 미디어 • 문화산업 전문가가 전\n하는 세대 간\n소통의 실질적인 패러다임",
    description:
      "15년 경력 미디어,문화산업 전문가가 전하는\n세대 간 소통의 실질적인 패러다임",
    detailedImage: "assets/detailed_이재원2.png",
    chaptertime: "챕터 6개 · 1시간 30분",
    instructor: {
      name: "이재원",
      role: "문화산업 전문가",
      role2: "문화산업 전문가",
      profile: "assets/avatar_이재원.png",
    },
    introduction:
      "안녕하세요.이재원입니다.\n저는 미디어와 세대 간 소통을 연구하는 성균관대학교 초빙교수이자 한양대학교 겸임교수입니다. 전 텐아시아 편집장,스포츠한국 부장으로 미디어 산업을 분석해왔으며 현재는 Z세대•알파세대(잘파 세대)와의 소통 방식과 문화 변화를 연구하고 있습니다.",
    curriculum: [
      {
        episode: "Episode 1",
        episodeDescription: "잘파 세대,그들은 누구인가?",
        chapters: [
          {
            key: 1,
            title: "1",
            description: "1. 전세계인과 무한 경쟁하는 잘파 세대",
            duration: "15:00",
          },
          {
            key: 2,
            title: "2",
            description: "2. 섬세한 소통이 디폴트인 잘파 세대",
            duration: "15:00",
          },
          {
            key: 3,
            title: "3",
            description: "3. 공정에 목마른 잘파 세대",
            duration: "15:00",
          },
        ],
      },
      {
        episode: "Episode 2",
        episodeDescription: "잘파세대와 소통하는 법",
        chapters: [
          {
            key: 4,
            title: "1",
            description: "1. 원칙은 차갑게,감정은 뜨겁게",
            duration: "15:00",
          },
          {
            key: 5,
            title: "2",
            description: "2. 소통 주인의 자리를 내어주기",
            duration: "15:00",
          },
          {
            key: 6,
            title: "3",
            description: "3. 잘파 감수성 착장한 애티튜드 익히기",
            duration: "15:00",
          },
        ],
      },
    ],
    introImages: [
      "assets/intro_이재원_1.png",
      "assets/intro_이재원_2.png",
      "assets/intro_이재원_3.png",
      "assets/intro_이재원_4.png",
    ],
    introReason:
      "잘파 세대는 새로운 소통 방식과 가치관을 가진 세대로 기성세대와의 간극이 점점 커지고 있습니다. 이 강의는 잘파 세대의 특성을 이해하고 효과적으로 소통하는 방법을 배우기 위해 기획되었습니다. 실질적인 사례와 통계를 통해 세대 간 공감과 존중을 바탕으로 원활한 소통을 돕는 것이 목표입니다.",
    introBenefit:
      "• 세대 간 차이를 인식하고 그들의 가친관과 소통 방식 이해\n• 잘파 세대와의 원활한 대화를 위한 실직적인 소통 방법 학습\n• 조직 내 세대 차이를 극복하고 효율적인 협업 환경 조성\n• 실습과 사례를 통해 배운 내용을 실제 대인관계와 업무에서 바로 활용",
    curriculumProlog: "잘파 세대,이해 없이 소통할 수 없다",
    career: [
      "• 성균관대학교 컬쳐앤테크놀러지융합전공 초빙교수 / 한양대학교 실용음악학과 겸임교수",
      "• 전 텐아시아 편집장/스포츠한국 부장",
      "• 이화여자대학교 언론홍보영상학 박사",
      "• 이데일리 문화대상•청룡 시리즈 어워드•더케이 빌보드 차트 심사위원",
    ],
    achievements: [
      "• 저서 『문화산업 마케팅 전략의 이론과 실제』,『AI와 더불어 살기』등 다수 집필",
      "• 잘파 세대(Gen Z+α) 소통 전문가",
      "• KBS<한민족 하나로>,SBS<열린TV 시청자세상>고정 출연",
    ],
    isOnline: true,
  },
];
