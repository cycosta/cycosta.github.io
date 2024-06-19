import { colors } from '../../tokens';

import { Jobs } from '../../enums';

export const getJobsData = (job: Jobs) => {
  const jobsDataMap = {
    [Jobs.QUINTO_ANDAR]: {
      color: colors.brand.quintoAndar,
      title: 'QuintoAndar',
      date: '2021 — Present',
      description:
        'I am part of the team responsible for the entire visits experience.',
    },
    [Jobs.PICPAY]: {
      color: colors.brand.picpay,
      title: 'PicPay',
      date: '2020 — 2021',
      description:
        'PicPay is a digital financial services company where I was part of a team inside the B2B line, responsible for developing solutions for client companies.',
    },
    [Jobs.WEBEDIA]: {
      color: colors.brand.webedia,
      title: 'Webedia',
      date: '2018 — 2020',
      description:
        'Front-end development of TudoGostoso, the largest food recipe portal in Brazil.',
    },
    [Jobs.MILK_MUSIC]: {
      color: colors.brand.milk,
      title: 'Milk Music',
      date: '2016',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna purus.',
    },
    [Jobs.CONVES_WEB]: {
      color: colors.brand.conves,
      title: 'Convés Web',
      date: '2012 — 2015',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna purus.',
    },
  };

  return jobsDataMap[job];
};
