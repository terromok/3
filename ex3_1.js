//массив с цветами, которые потом будем перемешивать случайным образом
const colors = ['green', 'yellow', 'red', 'blue','green', 'yellow', 'red', 'blue',
                'orange', 'white', 'purple', 'grey', 'orange', 'white', 'purple', 'grey'];

let cl = 0;  
let cl1;
let cl2;  
let tdElem1;
let tdElem2;  
let timer;          

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
        setTimeout(clearBackGr, 100);
        function clearBackGr() {
          tdElem1.style.backgroundColor = "";
          tdElem2.style.backgroundColor = "";
        }
      } else {
        timer++;
        return};
    }
  })
}

function startTimer() {
    if (timer == 8) {return};
    var my_timer = document.getElementById("my_timer");
    var time = my_timer.innerHTML;
    var arr = time.split(":");
    var m = arr[0];
    var s = arr[1];
    var ms = arr[2];
    ms= +ms + 10;
    if (ms < 100) ms = "0" + ms;
    if (ms == 1000) {
      ms = 0;
      s++;
      if (s < 10) s = "0" + s;
      if (s == 60) {
        s = "0" + 0;
        m++;
        if (m < 10) m = "0" + m;
      }
    }
    
    document.getElementById("my_timer").innerHTML = m+":"+s+":"+ms;
    setTimeout(startTimer, 10);
  }

(function($) {
  map.init();
  $('#playButton').on('click', function(e){
    timer = 0;
    map.setColor();  
    startTimer();
  });
  
  twoClick();
})(jQuery);