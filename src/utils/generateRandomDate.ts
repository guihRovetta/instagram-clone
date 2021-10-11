import sub from 'date-fns/sub';

export const generateRandomDate = (minutes: number) => {
  return sub(new Date(), { minutes });
};
