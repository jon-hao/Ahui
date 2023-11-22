export const adaptCandle = (data: any) => {
  return data.map(({ open, close, ...other }) => {
    return {
      ...other,
      openClose: [open, close],
    };
  });
}