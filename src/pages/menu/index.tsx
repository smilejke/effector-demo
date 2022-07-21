import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import qs from "query-string";

import { GeneralTemplate } from "templates/general-template";
import { MenuPageContainer } from "features/menu/containers/menu-container";
import { useMenuFetching } from "features/menu/selectors";
import { selectCategory } from "features/menu/model/controllers";
import { SideMenu } from "features/common/components/side-menu";

import * as model from './model'

export const MenuPage = () => {
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
    <GeneralTemplate sideMenuChildren={<SideMenu />} loading={isMenuFetching}>
      <MenuPageContainer />
    </GeneralTemplate>
  );
};
