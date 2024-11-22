import "./styles/App.css";
import ImageGallery from "./components/ImageGallery";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Image Gallery</h1>
      </header>
      <main>
        <ImageGallery />
      </main>
    </div>
  );
}

export default App;
