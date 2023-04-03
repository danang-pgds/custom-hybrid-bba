'use strict';

var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();

var dd = d < 10 ? '0' + d:d;
var mm = m+1 < 10 ? '0' + (m+1):m+1;
var monthLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var currentDay = 0;
var currentYear = y;
var currentMonth = m;
var currentDate = 0;
var daysInMonth = 0;

const Calendar = (props) => {
  console.log(currentMonth)
  let days = ShowDay();
  // let dt = props.data;
  console.log('reloaded')
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className="flex-col col-start-2 col-span-10 border rounded-lg shadow-lg mb-5">
          <div className="flex justify-center space-x-4 my-5 items-center">
            <ButtonPrevCalendar />
            {/* <div className="text-lg font-medium">{m}</div> */}
            <div className="text-lg font-medium">{dd+' '+monthLong[Number(mm)-1]+' '+y}</div>
            <ButtonNextCalendar date={date}/>
          </div>
          <div className="flex justify-center">
            <LabelDays />
          </div>
          <div className="flex justify-center">
            <LabelDates dates={days}/>
          </div>
        </div>
      </div>
    </div>
  );
}

const ButtonNextCalendar = ({date})=>{
  log('btn next')
  // log("currentMonth "+currentMonth)
  // log("currentYear "+currentYear)
  const press = ()=>{
    currentMonth += 1;
    if(currentMonth > 12) {currentMonth = 1;currentYear++}
    // log(currentMonth)
    // log(currentYear)
    date = new Date(currentYear+'-'+currentMonth+'-'+d)
    log(date)
    Calendar()
    // ShowDay(currentMonth,currentYear)
  }
  return (
    <div className="w-8 h-8 bg-gray-200 hover:bg-red-500 rounded-full text-lg text-white flex cursor-pointer" onClick={()=>{press()}}>
      <span className="text-center text-white w-full">{'>'}</span>
    </div>
  );
}

const ButtonPrevCalendar = ()=>{
  log('btn prev')
  let tmp_month = currentMonth == 0 ? 11 : parseInt(currentMonth) - 1;
  let tmp_year = currentMonth == 0 ? parseInt(currentYear) - 1 : currentYear;
  return (
    <div className="w-8 h-8 bg-gray-200 hover:bg-red-500 rounded-full text-lg text-white flex cursor-pointer">
      <span className="text-center text-white w-full">{'<'}</span>
    </div>
  );
}

const LabelDays = ()=>{
  log('label days')
  const days = ['Mo','Tu','We','Th','Fr','Sa','Su'];
  return (
    <div className="grid grid-cols-7 gap-x-1 md:gap-x-5 w-11/12 mb-1">
      {days.map((day,key)=>{
        return <div className="bg-red-500 py-1.5 md:py-2 w-auto text-white rounded-xl text-center" key={key}>{day}</div>
      })}
    </div>
  );
}

const LabelDates = (props)=>{
  log('label dates')
  const dates = props.dates;
  // console.log(dates)
  // const dates = Array.from(Array(31));// generate dates for slashing purpose
  return (
    <div className="grid grid-cols-7 gap-x-1 md:gap-x-5 w-11/12">
      {dates.map((e,key)=>{
        return <div className="py-2 md:py-3 w-auto text-red-500 border rounded-xl text-center my-1 hover:cursor-pointer" key={key}>{e.date}</div>
      })}
    </div>
  );
}
/**
* calculate number of days in a particular month
*/
const DaysInMonth = (postMonth = null, postYear = null) => {
  let year = y;
  let month = m;
  if (postYear) year = postYear;
  if (postMonth) month = postMonth;
  let lastDay = new Date(year, month + 1, 0);
  return lastDay.getDate();
}
/**
* calculate number of weeks in a particular month
*/
const WeeksInMonth = (postMonth = null, postYear = null) => {
  let year = y;
  let month = m;
  if (postYear) year = postYear;
  if (postMonth) month = postMonth;
  currentYear = year;
  currentMonth = month;
  // currentDate = date;
  // find number of days in this month
  daysInMonth = DaysInMonth(month, year);
  let numOfweeks = Math.floor((daysInMonth % 7 == 0 ? 0 : 1) + (daysInMonth / 7));
  let monthStartDay = new Date(year, month, 1).getDay();
  let monthEndingDay = new Date(year, month, daysInMonth).getDay();

  if ((monthEndingDay < monthStartDay) && (monthEndingDay != 0)) numOfweeks++;
  if (monthStartDay == 0) numOfweeks++;
  return numOfweeks;
}

