

export const getFootballClubsInfo = ()=>{
    const data = [
      {
        about:
          {
          name: "Chelsea",
          city: "London",
          date: "04.05.1905",
          emblem: "https://api.bnnapp.com/__proxy_host/i.mycdn.me/i?r=AzFIxPtkV78jcmdRfpoIOyaJUSeX5j057ysNCQU5ira3WjO7EuABt8t6j6ROsg0SwU4",
          },
        progress: 
          {
            medals: ["Golden ball", "The best coach", "The best goalkeeper"],
            cups: ["Premiership", "UEFA cup", "Champions ligue"],
            goals: 120,
          },
        teams: [
          "Kepa Arrizabalaga",
          "Thiago Silva",
          "Cesar Azpilicueta",
          "Mateo Kovacic",
          "Mason Mount",
        ],
      },
      {
        about:
          {
          name: "Real",
          city: "Madrid",
          date: "08.10.1903",
          emblem: "https://www.sport.ru/ai/files/tags_attrs/r711/578a3a5f0a8c.jpg",
          },
        progress: 
          {
            medals: ["Pushkash Award", "Fair play", "The best fans"],
            cups: ["Championship", "Spain cup", "International cup"],
            goals: 150,
          },
        teams: [
          "Arthur Johnson",
          "Manuel Prast",
          "Jose Berraondo",
          "Sotero Aranguren",
          "Luis Olaso",
        ],
      },
      {
        about:
          {
            name: "Bayern",
            city: "Munich",
            date: "05.03.1898",
            emblem: "https://images.chesscomfiles.com/uploads/v1/user/39183646.01ab4786.1200x1200o.a57812b1b859.jpeg",
          },
        progress:
          {
            medals: ["Club of the century", "Player of the year", "Golden boots"],
            cups: ["Supercup", "German cup", "Europe ligue"],
            goals: 130,
          },
        teams: [
          "David Alaba",
          "Xabi Alonso",
          "Hamit Altintop",
          "Raimond Aumann",
          "Michael Ballack",
        ],
      },
    ] 
    return data;
  } 
