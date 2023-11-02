function introduction(name){
  const intro = `Hi, my name is ${name}.`;
  return intro;
}

function introductionWithLanguage(name, language){
  const intro = `Hi, my name is ${name} and I am learning to program in ${language}.`;
  return intro;
}

function introductionWithLanguageOptional(name, language = `JavaScript`){
  const intro = `Hi, my name is ${name} and I am learning to program in ${language}.`;
  return intro;
}