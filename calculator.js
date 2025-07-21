const add = (numbers) => {
  // if numbers is other then string type then throwing eoor
  if (typeof numbers !== "string") {
    throw new Error("Please enter valid number");
  }

  // if numbers is empty then returning 0
  if (numbers === "") return 0;

  // it will retun the single number as well sum of comma-seprated numbers and also support new line as delimiters
  const parts = numbers.split(/,|\n/).map(Number);
  return parts.reduce((sum, num) => sum + num, 0);
};

module.exports = { add };