const ShowDay = (postMonth = currentMonth, postYear = currentYear) => {
  // log(postMonth)
  // log(postYear)
  let weeksInMonth = WeeksInMonth(postMonth, postYear);
  // console.log('weeksInMonth '+weeksInMonth)
  let content = [];
  // Create weeks in a month
  currentDay = 0; // reset
  for (let i = 0; i < weeksInMonth; i++) {
    //Create days in a week
    for (let j = 1; j <= 7; j++) {
      content.push(ShowDayContents(i * 7 + j));
    }
  }
  // console.log(content)
  return content;
}

const ShowDayContents = (cellNumber)=>{
  let cellContent = null;
  let price = '';
  let currency = '';
  let isAvailable = false;
  let allotment = '';
  // log('currentDay '+currentDay)
  if (currentDay == 0) {
    let firstDayOfTheWeek = new Date(currentYear, currentMonth, 1).getDay();
    // console.log('firstDayOfTheWeek '+firstDayOfTheWeek)
    // log('cellNumber')
    // log(cellNumber)
    if (firstDayOfTheWeek == 0) firstDayOfTheWeek = 7;
    if (cellNumber == firstDayOfTheWeek) currentDay = 1;
  }
  if ((currentDay != 0) && (currentDay <= daysInMonth)) {
    currentDate = currentYear + '-' + currentMonth + '-' + currentDay;
    let dd = currentDay;
    let mm = currentMonth + 1;
    if (mm < 10) {
      mm = '0' + mm;
    }
    if (currentDay < 10) {
      dd = '0' + currentDay;
    }
    // let current_date = currentYear + '-' + mm + '-' + dd;

    // let cal = DATA.calendar[0].calendar[current_date];
    // //console.log(cal)
    // if (!isEmpty(cal)) {
    //   isAvailable = cal.isAvailable;
    //   if (isAvailable == true) {
    //     currency = cal.currency;
    //     price = cal.rate;
    //     allotment = cal.allotment;
    //   }
    // }
    cellContent = currentDay;
    currentDay++;
  }

  // let today_day = d;
  // let today_mon = m;
  // let today_year = y;

  // let time_current_date = new Date(currentYear, currentMonth, currentDay).getTime();

  // let main_tour_date = based_on_main_tour_date;
  // let based_on_current_date = based_on_current_date;
  // //console.log(time_current_date +' < '+ based_on_current_date)
  // let pub_time_current_date = new Date(y, m, d).getTime();

  // if (cellContent == today_day && me.currentMonth == today_mon && me.currentYear == today_year) {
  //   // class_day = "this_today";
  //   if (!isAvailable) {
  //     class_day = "this_past";
  //   } else {
  //     class_day = "nums_days";
  //   }
  // }

  let finalDisplay = {
    // class: class_day,
    date: cellContent,
    // price: price,
    // currency: currency,
    // allotment: allotment,
    // start_time:start_time, 
    // end_time:end_time
  };

  return finalDisplay;
}

const BtnTest = (props)=>{
  const add = () => {
    localStorage.setItem("lastname", JSON.stringify({"name":"danang"}));
    alert('added');
  }
  const del = () => {
    localStorage.removeItem("lastname");
    alert('deleted');
  }
  const get = () => {
    let a = localStorage.getItem("lastname")
    alert(a);
  }
  const getAction = ()=>{
    if (props.action == 'add') return add();
    if (props.action == 'del') return del();
    if (props.action == 'get') return get();
  }
  return (
    <button onClick={() => getAction()} className="group m-5 rounded-2xl h-12 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden">
        {props.text}
        <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
        </div>
    </button>
  );
}

const log = (text)=> console.log(text)