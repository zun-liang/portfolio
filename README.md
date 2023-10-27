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

I'm super excited to introduce my portfolio v1.0 🥳, a project that's been a dream come true for me 💫! I've always longed for my own website, but it wasn't until I became comfortable using React router that I felt ready to build this 💪. Personally, I've always favored a traditional multipage website for a portfolio. Beyond being a significant personal milestone, this website has proven to be an excellent project for practicing my frontend skills. Not only have I sharpened my existing skills, but I've also achieved and learned a great deal throughout this exciting process ✨!

This website contains five sections:

- Home Page 🏠

  The landing page, equipped with a title, menu, light/dark mode switch, sound toggle, music control, links to my social accounts, real-time weather and temperature updates, and the current time.

- About me 👩‍💻

  On this page, you'll learn about my learning journey, achievements, skills, and future plans.

- Projects 🛠️

  This page showcases the best projects I've worked on, which are updated regularly. Visitors can click on each project to dive into it backstory and details.

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

- Professional connection
- Personal connection

The primary purpose behind creating this portfolio website is to establish a unique online space where I can share my ideas 💡, communicate my skills 💻, and connect with other developers 👩‍💻👨‍💻. Having observed numerous impressive portfolio websites out there, it's an immense source of pride and satisfaction to finally have one of my own 🚀.

Moreover, I envision this website as a reflection of my personality and preferences 🌈. It's not just a professional showcase; it's a personal space where visitors can get to know the person behind the work 👩‍💻. Through this platform, I aim to inspire and foster connections with those who share my interests and passions 💖.

### Spotlight

<ul>
<li style="list-style-type: '✨'">&nbsp;Firebase - Manage Data
<li style="list-style-type: '✨'">&nbsp;User Authentication - "Secret" Blog Management
<li style="list-style-type: '✨'">&nbsp;React - createContext and useContext
<li style="list-style-type: '✨'">&nbsp;Styled-Components - Theming
<li style="list-style-type: '✨'">&nbsp;React Router 6 - Data Router
<li style="list-style-type: '✨'">&nbsp;Transfer Markdown to HTML and Parse HTML in React App
</ul>

At the time I started to build this website, I didn't have the knowledge or experience to work with databases and backend systems. However, I soon discovered that Firebase is a fantastic tool that I could relatively easily grasp and utilize in my project 🌟. I utilized Firestore's `getDoc` and `getDocs` to get projects and blogs.

During the process of building this website, I also embarked on my first experience with authentication. While it may not be immediately evident to regular visitors, I utilized Firestore's `auth`, `onAuthStateChanged`, `signIn`, `signOut`, `setDoc`, `deleteDoc`, `updateDoc` to integrate a simple blog management system into this project 💫. This system allows me to exclusivly log in as admin and create, update, and edit blogs, all while securely saving them to Firebase.

Moreover, this is the very first time I used React `createContext` and `useContext` in my project. At first, I kept having bugs of context being "undefined" because I misunderstood that there was no need to import context in the components that needed it 😔. Secondly, I didn't realize that I could wrap the `main.jsx` with the context provider. Although my `App.jsx` required access to a couple of contexts, I continued importing context in it while it was wrapped by the same context provider, which of course didn't work as I expected 😔. It was quite frustrating but I didn't give up. I finally figured out the reasons and fixed the bugs after reading React's documentation and other people's examples 💪.

