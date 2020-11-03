import React from "react";
import ReactDom from "react-dom";
import './index.css'

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img src="https://images-na.ssl-images-amazon.com/images/I/81Kc8OsbDxL._AC_UL200_SR200,200_.jpg" />
);

const Title = () => <h1>Greenlights</h1>;

const Author = () => <h2>Matthew McConaughey</h2>

ReactDom.render(<BookList />, document.getElementById("root"));
