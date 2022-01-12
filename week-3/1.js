const duplicate = (str) => {
  const sorted = str.toLowerCase().split(``).sort(),
    result = [];

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] == sorted[i + 1] && sorted[i] != result[result.length - 1]) {
      result.push(sorted[i]);
    }
  }
  return result.length;
};

console.log(duplicate(`abcde`));
console.log(duplicate(`aabbcde`));
console.log(duplicate(`aabBcde`));
console.log(duplicate(`indivisibility`));
console.log(duplicate(`aA11`));
console.log(duplicate(`Indivisibilities`));
console.log(duplicate(`ABBA`));
