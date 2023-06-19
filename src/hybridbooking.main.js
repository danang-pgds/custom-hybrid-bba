'use strict';

const Step1 = ()=>{
  let div = `
    <div class="w-1/4">
      <div class="relative mb-2">
        <div class="w-8 h-8 mx-auto bg-red-500 rounded-full text-md text-white flex items-center">
          <span class="text-center text-white w-full">1</span>
        </div>
      </div>
      <div class="text-ms text-center">Products</div>
    </div>`;
  document.getElementById('step1').innerHTML = div;
}

// const Step234 = ({activeLine,number,text})=>{
//   const lineStep = {width: 'calc(100% - 1.5rem - 1rem)', top: '50%', transform: 'translate(-50%, -50%)'};
//   const lineActive = activeLine ? {width:'100%'}:{width:'0%'};
//   const classIconActive = 'w-8 h-8 mx-auto rounded-full text-md text-white flex items-center bg-red-500';
//   const classIconInActive = 'w-8 h-8 mx-auto bg-gray-200 border-2 border-gray-200 rounded-full text-lg text-white flex items-center';
//   const classIcon = activeLine ? classIconActive:classIconInActive;
//   // console.log(mIcon)
//   return (
//     <div class="w-1/4">
//       <div class="relative mb-2">
//         <div class="absolute flex align-center items-center align-middle content-center" style={lineStep}>
//           <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
//             <div class="w-0 bg-red-300 h-1 rounded" style={lineActive}></div>
//           </div>
//         </div>

//         <div class={classIcon}>
//           <span class="text-center w-full text-white">{number}</span>
//         </div>
//       </div>
//       <div class="text-ms text-center">{text}</div>
//     </div>
//   );
// }

const ModalHeader = () => {
  return `
    <div class="hybridbooking-modal-header">
      <div class="w-full py-6">
        <div class="flex">
          <div id="step1"></div>
          <Step234 activeLine={false} number="2" text="Detail & Contact"/>
          <Step234 activeLine={false} number="3" text="Payment"/>
          <Step234 activeLine={false} number="4" text="Finish"/>
        </div>
      </div>
    </div>`;
}

// const ModalBody = (props) => {
//   // props.data = "test data";
//   var data = {name:'danang', order: {name:'Hote a',date:'29-03-2023'}};
//   return (
//     <div class="h-screen overflow-y-auto">
//       <Calendar data={data}/>
//     </div>
//   );
// }

// const ModalFooter = () => {
//   return (
    // <div class="hybridbooking-modal-header">
    //   <div class="row">
    //     <div class="header text-center">
    //       <h1 class="text-4xl font-bold">
    //         <font style={{color : '#10522e'}}>Harga</font>
    //         <font style={{color : '#8ec545'}}>Tiket Masuk</font>
    //       </h1>
    //     </div>
    //   </div>
    // </div>
//   );
// }

// const App = () => {
//   ModalHeader()
//       {/* <ModalBody data={data}/> */}
//       {/* <ModalFooter /> */}
// }

const app = Vue.createApp({
  data() {
    return {
      message: ModalHeader()
    }
  }
})

// app.mount('#hybridbooking-modal-content')

// document.getElementById('hybridbooking').innerHTML = App();
// const domContainer = document.querySelector('#hybridbooking');
// const root = ReactDOM.createRoot(domContainer);
// root.render(e(App));