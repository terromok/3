//массив с цветами, которые потом будем перемешивать случайным образом
const colors = ['green', 'yellow', 'red', 'blue','green', 'yellow', 'red', 'blue',
                'orange', 'ligthblue', 'purple', 'grey', 'orange', 'ligthblue', 'purple', 'grey'];

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

/*const click = {
  clickk() {
    let td1 = document.getElementByClassName('cell');
    td1.onclick = function () {
      td1.style.backgroundColor = `td1.attributes`;
    }
  }
}
*/

const game = {
 // config,
  map,
  //click,

  init() {
    // Инициализируем табличку.
    this.map.init();
    this.map.setColor();
  },

  clickk() {
    const td1 = document.getElementByClassName('cell');
    td1.onclick = function () {
      td1.style.backgroundColor = `td1.attributes`;
    }
  }

};

// При загрузке страницы инициализируем игру.
window.onload = game.init();