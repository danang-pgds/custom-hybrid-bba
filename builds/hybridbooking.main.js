'use strict';

var e = React.createElement;

var Step1 = function Step1() {
  return React.createElement(
    "div",
    { className: "w-1/4" },
    React.createElement(
      "div",
      { className: "relative mb-2" },
      React.createElement(
        "div",
        { className: "w-8 h-8 mx-auto bg-red-500 rounded-full text-md text-white flex items-center" },
        React.createElement(
          "span",
          { className: "text-center text-white w-full" },
          "1"
        )
      )
    ),
    React.createElement(
      "div",
      { className: "text-ms text-center" },
      "Products"
    )
  );
};

var Step234 = function Step234(_ref) {
  var activeLine = _ref.activeLine,
      number = _ref.number,
      text = _ref.text;

  var lineStep = { width: 'calc(100% - 1.5rem - 1rem)', top: '50%', transform: 'translate(-50%, -50%)' };
  var lineActive = activeLine ? { width: '100%' } : { width: '0%' };
  var classIconActive = 'w-8 h-8 mx-auto rounded-full text-md text-white flex items-center bg-red-500';
  var classIconInActive = 'w-8 h-8 mx-auto bg-gray-200 border-2 border-gray-200 rounded-full text-lg text-white flex items-center';
  var classIcon = activeLine ? classIconActive : classIconInActive;
  // console.log(mIcon)
  return React.createElement(
    "div",
    { className: "w-1/4" },
    React.createElement(
      "div",
      { className: "relative mb-2" },
      React.createElement(
        "div",
        { className: "absolute flex align-center items-center align-middle content-center", style: lineStep },
        React.createElement(
          "div",
          { className: "w-full bg-gray-200 rounded items-center align-middle align-center flex-1" },
          React.createElement("div", { className: "w-0 bg-red-300 h-1 rounded", style: lineActive })
        )
      ),
      React.createElement(
        "div",
        { className: classIcon },
        React.createElement(
          "span",
          { className: "text-center w-full text-white" },
          number
        )
      )
    ),
    React.createElement(
      "div",
      { className: "text-ms text-center" },
      text
    )
  );
};

var ModalHeader = function ModalHeader(props) {
  console.log(decodeURIComponent(document.cookie));
  return React.createElement(
    "div",
    { className: "hybridbooking-modal-header" },
    React.createElement(
      "div",
      { className: "w-full py-6" },
      React.createElement(
        "div",
        { className: "flex" },
        React.createElement(Step1, null),
        React.createElement(Step234, { activeLine: false, number: "2", text: "Detail & Contact" }),
        React.createElement(Step234, { activeLine: false, number: "3", text: "Payment" }),
        React.createElement(Step234, { activeLine: false, number: "4", text: "Finish" })
      )
    )
  );
};

var ModalBody = function ModalBody(props) {
  // props.data = "test data";
  var data = { name: 'danang', order: { name: 'Hote a', date: '29-03-2023' } };
  return React.createElement(Calendar, { data: data });
};

var ModalFooter = function ModalFooter() {
  return React.createElement(
    "div",
    { className: "hybridbooking-modal-header" },
    React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "header text-center" },
        React.createElement(
          "h1",
          { className: "text-4xl font-bold" },
          React.createElement(
            "font",
            { style: { color: '#10522e' } },
            "Harga"
          ),
          React.createElement(
            "font",
            { style: { color: '#8ec545' } },
            "Tiket Masuk"
          )
        )
      )
    )
  );
};

var App = function App() {
  var data = {};
  // Define the string
  var string = JSON.stringify({ name: 'danang', saldo: 1000000000 });

  // Encode the String
  console.log('encodedString');
  var encodedString = mHash(string);
  console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh"
  // Decode the String
  console.log('decodedString');
  var decodedString = mDecode(encodedString);
  console.log(JSON.parse(decodedString)); // Outputs: "Hello World!"


  return React.createElement(
    "div",
    null,
    React.createElement(ModalHeader, { data: data }),
    React.createElement(ModalBody, { data: data })
  );
};

var domContainer = document.querySelector('#hybridbooking');
var root = ReactDOM.createRoot(domContainer);
root.render(e(App));