import './App.css'

function App() {

  const name = prompt("write your name");
  const date = new Date()
  const d = date.getDate()
  const da = date.getMonth()
  const dat = date.getFullYear()
  const time = date.getHours()
  const rnd = Math.round(Math.random() * 100);

  return (
    <div className={time <=6 && time >=18 ? 'dark' : 'light'}>
      <div>
        <p>Hello my name is:</p>
        {name}
        <p>This is the day:</p>
        {d}.{da}.{dat}
        <p>A random number from 0 to 100:</p>
        {rnd}
        
      </div>
    </div>
  );
}

export default App
