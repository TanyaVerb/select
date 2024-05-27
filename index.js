const options = [
  {
    label: "Витебск",
    value: 2,
  },
  {
    label: "Могилев",
    value: 6,
  },
  {
    label: "Гомель",
    value: 3,
  },
  {
    label: "Брест",
    value: 1,
  },
  {
    label: "Гродно",
    value: 4,
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
    this.itemsForDropDown = this.options
      .map(({ label, value }) => {
        return `<li data-id = ${value}>${label}</li>`;
      })
      .join("");

    //вставляем полученный HTML-код внутрь this.$dropDown (ul)
    this.$dropDown.insertAdjacentHTML("afterbegin", this.itemsForDropDown);

    this.$select.addEventListener("click", (e) => {
      console.log(e.target);
      console.log(e.target.tagName);
      console.log(e.target.classList);
      if (e.target.classList.contains("select__label")) {
        console.log("ты кликнул на label");
      } else {
        if (e.target.tagName.toLowerCase() === "li") {
          console.log("ты кликнул на li");
          console.log(e.target.dataset.id);
          this.selectItem(+e.target.dataset.id);
        }
      }
    });
  }
  //находит объект из this.options, у которого 'value' совпадает с'id'
  // и выводит в Label текст (объект.label = "название города")
  selectItem(id) {
    const selectedElement = this.options.find((item) => item.value === id);
    this.$label.innerHTML = selectedElement.label;
    console.log(selectedElement);
  }
}
const customSelect = new Select(".select", options, "350px");
console.log(customSelect);
// const customSelect2 = new Select(".select", options, "750px");
// console.log(customSelect2);
