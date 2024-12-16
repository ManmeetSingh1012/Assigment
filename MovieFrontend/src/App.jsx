import { lazy, Suspense } from "react";
import Landing from "./Pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Favourite = lazy(() => import("./Pages/Favourite"));

function App() {
  return (
    // Added return here
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/favourite"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Favourite />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
