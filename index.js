const options = [
  {
    label: "Витебск",
    value: 2,
    group: "Первая",
  },
  {
    label: "Могилев",
    value: 6,
    group: "Первая",
  },
  {
    label: "Гомель",
    value: 3,
    group: "Вторая",
  },
  {
    label: "Брест",
    value: 1,
    group: "Вторая",
  },
  {
    label: "Гродно",
    value: 4,
    group: "Третья",
  },
  {
    label: "Минск",
    value: 7,
  },
  {
    label: "Москва",
    value: 777,
  },
];

class Select {
  constructor(selector, options, width) {
    this.$select = document.querySelector(selector);
    this.options = options;
    this.$select.style.setProperty("--select-width", width); //устанавливаем ширину
    this.$label = document.querySelector(".select__label");
    this.$dropDown = document.querySelector(".select__drop-down");

    //Перебираем элементы массива и формируем строку HTML-кода для элементов выпадающего списка
    // this.itemsForDropDown = this.options
    //   .map(({ label, value }) => {
    //     return `<li data-id = ${value}>${label}</li>`;
    //   })
    //   .join(""); // из массива элементы в одну строку (убираем запятые)


    this.itemsForDropDown= this.initGroup(this.options).map(([key,items])=>{if (key){

      const groupList = items.map(({label, value})=>{
return  `<li data-id = ${value}>${label}</li>`
      }).join("");
      console.log(groupList);

      return `<ul style= "padding: 8px"> <span style= "color: gray">${key}</span>${groupList}</ul>
      `

    }else{
      return items.map(({label, value})=>{
return  `<li data-id = ${value}>${label}</li>`
      }).join("");
    }

    }).join("");

    //вставляем полученный HTML-код внутрь this.$dropDown (ul)
    this.$dropDown.insertAdjacentHTML("afterbegin", this.itemsForDropDown);

    this.$select.addEventListener("click", (e) => {
      console.log(e.target);
      console.log(e.target.tagName);
      console.log(e.target.classList);
      if (e.target.classList.contains("select__label")) {
        //енсли актив то клоцс
        //если нет - опен

        // if (this.$select.classList.contains('active')){
        //    this.close();
        // }else{
        //   this.open();
        // }
        this.$select.classList.toggle("active");

        // this.close();
        console.log("ты кликнул на label");
      } else {
        if (e.target.tagName.toLowerCase() === "li") {
          console.log("ты кликнул на li");
          console.log(e.target.dataset.id);
          this.selectItem(+e.target.dataset.id);
          this.close();
        }
      }
    });
  }
  //находит объект из this.options, у которого 'value' совпадает с'id'
  // и выводит в Label текст (объект.label = "название города")
  //метод в прототип
  selectItem(id) {
    const selectedElement = this.options.find((item) => item.value === id);
    this.$label.innerHTML = selectedElement.label;
    console.log(selectedElement);
  }

  open() {
    this.$select.classList.add("active");
  }
  close() {
    this.$select.classList.remove("active");
  }
  initGroup(items) {
    const group = new Map();
  console.log("group", group);

  items.forEach((item) => {
    if (!group.has(item.group)) {
      group.set(item.group, [item]);
          } else {
      group.set(item.group, [...group.get(item.group), item]);
    }
  });
  console.log(Array.from(group.entries()));
  console.log(Array.from(group.keys()));
  console.log(Array.from(group.values()));

  return Array.from(group.entries())
  }

}



const customSelect = new Select(".select", options, "350px");
console.log(customSelect);
// const customSelect2 = new Select(".select", options, "750px");
// console.log(customSelect2);





// function initGroup(items) {
  
// }
// initGroup(options);





// [['Первая',[{label:'Витебск'}, {}]], ['Вторая'[{},{} ]], [], [undefined, [{Минск},{Москва}]]]