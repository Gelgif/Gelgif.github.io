const events = [
    {
        date: new Date(2024, 1, 2),
        description: "Pré-Festival",
        link: null
    },
    {
        date: new Date(2024, 1, 1),
        description: "Pré-Festival",
        link: null
    },
    {
        date: new Date(2024, 0, 31),
        description: "Pré-Festival",
        link: null
    },
    {
        date: new Date(2024, 0, 30),
        description: "Pré-Festival",
        link: null
    },
    {
        date: new Date(2024, 0, 29),
        description: "Pré-Festival",
        link: null
    },
    {
        date: new Date(2024, 0, 28),
        description: "Volley-ball du RÉGIÉ",
        link: null
    },
    {
        date: new Date(2024, 0, 17),
        description: "Mercredi Wings et Karaoké",
        link: 'https://fb.me/e/7TjwFQaMd'
    },
    {
        date: new Date(2024, 0, 15),
        description: "Début session d'hiver",
        link: null
    },
    {
        date: new Date(2023, 11, 20),
        description: "Fin session d'automne",
        link: null
    }, 
];

const currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
const monthName = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];

function loadCalenderGrid()
{
    const calenderItemTemplate = '<div class="calender-item"></div>';
    let calenderHTML = '';
    for(let i = 0; i < 49; i++)
    {
        let calanderItemHTML = calenderItemTemplate.substring(0, 26) + ' id="item' + i + '"' + calenderItemTemplate.substring(26);
        calenderHTML += calanderItemHTML;
    }
    document.getElementById("calender").innerHTML += calenderHTML;
}

function writeMonthName()
{
    document.getElementById("monthLabel").innerHTML = monthName[currentMonth] + " " + currentYear;
}

function writeDaysOfWeek()
{
    const DaysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    for(let i = 0; i < 7; i++)
    {
        let id = "item" + i;
        document.getElementById(id).innerHTML = '<span class="days-name">' + DaysOfWeek[i] + '</span>';
    }
}

function createHTMLDateObject() {
    for(let i = 7; i < 49; i++)
    {
        let id = "item" + i;
        document.getElementById(id).innerHTML += '<span class="date" id="date' + (i - 7) + '"></span>';
        document.getElementById(id).innerHTML += '<span class="event" id="event' + (i - 7) + '"></span>';
        document.getElementById(id).innerHTML += '<span class="event-with-link" id="eventWithLink' + (i - 7) + '"></span>';
    }
}

function getMonthInfo()
{
    const nbDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // 0-indexed (Sunday is 0, Monday is 1, etc.)
    const idFirstDayofMonth = firstDayOfMonth;
    const idLastDayMonth = nbDaysInMonth + firstDayOfMonth - 1;
    return [idFirstDayofMonth, idLastDayMonth];
}

function writeDates(idFirstDayOfMonth, idLastDayOfMonth)
{
    for(i = 0; i < 42; i++)
    {
        let id = "date" + i;
        if((i >= idFirstDayOfMonth) && (i <= idLastDayOfMonth))
        {
            document.getElementById(id).innerHTML = i - idFirstDayOfMonth + 1;
        }
        else
        {
            document.getElementById(id).innerHTML = '';
        }
    }
}

function clickOnLinkEvent(eventId)
{
    window.location.href = events[eventId].link;
}

function writeEvents(idFirstDayOfMonth)
{
    for(i = 0; i < 42; i++)
    {
        eventWritten = false;
        eventWithLinkWritten = false;
        for(j = 0; j < events.length; j++)
        {
            let idNum = idFirstDayOfMonth + events[j].date.getDate() - 1;
            if(events[j].date.getMonth() == currentMonth && events[j].date.getFullYear() == currentYear && idNum == i)
            {
                if(events[j].link != null)
                {
                    eventWithLinkWritten = true;
                    let id = "eventWithLink" + idNum;
                    let event = document.getElementById(id);
                    event.innerHTML = events[j].description;
                    event.addEventListener('click', clickOnLinkEvent.bind(null, j));
                }
                else
                {
                    eventWritten = true;
                    let id = "event" + idNum;
                    let event = document.getElementById(id);
                    event.innerHTML = events[j].description;
                }
            }
        }
        if(!eventWritten)
        {
            let id = "event" + i;
            let event = document.getElementById(id);
            event.innerHTML = "";
        }
        if(!eventWithLinkWritten)
        {
            let id = "eventWithLink" + i;
            let event = document.getElementById(id);
            event.innerHTML = "";
            event.removeEventListener('click', clickOnLinkEvent);
        }
    }
}

function loadCalenderItem()
{
    writeMonthName();
    writeDaysOfWeek();
    createHTMLDateObject();
    const monthInfo = getMonthInfo();
    const idFirstDayofMonth = monthInfo[0];
    const idLastDayMonth = monthInfo[1];
    writeDates(idFirstDayofMonth, idLastDayMonth);
    writeEvents(idFirstDayofMonth, currentMonth, currentYear);
}

function goToPreviousMonthEvent()
{
    if(currentMonth == 0) 
    {
        currentMonth = 11;
        currentYear--;
    }
    else
    {
        currentMonth--;
    }
    writeMonthName();
    const monthInfo = getMonthInfo();
    const idFirstDayofMonth = monthInfo[0];
    const idLastDayMonth = monthInfo[1];
    writeDates(idFirstDayofMonth, idLastDayMonth);
    writeEvents(idFirstDayofMonth);
}

function goToNextMonthEvent()
{
    if(currentMonth == 11) 
    {
        currentMonth = 0;
        currentYear++
    }
    else
    {
        currentMonth++;
    }
    writeMonthName();
    const monthInfo = getMonthInfo();
    const idFirstDayofMonth = monthInfo[0];
    const idLastDayMonth = monthInfo[1];
    writeDates(idFirstDayofMonth, idLastDayMonth);
    writeEvents(idFirstDayofMonth);
}

window.onload = function() {
    loadCalenderGrid();
    loadCalenderItem();
    const previousMonthButton = document.getElementById("previousMonth");
    const nextMonthButton = document.getElementById("nextMonth");
    previousMonthButton.addEventListener('click', goToPreviousMonthEvent.bind(null));
    nextMonthButton.addEventListener('click', goToNextMonthEvent.bind(null));
}