const formatNumber = (num: number | ""): string => {
  if (num !== "" && !isNaN(num)) {
    if (num >= 1000) {
      const suffixes = ["", "k", "M", "B", "T"];
      const suffixIndex = Math.floor(Math.log10(num) / 3);
      const shortNum = (num / Math.pow(1000, suffixIndex)).toFixed(1);
      return shortNum + suffixes[suffixIndex];
    }
  }

  return num.toString();
};

const formatPercentage = (value: number | ""): string => {
  if (value !== "" && !isNaN(value)) {
    return value.toString() + "%";
  }
  return "";
};

export {formatNumber, formatPercentage};
