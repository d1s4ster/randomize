function randomize() {
    let r1 = parseInt(document.getElementById("firstNumber").value); // вытаскиваем значение из превого инпута и сохраянем в переменную
    let r2 = parseInt(document.getElementById("secondaryNumber").value); // вытаскиваем значение со второго инпута и сохраянем в переменную

    let result = Math.random() * (r2 - r1) + r1; // функция рандома (встроенная в js)
    let floorResult = Math.floor(result); // приводим значение раднома к целому числу

    return document.getElementById("output").innerHTML = floorResult; // возвращаем (return) полученное значение и вставляем его в span с id "output"
}