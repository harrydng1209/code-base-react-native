import routeApis from './route-apis.const';
import shared from './shared.const';
import themeColors from './theme-colors.const';

interface IConstants {
  routeApis: typeof routeApis;
  shared: typeof shared;
  themeColors: typeof themeColors;
}

const constants: IConstants = {
  routeApis,
  shared,
  themeColors,
};

export default constants;
