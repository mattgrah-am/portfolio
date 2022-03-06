import Footer from "./Footer";
import Home from "./Home";
import LatestWork from "./LatestWork";

document.body.classList.add(
  "bg-neutral-100",
  "text-neutral-900",
  "dark:bg-neutral-900",
  "dark:text-neutral-100"
);

function App() {
  return (
    <div className="grid h-screen">
      <Home />
      <LatestWork />
      <Footer />
    </div>
  );
}

export default App;
