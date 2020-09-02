// class Storage {
//   constructor(key, value) {
//     this.key = key;
//     this.value = value;
//   }
// }

// function reset() {
//   for (var i = 0; i < arr.length; ) {
//     arr.pop();
//   }
// }

// function addValue(key, value) {
//   arr.push(new Storage(1, "Coca-Cola"));
// }

// function getValue(key) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i].key === key) {
//       alert(arr[i].value);
//     }
//   }
// }

// function deleteValue(key) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i].key === key) {
//       arr.splice(i, 1);
//       return true;
//     }
//   }
//   return false;
// }

// function getKeys() {
//   var res = "";
//   for (var i = 0; i < arr.length; i++) {
//     res += arr[i].value;
//     if (i !== arr.length - 1) {
//       res += ",";
//     }
//     res += " ";
//   }
//   alert(res);
// }

// var arr = ["1"];

// addValue(1, "Coca-Cola");
// addValue(2, "Lemonade");
// addValue(3, "Pepsi");

// class Storage {
//   constructor(drink, recept) {
//     this.drink = drink;
//     this.recept = recept;
//   }
//   reset(drink, recept) {
//     delete this.drink;
//     delete this.recept;
//   }
//   addValue(key, value) {
//     return {
//       key: value,
//     };
//   }
//   getValue(key) {
//     return {
//       key: "Напиток",
//     };
//   }
//   deleteValue(key) {
//     if (key == true) {
//       alert(true);
//     } else alert(false);
//   }
//   getKeys() {
//     let get = [this.addValue()];
//     return get;
//   }
//   drinkStorage = {
//     addValue() {
//       alert(drink.recept);
//     },
//   };
// }

// let num = new Storage("Напиток", "Рецепт");

// console.log(Storage.drink);

// class Storage {
//   constructor(drinks, recept) {
//     this.DrinkStorage = {};
//   }

//   addValue(key, value) {
//     this.key = value;
//     return key;
//   }

//   getValue(key, value) {
//     this.key = value;
//     alert(key);
//     return key;
//   }

//   getKeys() {}

//   deleteValue(key) {}

//   reset() {}
// }

// const drinks = new Storage();
// drinks.addValue("vodka", "alcash");
// drinks.addValue("cola", "cola-coca");
// drinks.addValue("coca", "alcash");
// drinks.addValue("margo", "alcash");
// drinks.addValue("js", "script");
// drinks.getKeys();
// drinks.getValue("cola");
// drinks.deleteValue("1margo");
// drinks.reset();

// const addValueBtn = document.querySelector("#addValueBtn");
// const getValueBtn = document.querySelector("#getValueBtn");
// const deleteValueBtn = document.querySelector("#deleteValueBtn");
// const getKeysBtn = document.querySelector("#getKeysBtn");

// addValueBtn.addEventListener("click", () => {
//   const title = prompt("title ?");
//   const composition = prompt("composition ?");
//   drinks.addValue(title, composition);
// });

// prompt(drinks.addValue("Добавь напиток"));
// prompt(drinks.addValue("Добавь рецепт"));

// prompt(drinks.getValue(`Твой напиток`));

// class Storage {
//   constructor(drinks, recept) {
//     this.drinks = recept;
//   }
//   addValue(drinks, recept) {
//     this.drinks = prompt("Назови свой напиток");
//     this.recept = prompt("Теперь рецепт");
//     alert(`Твой напиток ${this.drinks} ,а рецепт ${this.recept}`);
//   }
//   getValue(drinks) {
//     this.drinks = prompt("Назови напиток и я покажу рецепт");

//     // switch (this.drinks) {
//     //   case this.drinks:
//     //     alert(`Получи рецепт: ${this.recept}`);
//     //     break;
//     //   case this.drinks:
//     //     alert("Нет такого рецепта");
//     //     break;
//     // }

//     // this.drinks
//     //   ? alert(`Вот твой рецепт: ${this.recept}`)
//     //   : alert("Нет такого рецепта");

//     if (this.recept === this.recept) {
//       alert(`Получи рецепт: ${this.recept}`);
//     } else if (!this.recept === this.recept) {
//       alert("Нет такого рецепта");
//     }
//     return this.recept;
//   }
// }

// let storage = new Storage();

// storage.addValue();
// storage.getValue();

// class Storage {
//   constructor() {
//     this.DrinkStorage = {};
//   }
//   addValue(key, value) {
//     this.DrinkStorage[key] = value;
//   }
//   getValue(key) {
//     return this.DrinkStorage[key];
//   }
//   deleteValue(key) {
//     return this.DrinkStorage[key] ? delete this.DrinkStorage[key] : false;
//   }
//   getKeys() {
//     return Object.keys(this.DrinkStorage);
//   }
//   reset() {
//     this.DrinkStorage = {};
//   }
// }

// const drinks = new Storage();

// const addDrinks = prompt("Введите название напитка");
// const addRecept = prompt("А теперь рецепт");
// const getDrinksAndRecept = alert(
//   `Ваш напиток: ${addDrinks}, a рецепт: ${addRecept}`
// );

// const deleteDrinks = prompt("Какой напиток c рецептом вы хотите удалить?");
// const confirmDeleteDrinks = confirm(
//   `Вы дейстительно хотите удалить напиток ${deleteDrinks}`
// );
// const deleteDrinksAndRecept = alert(`Напиток ${deleteDrinks} удалён`);

// drinks.addValue(addDrinks, addRecept);
// drinks.getValue(drinks.DrinkStorage);
// drinks.deleteValue(addDrinks);

// const addValueBtnDrinks = document.querySelector("#addValueBtnDrinks");

// addValueBtnDrinks.addEventListener("click", () => {
//   const title = document.getElementById("addValueInputDrinks");
//   console.log(title.value);
// });

// const addValueBtnRecept = document.querySelector("#addValueBtnRecept");

// addValueBtnRecept.addEventListener("click", () => {
//   const composition = document.getElementById("addValueInputRecept");

//   console.log(composition.value);
// });

// console.log(addValueBtn.addEventListener.title);

class HashStorage {
  constructor() {
    this.store_ = {}; // хранилище для значений
    // подчеркивание в конце переменной говорит о том, что она приватная
    // так что на прямую ее использовать нельзя
    // но пока что это только соглашение
  }

  add(key, value) {
    this.store_[key] = value; // сохраняем значение в store
  }

  getValue(key) {
    return this.store_[key]; // тут все тоже просто и нативно
  }

  deleteValue(key) {
    if (!(key in this.store_)) {
      return false;
    }

    return delete this.store_[key];
  }

  getKeys() {
    return Object.keys(this.store_);
  }
}

// Теперь coctailsStorage может использовать методы
// add, getValue etc.
// Плюс экземпляр имеет свое собственное хранилище
const coctailsStorage = new HashStorage();

coctailsStorage.add(prompt("Название напитка"), { alcohol: true }); // добавляем значение
coctailsStorage.add(prompt("Рецепт"), { alcohol: false }); // добавляем значение
alert(coctailsStorage.getKeys());
coctailsStorage.deleteValue(prompt("Удалите напиток"));
coctailsStorage.deleteValue(prompt("Теперь рецепт"));
coctailsStorage.deleteValue(alert("Напиток удалён"));
prompt(coctailsStorage.getValue("vodka"));
prompt(coctailsStorage.getKeys());
