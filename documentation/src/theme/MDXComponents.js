import React from "react";
// Import the original mapper
import AppName from "@site/src/components/AppName/AppName";
import MDXComponents from "@theme-original/MDXComponents";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "highlight" tag to our <Highlight /> component!
  // `Highlight` will receive all props that were passed to `highlight` in MDX
  appName: AppName,
};
