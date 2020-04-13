var currentDay = new Date();  
var theYear = currentDay.getFullYear();
var theMonth = currentDay.getMonth();
var theDate  = currentDay.getDate();

export const arrayDate = []
  
const time = ["08:00", "11:00", "14:00", "18:00", "22:00"]

for(var i=0; i<7; i++){
    var resultDay = new Date(theYear, theMonth,theDate+i);

    var yyyy = resultDay.getFullYear();
    var mm = Number(resultDay.getMonth())+1;
    var dd = resultDay.getDate();

    mm = String(mm).length === 1 ? '0'+ mm : mm;
    dd = String(dd).lenght === 1 ? '0'+ dd : dd;

    var thisWeek=[];
    thisWeek[i] = `${yyyy}-${mm}-${dd}`;

    // eslint-disable-next-line no-loop-func
    time.map((data, index) => {
        var d = new Date(`${thisWeek[i]} ${data}:00`);

        return arrayDate.push(d)
    })
}

