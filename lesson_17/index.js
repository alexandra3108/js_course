function fulltime ()
{
let time=new Date();
let Birthday=new Date("July,03,2019,00:00:00");
let totalRemains=(Birthday.getTime()-time.getTime());
 
if (totalRemains>1){
 
let RemainsSec = (parseInt(totalRemains/1000));//сколько всего осталось секунд
let RemainsFullDays=(parseInt(RemainsSec/(24*60*60)));//осталось дней
let secInLastDay=RemainsSec-RemainsFullDays*24*3600; //осталось секунд в неполном дне
let RemainsFullHours=(parseInt(secInLastDay/3600));//осталось часов в неполном дне
if (RemainsFullHours<10){RemainsFullHours="0"+RemainsFullHours};
let secInLastHour=secInLastDay-RemainsFullHours*3600;//осталось секунд в неполном часе
let RemainsMinutes=(parseInt(secInLastHour/60));//осталось минут в неполном часе
if (RemainsMinutes<10){RemainsMinutes="0"+RemainsMinutes};
let lastSec=secInLastHour-RemainsMinutes*60;//осталось секунд
if (lastSec<10){lastSec="0"+lastSec};
 
document.getElementById("RemainsFullDays").innerHTML=RemainsFullDays+"дн. ";
document.getElementById("RemainsFullHours").innerHTML=RemainsFullHours+"ч. ";
document.getElementById("RemainsMinutes").innerHTML=RemainsMinutes+"мин. ";
document.getElementById("lastSec").innerHTML=lastSec+"сек. ";
setTimeout('fulltime()',10)
}
 
}
 