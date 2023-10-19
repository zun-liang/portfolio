### Helpful Resources

#### Designs

- [favicon.io](https://favicon.io/favicon-generator/)
- [COOLTEXT](https://cooltext.top/)
- [Pixel Speech Bubble](https://pixelspeechbubble.com/)
- [Emoji Combos](https://emojicombos.com/)
- [ColorSpace](https://mycolor.space/)
- [SVG REPO](https://www.svgrepo.com/)
- [icons8](https://icons8.com/icons)
- [SVG Icons](https://fontawesomeicons.com/svg/icons)
- [Pixabay](https://pixabay.com/)
- [AudioMass](https://audiomass.co/)

I was having trouble deciding what colors look good for my website.

#### HTML

- [Geolocation: getCurrentPosition() method](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition)
- [Document: title property](https://developer.mozilla.org/en-US/docs/Web/API/Document/title)
- [Window: location property](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)
- [Element: scrollTo() method](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo)
- [Window: location property](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)

#### CSS

- [text-underline-offset](https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset)
- [writing-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode)
- [text-orientation](https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation)
- [CSS Dot Patter/Grid Background](https://codepen.io/edmundojr/pen/xOYJGw)
- [-webkit-text-stroke](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-stroke)
- [object-position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position)
- [::-webkit-scrollbar](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar)

#### React

- [use-sound](https://github.com/joshwcomeau/use-sound)
- [Announcing “use-sound”, a React Hook for Sound Effects](https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/)

#### React Router

- [React Router Version 6 Tutorial – How to Set Up Router and Route to Other Components](https://www.freecodecamp.org/news/how-to-use-react-router-version-6/)
- [Scroll Restoration](https://v5.reactrouter.com/web/guides/scroll-restoration)
- [<ScrollRestoration />](https://reactrouter.com/en/main/components/scroll-restoration)
  I was having difficulty creating a "back to top" button and I found a couple things to consider. First, I learned that my scrollable container is not window but body in this case according to Firefox dev tools. Second, my scroll to top button doesn't help to load new page's begining but the position of old page where I was at, then I found scrollRestoration from react router which is very helpful but also "remembers" window.location. ScrollRestoration only works on window level. not working here...
- [<ScrollRestoration> with scrolling container other than window #9495](https://github.com/remix-run/react-router/discussions/9495)
- [index.tsx:24 Uncaught Error: useLocation() may be used only in the context of a <Router> component](https://stackoverflow.com/questions/71979809/index-tsx24-uncaught-error-uselocation-may-be-used-only-in-the-context-of-a)
  i had the same error and was thinking where to put my scroll component for the best. this answer inspired me to add it in layout route and enable to utilize useLocation.

#### JavaScript

- [Date.prototype.toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)
- [Intl.DateTimeFormat() constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)
- [encodeURIComponent()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)
- [Chrome 80 shows timestamp "24:xx" instead of "00:00".](https://support.google.com/chrome/thread/29828561/chrome-80-shows-timestamp-24-xx-instead-of-00-00?hl=en)
  spotted only on chrome mac shows 24 instead of 00, fixed by using hourCycle: 23h instead of hour12: false.

#### Styled-Components

- [Referring to other components](https://styled-components.com/docs/advanced#referring-to-other-components)

#### SVGs

- [How to Import SVGs in a React and Vite app] (https://www.freecodecamp.org/news/how-to-import-svgs-in-react-and-vite/#3importingsvgsasreactcomponents)

#### APIs

- [Formspree](https://formspree.io/)
- [react-md-editor](https://uiwjs.github.io/react-md-editor/)

  I first tryied rich text editor (tinymce) but its data can not be stored in firebase, then i switched to markdown.

  - [How can I set the placeholder value? #154](https://github.com/uiwjs/react-md-editor/issues/154)

- [react-markdown](https://github.com/remarkjs/react-markdown)
- [remark-gfm](https://github.com/remarkjs/remark-gfm)
- [Open Weather API](https://openweathermap.org/)

#### Tools

- [LT Browser](https://www.lambdatest.com/lt-browser)
- [Find scrollable elements](https://phuoc.ng/collection/tips/find-scrollable-elements/)
