{
// 2.10
// Дано двузначное число. Найти:
//а) число десятков в нем;
//б) число единиц в нем;
//в) сумму его цифр;
//г) произведение его цифр

    let number, des9tkov, edinits, sum, prozvedenie;
    
    number = parseInt(prompt("Введите двузначное число", 10));

    des9tkov = Math.floor(number / 10);
    
    edinits = number % 10;
    
    sum = des9tkov + edinits;
    
    prozvedenie = des9tkov * edinits;
    
    console.log("Анализ числа " + number + ":");
    console.log("а) Десятков: " + des9tkov);
    console.log("б) Единиц: " + edinits);
    console.log("в) Сумма цифр: " + sum);
    console.log("г) Произведение цифр: " + prozvedenie);
    
    alert(
        "Результат для числа " + number + ":\n" +
        "а) Десятков: " + des9tkov + "\n" +
        "б) Единиц: " + edinits + "\n" +
        "в) Сумма цифр: " + sum + "\n" +
        "г) Произведение: " + prozvedenie
    );
}