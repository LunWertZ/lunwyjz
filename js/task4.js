{
    // 4.28 
    // Дано трехзначное число. Определить, какая из его цифр больше:
    // а) первая или последняя;
    // б) первая или вторая;
    // в) вторая или последняя.
    
    let number, firstDigit, secondDigit, lastDigit;
    
    number = parseInt(prompt("Введите трехзначное число", 322));
    
    firstDigit = Math.floor(number / 100);         // Первая цифра (сотни)
    secondDigit = Math.floor((number % 100) / 10); // Вторая цифра (десятки)
    lastDigit = number % 10;                       // Последняя цифра (единицы)
    
    const compareFirstLast = firstDigit > lastDigit ? "первая" : 
                           (firstDigit < lastDigit ? "последняя" : "равны");
    const compareFirstSecond = firstDigit > secondDigit ? "первая" : 
                             (firstDigit < secondDigit ? "вторая" : "равны");
    const compareSecondLast = secondDigit > lastDigit ? "вторая" : 
                            (secondDigit < lastDigit ? "последняя" : "равны");
    
    console.log("Анализ числа " + number + ":");
    console.log("Цифры: " + firstDigit + ", " + secondDigit + ", " + lastDigit);
    console.log("а) Первая или последняя больше: " + compareFirstLast);
    console.log("б) Первая или вторая больше: " + compareFirstSecond);
    console.log("в) Вторая или последняя больше: " + compareSecondLast);
    
    alert(
        "Результаты для числа " + number + ":\n" +
        "Цифры: " + firstDigit + " (первая), " + secondDigit + " (вторая), " + lastDigit + " (последняя)\n\n" +
        "а) Первая или последняя больше: " + compareFirstLast + "\n" +
        "б) Первая или вторая больше: " + compareFirstSecond + "\n" +
        "в) Вторая или последняя больше: " + compareSecondLast
    );
}