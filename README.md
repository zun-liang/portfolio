# Portfolio

## Table of contents

- [Overview](#overview)
  - [Introduction](#introduction)
  - [Purpose and goal](#purpose-and-goal)
  - [Spotlight](#spotlight)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [References](#references)
- [Author](#author)

## Overview

### Introduction

I'm super excited to introduce my portfolio v1.0 🥳, a project that's been a dream come true for me ✨! I've always longed for my own website, but it wasn't until I became comfortable using React router that I felt ready to build this 💪. Personally, I've always favored a traditional multi page website for a portfolio. Beyond being a significant personal milestone, this website has proven to be an excellent project for practicing my frontend skills. Not only have I sharpened my existing skills, but I've also achieved and learned a great deal throughout this exciting process ✨!

This website contains five sections:

- Home Page 🏠

  The landing page, equipped with a title, menu, light/dark mode switch, sound toggle, music control, links to my social accounts, real-time weather and temperature updates, and the current time.

- About me 👩‍💻

  On this page, you'll learn about my learning journey, achievements, skills, and future plans.

- Projects 🛠️

  This page showcases the best projects I've worked on, which are updated regularly. Visitors can click on each project to dive into its backstory and details.

- Blogs 📓

  Here, you'll discover my blogs, which are mainly learning notes and thoughts. I intend to use this section as a personal repository of knowledge and skills.

- Contact 📩

  The contact page serves as a means for visitors to get in touch with me and establish a connection.

In building and designing this website, I've put a strong emphasis on **user experience** and **interactivity**. In this website, visitors are able to:

<ul>
<li style="list-style-type: '✨'">&nbsp;View the optimal layout for the website depending on their device's screen size
<li style="list-style-type: '✨'">&nbsp;See hover/active/focus states for all interactive elements on the page
<li style="list-style-type: '✨'">&nbsp;Toggle light and dark mode (default based on day/night)
<li style="list-style-type: '✨'">&nbsp;Toggle sound effects (default mute)
<li style="list-style-type: '✨'">&nbsp;Toggle background music (default mute)
<li style="list-style-type: '✨'">&nbsp;Get weather and temperature information depending on their location
<li style="list-style-type: '✨'">&nbsp;Get current time depending on their time zone
</ul>

### Purpose and Goal

The primary purpose behind creating this portfolio website is to establish a unique online space where I can share my ideas 💡, communicate my skills 💻, and connect with other developers 👩‍💻👨‍💻. Having observed numerous impressive portfolio websites out there, it's an immense source of pride and satisfaction to finally have one of my own 🚀.

Moreover, I envision this website as a reflection of my personality and preferences 🌈. It's not just a professional showcase; it's a personal space where visitors can get to know the person behind the work 👩‍💻. Through this platform, I aim to inspire and foster connections with those who share my interests and passions 💖.

### Spotlight

- Firebase - Retrieve and Manage Data ୧ ‧₊˚🗂️🔎 ⋆｡°✩

  At the time I started to build this website, I didn't have the knowledge or experience to work with databases and backend systems. However, I soon discovered that Firebase is a fantastic tool that I could relatively easily grasp and utilize in my project ✨. I utilized Firestore's `getDoc`, `getDocs`, `ref`, `doc`, `orderBy`, and `query` to retrieve and display blogs data.

- User Authentication - "Secret" Blog Management ୧ ‧₊˚ 📁🗝 ⋆｡°✩

  During the process of building this website, I also embarked on my first experience with user authentication. While it may not be immediately evident to regular visitors, I utilized Firestore's `auth`, `onAuthStateChanged`, `signIn`, `signOut`, `setDoc`, `deleteDoc`, `updateDoc`, and `updateProfile` to integrate a simple blog management system into this project ✨. This system allows me to exclusively log in as admin, create, update, and edit blogs, and update user profile all while securely saving them to Firebase.

  Especially, while working with Firestore's `updateProfile` to update user names and photos, I found that it only supports updating a URL for photos, rather than the commonly supported method of uploading pictures directly from local devices. After conducting some research, I discovered that the combination of Firestore and Firebase Cloud Storage can achieve this feature. I accomplished this by using `getStorage`, `ref`, `uploadBytes`, and `getDownloadURL` to store locally uploaded images and provide a URL for downloading. I then utilized this url to update user profiles 📸 🔁.

- React - createContext and useContext ୧ ‧₊˚ ➰🗞️ ⋆｡°✩

  Moreover, this is the very first time I used React `createContext` and `useContext` in my project. At first, I kept having bugs of context being "undefined" because I misunderstood that there was no need to import context in the components that needed it 😔. Secondly, I didn't realize that I could wrap the `main.jsx` with the context provider. Although my `App.jsx` required access to a couple of contexts, I continued importing context in it while it was wrapped by the same context provider, which of course didn't work as I expected 😔. It was quite frustrating but I didn't give up. I finally figured out the reasons and fixed the bugs after reading React's documentation and other people's examples 💪.

- Styled-Components - Theming ⊹🍵₊ ⊹ 𓍢ִ໋🌷͙֒⊹

  Furthermore, I used [Styled-components Theming](https://styled-components.com/docs/advanced#theming) with React context to manage theme colors based on light or dark mode. As I mentioned above, once I figured out how to set up context providers and use context in my project, Theming became a straightforward approach that I successfully implemented. However, there is one main difference between Theming and React context 🤔. Theming only accepts objects as value (which has to be named "theme"), while React context accepts all types of values. Apparently, React context is more flexible, but I chose to use Theming particularly in this project to avoid manually passing props to styled components, for example, `<StyledH1 ${theme}={theme}>Title</StyledH1>`. Without Theming, I would have had to pass `${theme}={theme}` as a prop to every single styled component in my entire project, resulting in a considerable amount of repetitive work in the end 🤯.

- React Router 6 - Data Router ୧ ‧₊˚ 💻⚙️ ⋆｡°✩

  What's more, I especially utilized React Router v6 data router and its associated functions, including features such as `loader`, `action`, `defer`, `Await`, and `React.Suspense` in this project, to enhance the overall user experience and optimize the website's performance. Loader ensured that fetched data was readily available when a page loaded. Action simplified the handling of forms in React applications. Defer, Await and React.Suspense collectively improved the user experience by providing a fallback user interface while the data was being loaded. This proved to be particularly valuable since I relied on Google services to display my blogs, which may not be available in some regions. To accommodate all visitors, I also provided a backup link for those interested in my blogs.🚀

- Transfer Markdown to HTML and Parse HTML in React App ୧ ‧₊˚ 🌐 🔁 ⋆｡°✩

  Additionally, before I decided to convert Markdown to HTML and parse it for display on the web page, I initially attempted to save Markdown directly in Firestore and retrieve its data for display 💭. Unfortunately, I encountered issues with the Markdown formatting, as it couldn't render correctly. After research, I realized that a better approach would be to save HTML instead 🤔, which, in turn, required using a parser to convert the HTML to React elements.

  When I applied the parser, it did indeed display the content with styles, but it didn't adhere to the CSS styles I had defined for my entire website. To address this, I decided to customize the parsing rules by transforming all HTML elements into styled components 👩🏻‍💻. This customization worked for most of the content. However, I noticed that all anchor links were non-functional.

  Upon investigating the data I had saved in Firestore and inspecting the content in the developer tools 🧐, it became clear that the customized parsing rules had inadvertently removed all the id attributes. To resolve this issue, I made the necessary adjustments by adding `const id = domNode.attribs.id` and ensuring that `id={id}` was included when rendering the elements.🛠👩🏻‍💻

- User Interactions - Blog liking, commenting, and sharing ୧ ‧₊˚ 🤍💬🔗 ⋆｡°✩

  Last but not least, when I was on the verge of completing the initial version of my website, I realized that incorporating interactive elements into the blog section could make the experience much more engaging. Consequently, I introduced features for liking 🤍, commenting 💬, and sharing 🔗. During the course of this development, I encountered a few noteworthy insights.

  Initially, my blog data structure was rather straightforward, with "likes" and "comments" treated as fields within each blog document. This approach seemed logical at first. However, I soon encountered an issue with Firestore's inability to accommodate updates to comments, as it doesn't support `push`ing new values (new comments) to an array 🤔. After delving into some research, I discovered the flexibility of adding subcollections within any document. This revelation led me to reorganize the data, storing "comments" as a subcollection, allowing each comment to have its own set of fields, including `id`, `name`, `text`, and `timestamp`. To know more about this structure, check out my blog [Firestore Data Structure](https://zunldev.com/blogs/firestore-data-structure-7sMKb6jf0Ml5WmSLamZBL).

  Additionally, I decided to create a "likes" subcollection within each blog document to address security concerns related to controlled access for reading and writing. This decision stemmed from an issue I encountered while testing comments on mobile devices. Initially, I attributed the problem to mobile device settings, assuming I couldn't submit forms. However, I soon realized that the issue was tied to permissions, and only an admin had the privilege to like or comment, as these features were initially included as fields within each blog document. I conducted research and adjusted the security rules based on the revised data structure, effectively resolving this access issue 🗝.

  To enable the sharing functionality, I utilized both `navigator.share` and `react-share`. While most modern browsers support `navigator.share`, I also created custom sharing options for browsers lacking this support. My intention was to build as much as possible from scratch. However, certain social platforms posed challenges, with limited developer support and lack of acceptable sharing links. Consequently, I integrated `react-share` to facilitate sharing on such platforms while maintaining a cohesive user experience 🫧.

### Links

- Github URL: [click here](https://github.com/zun-liang/portfolio)
- Live Site URL: [click here](https://zunldev.com/)

## My process

### Built with

- HTML
- CSS
- Javascript
- [React](https://react.dev/)
- [React Router](https://reactrouter.com/en/main)
- [Styled-components](https://styled-components.com/)
- [Firebase](https://firebase.google.com/)
- [Vite](https://vitejs.dev/)
- [FontAwesome](https://fontawesome.com/)
- [React Md Editor](https://uiwjs.github.io/react-md-editor/)
- [React Markdown](https://github.com/remarkjs/react-markdown)
- [Marked](https://marked.js.org/)
- [html-react-parser](https://github.com/remarkablemark/html-react-parser)
- [use-sound](https://github.com/joshwcomeau/use-sound)
- [SVGR](https://react-svgr.com/)
- [NanoID](https://github.com/ai/nanoid)
- [react-share](https://github.com/nygardk/react-share)

### What I learned

- Reading Documentation ୧ ‧₊˚📖👩‍💻 ⋆｡°✩

  Honestly, I preferred tutorial videos over documentation, especially before I fully appreciated the power of reading and understanding documentation. There were two main reasons for this preference. Firstly, English is not my first language, and initially, learning something new and abstract in a second language could be overwhelming. Secondly, as a beginner, there's often a strong desire to accelerate the learning process and showcase what I've learned to others, even when my understanding is limited.

  However, as I became aware of the barriers that were holding me back from delving into documentation, I intentionally slowed down my approach. I started to read documentation bit by bit, taking my time to understand the content. Surprisingly, this method has proven to be more effective for my learning journey. It has allowed me to build a more solid foundation of knowledge and comprehension.

- Git Branch - Merge and Delete ୧ ‧₊˚ 🔀 ⋆｡°✩

  This project is more complicated than the previous ones I've worked on. In such complex projects, using Git intelligently can be very beneficial. In this project, I utilized `git branch <branch name>`, `git checkout <branch name>`, `git merge <branch name>`, `git branch -d <branch name>`, and `git branch -D <branch name>` to experiment with fresh ideas and alternative approaches, ensuring that I can explore these concepts without jeopardizing the well-functioning codebase I've already established. If these new ideas or approaches prove successful, I seamlessly merge them into the "master" branch.

- Environment Variables ୧ ‧₊˚ 🔐🔗 ⋆｡°✩

  In this project, I integrated API services from both Firebase and Open Weather, each requiring a private API key. Committing these keys to a public GitHub repository would expose my accounts to potential security risks. In addressing this concern, I explored a common solution—storing sensitive information in environment variables and configuring Git to ignore the file containing these variables. This way, when I push my local repository to GitHub, I can set up these variables on the remote platform.

  However, during the process of implementing environment variables in my project, I encountered some issues related to Vite. Specifically, when I attempted to use `process.env` directly in Vite, Vite couldn't access environment variables' values.

  After further research, I identified two effective solutions. I could either add a `VITE_` prefix to my environment variables and access them using `import.meta.env`, or I could use `loadEnv` to define and utilize these variables. Both methods proved successful for my project. To learn the details about the two approaches, check out my blog [Save Private API Keys in Environment Variables in Vite](http://zunldev.com/blogs/save-private-api-keys-in-environment-variables-in-vite-qFY1zT7CTbZwwyE9l5ykM).

  The only stumbling block that gave me some trouble was initially placing the `.env` file in the `src` folder instead of the `root` directory. This caused persistent bugs and confusion until I corrected the file location.

### Continued development

- Effective Time Management and Estimation ୧ ‧₊˚ 📅 ⋆｡°✩

  Initially, I didn't have a strict time management strategy in mind for this project. However, as I delved into the development process, I realized the significance of having a well-structured plan. Without proactive planning, it's easy to get sidetracked by appealing yet unimportant features, resulting in wasted time and limited progress.

- Pagination ୧ ‧₊˚ 📄1️⃣ ⋆｡°✩

  At the moment, I have a limited number of blogs listed on the "Blogs" page, making pagination appear unnecessary. However, as my blog collection grows, I will definitely contemplate the implementation of pagination. From what I understand, this feature can be achieved using either React Router or Firebase, and I look forward to incorporating it as the need arises.

- Real-time Updates with onSnapshot ୧ ‧₊˚ 🔄⚡ ⋆｡°✩

  Currently, I retrieve blogs data using getDocs() to gain hands-on experience with Data Router's functionalities, including features like loaders, defer, Await, and React Suspense. However, I've observed that when I click the "delete" button on the "Blogs" page, the page doesn't update in real-time, primarily because it doesn't utilize onSnapshot. In the future, I'm eager to address this and ensure real-time updates for a more responsive user experience.

- Optimizing with useMemo and memo ୧ ‧₊˚ ♻️ ⋆｡°✩

  In the current project, I haven't employed useMemo or memo because I think it is not necessary as some states or props are bound to change rapidly and there are no expensive computations. However, I acknowledge the possibility that I might have overlooked some opportunities to utilize them in my project. I'm excited about gaining more experience in using them in the future.

- Post-Login Redirection ୧ ‧₊˚ 🔀 ⋆｡°✩

  In the current version of my website, once a user logs in successfully, a confirmation page is displayed without automatic redirection. While in a small-scale application, this might not appear crucial or inconvenient, particularly when access is limited to just me. However, improving this functionality holds the potential for a more seamless user experience. Redirection after login is a commonly expected feature in most websites, and I'm excited about implementing it to practice and enhance the overall user experience.

- Real-time User Profile Updates ୧ ‧₊˚ ⚡ ⋆｡°✩

  At present, when I make changes to the user's profile, it requires an additional page refresh to display the updated username and photo. My goal for the new version of the website is to seamlessly reflect these changes in real-time.

- Exploring Color Theory ୧ ‧₊˚ 🎨 ⋆｡°✩

  One of the primary challenges I encountered while working on this project was the selection of colors for both light and dark modes. Overall, I'm satisfied with the colors I ultimately chose. However, I am fully aware that there is a lot of knowledge to be gained in the realm of color theory, especially in the context of creating visually appealing, user-friendly, and accessible websites and applications.

### Helpful Resources

#### APIs

- [Open Weather API](https://openweathermap.org/)

To get local weather and temperature depending on visitor's' location.

- [Tweet Button](https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview)
- [Facebook Share Button](https://developers.facebook.com/docs/plugins/share-button/)
- [Reddit Share Button HTML](https://www.reddit.com/r/webdev/comments/os7sw9/reddit_share_button_html/)
- [Telegram Sharing Button](https://core.telegram.org/widgets/share)

#### CSS

- [text-underline-offset](https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset)
- [writing-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode)
- [text-orientation](https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation)
- [CSS Dot Patter/Grid Background](https://codepen.io/edmundojr/pen/xOYJGw)
- [-webkit-text-stroke](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-stroke)
- [object-position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position)
- [::-webkit-scrollbar](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar)
- [CSS scrollbars styling](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scrollbars_styling)
- [How can I style horizontal scrollbar by CSS?](https://stackoverflow.com/questions/44334106/how-can-i-style-horizontal-scrollbar-by-css)
- [text-decoration-skip-ink](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-skip-ink)
- [transform-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)
- [Shadow Palette Generator](https://www.joshwcomeau.com/shadow-palette/)

#### Designs

##### Colors

- [Material Design Dark Theme](https://m2.material.io/design/color/dark-theme.html)
- [Material Design Color Palettes](https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors)
- [ColorSpace](https://mycolor.space/)
- [Colormind](http://colormind.io/)
- [Canva Color Wheel](https://www.canva.com/colors/color-wheel/)
- [Accessible color palette generator](https://venngage.com/tools/accessible-color-palette-generator)
- [WebAIM](https://webaim.org/resources/contrastchecker/)
- [Coolors](https://coolors.co/)
- [Huemint](https://huemint.com/website-1/)

##### Emojis

- [COOLTEXT](https://cooltext.top/)
- [Emoji Combos](https://emojicombos.com/)

##### Favicons

- [favicon.io](https://favicon.io/favicon-generator/)

##### Icons

- [SVG REPO](https://www.svgrepo.com/)
- [icons8](https://icons8.com/icons)
- [iconmonstr](https://iconmonstr.com/)
- [Font Awesome Icons](https://fontawesomeicons.com/svg/icons)

##### Illustrations

- [いらすとや](https://www.irasutoya.com/)

##### Pixel

- [Pixel Me](https://pixel-me.tokyo/en/)
- [Pixel Speech Bubble](https://pixelspeechbubble.com/)

##### Sound

- [Pixabay](https://pixabay.com/)
- [AudioMass](https://audiomass.co/)

#### HTML

- [HTML ESCAPE CHARACTERS: COMPLETE LIST OF HTML ENTITIES](https://mateam.net/html-escape-characters/)

#### JavaScript

- [Date.prototype.toDateString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString)
- [Date.prototype.toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)
- [Intl.DateTimeFormat() constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)
- [encodeURIComponent()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)
- [Chrome 80 shows timestamp "24:xx" instead of "00:00".](https://support.google.com/chrome/thread/29828561/chrome-80-shows-timestamp-24-xx-instead-of-00-00?hl=en)

  While in the development process, I encountered an issue specific to Chrome on macOS. The problem was that when displaying the time for 12:00 AM, it appeared as 24 instead of 00. I managed to resolve this issue by using `hourCycle: 23h` instead of `hour12: false`.

#### Markdown

- [react-md-editor](https://uiwjs.github.io/react-md-editor/)

  I first tried rich text editor (TinyMCE) but later switched to Markdown editor because firstly rich text editor's data can not be stored formatted in Firebase as I expected. Secondly, I am more familiar with Markdown so far. However, I will be more than willing to learn more about rich text editors and utilize them in my future projects.

- [How can I set the placeholder value? #154](https://github.com/uiwjs/react-md-editor/issues/154)

- [react-markdown](https://github.com/remarkjs/react-markdown)

  To display Markdown in my website.

- [Marked](https://marked.js.org/)
- [html-react-parser](https://github.com/remarkablemark/html-react-parser)
- [remark-gfm](https://github.com/remarkjs/remark-gfm)

  Didn't use in this website yet, but seems helpful to display footnotes, strike through, tables, task lists and URLs directly.

- [Emoji list markers](https://talk.commonmark.org/t/emoji-list-markers/3560)

#### Netlify

- [How to Deploy a React Router-Based Application to Netlify](https://www.freecodecamp.org/news/how-to-deploy-react-router-based-app-to-netlify/)

#### React

- [use-sound](https://github.com/joshwcomeau/use-sound)

  This is a very helpful React custom hook created by Josh Comeau that makes it very easy to work with sound.

- [react-share](https://github.com/nygardk/react-share)
- [Announcing “use-sound”, a React Hook for Sound Effects](https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/)
- [useContext](https://react.dev/reference/react/useContext)
- [Hide Firebase API Keys in ReactJS Project using Environment Variables](https://blogs.ayushdev.com/hide-firebase-api-keys-in-reactjs-project-using-environment-variables)
- [A Pitfall I Almost Fell Into… Learn how to save your API KEYS](https://medium.com/@oadaramola/a-pitfall-i-almost-fell-into-d1d3461b2fb8)
- [useRef](https://react.dev/reference/react/useRef#referencing-a-value-with-a-ref)

  I came across a bug in my project where, if I clicked on in-page links and then chose to navigate "back to blogs" or simply used the browser's back button, I was unexpectedly directed to "/blogsundefined" instead of the intended "/blogs" route. It turned out that this issue stemmed from my desire to have users return to the previously selected category filter, and I was checking the location state to achieve this. However, after clicking in-page links, the location state became undefined.

  My initial approach involved using useState to preserve this information, but it left me with an unused setState and felt like an unnecessary workaround. Upon further exploration, I realized that I could effectively handle this scenario using useRef, which provided the desired solution without the complications. This adjustment resolved the bug, ensuring the correct URL redirection and retaining the desired category filter selection.

#### React Router

- [React Router Version 6 Tutorial – How to Set Up Router and Route to Other Components](https://www.freecodecamp.org/news/how-to-use-react-router-version-6/)
- [Scroll Restoration v5](https://v5.reactrouter.com/web/guides/scroll-restoration)
- [ScrollRestoration v6](https://reactrouter.com/en/main/components/scroll-restoration)

  I encountered challenges while implementing a "back to top" button, and two important factors came to my attention during the process.

  Firstly, I discovered that my scrollable container was the body element, as indicated by Firefox's developer tools, rather than the browser window itself. This distinction was crucial for tailoring the button's functionality.

  Secondly, I observed that my "back to top" button did not reset the scroll position to the new page's beginning; instead, it retained the old page's scroll position. To address this issue, I explored the use of scrollRestoration provided by React Router, which was beneficial for managing scroll behavior during navigation. However, it's worth noting that the scrollRestoration feature primarily operates at the window level, which didn't fully address my needs.

  To resolve this, I implemented a workaround by refreshing the "scroll to top" function based on the current pathname using useLocation. This approach allowed me to regain control over the scroll position and ensure that the page starts from the top when navigating to a new location.

- [<ScrollRestoration> with scrolling container other than window #9495](https://github.com/remix-run/react-router/discussions/9495)
- [index.tsx:24 Uncaught Error: useLocation() may be used only in the context of a <Router> component](https://stackoverflow.com/questions/71979809/index-tsx24-uncaught-error-uselocation-may-be-used-only-in-the-context-of-a)

  I encountered the same error and was considering where to put my scroll component for the best practice. This answer inspired me to add it to the layout route and enable the utilization of useLocation.

#### Styled-Components

- [Referring to other components](https://styled-components.com/docs/advanced#referring-to-other-components)
- [Theming](https://styled-components.com/docs/advanced#theming)

#### Tools

- [How to Import SVGs in a React and Vite app](https://www.freecodecamp.org/news/how-to-import-svgs-in-react-and-vite/#3importingsvgsasreactcomponents)

  I usually use SVGR to transform SVGs into React components to work with.

- [Formspree](https://formspree.io/)

  To create my contact form.

- [LT Browser](https://www.lambdatest.com/lt-browser)

  To test responsive designs on different devices locally.

- [Find scrollable elements](https://phuoc.ng/collection/tips/find-scrollable-elements/)

  To find which elements are scrollable, you can check the Firefox inspector.

#### Vite

- [How to use process.env in Vite](https://dev.to/whchi/how-to-use-processenv-in-vite-ho9)
- [Uncaught ReferenceError: process is not defined](https://dev.to/boostup/uncaught-referenceerror-process-is-not-defined-12kg)
- [How to load environment variables from .env file using Vite](https://stackoverflow.com/questions/70709987/how-to-load-environment-variables-from-env-file-using-vite)
- [Env Variables and Modes](https://vitejs.dev/guide/env-and-mode.html)

#### Web APIs

- [location: reload() method](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload)
- [Geolocation: getCurrentPosition() method](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition)
- [Document: title property](https://developer.mozilla.org/en-US/docs/Web/API/Document/title)
- [Window: location property](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)
- [Element: scrollTo() method](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo)
- [Window: location property](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)
- [audio: The Embed Audio element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
- [Using files from web applications](https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications)
- [Navigator: share() method](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)

## References

- Dark mode colors are inspired by @hidie6136 from [小红书](https://www.xiaohongshu.com/explore), and [Material Design Dark Theme](https://m2.material.io/design/color/dark-theme.html)
- Both light mode and dark mode box shadow are generated by [Shadow Palette Generator](https://www.joshwcomeau.com/shadow-palette/).
- Dark mode grid background is inspired by [Edmundo Santos CodePen](https://codepen.io/edmundojr/pen/xOYJGw)
- SVGs are from [Font Awesome](https://fontawesome.com/), [SVG REPO](https://www.svgrepo.com/), and [Font Awesome Icons](https://fontawesomeicons.com/)
- Favicons are generated by [favicon.io](https://favicon.io/favicon-generator/) and [Real Favicon Generator](https://realfavicongenerator.net/)
- Emojis are from [COOLTEXT](https://cooltext.top/) and [Emoji Combos](https://emojicombos.com/)
- Profile picture is made by [Pixel Me](https://pixel-me.tokyo/en/)
- Speech bubbles are made by [Pixel Speech Bubble](https://pixelspeechbubble.com/)
- Picture ojigi kuma, picture party boy girl, and picture girl drinking coffee are from [いらすとや](https://www.irasutoya.com/)
- Sound effects are from [Pixabay](https://pixabay.com/) and edited by [AudioMass](https://audiomass.co/)
- Created gif by [EZGIF.COM](https://ezgif.com/)

## Author

- Website - [Zun Liang](https://zunldev.com/)
- GitHub - [@zun-liang](https://github.com/zun-liang)
- Frontend Mentor - [@zun-liang](https://www.frontendmentor.io/profile/zun-liang)
- freeCodeCamp - [@zun-liang](https://www.freecodecamp.org/zun-liang)
