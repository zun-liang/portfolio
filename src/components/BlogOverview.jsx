/* eslint-disable react/prop-types */
import parse from "html-react-parser";
import { createMarkdownOptions } from "../assets/styles/Styles";

const BlogOverview = ({ theme, overview }) => {
  const html = overview;
  const options = createMarkdownOptions(theme);
  return <>{parse(html, options)}</>;
};
export default BlogOverview;
