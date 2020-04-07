const cows =[34,11,27,52];
var avgltrs =[15,28,18,11];
var totalltrs = [510,308,486,572];
var shed = ["Shed A","Shed B","Shed C","Shed D"];

var  sum =0;
var total = totalltrs.reduce((sum, current) => sum + current, 0);
function totalProduction(shed,totalltrs){
console.log("Your production in " + shed + " " + totalltrs + " litres per day");
}
totalProduction(shed[0],totalltrs[0]);
totalProduction(shed[1],totalltrs[1]);
totalProduction(shed[2],totalltrs[2]);
totalProduction(shed[3],totalltrs[3],total);
console.log("The total production is " + total + " litres per day");

var weekly = {
   days : 7,
   duration :"weekly"
 };
 var yearly = {
   days :365,
   duration:"yearly"
};
 var leapYear = {
   days :366,
   period:"leap year",
   duration:["January","February","March","April","May","June","July","August","September","October","November","December"],
   leapDays:[31,29,31,30,31,30,31,31,30,31,30,31],
 };
 
 var oldRate = 45;
 var time =[weekly,yearly,leapYear];
function incomeOverTime (oldRate, time ,duration){
 var income = oldRate * time * total ;
 console.log("Your " + duration+ " income will be Ksh" + income+ " .");
}
incomeOverTime(45,time[0].days,time[0].duration);
incomeOverTime(45,time[1].days,time[1].duration);
console.log("During the leap year");
incomeOverTime(45,time[2].leapDays[1],time[2].duration[1]);
incomeOverTime(45,time[2].days,time[2].period);
  

var time=[weekly,yearly,leapYear];
function diff (newRate,time,duration){
  var newincome = newRate * time * total;
   var income = oldRate * time * total ;
  var incomeDiff = newincome - income ;
console.log("Your income with the new rate is " +newincome+ ".");
console.log("The difference in income is " +incomeDiff+ " " +duration+ ".");
}
diff(49.60,time[0].days,time[0].duration);
 
 





 
 
   
 
 