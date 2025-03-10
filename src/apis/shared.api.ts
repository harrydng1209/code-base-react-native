import constants from '@/constants';
import utils from '@/utils';

const { HEALTH_CHECK } = constants.routeApis;
const { SELECTORS } = constants.shared;

const shared = {
  healthCheck: async () => {
    const url = HEALTH_CHECK;
    return await utils.http.get<unknown>(
      url,
      undefined,
      SELECTORS.APIS_SECTION,
      'All systems are go! Health check successful',
    );
  },
};

export default shared;
