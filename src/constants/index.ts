// import colors from './colors.const';
import routeApis from './route-apis.const';
import routePages from './route-pages.const';
import shared from './shared.const';

interface IConstants {
  // colors: typeof colors;
  routeApis: typeof routeApis;
  routePages: typeof routePages;
  shared: typeof shared;
}

const constants: IConstants = {
  // colors,
  routeApis,
  routePages,
  shared,
};

export default constants;
