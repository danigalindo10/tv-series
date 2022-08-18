import showsGot, { displayShows } from './get-series';

const populate = async () => {
  await showsGot();
  displayShows();
};

export default populate;