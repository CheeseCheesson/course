class Dictionary {
  #name;
  #words;

  constructor(name) {
    this.#name = name;
    this.#words = {};
  }
  addNewWord(word, description, value = false) {
    this.#words[word] = {
      word,
      description,
      isDifficult: value,
    };
  }
  add(word, description, value = false) {
    console.log(word in this.#words);
    if (word in this.#words) {
      return console.log("Такое слово уже есть в словаре");
    }
    this.addNewWord(word, description, (value = false));
  }
  remove(key) {
    if (key === this.#words[key].word) {
      delete this.#words[key];
    }
  }
  get(key) {
    if (key === this.#words[key].word || key === this.#words[key].description)
      console.log(this.#words[key]);
  }

  showAllWords() {
    console.log(this.#words);
  }
  get mainName() {
    return this.#name;
  }
  set setMainName(name) {
    this.#name = name;
  }
  get allWords() {
    return this.#words;
  }
}

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name);
  }
  add(word, description) {
    this.addNewWord(word, description, true);
  }
}

const hardWordsDictionary = new HardWordsDictionary("Сложные слова");
hardWordsDictionary.add(
  "дилетант",
  "Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями."
);

hardWordsDictionary.add(
  "неологизм",
  "Новое слово или выражение, а также новое значение старого слова."
);

hardWordsDictionary.add(
  "квант",
  "Неделимая часть какой-либо величины в физике."
);

hardWordsDictionary.remove("неологизм");
console.log(hardWordsDictionary.showAllWords());

console.log(hardWordsDictionary.mainName);
hardWordsDictionary.setMainName = "Новый Словарь";
console.log(hardWordsDictionary.mainName);
console.log(hardWordsDictionary.allWords);
