import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import qs from "query-string";

import { GeneralTemplate } from "templates/general-template";
import { HomePageContainer } from "features/home/containers/homepage-container";
import { useMenuFetching } from "features/home/selectors";
import { selectCategory } from "features/home/controllers";

export const HomePage = () => {
  const isMenuFetching = useMenuFetching();
  const { search } = useLocation();

  const category = useMemo(
    () => String(qs.parse(search).section || "all"),
    [search]
  );

  useEffect(() => {
    selectCategory(category);
  }, [category]);

  return (
    <GeneralTemplate loading={isMenuFetching}>
      <HomePageContainer />
    </GeneralTemplate>
  );
};
