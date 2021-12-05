export const dateFormat = (date) => {
  const dataParse = new Date(date);
  return dataParse.toLocaleString("ru", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}
