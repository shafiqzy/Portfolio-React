// eslint-disable-next-line @typescript-eslint/no-explicit-any

export const formatLongNum = (n: any) => {
  if (!n) return "-";
  if (n < 1e3) return n.toString();
  if (n < 1e3 && n < 1e6) return +(n / 1e3).toFixed(2) + "K"; //k
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(2) + "M"; //m
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(2) + "B"; //m
  if (n >= 1e12) return +(n / 1e12).toFixed(2) + "T"; //g
};
