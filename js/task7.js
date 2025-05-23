{
//   6.23  Дано натуральное число. Определить:
// а) сколько раз в нем встречается цифра а;

    let number = parseInt(prompt("Введите натуральное число", 12345));
    let digit = parseInt(prompt("Введите цифру для поиска (0-9)", 3));
    let count = 0;
    let tempNumber = number;
    
    while (tempNumber > 0) {
        let currentDigit = tempNumber % 10;
        if (currentDigit === digit) {
            count++;
        }
        tempNumber = Math.floor(tempNumber / 10);
    }
    
    alert("Цифра " + digit + " встречается в числе " + number + " раз: " + count);
    console.log("Результат:", number, digit, count);
}