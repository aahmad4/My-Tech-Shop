import React from "react";
import { Helmet } from "react-helmet";

export default function Meta({ title, description, keywords }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
}

Meta.defaultProps = {
  title: "Alibaba Shop",
  description:
    "Welcome To Alibaba Shop. Find the best products at the most affordable prices!",
  keywords: "Electronics, Eccomerce, Buying, Selling, Cheap Products",
};
