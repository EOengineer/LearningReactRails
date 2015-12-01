var Blog = React.createClass({
  propTypes: {
    id: React.PropTypes.string,
    title: React.PropTypes.string,
    body: React.PropTypes.string
  },

  render: function() {
    return (
      <div>
        <h1> Blog {this.props.id} </h1>

        <div>Title: {this.props.title}</div>
        <div>Body: {this.props.body}</div>
        <a href={"/blogs/" + this.props.id + "/edit"}>Edit </a>
        <a href='/blogs'> Back</a>
      </div>
    );
  }
});
