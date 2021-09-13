import { GeneralTemplate } from "templates/general-template";
import { StatusContainer } from "features/status/containers/status-container";

export const StatusPage = () => {
  return (
    <GeneralTemplate selectedMenu="status">
      <StatusContainer />
    </GeneralTemplate>
  );
};
