var Blogs = React.createClass({
  propTypes: {
    key: React.PropTypes.string,
    blogs: React.PropTypes.array
  },

  render: function() {
    return (
      <div>
        <h1> All Blogs </h1>

        {this.props.blogs.map(function(result, i) {
          return (
            <div key={i}>
              <p key={"title" + i}>{result.title}</p>
              <p key={"body" + i}>{result.body}</p>
            </div>
          );
        })}

      </div>
    );
  }
});
