export const formatterTime = (time: string) => {
  const [hour, minute] = time.split(':');
  return `${hour}h:${minute}min`;
};
