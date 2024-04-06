const MOVIES = [
  {
    poster: "https://image.tmdb.org/t/p/original/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
    title: "Homem-Aranha: Sem Volta Para Casa",
  },
  {
    poster: "https://image.tmdb.org/t/p/original/4yycSPnchdNAZirGkmCYQwTd3cr.jpg",
    title: "Guardiões da Galáxia: Vol. 3",
  },
  {
    poster: "https://image.tmdb.org/t/p/original/9fRX8UKlIW7Lb9GqNsJVakWWFCi.jpg",
    title: "Vingadores: Ultimato",
  },
  {
    poster: "https://image.tmdb.org/t/p/original/PtSapjHdDjlVcsqdEo0u7rDE6i.jpg",
    title: "Os Vingadores: The Avengers",
  },
  {
    poster: "https://image.tmdb.org/t/p/original/dsvUR5aEVSkB1Sro7nT6Khqik71.jpg",
    title: "Capitão América: Guerra Civil",
  },
  {
    poster: "https://image.tmdb.org/t/p/original/xq4v7JE8niZ75OYYPDGNn6Gzpyt.jpg",
    title: "Deadpool & Wolverine",
  },
  {
    poster: "https://image.tmdb.org/t/p/original/ejqquyk7r3GLXPir62rksUmPKj5.jpg",
    title: "Homem-Aranha: No Aranhaverso",
  },
  {
    poster: "https://image.tmdb.org/t/p/original/9D40jv8pi9uKnrVDPiN3JYYad72.jpg",
    title: "Pantera Negra",
  },
  {
    poster: "https://image.tmdb.org/t/p/original/f0CtZbae9cXj8bkWdCHzUHx5lsR.jpg",
    title: "Logan",
  },
  {
    poster: "https://image.tmdb.org/t/p/original/19wxfSXHhuJBRbbfUweCsfXFhpv.jpg",
    title: "Capitão América: O Primeiro Vingador",
  },
  {
    poster: "https://image.tmdb.org/t/p/original/9sTDXtIIfHza1rAbmHU2djyzEXA.jpg",
    title: "Capitão América 2: O Soldado Invernal",
  },
  {
    poster: "https://image.tmdb.org/t/p/original/yvqC5hw3rkW9vputtZ8PlwYhJRp.jpg",
    title: "X-Men '97",
  },
  {
    poster: "https://image.tmdb.org/t/p/original/kJQWrrwtu0TAsIKq8Adgzeg4bFt.jpg",
    title: "What If...?",
  },
  {
    poster: "https://image.tmdb.org/t/p/original/A4kvp7vY1BDLrrQIagRCffLKj1t.jpg",
    title: "Vingadores: Guerra Infinita",
  },
  {
    poster: "https://image.tmdb.org/t/p/original/tkc7AVyUoG9VEeDvukN0TVqa24C.jpg",
    title: "Cavaleiro da Lua",
  },
];

