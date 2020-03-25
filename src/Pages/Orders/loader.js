import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    style={{ width: '100%' }}
    speed={2}
    width={1000}
    height={503}
    viewBox="0 0 1500 503"
    backgroundColor="#c0c0c0"
    foregroundColor="#ecebeb"
  >
    <rect x="32" y="10" rx="4" ry="4" width="5%" height="19" />
    <rect x="152" y="10" rx="4" ry="4" width="10%" height="19" />
    <rect x="360" y="10" rx="4" ry="4" width="10%" height="19" />
    <rect x="590" y="10" rx="4" ry="4" width="10%" height="19" />
    <rect x="791" y="10" rx="4" ry="4" width="10%" height="19" />

    <rect x="1000" y="10" rx="4" ry="4" width="10%" height="19" />
    <rect x="1228" y="10" rx="4" ry="4" width="10%" height="19" />
    <rect x="16" y="43" rx="4" ry="4" width="100%" height="54" />
    <rect x="15" y="106" rx="4" ry="4" width="100%" height="54" />
    <rect x="15" y="229" rx="4" ry="4" width="100%" height="54" />
    <rect x="15" y="289" rx="4" ry="4" width="100%" height="54" />
    <rect x="15" y="350" rx="4" ry="4" width="100%" height="54" />
    <rect x="15" y="412" rx="4" ry="4" width="100%" height="54" />
    <rect x="17" y="168" rx="4" ry="4" width="100%" height="54" />

    <rect x="16" y="474" rx="4" ry="4" width="100%" height="54" />
    <rect x="16" y="536" rx="4" ry="4" width="100%" height="54" />
  </ContentLoader>
);

export default MyLoader;
