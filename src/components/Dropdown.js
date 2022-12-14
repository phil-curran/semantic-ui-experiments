import $ from "jquery";

const Dropdown = () => {
  $(document).ready(function () {
    // $(".sidebarMenu").click(function () {
    //   $(".ui.sidebar").sidebar("toggle");
    // });
    $(".ui.dropdown").dropdown();
  });

  return (
    <div className="ui selection dropdown">
      <div className="text">File</div>
      <i className="dropdown icon"></i>
      <div className="menu">
        <div className="item">New</div>
        <div className="item">
          <span className="description">ctrl + o</span>
          Open...
        </div>
        <div className="item">
          <span className="description">ctrl + s</span>
          Save as...
        </div>
        <div className="item">
          <span className="description">ctrl + r</span>
          Rename
        </div>
        <div className="item">Make a copy</div>
        <div className="item">
          <i className="folder icon"></i>
          Move to folder
        </div>
        <div className="item">
          <i className="trash icon"></i>
          Move to trash
        </div>
        <div className="divider"></div>
        <div className="item">Download As...</div>
        <div className="item">
          <i className="dropdown icon"></i>
          Publish To Web
          <div className="menu">
            <div className="item">Google Docs</div>
            <div className="item">Google Drive</div>
            <div className="item">Dropbox</div>
            <div className="item">Adobe Creative Cloud</div>
            <div className="item">Private FTP</div>
            <div className="item">Another Service...</div>
          </div>
        </div>
        <div className="item">E-mail Collaborators</div>
      </div>
    </div>
  );
};

export default Dropdown;
