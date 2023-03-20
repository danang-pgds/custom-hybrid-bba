// document.body.innerHTML += '<div id="hybridbooking"></div>';
// document.body.classList.add('hybridbooking');
// document.body.className += ' hybridbooking';



'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked comment number ' + this.props.commentID;
    }

    return e(
      'button',
      {
        className:'btn btn-primary',
        onClick: () => this.setState({ liked: true }) 
      },
      'Like'
    );
  }
}

class ModalFooter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return e(
      'div',
      {className:'hybridbooking-modal-footer'},
        e('h3',null,'Modal Footer')
    );
  }
}

class ModalHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return e(
      'div',
      {className:'hybridbooking-modal-header'},
      e('div',{className:'row'},
        e('div',{className:'header text-center'},
          e('h1',{className:'text-4xl font-bold'},
            [
              e('font',{key:1,color:'#10522e'},'Harga'),
              e('font',{key:2,color:'#8ec545'},'Tiket Masuk'),
            ]
          )
        ),
      ),
    );
  }
}
class ModalBody extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return e(
      'div',
      {className:'hybridbooking-modal-body'},
        [
          e('p',{key:1},'Some text in the Modal Body'),
          e('p',{key:2},'Some other text...')
        ]
    );
  }
}

class Home extends React.Component {
  render() {
    return [
      // e('div',{key:'container', className:'container'},
      //   e('div',{className:'row'},
      //     e('div',{className:'header text-center'},
      //       e('h1',{className:'text-4xl font-bold'},
      //         [
      //           e('font',{key:1,color:'#10522e'},'Harga'),
      //           e('font',{key:2,color:'#8ec545'},'Tiket Masuk'),
      //         ]
      //       )
      //     ),
      //   ),
      // ),
      e(ModalHeader,{key:'modal-header'}),
      e(ModalBody,{key:'modal-body'}),
      e(ModalFooter,{key:'modal-footer'}),
      // e('button',{key:'button', className:'inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'},
      //   [
      //     e('span',{key:1},'Check Availability'),
      //     e('svg',{key:2,className:'h-5 w-5',viewBox:'0 0 20 20',fill:'currentColor',hidden:true},
      //       e('path',{rule:'evenodd'})
      //     )
      //     // e('')
      //   ]
      // ),
    ]
  }
}

class App extends React.Component {
  render() {
    return [
      e(Home,{key:1})
    ]
  }
}

const domContainer = document.querySelector('#hybridbooking');
const root = ReactDOM.createRoot(domContainer);
root.render(e(App));
