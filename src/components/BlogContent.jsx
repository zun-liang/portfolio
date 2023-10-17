/* eslint-disable react/prop-types */
import parse from "html-react-parser";
import { createMarkdownOptions } from "../assets/styles/Styles";

const BlogContent = ({ theme, blogContent }) => {
  const html = blogContent;
  const options = createMarkdownOptions(theme);
  return <>{parse(html, options)}</>;
};
export default BlogContent;
