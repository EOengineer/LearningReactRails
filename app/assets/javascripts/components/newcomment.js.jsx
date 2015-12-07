var NewComment = React.createClass({
  propTypes: {
    blog_id: React.PropTypes.string,
    path: React.PropTypes.string,
    token: React.PropTypes.string
  },

  render: function() {
    return (
      <form role="comment" accept-charset="UTF-8" action={this.props.path} method="post">
        <label for="body">Body:</label>
        <input type="text" name="comment[body]"></input><br></br>
        <input type="hidden" name="authenticity_token" value={this.props.token}></input>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
});
