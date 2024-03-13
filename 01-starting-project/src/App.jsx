import reactImg from './assets/react-core-concepts.png';

const reactDesctiptions = ['Fundamentals', 'Crutial', 'Core']

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDesctiptions[getRandomInt(3)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}



export default App;
