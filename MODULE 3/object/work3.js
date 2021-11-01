function handleObjects(obj, key, action) {

    console.log(obj[key] );
action
  switch (action) {
    case "get":
      return obj[key];

    case "add":
       obj[key] = "";
       return obj

    case "delete":
      delete obj[key];
      return obj;

    default:
      return obj;
  }
}

const student = {
  name: "Maxim",
  programmingLanguage: "JavaScript",
};

console.log(handleObjects(student, "programmingLanguage", "get"));


