

### Purpose
Z-Stash Inventory is made as per request of the faction "zGroup". This serves to help them and their members in keeping track of where their supplies are stored. Currently they only have written notes where it is prone to being lost or being stolen by an enemy faction. This web app helps to tackle those hardships and provide an easier way to give their people the right direction.

### Functionality / Features

#### MVP:
- CRUD operations for both admin and users.
- Secure user registration / login
- Admin view of all entries
- Simple and covert website to keep it anonymous from other groups.
- Stash details will have stash size, address, contents, and notes.

#### Stretch goal:
- Google map link to the external map or a screenshot of where it is on the map displayed on the page.
- Admin alert for users that failed the login more than 3x

### Target Audience
The target audience are specifically the people of "zGroup" who want to store valuable items/supplies in their routes without having them easily accessible by others or be in fear of losing a piece of paper where the details are stored. This information is vital to each member of the group as a loss of a single one could lead to various traps or unverified looting.

### Tech Stack
- ReactJS (Frontend)
- MongoDB (Database)
- ExpressJS (Backend)
- Node.js (Backend)


### Frontend Libraries Used:
- Tailwind
- react-router-dom

### Backend Libraries Used:
- Mongoose
- JWT (Authentication)
- Bcrypt (Password Hashing)
- cors


### Dataflow Diagram


### Application Architecture diagram


### Users
This app will mainly have 3 types of users:

- **Intelligence Agent/s**
This is an Admin role where they can CRUD existing entries of "stashes" and Members.  They are part of "zGroup" specifically tasked with the management and dissemination of this information.

- **Member: Scout**
These are members of the "zGroup" tasked to find resources for all. Be it ammunition, gear, food, water, or potential encampment areas.

- **Member: Regular**
These are regular members of "zGroup". These could be a previous farmer, accountant, or whatnot.


### **Z-Stash Inventory System User Stories:**

**Intelligence Agent**
1. As an intelligence agent, I want to CRUD entries for my scouts and members such as stash size, address, contents, and any important notes, so that I can efficiently manage and organize the group's resources.
2. As an Intelligence Agent, I want to view a comprehensive list of all zGroup members, including Scouts and Regular Members, with the ability to update their information, so that I can maintain an up-to-date database and allocate resources effectively
3. As an Intelligence Agent, I want to receive real-time alerts and notifications for any suspicious activities or anomalies in stash entries, ensuring that I can quickly respond to potential security threats and protect the group's resources.

**Scout**
1. As a Scout Member, I want to receive assigned stash locations with specific details, enabling me to efficiently locate and gather resources for the group without confusion.


R2	Dataflow Diagram	CMP1043-4.2
R3	Application Architecture Diagram	CMP1043-4.3
R4	User Stories	CMP1043-5.1
R5	Wireframes for multiple standard screen sizes, created using industry standard software	CMP1043-4.1, CMP1043-5.3
R6	Screenshots of your Trello board throughout the duration of the project	CMP1043-5.2










# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
