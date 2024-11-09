# MediCare - A Medical Management System

MediCare is a simple medical management system that allows users to manage doctors and patients seamlessly. It is built using:

- React
- TypeScript
- Vite
- Tailwind CSS
- Firebase (for backend and data storage)
- useSWR (data fetching)

👾 **Features**

- Add, edit, and delete doctor profiles.
- View a list of doctors with specializations.
- Drag and drop functionality for selecting doctors.
- User-friendly forms for inputting doctor and patient information.
- All data is saved in Firebase, allowing persistent storage.

📒 **Process**
I started by implementing user authentication with login and registration features. Next, I developed a patient table using `useSWR`, allowing users to easily add, edit, and delete patient records.

After the patient management feature, I focused on implementing the Doctors tab, where users can also add, edit, and delete doctor profiles. This tab mirrors the functionality of the patient table, providing a consistent user experience throughout the application.

I styled the application using Tailwind CSS, ensuring a modern and responsive design, drawing inspiration from popular medical management systems and best practices in UI/UX design.

The project includes user feedback mechanisms and data validation to enhance user experience. All data is stored in Firebase, ensuring that users can come back to their information at any time.

**NOTE:** The project's primary purpose is to demonstrate a basic medical management system and showcase the use of React and Firebase. It is not intended to be a full-fledged medical application.

🚦 **Running the Project**
To run the project in your local environment, follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` or `yarn` in the project directory to install the required dependencies.
3. Run `npm run start` or `yarn start` to get the project started.
4. Open `http://localhost:5173` (or the address shown in your console) in your web browser to view the app.
