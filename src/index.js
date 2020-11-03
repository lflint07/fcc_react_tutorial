import React from "react";
import ReactDom from "react-dom";

function BookList() {
  return (
    <section>
      this is a booklist
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image></Image>
    </article>
  );
};

const Image = () => {
  <img>
    
  </img>
}

ReactDom.render(<BookList />, document.getElementById("root"));


