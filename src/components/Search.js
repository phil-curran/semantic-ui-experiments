const Search = () => {
  return (
    <div className="ui two column centered padded grid">
      <div className="row">
        <div className="column">
          <div className="ui header">
            <h3>Search with Categories & Custom Template</h3>
          </div>
          <div className="autobot ui segment very padded attached">
            <div className="ui category search">
              <div className="ui icon fluid input">
                <input
                  className="prompt"
                  type="text"
                  placeholder="Programs & Courses"
                />
                <i className="search icon blue"></i>
              </div>
              <div className="results"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
