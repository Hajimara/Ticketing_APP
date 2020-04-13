var currentDay = new Date();  
var theYear = currentDay.getFullYear();
var theMonth = currentDay.getMonth();
var theDate  = currentDay.getDate();
 
export const thisWeek =[] // 요일
export const thisDay=[]   // 일 수 
export const thisWeekAll=[]   // 이번 주 전체
var week = ["일", "월", "화", "수", "목", "금", "토"];
 
for(var i=0; i<7; i++) {
  var resultDay = new Date(theYear, theMonth, theDate + (i ));
  
  var yyyy = resultDay.getFullYear();
  var mm = Number(resultDay.getMonth()) + 1;
  var dd = resultDay.getDate();
 
  mm = String(mm).length === 1 ? '0' + mm : mm;
  dd = String(dd).length === 1 ? '0' + dd : dd;
    thisWeek[i] = week[resultDay.getDay()];
    thisWeekAll[i] = yyyy + '-' + mm + '-' + dd;
    thisDay[i] = dd;
};