/* eslint-disable react/prop-types */
import parse from "html-react-parser";

import { createMarkdownOptions } from "../assets/styles/Styles";

const BlogContent = ({ blogContent }) => {
  const html = blogContent;
  const options = createMarkdownOptions();
  return <>{parse(html, options)}</>;
};

export default BlogContent;
