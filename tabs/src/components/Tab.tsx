import { Button } from "@fluentui/react-northstar";
import * as microsoftTeams from "@microsoft/teams-js";
import { Component } from "react";

class Tab extends Component {
  render() {
    return (
      <div>
        <Button content="Show Image" onClick={() => this.showImage()} />
      </div>
    );
  }

  showImage() {
    microsoftTeams.media.viewImages(
      [
        {
          type: microsoftTeams.media.ImageUriType.URL,
          value: `${window.location.origin}/deploy.png`,
        },
      ],
      (error) => {}
    );
  }
}

export default Tab;
