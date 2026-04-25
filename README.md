# Accredian Assignment Submission

## Assignment Details

- **Assignment**: Accredian Full Stack Developer Intern Assignment
- **Submitted by**: Om Maheshwari
- **Resume**: https://drive.google.com/file/d/1lLlzBzA4aHc1xKHSxHeU-9x1Yom4ZRcm/view?usp=sharing

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd accredian
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create or update `.env` in the project root:

```env
MONGO_URI=your_mongodb_connection_string_here
```

### 4. Run the Project

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Requirements

- Node.js (recommended: Node 20+)
- npm (comes with Node.js)
- MongoDB connection string (for form backend storage)

---

## Approach Taken

### Source Folder Structure (`src` only)

```text
src/
	app/
		api/
			enquire/
				route.ts
		globals.css
		layout.tsx
		page.tsx
	components/
		AccredianEdge.tsx
		Cat.tsx
		CatAnimation.tsx
		Clients.tsx
		EnquireForm.tsx
		FAQ.tsx
		Footer.tsx
		Hero.tsx
		HowItWorks.tsx
		Nav.tsx
		PublicHome.tsx
        Reveal.tsx
		Stats.tsx
		Testimonials.tsx
	lib/
		mongo.ts
```

### Component and Architecture Approach

- Built the page using reusable section components such as Hero, FAQ, CAT, and Testimonials.
- Kept components focused and readable, so each file handles a clear UI responsibility.
- Centralized the Enquire dialog flow so both Hero and FAQ can trigger the same modal.
- Added a dedicated backend API route for enquiry submission and a shared Mongo connection utility in `src/lib`.

---

## AI Usage Explanation

- **GitHub Copilot** was used for debugging and iteration.
- After creating the initial component structure, Copilot was used to refine CSS layout issues, spacing, and flex behavior.
- Prompt-driven iterations were used to adjust component structure and responsive alignment faster.
- **Claude** was used with screenshots to get implementation ideas for certain components.
- Claude also helped with a basic starting structure in some places, which was then manually customized.
- Major manual refinements were done in SVG paths, visual tuning, and animation behavior.

---

## Improvements With More Time

- Improve SVG path quality and polish advanced CSS for higher visual precision.
- Invest more time in frontend depth and advanced UI craft.
- Redesign components to a more refined level with AI-assisted exploration plus stronger manual finishing.

---

## Backend and Routes Implemented

- Implemented form backend handling for enquiries.
- Added API route: `src/app/api/enquire/route.ts`.
- Added MongoDB connection layer: `src/lib/mongo.ts`.
- Wired the Enquire form to submit data to backend storage.
