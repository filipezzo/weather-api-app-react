import React from 'react';
import Card from './Components/Card';
import fetchData from './services/api';
import initialData from './helpers/inicialData';

function App() {
  const [city, setCity] = React.useState('');
  const [data, setData] = React.useState(initialData);
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(city).then((response) => setData(response));
  };
  return (
    <div className="flex flex-col w-full h-screen items-center sm:justify-center  p-4">
      <form onSubmit={handleSubmit} className="fixed bottom-0 p-4 w-full flex sm:relative justify-center">
        <input
          type="text"
          placeholder="city"
          value={city}
          onChange={({ target }) => setCity(target.value)}
          className="p-3 rounded-lg outline-none  w-full sm:max-w-[300px] flex-1"
        />
        <button
          type="submit"
          className="bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold"
        >
          Search
        </button>
      </form>

      <Card data={data} />
    </div>
  );
}

export default App;
