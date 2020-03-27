const linksToMenu = [
  {
    text: 'INICIO',
    to: '/home',
  },
  {
    text: 'COACH/BOOST',
    to: '/coach',
    child: [
      {
        text: 'AULAS',
        to: '/coach/aulas',
      },
      {
        text: 'BOOST',
        to: '/coach/boost',
      },
      {
        text: 'RANQUED BOOST',
        to: '/coach/renqued',
      },
    ],
  },
];
export default linksToMenu;
