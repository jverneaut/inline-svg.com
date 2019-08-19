import slugify from '../utils/slugify';

import svgCollections from '../svgs';

export const collections = Object.keys(svgCollections);
export const svgs = collections.map(collectionName => {
  return svgCollections[collectionName].map(svg => {
    const { NAME, FILENAME, TAGS } = new svg({});
    return {
      name: NAME,
      filename: FILENAME,
      tags: TAGS,
      slug: slugify(NAME),
      component: svg,
      collection: collectionName
    }
  });
}).flat();
