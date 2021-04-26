import React from "react";
import faker from "faker";
import ReactDOM from "react-dom";

import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45 PM"
        content="Nice blog post"
        image={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00 Am"
        content="I like this subject"
        image={faker.image.avatar()}
      />
      <CommentDetail
        author="Julie"
        timeAgo="Yesterday at 5:00 PM"
        content="I like the writing"
        image={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
