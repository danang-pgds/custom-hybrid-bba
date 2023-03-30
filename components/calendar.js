var Calendar = function Calendar(props) {
  var dt = props.data;
  console.log(props.data);
  return React.createElement(
    "div",
    null,
    React.createElement(BtnTest, { action: "add", text: "Add" }),
    React.createElement(BtnTest, { action: "del", text: "delete" }),
    React.createElement(BtnTest, { action: "get", text: "Fetch" }),
    React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Name : ",
        dt.name
      ),
      React.createElement(
        "p",
        null,
        "Order Date : ",
        dt.order.date
      ),
      React.createElement(
        "p",
        null,
        "Order Item : ",
        dt.order.name
      )
    )
  );
};

var BtnTest = function BtnTest(props) {
  var add = function add() {
    localStorage.setItem("lastname", JSON.stringify({ "name": "danang" }));
    alert('added');
  };
  var del = function del() {
    localStorage.removeItem("lastname");
    alert('deleted');
  };
  var get = function get() {
    var a = localStorage.getItem("lastname");
    alert(a);
  };
  var getAction = function getAction() {
    if (props.action == 'add') return add();
    if (props.action == 'del') return del();
    if (props.action == 'get') return get();
  };
  return React.createElement(
    "button",
    { onClick: function onClick() {
        return getAction();
      }, className: "group m-5 rounded-2xl h-12 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden" },
    props.text,
    React.createElement("div", { className: "absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl" })
  );
};