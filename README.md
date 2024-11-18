# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
## Demo

![Product-details](/public/list.png)
![Product-list](/public/product%20details.png)
![mobile-list](/public/mobilelist.png)
![mobile-details](/public/mobiledetails.png)


## Installation

To install **react-product-catalog**, follow these steps:

Linux and macOS:

```bash
sudo git clone https://github.com/Armcode1/-react-product-catalog.git
```

Windows:

```bash
git clone https://github.com/Armcode1/-react-product-catalog.git
```

Install Dependencies:
```bash

npm install
```
Run the Application:
```bash
npm run dev
```
Open your browser and navigate to:
```bash
http://localhost:3000
```

 ## Additional Libraries and Tools Used

Here are the main tools and libraries used in this project:

React: Frontend library for building the user interface.
React Router: For handling navigation between pages.
React Icons: For adding icons to the UI.

 ## Challenges Faced and Solutions

Challenge 1: Styling Consistency

Issue: Achieving consistent layouts across different screen sizes.
Solution: Utilized Tailwind CSS's responsive classes (sm, md, lg) and maintained a style guide.

Challenge 2: Managing Component State
Issue: State updates were causing re-renders in unexpected ways.
Solution: Properly utilized React hooks like useState and useEffect for state management.

