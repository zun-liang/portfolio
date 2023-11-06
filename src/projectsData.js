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
        text: 'Welcome to the heart of my portfolio website – the "secret" blog management system. While visitors to my website can enjoy reading my blogs, I, as the admin, hold the exclusive key to this intriguing realm, which is aptly named "secret."',
      },
    ],
    funcTitle: "In this secret management system, I am able to:⋆˙⟡",
    functions: [
      {
        id: "func1",
        text: "Seamlessly log in and out",
      },
      {
        id: "func2",
        text: "Retrieve drafts and securely save them to Firestore",
      },
      {
        id: "func3",
        text: "Effortlessly update my user name and profile photo locally",
      },
      { id: "func4", text: "Create and edit blogs in Markdown" },
      { id: "func5", text: "Delete or post blogs" },
      {
        id: "func6",
        text: "Dynamically showcase tags to categorize and organize blog posts",
      },
    ],
    funcImages: [
      {
        id: "image1",
        title: "Editor",
        width: "100%",
        srcLight: "../src/assets/images/screenshots/portfolio/editor-light.png",
        srcDark: "../src/assets/images/screenshots/portfolio/editor-dark.png",
      },
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
        text: "Before creating this blog management system, I was considering using external platforms to host my blogs. However, I soon realized that this approach would limit me to just providing links to my blog page, redirecting visitors to another website. While this isn't a bad option, it felt somewhat inconsistent with the vibe I wanted for my website. As a front-end developer, it also felt like I'd be taking a shortcut.",
      },
      {
        id: "pur2",
        text: "I’ve seen some discussions about whether developers should invest a significant amount of time in building their own portfolio websites. Some argue that it's not worthwhile unless you're actively job-seeking, while others emphasize its value as a skill-building exercise. But for me, it's about much more than that. I envision this website as a reflection of my personality and preferences 🌈. It's not just a professional showcase; it's a personal space where visitors can get to know the person behind the work 👩‍💻.",
      },
      {
        id: "pur3",
        text: "In a nutshell, the integrated blog management system empowers me to infuse my blogs with creativity and personalization, making it far more than just a time sink or a simple job showcase. Instead, it represents an incredible chance to refine my current skills, embark on thrilling new learning journeys, and build a one-of-a-kind, engaging digital space. 💖",
      },
    ],
    spotlight: [
      {
        id: "spot1",
        title: "Firebase - Retrieve and Manage Data ୧ ‧₊˚🗂️🔎 ⋆｡°✩",
        text: [
          {
            id: "spot-text-1",
            text: "At the time I started to build this website, I didn't have the knowledge or experience to work with databases and backend systems. However, I soon discovered that Firebase is a fantastic tool that I could relatively easily grasp and utilize in my project ✨. I utilized Firestore's `getDoc`, `getDocs`, `ref`, `doc`, `orderBy`, and `query` to retrieve and display blogs data.",
          },
        ],
        images: [
          {
            id: "image1",
            title: "Post Confirmation",
            height: "150px",
            srcLight:
              "../src/assets/images/screenshots/portfolio/post-light.png",
            srcDark: "../src/assets/images/screenshots/portfolio/post-dark.png",
          },
          {
            id: "image2",
            title: "Save Draft Confirmation",
            height: "150px",
            srcLight:
              "../src/assets/images/screenshots/portfolio/draft-light.png",
            srcDark:
              "../src/assets/images/screenshots/portfolio/draft-dark.png",
          },
          {
            id: "image3",
            title: "Retrieve Draft",
            height: "150px",
            srcLight:
              "../src/assets/images/screenshots/portfolio/get-draft-light.png",
            srcDark:
              "../src/assets/images/screenshots/portfolio/get-draft-dark.png",
          },
        ],
      },
      {
        id: "spot2",
        title: "User Authentication ୧ ‧₊˚ 📁🗝 ⋆｡°✩",
        text: [
          {
            id: "spot-text-1",
            text: "During the process of building this website, I also embarked on my first experience with user authentication. I utilized Firestore's `auth`, `onAuthStateChanged`, `signIn`, `signOut`, `setDoc`, `deleteDoc`, `updateDoc`, and `updateProfile` to integrate this simple blog management system ✨. This system allows me to exclusively log in as admin, create, update, and edit blogs, and update user profile all while securely saving them to Firebase.",
          },
          {
            id: "spot-text-2",
            text: "Especially, while working with Firestore's `updateProfile` to update user names and photos, I found that it only supports updating a URL for photos, rather than the commonly supported method of uploading pictures directly from local devices. After conducting some research, I discovered that the combination of Firestore and Firebase Cloud Storage can achieve this feature. I accomplished this by using `getStorage`, `ref`, `uploadBytes`, and `getDownloadURL` to store locally uploaded images and provide a URL for downloading. I then utilized this url to update user profiles 📸 🔁.",
          },
        ],
        images: [
          {
            id: "image1",
            title: "Log in Form",
            height: "150px",
            srcLight:
              "../src/assets/images/screenshots/portfolio/login-light.png",
            srcDark:
              "../src/assets/images/screenshots/portfolio/login-dark.png",
          },
          {
            id: "image2",
            title: "Log in Confirmation",
            height: "150px",
            srcLight:
              "../src/assets/images/screenshots/portfolio/loggedin-light.png",
            srcDark:
              "../src/assets/images/screenshots/portfolio/loggedin-dark.png",
          },
          {
            id: "image3",
            title: "Log out Confirmation",
            height: "150px",
            srcLight:
              "../src/assets/images/screenshots/portfolio/loggedout-light.png",
            srcDark:
              "../src/assets/images/screenshots/portfolio/loggedout-dark.png",
          },
          {
            id: "image4",
            title: "User Profile Management",
            height: "200px",
            srcLight:
              "../src/assets/images/screenshots/portfolio/update-user-profile-light.png",
            srcDark:
              "../src/assets/images/screenshots/portfolio/update-user-profile-dark.png",
          },
        ],
      },
      {
        id: "spot3",
        title:
          "Transfer Markdown to HTML and Parse HTML in React App ୧ ‧₊˚ 🌐 🔁 ⋆｡°✩",
        text: [
          {
            id: "spot-text-1",
            text: "Additionally, before I decided to convert Markdown to HTML and parse it for display on the web page, I initially attempted to save Markdown directly in Firestore and retrieve its data for display 💭. Unfortunately, I encountered issues with the Markdown formatting, as it couldn't render correctly. After research, I realized that a better approach would be to save HTML instead 🤔, which, in turn, required using a parser to convert the HTML to React elements.",
          },
          {
            id: "spot-text-2",
            text: "When I applied the parser, it did indeed display the content with styles, but it didn't adhere to the CSS styles I had defined for my entire website. To address this, I decided to customize the parsing rules by transforming all HTML elements into styled components 👩🏻‍💻. This customization worked for most of the content. However, I noticed that all anchor links were non-functional.",
          },
          {
            id: "spot-text-3",
            text: "Upon investigating the data I had saved in Firestore and inspecting the content in the developer tools 🧐, it became clear that the customized parsing rules had inadvertently removed all the id attributes. To resolve this issue, I made the necessary adjustments by adding `const id = domNode.attribs.id` and ensuring that `id={id}` was included when rendering the elements.🛠👩🏻‍💻",
          },
        ],
      },
      {
        id: "spot3",
        title:
          "User Interactions - Blog liking, commenting, and sharing ୧ ‧₊˚ 🤍💬🔗 ⋆｡°✩",
        text: [
          {
            id: "spot-text-1",
            text: "Last but not least, when I was on the verge of completing the initial version of my website, I realized that incorporating interactive elements into the blog section could make the experience much more engaging. Consequently, I introduced features for liking 🤍, commenting 💬, and sharing 🔗. During the course of this development, I encountered a few noteworthy insights.",
          },
          {
            id: "spot-text-2",
            text: 'Initially, my blog data structure was rather straightforward, with "likes" and "comments" treated as fields within each blog document. This approach seemed logical at first. However, I soon encountered an issue with Firestore\'s inability to accommodate updates to comments, as it doesn\'t support `push`ing new values (new comments) to an array 🤔. After delving into some research, I discovered the flexibility of adding subcollections within any document. This structure resembles a JSON tree, with layers of hierarchy: ',
          },
          {
            id: "spot-text-3",
            text: 'This revelation led me to reorganize the data, storing "comments" as a subcollection, allowing each comment to have its own set of fields, including `id`, `name`, `text`, and `timestamp`.',
          },
          {
            id: "spot-text-4",
            text: 'Additionally, I decided to create a "likes" subcollection within each blog document to address security concerns related to controlled access for reading and writing. This decision stemmed from an issue I encountered while testing comments on mobile devices. Initially, I attributed the problem to mobile device settings, assuming I couldn\'t submit forms. However, I soon realized that the issue was tied to permissions, and only an admin had the privilege to like or comment, as these features were initially included as fields within each blog document. I conducted research and adjusted the security rules based on the revised data structure, effectively resolving this access issue 🗝.',
          },
          {
            id: "spot-text-5",
            text: "To enable the sharing functionality, I utilized both `navigator.share` and `react-share`. While most modern browsers support `navigator.share`, I also created custom sharing options for browsers lacking this support. My intention was to build as much as possible from scratch. However, certain social platforms posed challenges, with limited developer support and lack of acceptable sharing links. Consequently, I integrated `react-share` to facilitate sharing on such platforms while maintaining a cohesive user experience 🫧.",
          },
        ],
        images: [
          {
            id: "image",
            title: "",
            srcLight: "",
            srcDark: "",
          },
        ],
      },
    ],
    learned: [
      {
        id: "learn1",
        title: "Reading Documentation ୧ ‧₊˚📖👩‍💻 ⋆｡°✩",
        text: [
          {
            id: "learn-text-1",
            text: "Honestly, I preferred tutorial videos over documentation, especially before I fully appreciated the power of reading and understanding documentation. There were two main reasons for this preference. Firstly, English is not my first language, and initially, learning something new and abstract in a second language could be overwhelming. Secondly, as a beginner, there's often a strong desire to accelerate the learning process and showcase what I've learned to others, even when my understanding is limited.",
          },
          {
            id: "learn-text-2",
            text: "However, as I became aware of the barriers that were holding me back from delving into documentation, I intentionally slowed down my approach. I started to read documentation bit by bit, taking my time to understand the content. Surprisingly, this method has proven to be more effective for my learning journey. It has allowed me to build a more solid foundation of knowledge and comprehension.",
          },
        ],
      },
      {
        id: "learn2",
        title: "Git Branch - Merge and Delete ୧ ‧₊˚ 🔀 ⋆｡°✩",
        text: [
          {
            id: "learn-text-1",
            text: "This project is more complicated than the previous ones I've worked on. In such complex projects, using Git intelligently can be very beneficial. In this project, I utilized `git branch <branch name>`, `git checkout <branch name>`, `git merge <branch name>`, `git branch -d <branch name>`, and `git branch -D <branch name>` to experiment with fresh ideas and alternative approaches, ensuring that I can explore these concepts without jeopardizing the well-functioning codebase I've already established. If these new ideas or approaches prove successful, I seamlessly merge them into the \"master\" branch.",
          },
        ],
      },
      {
        id: "learn3",
        title: "Environment Variables ୧ ‧₊˚ 🔐🔗 ⋆｡°✩",
        text: [
          {
            id: "learn-text-1",
            text: "In this project, I integrated API services from both Firebase and Open Weather, each requiring a private API key. Committing these keys to a public GitHub repository would expose my accounts to potential security risks. In addressing this concern, I explored a common solution—storing sensitive information in environment variables and configuring Git to ignore the file containing these variables. This way, when I push my local repository to GitHub, I can set up these variables on the remote platform.",
          },
          {
            id: "learn-text-2",
            text: "However, during the process of implementing environment variables in my project, I encountered some issues related to Vite. Specifically, when I attempted to use `process.env` directly in Vite, Vite couldn't access environment variables' values.",
          },
          {
            id: "learn-text-3",
            text: "After further research, I identified two effective solutions. I could either add a `VITE_` prefix to my environment variables and access them using `import.meta.env`, or I could use `loadEnv` to define and utilize these variables. Both methods proved successful for my project.",
          },
          {
            id: "learn-text-4",
            text: "The only stumbling block that gave me some trouble was initially placing the `.env` file in the `src` folder instead of the `root` directory. This caused persistent bugs and confusion until I corrected the file location.",
          },
        ],
      },
    ],
    learnedImages: [
      {
        id: "image",
        title: "",
        srcLight: "",
        srcDark: "",
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
    funcTitle: "In this app, users are able to:⋆˙⟡",
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
        text: [
          {
            id: "spot-text-1",
            text: 'This is the first time I worked on a project requiring for drag and drop feature. After some research, I found React Beautiful DND is a solid candidate for this challenge. However, after I implemented DND in my project, my project keeps reporting an issue "Invariant failed: Draggable: requires an integer index prop". I started research right away and found out that the original React Beautiful DND is no longer maintained. A new DND called @hello/pangea/DND is active now. Then I switched to this one and made some updates to make it work.',
          },
        ],
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
