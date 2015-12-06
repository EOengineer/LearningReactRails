var Comments = React.createClass({
  propTypes: {
    comments: React.PropTypes.array
  },

  render: function() {
    return (
      <div>
        <h1> Blog Comments </h1>

        <div className="comments-wrapper">
          {this.props.comments.map(function(result, i) {
            return (
              <a href={"/comments/" + result.id}>
                <div className="comment" key={i}>
                  <p key={"b" + i}>{result.body}</p>
                </div>
              </a>
            );
          })}
        </div>
        <a href={"/blogs/" + this.props.comments[0].blog_id + "/comments/new"} className="stuff">New comment</a>
      </div>
    );
  }
});
