import $ from "jquery";

const Tabs = (props) => {
  const { first, second, third } = props;

  $(document).ready(function () {
    // $(".sidebarMenu").click(function () {
    //   $(".ui.sidebar").sidebar("toggle");
    // });
    $(".menu .item").tab("toggle");
  });

  return (
    <>
      <div className="ui top attached tabular menu">
        <a className="active item" data-tab="first">
          {first.title}
        </a>
        <a className="item" data-tab="second">
          {second.title}
        </a>
        <a className="item" data-tab="third">
          {third.title}
        </a>
      </div>
      <div className="ui bottom attached active tab segment" data-tab="first">
        {first.content}
      </div>
      <div className="ui bottom attached tab segment" data-tab="second">
        {second.content}
      </div>
      <div className="ui bottom attached tab segment" data-tab="third">
        {third.content}
      </div>
    </>
  );
};

export default Tabs;
