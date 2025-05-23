{
    // 4.16
    // Известны площади круга и квадрата. Определить:
    // а) уместится ли круг в квадрате?
    // б) уместится ли квадрат в круге?
    
    let circleArea, squareArea, circleDiameter, squareSide, squareDiagonal;
    let circleInSquare, squareInCircle;
    

    circleArea = parseFloat(prompt("Введите площадь круга", 10));
    squareArea = parseFloat(prompt("Введите площадь квадрата", 10));
    

    circleDiameter = 2 * Math.sqrt(circleArea / Math.PI);
    
 
    squareSide = Math.sqrt(squareArea);
    
    squareDiagonal = squareSide * Math.sqrt(2);
    
    circleInSquare = circleDiameter <= squareSide;
    squareInCircle = squareDiagonal <= circleDiameter;
    
    console.log("Площадь круга: " + circleArea);
    console.log("Площадь квадрата: " + squareArea);
    console.log("а) Круг уместится в квадрате: " + circleInSquare);
    console.log("б) Квадрат уместится в круге: " + squareInCircle);
    
    alert(
        "Результаты:\n" +
        "Площадь круга: " + circleArea + "\n" +
        "Площадь квадрата: " + squareArea + "\n" +
        "а) Круг уместится в квадрате: " + (circleInSquare ? "Да" : "Нет") + "\n" +
        "б) Квадрат уместится в круге: " + (squareInCircle ? "Да" : "Нет")
    );
}