class LikeButton2 extends React.Component {
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
