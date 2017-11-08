"use strict";

function clickCalendar() {
    var calendar = new Calendar(tmpYear,tmpMonth);
    var calendarDiv = createDiv("calendar");
    calendarDiv.innerHTML = calendar.calendarOnMonth();
    htmlContext.appendChild(calendarDiv);
}
// Создаем календарь
function Calendar(year, month) {
    this.year = year;
    this.month = month;
    this.calendarOnMonth = function(){
        var monthNumber = month-1; // Перевод номера месяца без изменения глобального значения
        var monthName = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        var currentMonth = new Date(year,monthNumber);
        var monthDayTotal = new Date(currentMonth.getFullYear(),currentMonth.getMonth()+1,0).getDate(); // Количество дней месяца
        var monthDayLastName = new Date(currentMonth.getFullYear(),currentMonth.getMonth(),monthDayTotal).getDay(); // День недели последнего дня месяца
        var monthDayFirstName = new Date(currentMonth.getFullYear(),currentMonth.getMonth(),1).getDay(); // День недели первого дня месяца
        var calendarTable = ("<table><tr>");  // Собираем таблицу
        calendarTable += ("<td width=40>"+"<button id='prevButton' onclick='prevClick()'><</button>"+"</td>");
        calendarTable += ("<td width=40 colspan=5 align=center>"+monthName[monthNumber]+" / "+year+"</td>");
        calendarTable += ("<td width=40>"+"<button id='nextButton' onclick='nextClick()'>></button>"+"</td></tr>");
      
        calendarTable += ("<td width=40>"+"Пн"+"</td>");
        calendarTable += ("<td width=40>"+"Вт"+"</td>");
        calendarTable += ("<td width=40>"+"Ср"+"</td>");
        calendarTable += ("<td width=40>"+"Чт"+"</td>");
        calendarTable += ("<td width=40>"+"Пт"+"</td>");
        calendarTable += ("<td width=40>"+"Сб"+"</td>");
        calendarTable += ("<td width=40>"+"Вс"+"</td></tr>");
        calendarTable += ("<tr>");
        if (monthDayFirstName!=0) // Добавляем пустые ячейки в начале месяца
        {
            for(var i=1; i<monthDayFirstName; i++)
            {
                calendarTable += ("<td/>");
            }
        }
        else // Если первый день воскресенье добавляем полную строку
        {
            for(var i=1; i<7; i++)
            {
                calendarTable += ("<td/>");
            }
        }
        for (var i = 1; i <= monthDayTotal; i++) // заполняем таблицу днями
        {
            calendarTable += ("<td width=40>"+i+"</td>");
            if (new Date(currentMonth.getFullYear(),currentMonth.getMonth(),i).getDay() == 0)
            {
                calendarTable += ("</tr><tr>"); // Если день недели Воскресенье - перевод строки
            }
        }
        calendarTable += ("</tr></table>"); // Закрываем таблицу
        return calendarTable;
    }
}

function prevClick(){
    if (tmpMonth==1)
    {
        tmpMonth = 12;
        tmpYear--;
    }
    else tmpMonth--;
    createCalendar(tmpYear,tmpMonth); 
}

function nextClick(){
    if (tmpMonth==12)
    {
        tmpMonth = 1;
        tmpYear++;
    }
    else tmpMonth++;
    createCalendar(tmpYear,tmpMonth); 
}