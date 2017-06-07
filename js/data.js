export const initialState = Object.freeze({
  current_year : `2017`,
  social : [{
    name: `Twitter`,
    link: `https://twitter.com/htmlacademy_ru`,
    modifier : `tw`
    },
    {
      name: `Instagram`,
      link: `https://www.instagram.com/htmlacademy/`,
      modifier : `ins`
    },
    {
      name: `Facebook`,
      link: `https://www.facebook.com/htmlacademy`,
      modifier : `fb`
    },
    {
      name: `Vkontakte`,
      link: `https://vk.com/htmlacademy`,
      modifier : `vk`
    }
  ],

  lives: 2,
  maxLives: 3,
  gameTimeLeft: 15,
  requiredCorrectAnswers: 10,
  gameTimeTotal: 30
});

//Не знаю, нужно ли обхединять всё в 1 JSON или можно разделить, запросов будет к серверу два.
export const game1Params = Object.freeze({
  images: [`https://k42.kn3.net/CF42609C8.jpg`, `http://i.imgur.com/1KegWPz.jpg`],
  stats: [`wrong`, `slow`, `fast`, `correct`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`]
});

export const game2Params = Object.freeze({
  images: [`http://i.imgur.com/1KegWPz.jpg`],
  stats: [`wrong`, `slow`, `fast`, `correct`, `wrong`, `unknown`, `slow`, `unknown`, `fast`, `unknown`]
});

export const game3Params = Object.freeze({
  images: [`https://i.imgur.com/DiHM5Zb.jpg`, `https://k32.kn3.net/5C7060EC5.jpg`, `https://k42.kn3.net/D2F0370D6.jpg`],
  stats: [`wrong`, `slow`, `fast`, `correct`, `wrong`, `unknown`, `slow`, `unknown`, `fast`, `unknown`]
});

export const gameStats = Object.freeze({
  games: [
    {
      gameNumber: 1,
      stats: [`wrong`, `slow`, `fast`, `correct`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`],
      pointsMultiplier: 150,
      points: 900,
      lifeMultiplier: 2,
      bonuses: [
        {
          type: `Бонус за скорость`,
          label: `fast`,
          count: `1`,
          points: 50,
          total: -50
        },
        {
          type: `Бонус за жизни`,
          label: `heart`,
          count: `2`,
          points: 50,
          total: 100
        },
        {
          type: `Штраф за медлительность`,
          label: `slow`,
          count: `2`,
          points: 50,
          total: -100
        }
      ],
      result: {
        completed: true,
        resultPoints: 950
      }
    },
    {
      gameNumber: 2,
      stats: [`wrong`, `slow`, `fast`, `correct`, `wrong`, `unknown`, `slow`, `unknown`, `fast`, `unknown`],
      bonuses: [],
      pointsMultiplier: 150,
      points: 950,
      result: {
        completed: false
      }
    },
    {
      gameNumber: 3,
      stats: [`wrong`, `slow`, `fast`, `correct`, `wrong`, `unknown`, `slow`, `unknown`, `fast`, `unknown`],
      bonuses: [{
        type: `Бонус за жизни`,
        label: `heart`,
        count: 2,
        points: 50,
        total: 100
      }],
      points: 700,
      result: {
        completed: true,
        resultPoints: 950
      }
    }

  ]
});
