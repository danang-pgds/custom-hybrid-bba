'use strict';

const e = React.createElement;

const Step1 = ()=>{
  return (
    <div className="w-1/4">
      <div className="relative mb-2">
        <div className="w-8 h-8 mx-auto bg-red-500 rounded-full text-md text-white flex items-center">
          <span className="text-center text-white w-full">1</span>
        </div>
      </div>
      <div className="text-ms text-center">Products</div>
    </div>
  );
}

const Step234 = ({activeLine,number,text})=>{
  const lineStep = {width: 'calc(100% - 1.5rem - 1rem)', top: '50%', transform: 'translate(-50%, -50%)'};
  const lineActive = activeLine ? {width:'100%'}:{width:'0%'};
  const classIconActive = 'w-8 h-8 mx-auto rounded-full text-md text-white flex items-center bg-red-500';
  const classIconInActive = 'w-8 h-8 mx-auto bg-gray-200 border-2 border-gray-200 rounded-full text-lg text-white flex items-center';
  const classIcon = activeLine ? classIconActive:classIconInActive;
  // console.log(mIcon)
  return (
    <div className="w-1/4">
      <div className="relative mb-2">
        <div className="absolute flex align-center items-center align-middle content-center" style={lineStep}>
          <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
            <div className="w-0 bg-red-300 h-1 rounded" style={lineActive}></div>
          </div>
        </div>

        <div className={classIcon}>
          <span className="text-center w-full text-white">{number}</span>
        </div>
      </div>
      <div className="text-ms text-center">{text}</div>
    </div>
  );
}

const ModalHeader = (props) => {
  console.log(decodeURIComponent(document.cookie))
  return (
    <div className="hybridbooking-modal-header">
      <div className="w-full py-6">
        <div className="flex">
          <Step1 />
          <Step234 activeLine={false} number="2" text="Detail & Contact"/>
          <Step234 activeLine={false} number="3" text="Payment"/>
          <Step234 activeLine={false} number="4" text="Finish"/>
        </div>
      </div>
    </div>
  );
}

const ModalBody = (props) => {
  // props.data = "test data";
  var data = {name:'danang', order: {name:'Hote a',date:'29-03-2023'}};
  return (
    <Calendar data={data}/>
  );
}

const ModalFooter = () => {
  return (
    <div className="hybridbooking-modal-header">
      <div className="row">
        <div className="header text-center">
          <h1 className="text-4xl font-bold">
            <font style={{color : '#10522e'}}>Harga</font>
            <font style={{color : '#8ec545'}}>Tiket Masuk</font>
          </h1>
        </div>
      </div>
    </div>
  );
}

const App = () => {
  const data = {};
  // Define the string
  const string = JSON.stringify({name:'danang',saldo:1000000000});

  // Encode the String
  console.log('encodedString');
  const encodedString = mHash(string);
  console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh"
  // Decode the String
  console.log('decodedString');
  const decodedString = mDecode(encodedString);
  console.log(JSON.parse(decodedString)); // Outputs: "Hello World!"
  
  
  return (
    <div>
      <ModalHeader data={data}/>
      <ModalBody data={data}/>
      {/* <ModalFooter /> */}
    </div>
  );
}

const domContainer = document.querySelector('#hybridbooking');
const root = ReactDOM.createRoot(domContainer);
root.render(e(App));