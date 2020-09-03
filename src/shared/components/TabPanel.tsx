import * as React from "react";
import Box from "@material-ui/core/Box";

const TabPanel = (props: any) => {
  return (
    <div
      role="tabpanel"
      hidden={props.value !== props.index}
      id={`simple-tabpanel-${props.index}`}
    >
      {props.value === props.index && <Box>{props.children}</Box>}
    </div>
  );
};

export default TabPanel;
