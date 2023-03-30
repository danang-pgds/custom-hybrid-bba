'use strict';

const Calendar = (props) => {
  let dt = props.data;
  console.log(props.data)
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-start-2 col-span-10 border rounded-lg shadow-lg mb-5">
          <BtnTest action="add" text="Add"/>
          <BtnTest action="del" text="delete"/>
          <BtnTest action="get" text="Fetch"/>
          <div>
            <p>Name : {dt.name}</p>
            <p>Order Date : {dt.order.date}</p>
            <p>Order Item : {dt.order.name}</p>
          </div>
        </div>
      </div>
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