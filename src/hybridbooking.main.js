'use strict';
const e = React.createElement;

const ModalHeader = () => {
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

const ModalBody = () => {
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
  return (
    <div>
      <ModalHeader />
      <ModalBody />
      <ModalFooter />
    </div>
  );
}

const domContainer = document.querySelector('#hybridbooking');
const root = ReactDOM.createRoot(domContainer);
root.render(e(App));