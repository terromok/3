//массив с цветами, которые потом будем перемешивать случайным образом
const colors = ['green', 'yellow', 'red', 'blue','green', 'yellow', 'red', 'blue',
                'orange', 'white', 'purple', 'grey', 'orange', 'white', 'purple', 'grey'];

let cl = 0;  
let cl1;
let cl2;  
let tdElem1;
let tdElem2;            

//отрисовываем таблицу 4х4 и задаем каждой ячейке 
//класс с названием цвета
const map = {
  init() {
    // Контейнер, где будут наши ячейки, первоначально его очистим.
    const table = document.getElementById('game');
    table.innerHTML = "";
    // Цикл запустится столько раз, сколько у нас количество строк.
    for (let row = 0; row < 4; row++) {
      // Создаем строку, добавляем ей класс, после добавляем ее в таблицу.
      const tr = document.createElement('tr');
      tr.classList.add('row');
      table.appendChild(tr);
      // Цикл запустится столько раз, сколько у нас количество колонок.
      for (let col = 0; col < 4; col++) {
        // Создаем ячейку, добавляем ячейке класс cell и id с номером строки и столбца.
        const td = document.createElement('td');
        td.id = (`col${col.toString()}_row${row.toString()}`);
        td.classList.add(`cell`);
        tr.appendChild(td);
      }
    };
  },

  setColor() {
    //перемешаем цвета в массиве colors
    let colorsRandom = colors.sort(function(){
      return Math.random() - 0.5;
    });
    let j=0; //счетчик перебора ячеек
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        //перебираем каждую ячейку
        const tdColors =document.getElementById(`col${col.toString()}_row${row.toString()}`);
        //присваиваем этой ячейке атрибут с названием цвета
        //tdColors.style.backgroundColor = `${colorsRandom[j]}`;
        //tdColors.classList.add(`${colorsRandom[j]}`)
        tdColors.setAttribute('color', `${colorsRandom[j]}`);
        j++;
      }
    }
  }/**/
};


function twoClick() {
   
  $('#game').on('click', function(e){
    if (cl === 0) {
      tdElem1 =document.getElementById(`${e.target.attributes[0].value}`);
      tdElem1.style.backgroundColor = `${e.target.attributes[2].value}`;
      cl1 = `${e.target.attributes[2].value}`;
      cl = 1;}
    else {
      tdElem2 =document.getElementById(`${e.target.attributes[0].value}`);
      tdElem2.style.backgroundColor = `${e.target.attributes[2].value}`;
      cl2 = `${e.target.attributes[2].value}`;
      cl = 0;
      if (cl1 != cl2) {
        tdElem1.style.backgroundColor = "";
        tdElem2.style.backgroundColor = "";
      } else {return};
    }
  })
}

/*function click() { //
  if (cl == 0) {
    
    //cl++;
  };
};

function click2() { //
  if (cl == 1) {
    $('#game').on('click', function(e){
      const tdElem =document.getElementById(`${e.target.attributes[0].value}`);
      tdElem.style.backgroundColor = `${e.target.attributes[2].value}`;
    });
    cl--;
    if (click() != e.target.attributes[2].value) {
      console.log(dadaaaaada);
    }
    cl--;
  }
};*/

(function($) {
  map.init();
  map.setColor();
  twoClick();
})(jQuery);