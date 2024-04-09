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
    image: "https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
    backdrops: [
      "https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
      "https://image.tmdb.org/t/p/original/zD5v1E4joAzFvmAEytt7fM3ivyT.jpg",
      "https://image.tmdb.org/t/p/original/VlHt27nCqOuTnuX6bku8QZapzO.jpg",
    ],
    "id": 634649,
    overview: "Peter Parker (Tom Holland) é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho (Benedict Cumberbatch), os riscos se tornam ainda mais perigosos, e o forçam a descobrir o que realmente significa ser o Homem-Aranha...",
    "poster_path": "https://image.tmdb.org/t/p/w500/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
    date: "2021-12-15",
    title: "Homem-Aranha: Sem Volta Para Casa",
  },
  {
    image: "https://image.tmdb.org/t/p/original/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
    backdrops: [
      "https://image.tmdb.org/t/p/original/9yMDDDIrVCBG95agEGA6V4zP0j6.jpg",
      "https://image.tmdb.org/t/p/original/aDWCqhNeeTrhywDI2ggHncqrqqi.jpg",
      "https://image.tmdb.org/t/p/original/nSwxDkxeYydsmrqSqgPcCSxaKJz.jpg",
    ],
    "id": 447365,
    overview: "Peter Quill, que ainda está se recuperando da perda de Gamora, tem que reunir a sua equipe para defender o universo e proteger um dos seus. Uma missão que, se não for concluída com sucesso, pode levar ao fim dos Guardiões como os conhecemos.",
    "poster_path": "/4yycSPnchdNAZirGkmCYQwTd3cr.jpg",
    date: "2023-05-03",
    title: "Guardiões da Galáxia: Vol. 3",
  },
  {
    image: "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    backdrops: [
      "https://image.tmdb.org/t/p/original/euFbK14mZe1lYOTiQF95tjyJlgL.jpg",
      "https://image.tmdb.org/t/p/original/b55ke93qqT7lphrf4v7wANUl0jI.jpg",
      "https://image.tmdb.org/t/p/original/78WAcG3Xp5yYh8bReVBzKmUUQDe.jpg",
    ],
    "id": 299534,
    overview: "Após os eventos devastadores de \"Vingadores: Guerra Infinita\", o universo está em ruínas devido aos esforços do Titã Louco, Thanos. Com a ajuda de aliados remanescentes, os Vingadores devem se reunir mais uma vez a fim de desfazer as ações de Thanos e restaurar a ordem no universo de uma vez por todas, não importando as consequências.",
    "poster_path": "/9fRX8UKlIW7Lb9GqNsJVakWWFCi.jpg",
    date: "2019-04-24",
    title: "Vingadores: Ultimato",
  },
  {
    image: "https://image.tmdb.org/t/p/original/9BBTo63ANSmhC4e6r62OJFuK2GL.jpg",
    backdrops: [
      "https://image.tmdb.org/t/p/original/AcPvwyYOopP2jJAC5VYs2Y7xhWQ.jpg",
      "https://image.tmdb.org/t/p/original/pGFQCp12a8andfPlpnmXz44IIvY.jpg",
      "https://image.tmdb.org/t/p/original/gHLs7Fy3DzLmLsD4lmfqL55KGcl.jpg",
    ],
    "id": 24428,
    overview: "Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.",
    "poster_path": "/PtSapjHdDjlVcsqdEo0u7rDE6i.jpg",
    date: "2012-04-25",
    title: "Os Vingadores: The Avengers",
  },
  {
    image: "https://image.tmdb.org/t/p/original/wdwcOBMkt3zmPQuEMxB3FUtMio2.jpg",
    backdrops: [
      "https://image.tmdb.org/t/p/original/kvRT3GwcnqGHzPjXIVrVPhUix7Z.jpg",
      "https://image.tmdb.org/t/p/original/7FWlcZq3r6525LWOcvO9kNWurN1.jpg",
      "https://image.tmdb.org/t/p/original/cJGXeC2nPWBC2dZdA1i3MI5aRZC.jpg",
    ],
    "id": 271110,
    overview: "Depois do ataque de Ultron, os políticos decidem controlar os Vingadores, já que suas ações afetam toda a humanidade. A decisão coloca o Capitão América em rota de colisão com o Homem de Ferro.",
    "poster_path": "/dsvUR5aEVSkB1Sro7nT6Khqik71.jpg",
    date: "2016-04-27",
    title: "Capitão América: Guerra Civil",
  },
  {
    image: "https://image.tmdb.org/t/p/original/nbq3LfgLXnL5ixZ1Q74jTJmhmTS.jpg",
    backdrops: [
      "https://image.tmdb.org/t/p/original/isc6BYycX7RcDtMggwuINmeSO6U.jpg",
      "https://image.tmdb.org/t/p/original/eRCJIwldmd1K6GUqIjtHXVtLgLr.jpg",
      "https://image.tmdb.org/t/p/original/jJrmUmk6wAqh08Wqi13Q9DzOYhu.jpg",
    ],
    "id": 533535,
    overview: "O irresponsável anti-herói Deadpool mudará a história do Universo Cinematográfico Marvel com Wolverine.",
    "poster_path": "/xq4v7JE8niZ75OYYPDGNn6Gzpyt.jpg",
    date: "2024-07-24",
    title: "Deadpool & Wolverine",
  },
  {
    image: "https://image.tmdb.org/t/p/original/qGQf2OHIkoh89K8XeKQzhxczf96.jpg",
    backdrops: [
      "https://image.tmdb.org/t/p/original/16SHwVKGULFHsymmVrz2N14kEud.jpg",
      "https://image.tmdb.org/t/p/original/b9YkKJcW3pPaXgMZu9uoT7v9yRB.jpg",
      "https://image.tmdb.org/t/p/original/4KF5Mgf74VfOVzeZPYO0V4Cp2IP.jpg",
    ],
    "id": 324857,
    overview: "Miles Morales é um jovem negro do Brooklyn que se tornou o Homem-Aranha inspirado no legado de Peter Parker, já falecido. Entretanto, ao visitar o túmulo de seu ídolo em uma noite chuvosa, ele é surpreendido com a presença do próprio Peter, vestindo o traje do herói aracnídeo sob um sobretudo. A surpresa fica ainda maior quando Miles descobre que ele veio de uma dimensão paralela, assim como outras variações do Homem-Aranha.",
    "poster_path": "/ejqquyk7r3GLXPir62rksUmPKj5.jpg",
    date: "2018-12-06",
    title: "Homem-Aranha: No Aranhaverso",
  },
  {
    image: "https://image.tmdb.org/t/p/original/b6ZJZHUdMEFECvGiDpJjlfUWela.jpg",
    backdrops: [
      "https://image.tmdb.org/t/p/original/sIwFcU1pql5a3LdZGxsRKi9JfTL.jpg",
      "https://image.tmdb.org/t/p/original/19Ed4XgjahPm4U8JT7SnntERIlt.jpg",
      "https://image.tmdb.org/t/p/original/AlFqBwJnokrp9zWTXOUv7uhkaeq.jpg",
    ],
    "id": 284054,
    overview: "O príncipe T'Challa retorna a Wakanda para ser coroado rei. Assumindo o manto de Pantera Negra, ele vai à caça de um vilão que roubou um precioso metal de seu país.",
    "poster_path": "/9D40jv8pi9uKnrVDPiN3JYYad72.jpg",
    date: "2018-02-13",
    title: "Pantera Negra",
  },
  {
    image: "https://image.tmdb.org/t/p/original/9X7YweCJw3q8Mcf6GadxReFEksM.jpg",
    backdrops: [
      "https://image.tmdb.org/t/p/original/dfBiALov0mYoqKCHaOHka2x0U26.jpg",
      "https://image.tmdb.org/t/p/original/c71zkXAykw5uu4cHnUCE6vA3NY0.jpg",
      "https://image.tmdb.org/t/p/original/4x4BLaX5WgKVf7VLuNEOIkEKCIR.jpg",
    ],
    "id": 263115,
    overview: "Em 2029, Logan ganha a vida como chofer de limousine para cuidar do nonagenário Charles Xavier. Debilitado fisicamente e esgotado emocionalmente, ele é procurado por Gabriela, uma mexicana que precisa da ajuda do ex-X-Men para defender a pequena Laura Kinney / X-23. Ao mesmo tempo em que se recusa a voltar à ativa, Logan é perseguido pelo mercenário Donald Pierce, interessado na menina.",
    "poster_path": "/f0CtZbae9cXj8bkWdCHzUHx5lsR.jpg",
    date: "2017-02-28",
    title: "Logan",
  },
  {
    image: "https://image.tmdb.org/t/p/original/yFuKvT4Vm3sKHdFY4eG6I4ldAnn.jpg",
    backdrops: [
      "https://image.tmdb.org/t/p/original/4NWWpT0jiMUak8r6jfpvG4eBgFU.jpg",
      "https://image.tmdb.org/t/p/original/g5ZL1D24MAYI40l0p6Z6RtJnKFI.jpg",
      "https://image.tmdb.org/t/p/original/wpI4He62QfRK4F7njzqi0162pKC.jpg",
    ],
    "id": 1771,
    overview: "Durante a Segunda Guerra Mundial, Steve Rogers é um homem doente, do Brooklyn, que se transforma no super soldado Capitão América para ajudar nos esforços de guerra. Rogers deve parar o Caveira Vermelha, o implacável chefe de armas de Adolf Hitler e líder de uma organização que pretende usar um misterioso mecanismo de incalculáveis poderes para dominar o mundo.",
    "poster_path": "/19wxfSXHhuJBRbbfUweCsfXFhpv.jpg",
    date: "2011-07-22",
    title: "Capitão América: O Primeiro Vingador",
  },
  {
    image: "https://image.tmdb.org/t/p/original/1RWLMyC9KcFfcaoViMiJGSSZzzr.jpg",
    backdrops: [
      "https://image.tmdb.org/t/p/original/eyfYdLr9nXIlvmDJNcWBb6idyoB.jpg",
      "https://image.tmdb.org/t/p/original/aZBZtLCM90QHDCuZFR6oc4NXCWu.jpg",
      "https://image.tmdb.org/t/p/original/5YAssBZnyFJ8uAUf6iWNH1o0MjO.jpg",
    ],
    "id": 100402,
    overview: "Após os eventos catastróficos em Nova York com Os Vingadores, Steve Rogers, segue tentando se ajustar ao mundo moderno. Porém, quando um colega da agência S.H.I.E.L.D. é atacado, Steve se vê preso em uma rede de intrigas que ameaça colocar o mundo em risco. Em parceria com a Viúva Negra e Falcão, seu novo aliado, o Capitão América tem que enfrentar um misterioso e inesperado inimigo, o Soldado Invernal.",
    "poster_path": "/9sTDXtIIfHza1rAbmHU2djyzEXA.jpg",
    date: "2014-03-20",
    title: "Capitão América 2: O Soldado Invernal",
  },
  {
    image: "https://image.tmdb.org/t/p/original/n5pumhzyH0jIBtRoGGjJd8O0wQ0.jpg",
    backdrops: [
      "https://image.tmdb.org/t/p/original/rhoTlTzHwzMnPIukqURnnCLty0r.jpg",
      "https://image.tmdb.org/t/p/original/ovUbhh84qB11B5wzHd01cM07yia.jpg",
      "https://image.tmdb.org/t/p/original/ossJcLSU5baWngLrrCe8nwjbgRV.jpg",
    ],
    "id": 138502,
    overview: "Um grupo de mutantes usa seus fabulosos dons para proteger um mundo que os teme e os odeia.",
    "poster_path": "/yvqC5hw3rkW9vputtZ8PlwYhJRp.jpg",
    date: "2024-03-20",
    title: "X-Men '97",
  },
  {
    image: "https://image.tmdb.org/t/p/original/xuCHkaxkkm9pPum1SByC0dhvR2U.jpg",
    backdrops: [
      "https://image.tmdb.org/t/p/original/4N6zEMfZ57zNEQcM8gWeERFupMv.jpg",
      "https://image.tmdb.org/t/p/original/rCeG16zXk2hWq8UhbarFsA52cgI.jpg",
      "https://image.tmdb.org/t/p/original/hqtHaHdHuLOFQB4nDD6T8so5GiV.jpg",
    ],
    "id": 91363,
    overview: "O que aconteceria com nossos heróis se a história fosse diferente? Qual rumo eles tomariam em sua vida? Como o nome sugere, a animação mostrará um 'e se' para diversos personagens do Universo Cinematográfico da Marvel, como: o que aconteceria se Peggy Carter fosse a Capitã Britânia em vez de ter se tornado a Agente Carter?",
    "popularity": 285.239,
    "poster_path": "/kJQWrrwtu0TAsIKq8Adgzeg4bFt.jpg",
    date: "2021-08-11",
    title: "What If...?",
  },
  {
    image: "https://image.tmdb.org/t/p/original/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
    backdrops: [
      "https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
      "https://image.tmdb.org/t/p/original/k3xGG77CAiB0Wr2Y1H3ApihKTkk.jpg",
      "https://image.tmdb.org/t/p/original/4J2W2NZfI8HNhfNNTd99uGqaTb.jpg",
    ],
    "id": 299536,
    overview: "Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.",
    "poster_path": "/A4kvp7vY1BDLrrQIagRCffLKj1t.jpg",
    date: "2018-04-25",
    title: "Vingadores: Guerra Infinita",
  },
  {
    image: "https://image.tmdb.org/t/p/original/iux1vKPT7Vw1AzetZb4Jz6wfYsm.jpg",
    backdrops: [
      "https://image.tmdb.org/t/p/original/tGWTz0aQrTaeGjax5Rlyhz7ImWD.jpg",
      "https://image.tmdb.org/t/p/original/lZFLObcr3pazcEkBcHGYjw4skGW.jpg",
      "https://image.tmdb.org/t/p/original/pJXHVeeuqU7fOO88CQGHsvZ2Jmv.jpg",
    ],
    "id": 92749,
    overview: "A série acompanha Steven Grant, um gentil e educado funcionário de uma loja de souvenir, que é atormentado com apagões e memórias de outra vida. Steven descobre que tem transtorno dissociativo de identidade e divide o corpo com o mercenário Marc Spector. À medida que os inimigos de Steven/Marc se voltam para eles, ambos devem navegar em suas complexas identidades enquanto mergulham em um mistério mortal entre os poderosos deuses do Egito.",
    "poster_path": "/tkc7AVyUoG9VEeDvukN0TVqa24C.jpg",
    date: "2022-03-30",
    title: "Cavaleiro da Lua",
  },
];

export { MOVIES, MOVIES_DETAILS };