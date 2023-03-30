'use strict';

const Calendar = (props) => {
  let dt = props.data;
  console.log(props.data)
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className="flex-col col-start-2 col-span-10 border rounded-lg shadow-lg mb-5">
          <div className="flex justify-center space-x-4 my-5 items-center">
            <ButtonPrevCalendar />
            <div className="text-lg font-medium">February 2023</div>
            <ButtonNextCalendar />
          </div>
          <div className="flex justify-center">
            <LabelDays />
          </div>
          <div className="flex justify-center">
            <LabelDates />
          </div>
        </div>
      </div>
    </div>
  );
}

const ButtonNextCalendar = ()=>{
  return (
    <div className="w-8 h-8 bg-gray-200 hover:bg-red-500 rounded-full text-lg text-white flex cursor-pointer">
      <span className="text-center text-white w-full">{'>'}</span>
    </div>
  );
}

const ButtonPrevCalendar = ()=>{
  return (
    <div className="w-8 h-8 bg-gray-200 hover:bg-red-500 rounded-full text-lg text-white flex cursor-pointer">
      <span className="text-center text-white w-full">{'<'}</span>
    </div>
  );
}

const LabelDays = ()=>{
  const days = ['Mo','Tu','We','Th','Fr','Sa','Su',];
  return (
    <div className="grid grid-cols-7 gap-x-1 md:gap-x-5 w-11/12 mb-1">
      {days.map((day,key)=>{
        return <div className="bg-red-500 py-1.5 md:py-2 w-auto text-white rounded-xl text-center" key={key}>{day}</div>
      })}
    </div>
  );
}

const LabelDates = ()=>{
  const dates = Array.from(Array(31));// generate dates for slashing purpose
  return (
    <div className="grid grid-cols-7 gap-x-1 md:gap-x-5 w-11/12">
      {dates.map((date,key)=>{
        return <div className="py-2 md:py-3 w-auto text-red-500 border rounded-xl text-center my-1 hover:cursor-pointer" key={key}>{key}</div>
      })}
    </div>
  );
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