/* eslint-disable react/prop-types */
// import parse from "html-react-parser";
// import { createMarkdownOptions } from "../assets/styles/Styles";

// const BlogOverview = ({ overview }) => {
//   const html = overview;
//   const options = createMarkdownOptions();
//   return <>{parse(html, options)}</>;
// };
// export default BlogOverview;

import parse from "html-react-parser";
import styled from "styled-components";
import { domToReact } from "html-react-parser";
import { ParagraphSwitch } from "../assets/styles/Styles";

const StyledOverview = styled.p`
  color: ${ParagraphSwitch}; /* Your desired color */
  line-height: 1.5;
`;

const BlogOverview = ({ overview }) => {
  const html = overview;

  const transform = {
    replace: (domNode) => {
      if (domNode.name === "p") {
        return <StyledOverview>{domToReact(domNode.children)}</StyledOverview>;
      } else {
        // Wrap other elements in a <p>
        return (
          <StyledOverview>
            {domNode.children && domNode.children.map((child) => child.data)}
          </StyledOverview>
        );
      }
    },
  };

  return <>{parse(html, transform)}</>;
};

export default BlogOverview;
