import $ from "jquery";

const Accordion = () => {
  $(document).ready(function () {
    $(".ui.accordion").accordion();
  });

            {tasks.map((task, taskIndex) => {
  <div key={taskIndex} className="drawer">
    <div className="ui two column grid">
      <div className="column">
        <div className="title">
          <i className="dropdown icon"></i>
          {task.title}
        </div>
        <div className="content">
          <p>{task.description}</p>
        </div>
      </div>
      <div className="column">
        <span className="actionButtons">
          <div className="ui icon buttons">
            <button className="mini ui button">
              <i className="align left icon"></i>
            </button>
            <button className="mini ui button">
              <i className="align center icon"></i>
            </button>
            <button className="mini ui button">
              <i className="align right icon"></i>
            </button>
            <button className="mini ui button">
              <i className="align justify icon"></i>
            </button>
          </div>
        </span>
      </div>
    </div>
  </div>;

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
    </>
  );
}

export default Accordion;
