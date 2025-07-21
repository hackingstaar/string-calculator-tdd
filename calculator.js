const add = (numbers) => {
  // if numbers is other then string type then throwing eoor
  if (typeof numbers !== "string") {
    throw new Error("Please enter valid number");
  }

  // if numbers is empty then returning 0
  if (numbers === "") return 0;

  // here support for custom delimiters is added
  // (e.g., //;\n1;2)
  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const match = numbers.match(/^\/\/(.)\n/);
    delimiter = new RegExp(match[1]);
    numbers = numbers.slice(match[0].length);
  }

  // it will retun the single number as well sum of comma-seprated numbers and also support new line as delimiters
  const parts = numbers.split(delimiter).map(Number);
  return parts.reduce((sum, num) => sum + num, 0);
};

module.exports = { add };
