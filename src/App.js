import "./App.css";
import CategoryForm from "./components/Category";
import NavBar from "./components/NavBar";
import Productsform from "./components/Products";

const products = [
  {
    id: 1,
    title: "React.js",
    category: "frontend",
    createdAt: "2022-10-31T15:02:00.411Z",
  },
  {
    id: 2,
    title: "Node.js",
    category: "backend",
    createdAt: "2022-10-31T15:03:23.556Z",
  },
  {
    id: 3,
    title: "Vue.js",
    category: "frontend",
    createdAt: "2022-11-01T10:47:26.411Z",
  },
];

const categories = [
  {
    id: 1,
    title: "frontend",
    description: "frontend of applications",
    createdAt: "2022-10-31T15:03:23.556Z",
  },
  {
    id: 2,
    title: "backend",
    description: "the backend of the applications",
    createdAt: "2022-12-31T15:03:23.556Z",
  },
];
function App() {
  return (
    <div>
      <div className="bg-slate-800 min-h-screen">
        <NavBar />
        <div className="container max-w-lg mx-auto p-4">
          <CategoryForm />
          <Productsform />
        </div>
      </div>
    </div>
  );
}

export default App;
