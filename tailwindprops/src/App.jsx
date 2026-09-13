import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-xl bg-green-400 p-4 rounded-xl">Tailwind Test</h1>
      {/* Tailwind Card */}
      {/* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          class="w-24 h-24 rounded-full mx-auto"
          src="https://images.pexels.com/photos/17213746/pexels-photo-17213746.jpeg"
          alt=""
          width="200"
          height="200"
        />
        <div class="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div class="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure> */}

      <div className="flex gap-10">
        <Card name="Ajay Kumar" myArr={[1, 2, 3]} />
        <Card name="Vijay Kumar" />
        <Card name="Karan Kumar" />
      </div>
    </>
  );
}

export default App;
