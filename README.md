# ABC Catalogue of Content

## 📖 Overview

The project is a simple React based system that allows to view the catalogue from ABC's catalogue of content. This is a project done as a part of Developer Challenge from Acorn.

---

## 🧰 Libraries & Tools Used

- **Next.js** – as a React framework is used to complete this project
- **Material UI (MUI)** with Emotion – For fast and accessible UI design.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** and **npm** installed.

### Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/abhi886/acorn-developer-challenge-react.git
```

2. **Navigate to the Project Directory**

```bash
cd acorn-developer-challenge-react
```

3. **Set up Environment Variables**
   Create a `.env.local` file in the root directory and add the following:

```env
ACORN_API_BEARER_TOKEN=your_token_here
ACORN_API_BASE_URL=https://staging.acornlms.com
```

4. **Install Dependencies**

```bash
npm install
```

5. **Run the Development Server**

```bash
npm run dev
```

6. **Open in Browser**
   Visit [http://localhost:3000](http://localhost:3000) to view the application.

---

## ✅ Assumptions

- The content is visible to general users **except** for those with `status: hidden`.

---

## 💡 Key Decisions

1. **Framework Choice**: Next.js was chosen for ease of setup and support for SSR. API data is fetched server-side, though `useEffect` could be used for client-side rendering as an alternative.

2. **UI Library**: Material UI (MUI) was used for rapid component development, consistent styling, and built-in accessibility. I have foundational experience with MUI, i needed to find a solution for when to implement it.
3. **State Management**: Handled using `useState` and `useMemo` at component level. The filtering logic is self-contained and didn't require global state tools like Redux or Context API.

4. **Filtering Logic**: Implemented in the `FilterableContentCatalogue` component. Supports filtering by category, type, tag, and search text. Logic is memoized for performance.

5. **Accessibility**: Semantic HTML, proper heading hierarchy, `aria-labels`, and meaningful text are used. The project aims for **WCAG 2.2 AA** compliance, especially with contrast and keyboard navigation.

6. **Empty State Handling**: When no results match the filters, the app clearly communicates this with contextual messages.

7. **Design Consistency**: Utilizes MUI's `sx` styling prop for consistent spacing, color, and responsive layout.

---

## 🧱 Project Approach

1. **Requirement Analysis & Planning**

   - Selected Next.js for its SSR capability.
   - Decided to defer MUI integration until MVP was complete.

2. **Environment Setup**

   - Configured TypeScript, ESLint, and Prettier(for code consistency in dev environment).

3. **API Integration**

   - Created service functions to fetch data from Acorn’s API.

4. **Frontend Implementation**

   - Built MVP with basic HTML.
   - Decomposed into reusable React components.
   - Added UI state and behavior logic.
   - Introduced MUI for design components and polish.
   - Performed Lighthouse audit and accessibility checks.

5. **Finalization & Submission**
   - Wrote documentation (this README).
   - Prepared for review.

---

## 🔮 Future Improvements

If the project is extended or scaled, consider the following:

1. **Refactor State**

   - Combine all filter states into a single object or use `useReducer` for more manageable updates.

2. **Reusable API Hooks**

   - For accessing the API on the client side, Abstract fetch logic into custom hooks that can handle revalidation and loading states.

3. **Custom Design System**

   - Define a project-specific theme and design tokens for typography and colors. (currently i have not implemented it and have hardcoded it in a lot of places).

4. **Testing**

   - Add unit tests for components and integration tests using Jest and Testing Library.

5. **Storybook**
   - Document reusable components in isolation for better maintainability and developer onboarding.

---

🛠 Built with ❤️ by [Abhishekh Maharjan](https://github.com/abhi886) for Acorn Developer Challenge
