const quotes = [
  {
    quote: "괜찮아 너라면 끝까지 잘 해낼 거야",
    author: "<센과 치히로의 행방불명, 2001>",
  },
  {
    quote:
      "싫다던가, 돌아가고 싶던가라고 말하고 싶어질 때도 있겠지만 괴로워도 참고 기회를 기다리는 거야",
    author: "<센과 치히로의 행방불명, 2001>",
  },
  {
    quote: "한 번 만난 인연은 잊혀지는 것이 아니라 잊고 있을 뿐이야",
    author: "<센과 치히로의 행방불명, 2001>",
  },
  {
    quote: "자신의 일은 스스로 정하는 거야",
    author: "<하울의 움직이는 성, 2004>",
  },
  {
    quote: "다들 웃어 봐, 그럼 무서운 건 도망갈 테니까",
    author: "<이웃집 토토로, 2001>",
  },
  {
    quote: "꿈이었지만, 꿈이 아니었어!",
    author: "<이웃집 토토로, 2001>",
  },
  {
    quote: "너무 겉모습에만 신경 쓰지 마. 중요한 건 마음가짐이야",
    author: "<마녀 배달부 키키, 1989>",
  },
  {
    quote: "가끔 우울하기도 하지만 나는 괜찮습니다",
    author: "<마녀 배달부 키키, 1989>",
  },
  {
    quote:
      "자기 안의 원석을 찾아내서 오랜 시간 다듬어 가는 거란다. 시간이 많이 드는 일이지",
    author: "<귀를 기울이면, 1995>",
  },
  {
    quote: "처음부터 완벽하기를 기대하면 안 돼",
    author: "<귀를 기울이면, 1995>",
  },
  {
    quote: "남들과 다른 방식의 삶이란 그만큼 어려운 거다",
    author: "<귀를 기울이면, 1995>",
  },
  {
    quote: "가까이 있는 것은 작게, 멀리 있는 것은 크게 보이는 법이지",
    author: "<귀를 기울이면, 1995>",
  },
  {
    quote: "오늘이 안 되면 내일이 있다. 언제라도 내일은 있다",
    author: "<추억은 방울방울, 1991>",
  },
  {
    quote: "애벌레는 번데기가 되지 않으면 나비가 되지 못한다",
    author: "<추억은 방울방울, 1991>",
  },
  {
    quote: "원하는 걸 포기한다면 그것은 원하는 게 아니다",
    author: "<폼포코 너구리 대작전, 1994>",
  },
  {
    quote: "너는 너 자신이 되어야 해",
    author: "<고양이의 보은, 2002>",
  },
  {
    quote: "자기 자신을 잊으면 안 돼, 너의 시간을 살아야 해",
    author: "<고양이의 보은, 2002>",
  },
  {
    quote: "넌 행복한 사람이야",
    author: "<추억의 마니, 2014>",
  },
  {
    quote: "확인한 다음에 걱정해도 안 늦어",
    author: "<마루 밑 아리에티, 2010>",
  },
  {
    quote: "지금 도망가면, 영원히 쫓기게 될 것이다",
    author: "<천공의 성 라퓨타, 2004>",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
