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
    let j=0;
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        //перебираем каждую ячейку
        const tdColors =document.getElementById(`col${col.toString()}_row${row.toString()}`);
        //присваиваем этой ячейке стиль
        tdColors.style.backgroundColor = `${colorsRandom[j]}`;
        j++;
      }
    }
  }/**/
};

const colors = ['green', 'yellow', 'red', 'blue','green', 'yellow', 'red', 'blue',
                'orange', 'ligthblue', 'purple', 'grey', 'orange', 'ligthblue', 'purple', 'grey'];

const col1 = [0, 0, 0, 0]



const game = {
 // config,
  map,

  init() {
    // Инициализируем карту.
    this.map.init();
    this.map.setColor();
    
  },

  

 
};

// При загрузке страницы инициализируем игру.
window.onload = game.init();