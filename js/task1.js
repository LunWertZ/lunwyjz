{
//2.6 
//С начала суток прошло n секунд. Определить:
//а) сколько полных часов прошло с начала суток;
//б) сколько полных минут прошло с начала очередного часа;
//в) сколько полных секунд прошло с начала очередной минуты.
    let vsegoSec, hours, minutes, seconds;
    
    vsegoSec = parseInt(prompt("Введите количество секунд, прошедших с начала суток", 0));
    hours = Math.floor(vsegoSec / 3600);

    minutes = Math.floor((vsegoSec % 3600) / 60);

    seconds = vsegoSec % 60;

    console.log("С начала суток прошло:");
    console.log("Полных часов: " + hours);
    console.log("Полных минут текущего часа: " + minutes);
    console.log("Полных секунд текущей минуты: " + seconds);
    
    alert("Результат:\n" +
          "Часов: " + hours + "\n" +
          "Минут: " + minutes + "\n" +
          "Секунд: " + seconds);
}