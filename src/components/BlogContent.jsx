/* eslint-disable react/prop-types */
import parse from "html-react-parser";
import "highlight.js/styles/monokai-sublime.css";
import hljs from "highlight.js";
import { useEffect } from "react";

import { createMarkdownOptions } from "../assets/styles/Styles";

const BlogContent = ({ blogContent }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const html = blogContent;
  const options = createMarkdownOptions();
  return <>{parse(html, options)}</>;
};

export default BlogContent;
