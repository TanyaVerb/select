//Лексическое окружение
function foo() {
  let a = "str";
}

// console.log(a);
foo();

function revertMoney(currentCours) {
  const cours = currentCours;

  return (money) => {
    const result = (money * cours) / 100;
    return result;
  };
}

//у двух функций разные лексические окружения
const exchange = revertMoney(3.45);
const exchange2 = revertMoney(4.45);

const result = exchange2(10000);

console.log(result);

//10000*3.45/100

function sum(num) {
  const a = num;
  return (b) => {
    return b + a;
  };
}

const s1 = sum(2);

console.log(s1(5));

//_______________________
function sum2(num) {
  const a = num;
  return (b) => {
    const resS = b + a;
    return resS;
  };
}

const s2 = sum2(2);
const resS = s2(5);

console.log(resS);
