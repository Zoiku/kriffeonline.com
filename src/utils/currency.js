export const format = (number) => {
  const formattedString = number.toFixed(2);
  const [integerPart, decimalPart] = formattedString.split(".");
  const reversedInteger = integerPart.split("").reverse().join("");
  const formattedInteger = reversedInteger.replace(/(\d{3})(?!$)/g, "$1,");
  const finalInteger = formattedInteger.split("").reverse().join("");
  return finalInteger + "." + decimalPart;
};
