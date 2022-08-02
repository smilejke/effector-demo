export const setPadding = (badgeCount: number): string => {
  return badgeCount > 0 ? (badgeCount > 9 ? "35px" : "30px") : "";
};
