'use strict';

var e = React.createElement;

var ModalHeader = function ModalHeader() {
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

var ModalBody = function ModalBody() {
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
  return React.createElement(
    "div",
    null,
    React.createElement(ModalHeader, null),
    React.createElement(ModalBody, null),
    React.createElement(ModalFooter, null)
  );
};

var domContainer = document.querySelector('#hybridbooking');
var root = ReactDOM.createRoot(domContainer);
root.render(e(App));