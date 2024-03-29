interface CardInfo {
  url: string;
  title: string;
  text: string;
}

export function useCardList(): CardInfo[] {
  return [
    {
      url: `${process.env.PUBLIC_URL}/images/menu/Financier.svg`,
      title: "휘낭시에",
      text: "플레인 / 헤이즐넛 / 소보루 / 고르곤졸라 / 솔티카라멜 피칸 / 소시지 / 소금초코 / 쑥 / 인절미 / 초코 / 흑임자",
    },
    {
      url: `${process.env.PUBLIC_URL}/images/menu/example-img.jpg`,
      title: "마들렌",
      text: "레몬 / 당근 크리치즈 / 초코",
    },
    {
      url: `${process.env.PUBLIC_URL}/images/menu/example-img.jpg`,
      title: "티그레",
      text: "초코 / 쑥 / 말차 / 인절미",
    },
    {
      url: `${process.env.PUBLIC_URL}/images/menu/example-img.jpg`,
      title: "미니 티그레",
      text: "초코 / 쑥 / 말차 / 인절미",
    },
    {
      url: `${process.env.PUBLIC_URL}/images/menu/galette-bretonne.svg`,
      title: "갈레트부르통",
      text: "-",
    },
    {
      url: `${process.env.PUBLIC_URL}/images/menu/example-img.jpg`,
      title: "에그타르트",
      text: "-",
    },
    {
      url: `${process.env.PUBLIC_URL}/images/menu/white-cookie.svg`,
      title: "쿠키",
      text: "초코칭크 / 화이트 마카다미아 / 옥수수치즈",
    },
    {
      url: `${process.env.PUBLIC_URL}/images/menu/wine-scone.svg`,
      title: "스콘",
      text: "플레인 / 무화과 고르곤졸라",
    },
    {
      url: `${process.env.PUBLIC_URL}/images/menu/example-img.jpg`,
      title: "미니 샤브레 쿠키",
      text: "플레인 / 쑥 / 커피 / 초코",
    },
  ];
}
