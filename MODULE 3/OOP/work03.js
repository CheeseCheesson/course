class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
  }
  add(word = "", description = "") {
    console.log(word in this.words);
    if (word in this.words) {
      return console.log("Такое слово уже есть в словаре");
    }
    this.words[word] = {
      word,
      description,
    };
  }
  remove(key) {
    if (key === this.words[key].word) {
      delete this.words[key].word;
      delete this.words[key].description;
    }
  }
  get(key) {
    if (key ===  this.words[key].word || key === this.words[key].description)
      console.log(this.words[key]);
  }

  showAllWords() {
    console.log(this.words);
  }
}

const dictionary = new Dictionary("Толковый словарь");
dictionary.add("JavaScript", "популярный язык программирования");
dictionary.add(
  "Веб-разработчик",
  "Человек, который создает новые сервисы и сайты  или поддерживает и дополняет существующие"
);
// dictionary.remove("JavaScript");
// dictionary.get( "Веб-разработчик")
dictionary.showAllWords()
