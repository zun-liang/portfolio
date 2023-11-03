export const projects = [
  {
    id: "portfolio",
    name: "Secret Blog Management System in Portfolio",
    period: "November 2023",
    description:
      "A hidden blog management system built with React, React Router, Markdown, and Firebase.",
    codeURL: "https://github.com/zun-liang/zun-liang.github.io",
    femURL: null,
    liveURL: "https://zun-liang.github.io/",
    srcLight:
      "../src/assets/images/screenshots/portfolio/screenshot-desktop-light.png",
    srcDark:
      "../src/assets/images/screenshots/portfolio/screenshot-desktop-dark.png",
    introduction: [
      {
        id: "intro1",
        text: 'This is the "secret" blog management system in my portfolio website. Visitors can read my blogs in my website but only I (the admin) have access to the management system, that is why it is called "secret".',
      },
    ],
    functions: [
      {
        id: "func1",
        text: "Log in and log out the management system",
      },
      {
        id: "func2",
        text: "Retrieve drafts and save drafts to Firestore",
      },
      {
        id: "func3",
        text: "Update user name and profile photo locally",
      },
      { id: "func4", text: "Create and edit blogs in Markdown" },
      { id: "func5", text: "Delete or post blogs supported" },
      { id: "func6", text: "Tag blogs" },
    ],
    tools: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "React Router",
      "Styled-Components",
      "Firebase",
      "Vite",
      "React Md Editor",
      "React Markdown",
      "Marked",
      "html-react-parser",
      "use-sound",
      "SVGR",
      "NanoID",
    ],
    purpose: [
      {
        id: "pur1",
        text: "Before creating this blog management system, I was considering using other platforms to save my blogs. Then I realized if I use other platforms, which means that I can only put a link for my blogs page. Visitors will be directed to another website. I am not saying this is not good, but it does look a little inconsistent. Plus, as a front end developer, it feels like cheating in my opinion. I know there are a lot of discussions about whether developers should spend a lot of time building a portfolio website, but I personally found it is a good idea, especially because I regard it as an excellent opportunity to practice my existing skills and learn more. ",
      },
      {
        id: "pur2",
        text: "Moreover, I envision this website as a reflection of my personality and preferences 🌈. It's not just a professional showcase; it's a personal space where visitors can get to know the person behind the work 👩‍💻. A built in blog management system gives me more flexibility to personalize my blogs💖.",
      },
    ],
    spotlight: [
      {
        id: "spot1",
        title: "Firebase - Manage Data⋆˙⟡",
        text: 'At the time I started to build this website, I didn\'t have the knowledge or experience to work with databases and backend systems. However, I soon discovered that Firebase is a fantastic tool that I could relatively easily grasp and utilize in my project 🌟. I utilized Firestore\'s "getDoc" and "getDocs" to get projects and blogs.',
      },
      {
        id: "spot2",
        title: "User Authentication - 'Secret' Blog Management⋆˙⟡",
        text: 'During the process of building this website, I also embarked on my first experience with authentication. While it may not be immediately evident to regular visitors, I utilized Firestore\'s "auth", "onAuthStateChanged", "signIn", "signOut", "setDoc", "deleteDoc", "updateDoc" to integrate a simple blog management system into this project 💫. This system allows me to exclusively log in as admin and create, update, and edit blogs, all while securely saving them to Firebase.',
      },
      {
        id: "spot3",
        title: "React - createContext and useContext⋆˙⟡",
        text: 'Moreover, this is the very first time I used React "createContext" and "useContext" in my project. At first, I kept having bugs of context being "undefined" because I misunderstood that there was no need to import context in the components that needed it 😔. Secondly, I didn\'t realize that I could wrap the "main.jsx" with the context provider. Although my "App.jsx" required access to a couple of contexts, I continued importing context in it while it was wrapped by the same context provider, which of course didn\'t work as I expected 😔. It was quite frustrating but I didn\'t give up. I finally figured out the reasons and fixed the bugs after reading React\'s documentation and other people\'s examples 💪.',
      },
      {
        id: "spot4",
        title: "Styled-Components - Theming⋆˙⟡",
        text: 'Furthermore, I used [Styled-components Theming](https://styled-components.com/docs/advanced#theming) with React context to manage theme colors based on light or dark mode. As I mentioned above, once I figured out how to set up context providers and use context in my project, Theming became a straightforward approach that I successfully implemented. However, there is one main difference between Theming and React context 🤔. Theming only accepts objects as value (which has to be named "theme"), while React context accepts all types of values. Apparently, React context is more flexible, but I chose to use Theming particularly in this project to avoid manually passing props to styled components, for example, "<StyledH1 ${theme}={theme}>Title</StyledH1>". Without Theming, I would have had to pass "${theme}={theme}" as a prop to every single styled component in my entire project, resulting in a considerable amount of repetitive work in the end 🤯.',
      },
      {
        id: "spot5",
        title: "React Router 6 - Data Router⋆˙⟡",
        text: 'What\'s more, I especially utilized React Router v6 data router and its associated functions, including features such as "loader", "action", "defer", "Await", and "React.Suspense" in this project, to enhance the overall user experience and optimize the website\'s performance. Loader makes sure fetched data is ready when page loads. Action makes easier to work with forms in React apps. Defer, Await and React.Suspense data create a better user experience by providing a fallback user interface before data is ready to load. This is especially helpful since I am using Google services to display my blogs but it is not available in some areas. I provided a backup link for visitors who are interested in my blogs.',
      },
      {
        id: "spot6",
        title: "Transfer Markdown to HTML and Parse HTML in React App⋆˙⟡",
        text: "Last but not least, before I decided to convert Markdown to HTML and parse it for display on the web page, I initially attempted to save Markdown directly in Firestore and retrieve its data for display 💭. Unfortunately, I encountered issues with the Markdown formatting, as it couldn't render correctly. After research, I realized that a better approach would be to save HTML instead 🤔, which, in turn, required using a parser to convert the HTML to React elements.",
      },
      {
        id: "spot7",
        text: "When I applied the parser, it did indeed display the content with styles, but it didn't adhere to the CSS styles I had defined for my entire website. To address this, I decided to customize the parsing rules by transforming all HTML elements into styled components 👩🏻‍💻. This customization worked for most of the content. However, I noticed that all anchor links were non-functional.",
      },
      {
        id: "spot8",
        text: 'Upon investigating the data I had saved in Firestore and inspecting the content in the developer tools 🧐, it became clear that the customized parsing rules had inadvertently removed all the id attributes. To resolve this issue, I made the necessary adjustments by adding "const id = domNode.attribs.id" and ensuring that "id={id}" was included when rendering the elements.',
      },
    ],
    learned: [
      {
        id: "learn1",
        title: "Reading documentation⋆˙⟡",
        text: "Honestly, I preferred tutorial videos over documentation, especially before I fully appreciated the power of reading and understanding documentation. There were two main reasons for this preference. Firstly, English is not my first language, and initially, learning something new and abstract in a second language could be overwhelming 🤯. Secondly, as a beginner, there's often a strong desire to accelerate the learning process and showcase what I've learned to others, even when my understanding is limited.",
      },
      {
        id: "learn2",
        title: "Git branch⋆˙⟡",
        text: "This project is more complicated than the previous ones I've worked on. In such a project, using git smartly is very beneficial. I used git branch to work on some new features, such as contexts.❓",
      },
      {
        id: "learn3",
        title: "Environment variables⋆˙⟡",
        text: 'If you are making a vite/react app and want to save some sensitive information in environment variables, it is possible that you will run into an issue using "process.env" directly.',
      },
    ],
  },
  {
    id: "todo-app",
    name: "Todo App",
    period: "August 2023",
    description:
      "A simple todo app built with React and Styled-Components for managing tasks.",
    codeURL: "https://github.com/zun-liang/todo-app",
    femURL: "https://www.frontendmentor.io/solutions/todo-app-_MCCMFmZnq",
    liveURL: "https://zun-liang.github.io/todo-app/",
    srcLight:
      "../src/assets/images/screenshots/todo-app/screenshot-desktop-light.png",
    srcDark:
      "../src/assets/images/screenshots/todo-app/screenshot-desktop-dark.png",
    introduction: [
      {
        id: "intro1",
        text: "This solo project is the solution to Frontend Mentor Challenge Todo App. Frontend Mentor provides app designs and I create the app from scratch to make it match its designs as much as possible.",
      },
    ],
    functions: [
      {
        id: "func1",
        text: "View the optimal layout for the app depending on their device's screen size",
      },
      {
        id: "func2",
        text: "See hover states for all interactive elements on the page",
      },
      { id: "func3", text: "Add new todos to the list" },
      { id: "func4", text: "Mark todos as complete" },
      { id: "func5", text: "Delete todos from the list" },
      { id: "func6", text: "Filter by all/active/complete todos" },
      { id: "func7", text: "Clear all completed todos" },
      { id: "func8", text: "Toggle light and dark mode" },
      { id: "func9", text: "Drag and drop to reorder items on the list" },
    ],
    tools: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Styled-Components",
      "Vite",
      "NanoID",
      "React Beautiful DND",
      "@hello-pangea/dnd",
    ],
    purpose: [
      {
        id: "pur1",
        text: "My main purpose of doing this project is to practice working with localStorage. At the time of doing this project, I haven't learned how to store data except for saving them in localStorage or sessionStorage.",
      },
      {
        id: "pur2",
        text: "What's more, when I was looking for next challenges, this challenge's bonus feature \"drag and drop\" caught my eyes. I think it must be a very interesting feature to work on. It turned out to be true.",
      },
    ],

    spotlight: [
      {
        id: "spot1",
        title: "DND⋆˙⟡",
        text: 'This is the first time I worked on a project requiring for drag and drop feature. After some research, I found React Beautiful DND is a solid candidate for this challenge. However, after I implemented DND in my project, my project keeps reporting an issue "Invariant failed: Draggable: requires an integer index prop". I started research right away and found out that the original React Beautiful DND is no longer maintained. A new DND called @hello/pangea/DND is active now. Then I switched to this one and made some updates to make it work.',
      },
    ],
    learned: [
      {
        id: "learn1",
        title: "Using NanoID to generate React map keys⋆˙⟡",
        text: "In this project, I especially learned how to use NanoID to generate React map keys and how to use React Beautiful DND. I used to think that NanoID can only generate random IDs which is not helpful for generating React map keys. However, I found that if I use NanoID to generate to do item's id and use its id as key, then it works perfectly.",
      },
    ],
  },
];
