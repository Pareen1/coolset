# 🛒 Coolset Table Challenge

This project is a **React + Next.js** implementation of a **table component** with interactive features such as **sorting, filtering, pagination, and a fun quiz gate** for access.

## 🚀 Features

### ✅ Core Table Features:
- **Pagination**: Navigate through the table with page controls.
- **Row Display Options**: Choose how many rows are shown per page.
- **Sorting**: Sort the table by price per 100g (€).
- **Filtering**: Filter grocery items by section.

### 🎉 Bonus Features:
- **Access Gate**: Users must correctly answer a fun Coolset-related quiz before accessing the table. This is managed using useContext for state management, with persistence via localStorage.
- **Responsive Design**: Is responsive for most screen sizes, future improvements will be to improve mobile visibility.
- **Sticky Headers**: Keeps table headers visible when scrolling.
- **Company Branding**: Integrated Coolset's **favicon and brand colors** for a cohesive look.

## 🛠️ **Tech Stack**
- **Next.js (App Router)**
- **React & TypeScript**
- **Tailwind CSS** (for styling)
- **React Multi-Select Component** (for filtering)
- **React Context API** (for managing quiz access)
- **LocalStorage** (to persist user access)

## 📦 **Installation & Setup**
### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/Pareen1/coolset.git
cd coolset
```

### Install Dependencies
yarn install

### Set Up Environment Variables
NEXT_PUBLIC_QUIZ_ANSWER=<Your Answer 😉>

### Run the Project
yarn dev

## 🔥 Deployment
The project is deployed on Vercel. You can access it here: [Live Demo](https://coolset-pareen-valjees-projects.vercel.app/)

## 🧪 How to Use
1. Answer the quiz question correctly to unlock the table.
2. Use the filter dropdown to find items in a specific section.
3. Click on the table header to sort by price per 100g.
4. Change the rows per page and navigate using pagination controls.

## Screenshots

<img width="1440" alt="image" src="https://github.com/user-attachments/assets/b97ea259-a44f-4953-9896-13de9551e02f" />
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/d99e4326-8bfc-49e5-b975-6cb1a85c6277" />

## Future Enhancements
- Add more quiz questions with a random selection.
- Improve mobile screen views dependent on designs

## 📝 Author
👤 Pareen Valjee

Thank you! :)
