'use strict';
import { nextTick } from 'vue'

export default {
  props: ['title'],
  data() {
    return { 
      d: '',
      m: '',
      y: '',
      monthLong: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      daysShort: ['Mo','Tu','We','Th','Fr','Sa','Su'],
      currentDay: 0,
      currentYear: 0,
      currentMonth: 0,
      currentDate: 0,
      daysInMonth: 0,
    }
  },
  created(){
    console.log('created')
    console.log(new Date().getMilliseconds())

    let date = new Date();
    this.d = date.getDate();
    this.m = date.getMonth();
    this.y = date.getFullYear();
    this.currentMonth = Number(this.m);
    this.currentYear = this.y;
  },
  mounted(){
    nextTick(()=>{
      console.log('inside nextick')
      console.log(new Date().getMilliseconds())
    })
    console.log('mounted')
    console.log(new Date().getMilliseconds())
  },
  computed: {
    // compute caching https://vuejs.org/guide/essentials/computed.html#computed-properties
    LabelDays(){
      let day = '';
      this.daysShort.map((val)=> day += `<div class="bg-red-500 py-1.5 md:py-2 w-auto text-white rounded-xl text-center">${val}</div>`)
      return day;
    },
    LabelDates(){
      // const dates = Array.from(Array(31));// generate dates for slashing purpose
      let date = '';
      this.ShowDay().map((e,key)=> date += `<div class="py-2 md:py-3 w-auto text-red-500 border rounded-xl text-center my-1 hover:cursor-pointer">${e.date == null ? '':e.date}</div>`)
      return date;
    },
  },
  methods: {
    emitExample(){this.$emit('inCount',1)},
    nextMonth(){
      this.currentMonth += 1;
      if(this.currentMonth > 11) {this.currentMonth = 1;this.currentYear++}
    },
    prevMonth(){
      this.currentMonth -= 1;
      if(this.currentMonth < 0) {this.currentMonth = 11;this.currentYear--}
    },
    ShowDay(){
      let weeksInMonth = this.WeeksInMonth();
      let content = [];
      // Create weeks in a month
      this.currentDay = 0; // reset
      for (let i = 0; i < weeksInMonth; i++) {
        //Create days in a week
        for (let j = 1; j <= 7; j++) {
          content.push(this.ShowDayContents(i * 7 + j));
        }
      }
      return content;
    },
    WeeksInMonth(){// calculate number of weeks in a particular month
      // find number of days in this month
      this.daysInMonth = new Date(this.currentYear, this.currentMonth +1, 0).getDate();
      let numOfweeks = Math.floor((this.daysInMonth % 7 == 0 ? 0 : 1) + (this.daysInMonth / 7));
      let monthStartDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
      let monthEndingDay = new Date(this.currentYear, this.currentMonth, this.daysInMonth).getDay();
      
      if ((monthEndingDay < monthStartDay) && (monthEndingDay != 0)) numOfweeks++;
      if (monthStartDay == 0) numOfweeks++;
      
      return numOfweeks;
    },
    ShowDayContents(cellNumber){
      let cellContent = null;
      let price = '';
      let currency = '';
      let isAvailable = false;
      let allotment = '';
      // log('currentDay '+this.currentDay)
      if (this.currentDay == 0) {
        let firstDayOfTheWeek = new Date(this.currentYear, this.currentMonth, 1).getDay();
        
        if (firstDayOfTheWeek == 0) firstDayOfTheWeek = 7;
        if (cellNumber == firstDayOfTheWeek) this.currentDay = 1;
      }
      if ((this.currentDay != 0) && (this.currentDay <= this.daysInMonth)) {
        this.currentDate = this.currentYear + '-' + this.currentMonth + '-' + this.currentDay;
        let dd = this.currentDay;
        let mm = this.currentMonth;
        if (mm < 10) {
          mm = '0' + mm;
        }
        if (this.currentDay < 10) {
          dd = '0' + this.currentDay;
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
        cellContent = this.currentDay;
        this.currentDay++;
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
  },
  template: `
  <div>
    <div class="grid grid-cols-12 gap-4">
      <div class="flex-col col-start-2 col-span-10 border rounded-lg shadow-lg mb-5">
        <div class="flex justify-center space-x-4 my-5 items-center">
          <div class="w-8 h-8 bg-gray-200 hover:bg-red-500 rounded-full text-lg text-white flex cursor-pointer" @:click="prevMonth()">
            <span class="text-center text-white w-full"> &lt; </span>
          </div>
          <div class="text-lg font-medium">{{monthLong[currentMonth]}} {{currentYear}}</div>
          <div class="w-8 h-8 bg-gray-200 hover:bg-red-500 rounded-full text-lg text-white flex cursor-pointer" @:click="nextMonth()">
            <span class="text-center text-white w-full"> > </span>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="grid grid-cols-7 gap-x-1 md:gap-x-5 w-11/12 mb-1" v-html="LabelDays"></div>
        </div>
        <div class="flex justify-center">
          <div class="grid grid-cols-7 gap-x-1 md:gap-x-5 w-11/12" v-html="LabelDates"></div>
        </div>
      </div>
    </div>
  </div>
  `
}