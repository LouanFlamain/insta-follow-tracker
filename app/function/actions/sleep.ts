export const Sleep = (time: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, time);
  });
};
