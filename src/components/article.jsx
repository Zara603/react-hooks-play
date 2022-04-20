import React from "react";
import ToggleButton from "./toggleButton";
import "./article.styles.css";

const Article = () => {
  return (
    <>
      <ToggleButton />
      <div className="article">
        <p>
          Security is important. Nobody wants to be the person advocating for
          less security. So nobody wants to say it. But somebody has to say it.
          So I guess I’ll say it. The way npm audit works is broken. Its rollout
          as a default after every npm install was rushed, inconsiderate, and
          inadequate for the front-end tooling.
        </p>
      </div>
    </>
  );
};

export default Article;
