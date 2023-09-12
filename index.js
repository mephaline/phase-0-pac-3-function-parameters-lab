function introduction(name) {
    return `Hi, my name is ${name}.`;
}

// Example usage:
const name = "Aki";
const result = introduction(name);
console.log(result);
function introductionWithLanguage(name, language) {
    console.log(`The two values are ${name} and ${language}.`);
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
function introductionWithLanguageOptional(name, language = "JavaScript"){
    console.log(`Hello, my name is ${name} and I am learning to program in ${language}.`);
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}