# Project Title Zime.ai Assignment

This is a React application that fetches and displays paginated data from a dummy JSON endpoint, allows users to filter posts by tags, and search posts by text. The application uses Ant Design for the table component and React Router for navigation.


## Installation

1. Clone the project

```bash
  git clone https://github.com/Pawan123Pawan/Zime.ai-assingment
```

2. Go to the project directory

```bash
  cd Zime.ai-assingment
```

3. Install dependencies

```bash
  npm install
```

4. Start the server

```bash
  npm run dev
```

## Features

1. **Data Retrieval:**
   - Fetches paginated data from the dummy JSON endpoint [https://dummyjson.com/posts](https://dummyjson.com/posts).

2. **Table Population:**
   - Utilizes the Ant Design table component to display fetched data.
   - Each page shows a specified number of items.

3. **Multi-Select Filter:**
   - Enables users to filter posts based on tags using a multi-select filter.
   - Allows simultaneous selection of multiple tags to refine the search.

4. **Search Input Field:**
   - Provides a search input field for users to filter posts based on text matches in the body property.
   - Dynamically updates the table to display only matching posts.

5. **URL Persistence:**
   - Persists the state of pagination, filtering, and search in the URL.
   - Enables users to navigate away from the page and return later to see the same pagination page, selected filters, and search query.

6. **User Experience:**
   - Designed with a user-friendly interface for clear navigation and intuitive interactions.

7. **Responsive Design:**
   - Adapts the layout to different screen sizes and devices for optimal viewing.

8. **Error Handling:**
    - Implements error handling for cases such as failed data retrieval or invalid routes.
    - Ensures a smooth user experience.

## Technologies Used

- **ReactJS** - The JavaScript library used
- **Ant Design** - The design system used
- **Tailwind CSS** - Used for designing
- **Redux** - Used for storing data and persistance data

## Deploy Link

[Live Project link](https://Zime.ai-assingment-pawankumar.vercel.app/)
