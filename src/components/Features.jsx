import React from "react";
import FeaturesSection from "./FeaturesSection";
import { features } from "../data/data";

function Features() {
  return features.map(({ pretitle, title, subtitle, image }, index) => <FeaturesSection key={index} pretitle={pretitle} title={title} subtitle={subtitle} image={image} index={index + 1} />);
}

export default Features;
