{
    let totalMass = 0;
    
    for (let i = 1; i <= 12; i++) {
        let mass = parseFloat(prompt("Введите массу предмета " + i, 0));
        totalMass += mass;
    }
    
    alert("Общая масса 12 предметов: " + totalMass);
    console.log("Общая масса: " + totalMass);
}