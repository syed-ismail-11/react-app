
import './App.css';

function App() {
  const updateNews = async () => {
   // props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=f77a1e37e4284d009faa178bef19d1cb&page=1&pageSize=10`;
   // setLoading(true);
    let data = await fetch(url);
    
    let parsedData = await data.json();
    console.log(parsedData)
  };

    updateNews();
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React new added nov 30 nwe puch
        </a>
      </header>
    </div>
  );
}

export default App;
