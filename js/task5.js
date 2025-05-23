{
    // 5.29
    // Найти:
    // а) среднее арифметическое всех целых чисел от 1 до 1000;
    //б) среднее арифметическое всех целых чисел от 100 до b (значение b вводится
    //с клавиатуры; b 100);
    //в) среднее арифметическое всех целых чисел от a до 200 (значения a и b вво-
    //дятся с клавиатуры; a 200);
    //г) среднее арифметическое всех целых чисел от a до b (значения a и b вводят-
    //ся с клавиатуры; b a).






    function calculateAverage(start, end) {
        let sum = 0;
        let count = 0;
        for (let i = start; i <= end; i++) {
            sum += i;
            count++;
        }
        return sum / count;
    }

    const avg1 = calculateAverage(1, 1000);
    alert("Среднее 1-1000: " + avg1);

    const b = parseInt(prompt("Введите b > 100", 200));
    const avg2 = calculateAverage(100, b);
    alert("Среднее 100-" + b + ": " + avg2);

    const a = parseInt(prompt("Введите a < 200", 100));
    const avg3 = calculateAverage(a, 200);
    alert("Среднее " + a + "-200: " + avg3);

    const a2 = parseInt(prompt("Введите начало диапазона", 10));
    const b2 = parseInt(prompt("Введите конец диапазона", 20));
    const avg4 = calculateAverage(a2, b2);
    alert("Среднее " + a2 + "-" + b2 + ": " + avg4);
}