import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import qs from "query-string";

import { GeneralTemplate } from "templates/general-template";
import { HomePageContainer } from "features/home/containers/homepage-container";
import { useGetMenuFetching } from "features/home/selectors";
import { selectCategory } from "features/home/controllers";
import { TMenuPositionCategory } from "features/home/types";

export const HomePage = () => {
  const isMenuFetching = useGetMenuFetching();
  const { search } = useLocation();

  useEffect(() => {
    selectCategory(qs.parse(search).section as TMenuPositionCategory);
  }, [search]);

  return (
    <GeneralTemplate loading={isMenuFetching}>
      <HomePageContainer />
    </GeneralTemplate>
  );
};
