export const SESSION_HISTORY = [
  { date: '2023/01/01', count: 2 },
  { date: '2023/04/12', count: 2 },
  { date: '2023/05/01', count: 5 },
  { date: '2023/05/02', count: 5 },
  { date: '2023/05/03', count: 1 },
  { date: '2023/05/04', count: 11 },
  { date: '2023/12/08', count: 32 },
  { date: '2023/05/12', count: 32 },
  { date: '2023/12/30', count: 32 }
]

export const regexJSON = /\.json$/i // regex to check if file is a json

export const HABITSJSON = {
  habits: [
    {
      id: 0,
      name: 'Drink 2L of water',
      color: '#3F51B5',
      icon: 'local_drink',
      history: [
        {
          date: '2023/05/01',
          done: true
        },
        {
          date: '2023/05/02',
          done: true
        },
        {
          date: '2023/05/03',
          done: false
        }
      ]
    },
    {
      id: 1,
      name: 'Run 3km',
      color: '#FF4081',
      icon: 'directions_run',
      frecuencia: 'Semanal',

      history: [
        {
          date: '2023/05/01',
          done: true
        },
        {
          date: '2023/05/02',
          done: true
        },
        {
          date: '2023/05/03',
          done: true
        }
      ]
    },
    {
      id: 2,
      name: 'Read 30min',
      color: '#FFEB3B',
      icon: 'book',
      frecuencia: 'Semanal',
      history: [
        {
          date: '2023/05/01',
          done: false
        },
        {
          date: '2023/05/02',
          done: true
        },
        {
          date: '2023/05/03',
          done: true
        }
      ]
    },
    {
      id: 3,
      name: 'Meditate 10min',
      color: '#4CAF50',
      icon: 'spa',
      frecuencia: 'Semanal',
      history: [
        {
          date: '2023/05/01',
          done: true
        },
        {
          date: '2023/05/02',
          done: false
        },
        {
          date: '2023/05/03',
          done: true
        }
      ]
    }
  ]
}
