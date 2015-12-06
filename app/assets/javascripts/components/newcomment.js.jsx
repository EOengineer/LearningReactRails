var NewComment = React.createClass({
  propTypes: {
    blog_id: React.PropTypes.string,
    url: React.PropTypes.string
  },

  render: function() {
    return (
      <form action={this.props.blog_id + "/comments"} method="post">
        <label for="body">Body:</label>
        <input type="text" name="comment[body]"></input><br></br>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
});
