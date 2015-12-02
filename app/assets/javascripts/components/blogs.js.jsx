var Blogs = React.createClass({
  propTypes: {
    key: React.PropTypes.string,
    blogs: React.PropTypes.array
  },

  render: function() {
    return (
      <div>
        <h1> All Blogs </h1>

        <div className="blogswrapper">
          {this.props.blogs.map(function(result, i) {
            return (
              <a href={"/blogs/" + result.id}>
                <div className="blog" key={i}>
                  <p key={"t" + i}>{result.title}</p>
                  <p key={"b" + i}>{result.body}</p>
                </div>
              </a>
            );
          })}
        </div>
        <a href="/blogs/new" className="stuff">New Blog</a>
      </div>
    );
  }
});
