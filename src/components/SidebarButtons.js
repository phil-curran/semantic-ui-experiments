import Icon from "@mdi/react";
import {
  mdiMonitorDashboard,
  mdiFormatListChecks,
  mdiNotebookOutline,
  mdiBedClock,
  mdiWeightPound,
  mdiChartLine,
} from "@mdi/js";

const HomeButton = () => {
  return (
    <a id="homeBtn" className="item">
      <Icon
        path={mdiMonitorDashboard}
        title="Dashboard"
        color="#1abc9c"
        size={1.5}
      />
    </a>
  );
};

export default HomeButton;