const MOVIES_DETAILS = [
  {
    "adult": false,
    image: "https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
    "genre_ids": [
      28,
      12,
      878
    ],
    "id": 634649,
    "original_language": "en",
    "original_title": "Spider-Man: No Way Home",
    overview: "Peter Parker (Tom Holland) é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho (Benedict Cumberbatch), os riscos se tornam ainda mais perigosos, e o forçam a descobrir o que realmente significa ser o Homem-Aranha...",
    "popularity": 259.829,
    "poster_path": "https://image.tmdb.org/t/p/w500/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
    date: "2021-12-15",
    title: "Homem-Aranha: Sem Volta Para Casa",
    "video": false,
    "vote_average": 7.972,
    "vote_count": 19187
  },
  {
    "adult": false,
    image: "https://image.tmdb.org/t/p/original/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
    "genre_ids": [
      878,
      12,
      28
    ],
    "id": 447365,
    "original_language": "en",
    "original_title": "Guardians of the Galaxy Vol. 3",
    overview: "Peter Quill, que ainda está se recuperando da perda de Gamora, tem que reunir a sua equipe para defender o universo e proteger um dos seus. Uma missão que, se não for concluída com sucesso, pode levar ao fim dos Guardiões como os conhecemos.",
    "popularity": 164.776,
    "poster_path": "/4yycSPnchdNAZirGkmCYQwTd3cr.jpg",
    date: "2023-05-03",
    title: "Guardiões da Galáxia: Vol. 3",
    "video": false,
    "vote_average": 7.977,
    "vote_count": 6102
  },
  {
    "adult": false,
    image: "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    "genre_ids": [
      12,
      878,
      28
    ],
    "id": 299534,
    "original_language": "en",
    "original_title": "Avengers: Endgame",
    overview: "Após os eventos devastadores de \"Vingadores: Guerra Infinita\", o universo está em ruínas devido aos esforços do Titã Louco, Thanos. Com a ajuda de aliados remanescentes, os Vingadores devem se reunir mais uma vez a fim de desfazer as ações de Thanos e restaurar a ordem no universo de uma vez por todas, não importando as consequências.",
    "popularity": 147.707,
    "poster_path": "/9fRX8UKlIW7Lb9GqNsJVakWWFCi.jpg",
    date: "2019-04-24",
    title: "Vingadores: Ultimato",
    "video": false,
    "vote_average": 8.256,
    "vote_count": 24660
  },
  {
    "adult": false,
    image: "https://image.tmdb.org/t/p/original/9BBTo63ANSmhC4e6r62OJFuK2GL.jpg",
    "genre_ids": [
      878,
      28,
      12
    ],
    "id": 24428,
    "original_language": "en",
    "original_title": "The Avengers",
    overview: "Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.",
    "popularity": 129.213,
    "poster_path": "/PtSapjHdDjlVcsqdEo0u7rDE6i.jpg",
    date: "2012-04-25",
    title: "Os Vingadores: The Avengers",
    "video": false,
    "vote_average": 7.712,
    "vote_count": 29852
  },
  {
    "adult": false,
    image: "https://image.tmdb.org/t/p/original/wdwcOBMkt3zmPQuEMxB3FUtMio2.jpg",
    "genre_ids": [
      12,
      28,
      878
    ],
    "id": 271110,
    "original_language": "en",
    "original_title": "Captain America: Civil War",
    overview: "Depois do ataque de Ultron, os políticos decidem controlar os Vingadores, já que suas ações afetam toda a humanidade. A decisão coloca o Capitão América em rota de colisão com o Homem de Ferro.",
    "popularity": 122.68,
    "poster_path": "/dsvUR5aEVSkB1Sro7nT6Khqik71.jpg",
    date: "2016-04-27",
    title: "Capitão América: Guerra Civil",
    "video": false,
    "vote_average": 7.441,
    "vote_count": 22041
  },
  {
    "adult": false,
    image: "https://image.tmdb.org/t/p/original/nbq3LfgLXnL5ixZ1Q74jTJmhmTS.jpg",
    "genre_ids": [
      35,
      28,
      878,
      12
    ],
    "id": 533535,
    "original_language": "en",
    "original_title": "Deadpool & Wolverine",
    overview: "O irresponsável anti-herói Deadpool mudará a história do Universo Cinematográfico Marvel com Wolverine.",
    "popularity": 119.002,
    "poster_path": "/xq4v7JE8niZ75OYYPDGNn6Gzpyt.jpg",
    date: "2024-07-24",
    title: "Deadpool & Wolverine",
    "video": false,
    "vote_average": 0.0,
    "vote_count": 0
  },
  {
    "adult": false,
    image: "https://image.tmdb.org/t/p/original/qGQf2OHIkoh89K8XeKQzhxczf96.jpg",
    "genre_ids": [
      16,
      28,
      12,
      878
    ],
    "id": 324857,
    "original_language": "en",
    "original_title": "Spider-Man: Into the Spider-Verse",
    overview: "Miles Morales é um jovem negro do Brooklyn que se tornou o Homem-Aranha inspirado no legado de Peter Parker, já falecido. Entretanto, ao visitar o túmulo de seu ídolo em uma noite chuvosa, ele é surpreendido com a presença do próprio Peter, vestindo o traje do herói aracnídeo sob um sobretudo. A surpresa fica ainda maior quando Miles descobre que ele veio de uma dimensão paralela, assim como outras variações do Homem-Aranha.",
    "popularity": 112.883,
    "poster_path": "/ejqquyk7r3GLXPir62rksUmPKj5.jpg",
    date: "2018-12-06",
    title: "Homem-Aranha: No Aranhaverso",
    "video": false,
    "vote_average": 8.406,
    "vote_count": 14844
  },
  {
    "adult": false,
    image: "https://image.tmdb.org/t/p/original/b6ZJZHUdMEFECvGiDpJjlfUWela.jpg",
    "genre_ids": [
      28,
      12,
      878
    ],
    "id": 284054,
    "original_language": "en",
    "original_title": "Black Panther",
    overview: "O príncipe T'Challa retorna a Wakanda para ser coroado rei. Assumindo o manto de Pantera Negra, ele vai à caça de um vilão que roubou um precioso metal de seu país.",
    "popularity": 89.655,
    "poster_path": "/9D40jv8pi9uKnrVDPiN3JYYad72.jpg",
    "release_date": "2018-02-13",
    "title": "Pantera Negra",
    "video": false,
    "vote_average": 7.386,
    "vote_count": 21529
  },
  {
    "adult": false,
    image: "https://image.tmdb.org/t/p/original/9X7YweCJw3q8Mcf6GadxReFEksM.jpg",
    "genre_ids": [
      28,
      18,
      878
    ],
    "id": 263115,
    "original_language": "en",
    "original_title": "Logan",
    overview: "Em 2029, Logan ganha a vida como chofer de limousine para cuidar do nonagenário Charles Xavier. Debilitado fisicamente e esgotado emocionalmente, ele é procurado por Gabriela, uma mexicana que precisa da ajuda do ex-X-Men para defender a pequena Laura Kinney / X-23. Ao mesmo tempo em que se recusa a voltar à ativa, Logan é perseguido pelo mercenário Donald Pierce, interessado na menina.",
    "popularity": 83.733,
    "poster_path": "/f0CtZbae9cXj8bkWdCHzUHx5lsR.jpg",
    date: "2017-02-28",
    title: "Logan",
    "video": false,
    "vote_average": 7.818,
    "vote_count": 18518
  },
  {
    "adult": false,
    image: "https://image.tmdb.org/t/p/original/yFuKvT4Vm3sKHdFY4eG6I4ldAnn.jpg",
    "genre_ids": [
      28,
      12,
      878
    ],
    "id": 1771,
    "original_language": "en",
    "original_title": "Captain America: The First Avenger",
    overview: "Durante a Segunda Guerra Mundial, Steve Rogers é um homem doente, do Brooklyn, que se transforma no super soldado Capitão América para ajudar nos esforços de guerra. Rogers deve parar o Caveira Vermelha, o implacável chefe de armas de Adolf Hitler e líder de uma organização que pretende usar um misterioso mecanismo de incalculáveis poderes para dominar o mundo.",
    "popularity": 54.778,
    "poster_path": "/19wxfSXHhuJBRbbfUweCsfXFhpv.jpg",
    date: "2011-07-22",
    title: "Capitão América: O Primeiro Vingador",
    "video": false,
    "vote_average": 6.999,
    "vote_count": 20793
  },
  {
    "adult": false,
    image: "https://image.tmdb.org/t/p/original/1RWLMyC9KcFfcaoViMiJGSSZzzr.jpg",
    "genre_ids": [
      28,
      12,
      878
    ],
    "id": 100402,
    "original_language": "en",
    "original_title": "Captain America: The Winter Soldier",
    overview: "Após os eventos catastróficos em Nova York com Os Vingadores, Steve Rogers, segue tentando se ajustar ao mundo moderno. Porém, quando um colega da agência S.H.I.E.L.D. é atacado, Steve se vê preso em uma rede de intrigas que ameaça colocar o mundo em risco. Em parceria com a Viúva Negra e Falcão, seu novo aliado, o Capitão América tem que enfrentar um misterioso e inesperado inimigo, o Soldado Invernal.",
    "popularity": 42.541,
    "poster_path": "/9sTDXtIIfHza1rAbmHU2djyzEXA.jpg",
    date: "2014-03-20",
    title: "Capitão América 2: O Soldado Invernal",
    "video": false,
    "vote_average": 7.666,
    "vote_count": 18168
  },
  {
    "adult": false,
    image: "https://image.tmdb.org/t/p/original/n5pumhzyH0jIBtRoGGjJd8O0wQ0.jpg",
    "genre_ids": [
      16,
      10759,
      10765
    ],
    "id": 138502,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "X-Men '97",
    overview: "Um grupo de mutantes usa seus fabulosos dons para proteger um mundo que os teme e os odeia.",
    "popularity": 903.277,
    "poster_path": "/yvqC5hw3rkW9vputtZ8PlwYhJRp.jpg",
    date: "2024-03-20",
    title: "X-Men '97",
    "vote_average": 8.5,
    "vote_count": 94
  },
  {
    "adult": false,
    image: "https://image.tmdb.org/t/p/original/xuCHkaxkkm9pPum1SByC0dhvR2U.jpg",
    "genre_ids": [
      16,
      10759,
      10765
    ],
    "id": 91363,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "What If...?",
    overview: "O que aconteceria com nossos heróis se a história fosse diferente? Qual rumo eles tomariam em sua vida? Como o nome sugere, a animação mostrará um 'e se' para diversos personagens do Universo Cinematográfico da Marvel, como: o que aconteceria se Peggy Carter fosse a Capitã Britânia em vez de ter se tornado a Agente Carter?",
    "popularity": 285.239,
    "poster_path": "/kJQWrrwtu0TAsIKq8Adgzeg4bFt.jpg",
    date: "2021-08-11",
    title: "What If...?",
    "vote_average": 8.172,
    "vote_count": 4006
  },
  {
    "adult": false,
    image: "https://image.tmdb.org/t/p/original/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
    "genre_ids": [
      12,
      28,
      878
    ],
    "id": 299536,
    "original_language": "en",
    "original_title": "Avengers: Infinity War",
    overview: "Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.",
    "popularity": 246.249,
    "poster_path": "/A4kvp7vY1BDLrrQIagRCffLKj1t.jpg",
    date: "2018-04-25",
    title: "Vingadores: Guerra Infinita",
    "video": false,
    "vote_average": 8.248,
    "vote_count": 28668
  },
  {
    "adult": false,
    image: "https://image.tmdb.org/t/p/original/iux1vKPT7Vw1AzetZb4Jz6wfYsm.jpg",
    "genre_ids": [
      10759,
      10765,
      9648
    ],
    "id": 92749,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Moon Knight",
    overview: "A série acompanha Steven Grant, um gentil e educado funcionário de uma loja de souvenir, que é atormentado com apagões e memórias de outra vida. Steven descobre que tem transtorno dissociativo de identidade e divide o corpo com o mercenário Marc Spector. À medida que os inimigos de Steven/Marc se voltam para eles, ambos devem navegar em suas complexas identidades enquanto mergulham em um mistério mortal entre os poderosos deuses do Egito.",
    "popularity": 198.877,
    "poster_path": "/tkc7AVyUoG9VEeDvukN0TVqa24C.jpg",
    date: "2022-03-30",
    title: "Cavaleiro da Lua",
    "vote_average": 7.745,
    "vote_count": 2643
  },
];

export { MOVIES, MOVIES_DETAILS };