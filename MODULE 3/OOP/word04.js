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
    if (key === this.words[key].word || key === this.words[key].description)
      console.log(this.words[key]);
  }

  showAllWords() {
    console.log(this.words);
  }
}

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name);
  }
  add(word = "", description = "") {
    console.log(word in this.words);
    if (word in this.words) {
      return console.log("Такое слово уже есть в словаре");
    }
    this.words[word] = {
      word,
      description,
      isDifficult: true,
    };
  }
}

const hardWordsDictionary = new HardWordsDictionary("Сложные слова");
hardWordsDictionary.add(
  "дилетант",
  "Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями."
);
hardWordsDictionary
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.'); 
hardWordsDictionary.remove('неологизм');
hardWordsDictionary
hardWordsDictionary.showAllWords();