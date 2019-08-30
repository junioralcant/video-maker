const readline = require("readline-sync");

function start() {
  const content = {};

  content.searchTerm = askAndReturnSearchTerm();
  content.prefix = askAndReturnSearchPrefix();

  function askAndReturnSearchTerm() {
    return readline.question("Tipo de tema a ser pesquisado: ");
  }

  function askAndReturnSearchPrefix() {
    const prefix = ["Quem é", "Oque é", "A história de"];
    const selectPrefixoIndex = readline.keyInSelect(
      prefix,
      "Escolha uma opção"
    );
    const selectPrefixoText = prefix[selectPrefixoIndex];

    return selectPrefixoText;
  }

  console.log(content);
}

start();
