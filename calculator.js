const add = (numbers) => {
  // if numbers is other then string type then throwing eoor
  if (typeof numbers !== "string") {
    throw new Error("Please enter valid number");
  }

  //   if numbers is empty then returning 0
  if (numbers === "") return 0;
};

module.exports = { add };
