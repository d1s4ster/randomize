function randomize() {
    let min = parseInt(document.getElementById("firstNumber").value); //вытягиваем значение инпута (минимальное значение)
    let max = parseInt(document.getElementById("secondaryNumber").value); //вытягиваем значение инпута (максиальное значение)
    let quantity = parseInt(document.getElementById("quantityNumber").value); //вытягиваем значение инпута (необходимое количество итоговых значений)
    let btn = document.getElementById("button"); // находим кнопку
    let output = document.getElementById("output"); // куда выводить

    const arr = Array.from({ length: max-min+1 },
    (v, i) => i +1); //временно не нужно

    let outputString = ''; // пустая строка, в нее будут вноситься все полученные значения из цикла
    
    // цикл для получения нескольких значений из массива
    // i - индекс, с которого начинается перебор массива
    // i < quantity - означает, что количество выходных значений не должно превышать необходимой длинны
    // i++ - унарный оператор. то есть мы делаем итерацию после каждого прохождения массива для получения нового значения
    for (let i = 0; i < quantity; i++ ) {

        let randomize = Math.random() * (max - min) + min; //функция рандома = получаем случайное число
        let result = Math.floor(randomize); // округляем полученное значение до целого
        outputString = outputString  + result + ' '; // заносим полученное значение в пустую строку и прибавляем разделитель, в данном случае пробел
    }
    return output.innerHTML = outputString; // заносим наше значение в <span> в html
}

// обработчик события, нажатия на кнопку enter

// обращаемся к документу и вызываем метод addEventListener (слушатель событий), в параметрах передаем
// само событие, в данном случае 'keydown', что означает, что мы нажали на кнопку. есть так же еще
// событие keyup, это когда мы кнопку отпустили. и так же передаем параметр "событие" (event)
document.addEventListener('keydown', (event) => {
    //создаем константу keyName, в нее кладем event key, для читаемости
    const keyName = event.key;
    // ЕСЛИ нажата кнопка Enter -> запускается функция randomize() 
    if (keyName === 'Enter') {
      randomize();
    }
  }, false); // иначе ничего не происходит
