

### Purpose
Z-Stash Inventory is made as per request of the faction "zGroup". This serves to help them and their members in keeping track of where their supplies are stored. These supplies are mainly used for their "runs" where they do a wider search of an area for supplies, clearing, or for scouting. Currently they only have written notes where it is prone to being lost or being stolen by an enemy faction. This web app helps to tackle those hardships and provide an easier way to give their people the right direction.

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

https://lucid.app/lucidchart/c232eb61-def7-4dde-be80-6c7ee5feb2f7/edit?viewport_loc=-3350%2C-1618%2C3328%2C1586%2C0_0&invitationId=inv_00a6a637-97a4-4bd5-8a90-5071d30045ba


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
1. As a Scout Member, I want to receive informative stash locations with specific details, enabling me to efficiently locate and gather resources for the group without confusion.
2. As a Scout Member, I want to update the status of a stash entry I've been using, providing information on the current contents, any changes, or potential issues, ensuring accurate information provided to the group as a whole.
3. As a Scout Member, I want the ability to leave comments or notes on stash entries, allowing for communication with other Scouts and Intelligence Agents to share insights or warnings about specific stash locations.

**Regular Member**
1. As a Regular Member, I want to have access to information related to possible locations where there are some supplies available in the event of emergencies or when tasked by leading members.





R2	Dataflow Diagram	CMP1043-4.2


R5	Wireframes for multiple standard screen sizes, created using industry standard software	CMP1043-4.1, CMP1043-5.3
R6	Screenshots of your Trello board throughout the duration of the project	CMP1043-5.2






