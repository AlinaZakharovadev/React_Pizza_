import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="124" cy="133" r="124" />
    <rect x="-1" y="275" rx="5" ry="5" width="248" height="28" />
    <rect x="3" y="318" rx="8" ry="8" width="245" height="79" />
    <rect x="4" y="411" rx="5" ry="5" width="74" height="42" />
    <rect x="93" y="411" rx="20" ry="20" width="154" height="43" />
  </ContentLoader>
);

export default Skeleton;