Furthermore, I used [Styled-componnets Theming](https://styled-components.com/docs/advanced#theming) with React context to manage theme colors based on light or dark mode. As I mentioned above, once I figured out how to set up context providers and use context in my project, Theming became a straightforward approach that I successfully implemented. However, there is one main differece between Theming and React context 🤔. Theming only accepts objects as value (which has to be named "theme"), while React context accepts all types of values. Apparently, React context is more flexible, but I chose to use Theming particularly in this project to avoid manually passing props to styled components, for example, `<StyledH1 ${theme}={theme}>Title</StyledH1>`. Without Theming, I would have had to pass `${theme}={theme}` as a prop to every single styled component in my entire project, resulting in a considerable amount of repetitive work in the end 🤯.

What's more, I especially utilized React Router v6 data router and its associated functions, including features such as loader, action, and deferred data processing in this project, to enhance the overall user experience and optimize the website's performance. Loaders can make sure fetched data is ready when page loads. Action makes easier to work with forms in React apps. Derferred data makes a better user experience by ...❓

Last but not least, before I decided to convert Markdown to HTML and parse it for display on the web page, I initially attempted to save Markdown directly in Firestore and retrieve its data for display 💭. Unfortunately, I encountered issues with the Markdown formatting, as it couldn't render correctly. After research, I realized that a better approach would be to save HTML instead 🤔, which, in turn, required using a parser to convert the HTML to React elements.

When I applied the parser, it did indeed display the content with styles, but it didn't adhere to the CSS styles I had defined for my entire website. To address this, I decided to customize the parsing rules by transforming all HTML elements into styled components 👩🏻‍💻. This customization worked for most of the content. However, I noticed that all anchor links were non-functional.

Upon investigating the data I had saved in Firestore and inspecting the content in the developer tools 🧐, it became clear that the customized parsing rules had inadvertently removed all the id attributes. To resolve this issue, I made the necessary adjustments by adding `const id = domNode.attribs.id` and ensuring that `id={id}` was included when rendering the elements.

### Links

- Github URL: [click here](https://github.com/zun-liang/zun-liang.github.io)
- Live Site URL: [click here](https://zun-liang.github.io/)

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

### What I learned

- Reading documentation

  Honestly, I preferred tutorial videos over documentation, especially before I fully appreciated the power of reading and understanding documentation. There were two main reasons for this preference. Firstly, English is not my first language, and initially, learning something new and abstract in a second language could be overwhelming 🤯. Secondly, as a beginner, there's often a strong desire to accelerate the learning process and showcase what I've learned to others, even when my understanding is limited.

  However, as I became aware of the barriers that were holding me back from delving into documentation, I intentionally slowed down my approach. I started to read documentation bit by bit, taking my time to understand the content 📝. Surprisingly, this method has proven to be more effective for my learning journey. It has allowed me to build a more solid foundation of knowledge and comprehension 🎯.

- Git branch - merge and delete

  This project is more complicated than the previous ones I've workded on. In such a project, using git smartly is very beneficial. I used git branch to work on some new features, such as contexts.❓

- environment varaibles

  If you are making a vite/react app and want to save some sensitive information in environment varables, it is possible that you will run into an issue using `process.env` directly.

  Both add `VITE_` to env varaibles while use `import.meta.env` and use `loadEnv` to define work for me.
  The only thing trapped me was I didn't put .env in root but src. Also, don't forget to add .env in .gitignore.

  Option 1: use `loadEnv` to define:

  In my .env, I declared:

  ```
    REACT_APP_API_KEY = my_api_key
    REACT_APP_AUTH_DOMAIN = _my_auth_domain
    REACT_APP_PROJECT_ID = my_project_id
    REACT_APP_STORAGE_BUCKET = my_storage_bucket
    REACT_APP_MESSAGING_SENDER_ID = my_messaging_sender_id
    REACT_APP_APP_ID = _my_app_id
  ```

  In my firebase.js, I declared:

  ```
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
  };
  ```

  In my vite.config.js, I set up like this article said:
  [Uncaught ReferenceError: process is not defined](https://dev.to/boostup/uncaught-referenceerror-process-is-not-defined-12kg)

  ```
  import react from "@vitejs/plugin-react";
  import { defineConfig, loadEnv } from "vite";
  import svgr from "vite-plugin-svgr";

  //vitejs.dev/config/
  export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    return {
      define: {
        "process.env.REACT_APP_API_KEY": JSON.stringify(env.REACT_APP_API_KEY),
        "process.env.REACT_APP_AUTH_DOMAIN": JSON.stringify(
          env.REACT_APP_AUTH_DOMAIN
        ),
        "process.env.REACT_APP_PROJECT_ID": JSON.stringify(
          env.REACT_APP_PROJECT_ID
        ),
        "process.env.REACT_APP_STORAGE_BUCKET": JSON.stringify(
          env.REACT_APP_STORAGE_BUCKET
        ),
        "process.env.REACT_APP_MESSAGING_SENDER_ID": JSON.stringify(
          env.REACT_APP_MESSAGING_SENDER_ID
        ),
        "process.env.REACT_APP_APP_ID": JSON.stringify(env.REACT_APP_APP_ID),
      },
      plugins: [svgr(), react()],
    };
  });

  ```

  Option 2: use `VITE_` prefix and `import_meta.env`

  In my .env, I declared:

  ```
    VITE_REACT_APP_API_KEY = my_api_key ...
  ```

  In my firebase.js, I declared:

  ```
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_APP_API_KEY, ...
  };
  ```

  In vite.config.js,

  ```
  import react from "@vitejs/plugin-react";
  import { defineConfig } from "vite";
  import svgr from "vite-plugin-svgr";

  //vitejs.dev/config/
  export default defineConfig(() => {
  return {
    plugins: [svgr(), react()],
  };
  });

  ```

- ❓

### Continued development

- Time management and estimate

I didn't intend to control time I spent on this project but during the process, I found it is crutial for developers to have a plan. Without planning ahead, it is so easy to get caught by some fancy features which may not be so crutial at that point and spend more time without proceeding.

- ❓

### Helpful Resources

#### Designs

- [favicon.io](https://favicon.io/favicon-generator/)
- [COOLTEXT](https://cooltext.top/)
- [Emoji Combos](https://emojicombos.com/)
- [Pixel Me](https://pixel-me.tokyo/en/)
- [Pixel Speech Bubble](https://pixelspeechbubble.com/)
- [いらすとや](https://www.irasutoya.com/)
- [ColorSpace](https://mycolor.space/)
- [SVG REPO](https://www.svgrepo.com/)
- [icons8](https://icons8.com/icons)
- [Font Awesome Icons](https://fontawesomeicons.com/svg/icons)
- [Pixabay](https://pixabay.com/)
- [AudioMass](https://audiomass.co/)
- [Material Design Dark Theme](https://m2.material.io/design/color/dark-theme.html)

#### HTML

- [Geolocation: getCurrentPosition() method](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition)
- [Document: title property](https://developer.mozilla.org/en-US/docs/Web/API/Document/title)
- [Window: location property](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)
- [Element: scrollTo() method](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo)
- [Window: location property](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)
- [audio: The Embed Audio element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)

#### CSS

- [text-underline-offset](https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset)
- [writing-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode)
- [text-orientation](https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation)
- [CSS Dot Patter/Grid Background](https://codepen.io/edmundojr/pen/xOYJGw)
- [-webkit-text-stroke](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-stroke)
- [object-position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position)
- [::-webkit-scrollbar](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar)
- [CSS scrollbars styling](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scrollbars_styling)

#### JavaScript

- [Date.prototype.toDateString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString)
- [Date.prototype.toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)
- [Intl.DateTimeFormat() constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)
- [encodeURIComponent()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)
- [Chrome 80 shows timestamp "24:xx" instead of "00:00".](https://support.google.com/chrome/thread/29828561/chrome-80-shows-timestamp-24-xx-instead-of-00-00?hl=en)

During development, I found that only on chrome mac shows 24 instead of 00, fixed by using hourCycle: 23h instead of hour12: false. ❓

#### React

- [use-sound](https://github.com/joshwcomeau/use-sound)
  ❓
- [Announcing “use-sound”, a React Hook for Sound Effects](https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/)
- [useContext](https://react.dev/reference/react/useContext)
- [Hide Firebase API Keys in ReactJS Project using Environment Variables](https://blogs.ayushdev.com/hide-firebase-api-keys-in-reactjs-project-using-environment-variables)
- [A Pitfall I Almost Fell Into… Learn how to save your API KEYS](https://medium.com/@oadaramola/a-pitfall-i-almost-fell-into-d1d3461b2fb8)

#### React Router

- [React Router Version 6 Tutorial – How to Set Up Router and Route to Other Components](https://www.freecodecamp.org/news/how-to-use-react-router-version-6/)
- [Scroll Restoration v5](https://v5.reactrouter.com/web/guides/scroll-restoration)
- [ScrollRestoration v6](https://reactrouter.com/en/main/components/scroll-restoration)

I was having difficulty creating a "back to top" button and I found a couple things to consider. First, I learned that my scrollable container is not window but body in this case according to Firefox dev tools. Second, my scroll to top button doesn't help to load new page's begining but the position of old page where I was at, then I found scrollRestoration from react router which is very helpful but also "remembers" window.location. ScrollRestoration only works on window level. not working here...

- [<ScrollRestoration> with scrolling container other than window #9495](https://github.com/remix-run/react-router/discussions/9495)
- [index.tsx:24 Uncaught Error: useLocation() may be used only in the context of a <Router> component](https://stackoverflow.com/questions/71979809/index-tsx24-uncaught-error-uselocation-may-be-used-only-in-the-context-of-a)

I had the same error and was thinking where to put my scroll component for the best. This answer inspired me to add it in layout route and enable to utilize useLocation.

#### Styled-Components

- [Referring to other components](https://styled-components.com/docs/advanced#referring-to-other-components)
- [Theming](https://styled-components.com/docs/advanced#theming)

#### Vite

- [How to use process.env in Vite](https://dev.to/whchi/how-to-use-processenv-in-vite-ho9)
- [Uncaught ReferenceError: process is not defined](https://dev.to/boostup/uncaught-referenceerror-process-is-not-defined-12kg)
- [How to load environment variables from .env file using Vite](https://stackoverflow.com/questions/70709987/how-to-load-environment-variables-from-env-file-using-vite)
- [Env Variables and Modes](https://vitejs.dev/guide/env-and-mode.html)

#### APIs

- [Open Weather API](https://openweathermap.org/)

To get local weather and temperature depending on visitor's' location

#### Markdown

- [react-md-editor](https://uiwjs.github.io/react-md-editor/)

I first tried rich text editor (TinyMCE) but later switched to Markdown editor because firstly rich text editor's data can not be stored formatted in Firebase as I expected. Secondly, I am more familiar with Markdown so far. But I will be more than willing to learn more about rich text editor and utilize it in my future projects.

- [How can I set the placeholder value? #154](https://github.com/uiwjs/react-md-editor/issues/154)

- [react-markdown](https://github.com/remarkjs/react-markdown)

To display markdown in my website

- [Marked](https://marked.js.org/)
- [html-react-parser](https://github.com/remarkablemark/html-react-parser)
- [remark-gfm](https://github.com/remarkjs/remark-gfm)

Didn't use in this website yet, but seems helpful to display footnotes, strikethrough, tables, tasklists and URLs directly

- [Emoji list markers](https://talk.commonmark.org/t/emoji-list-markers/3560)

#### Tools

- [How to Import SVGs in a React and Vite app](https://www.freecodecamp.org/news/how-to-import-svgs-in-react-and-vite/#3importingsvgsasreactcomponents)

I usually use SVGR to transform svg into React component to work with.

- [Formspree](https://formspree.io/)

To create my contact form

- [LT Browser](https://www.lambdatest.com/lt-browser)

To test responsive designs on different devices locally

- [Find scrollable elements](https://phuoc.ng/collection/tips/find-scrollable-elements/)

To find which elements are scrollable, you can check Firefox inspector

## References

- Dark mode colors are inspired by @hidie6136 from [小红书](https://www.xiaohongshu.com/explore), [ピノキオピー](https://pinocchiop.com/) and [Material Design Dark Theme](https://m2.material.io/design/color/dark-theme.html)
- Dark mode grid background is inspired by [Edmundo Santos CodePen](https://codepen.io/edmundojr/pen/xOYJGw)
- Svgs are from [Font Awesome](https://fontawesome.com/), [SVG REPO](https://www.svgrepo.com/), and [Font Awesome Icons](https://fontawesomeicons.com/)
- Favicons are created using [favicon.io](https://favicon.io/favicon-generator/)
- Emojis are from [COOLTEXT](https://cooltext.top/) and [Emoji Combos](https://emojicombos.com/)
- Profile picture is made by [Pixel Me](https://pixel-me.tokyo/en/)
- Speech bubbles are made by [Pixel Speech Bubble](https://pixelspeechbubble.com/)
- Picture ojigi kuma and picture party boy girl are from [いらすとや](https://www.irasutoya.com/)
- Sound effects are from [Pixabay](https://pixabay.com/) and edited by [AudioMass](https://audiomass.co/)

## Author

- Website - [Zun Liang](https://zun-liang.github.io/)
- Github - [@zun-liang](https://github.com/zun-liang)
- Frontend Mentor - [@zun-liang](https://www.frontendmentor.io/profile/zun-liang)
- freeCodeCamp - [@zun-liang](https://www.freecodecamp.org/zun-liang)
