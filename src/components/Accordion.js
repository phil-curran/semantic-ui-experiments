import "../styles/button.css";
import "../styles/accordion.css";
import "../styles/icon.css";
// import $ from "jquery";

const Accordion = () => {
  // ui logic

  let titles = Array.from(document.querySelectorAll(".title"));
  let contents = Array.from(document.querySelectorAll(".content"));

  // let addTitles = () => {
  //   titles.forEach((title) => title.classList.add("active"));
  // };

  let hideAllTitles = () => {
    titles.forEach((title) => title.classList.remove("active"));
  };

  // let showContents = () => {
  //   contents.forEach((content) => content.classList.add("active"));
  // };

  let hideAllContents = () => {
    contents.forEach((content) => content.classList.remove("active"));
  };

  titles.forEach((title) => {
    title.addEventListener("click", () => {
      let position = titles.indexOf(title);
      hideAllTitles();
      hideAllContents();
      titles[position].classList.add("active");
      contents[position].classList.add("active");

      // console.log("ID: " + id);
      console.log("Position: " + position);
      // console.log("ID Clicked: " + id);
      // hideAllTitles();
      // hideAllContents();
      // title.classList.add("active");
      // console.log(contents[0]);
      // console.log(typeof contents);
      // let position = contents.indexOf(id);
      // console.log(position);
      // contents[position].classList.add("active");
      // console.log(contents[id]);
      // let target = document.getElementById(id);
      // target.classList.add("active");
    });
  });

  return (
    <>
      <div className="ui styled accordion">
        <div className="title" id="one">
          <i className="dropdown icon"></i>
          What is a dog?
        </div>
        <div className="content">
          <p>
            A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world.
          </p>
        </div>
        <div className="title">
          <i className="dropdown icon"></i>
          What kinds of dogs are there?
        </div>
        <div className="content">
          <p>
            There are many breeds of dogs. Each breed varies in size and
            temperament. Owners often select a breed of dog that they find to be
            compatible with their own lifestyle and desires from a companion.
          </p>
        </div>
        <div className="title">
          <i className="dropdown icon"></i>
          How do you acquire a dog?
        </div>
        <div className="content">
          <p>
            Three common ways for a prospective owner to acquire a dog is from
            pet shops, private owners, or shelters.
          </p>
          <p>
            A pet shop may be the most convenient way to buy a dog. Buying a dog
            from a private owner allows you to assess the pedigree and
            upbringing of your dog before choosing to take it home. Lastly,
            finding your dog from a shelter, helps give a good home to a dog who
            may not find one so readily.
          </p>
        </div>
      </div>
      <div className="ui buttons">
        <button className="ui button">activateAllTitles</button>
        <button className="ui button">deactivateAllTitles</button>
      </div>
    </>
  );
};

export default Accordion;
