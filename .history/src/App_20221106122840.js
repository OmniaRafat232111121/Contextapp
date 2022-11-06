import logo from './logo.svg';
import './App.css';
import Example1 from './components/Example1'
function App() {
  return (
    <div className="App">
  
export  const Parent = () => {
    const [userName,setUserName]=useState("omnia")
    return (
        <div>
            {userName}
            <Child setUserName={setUserName}/>
        </div>
        
    );
}
export const Child = ({ setUserName }) => {
    return (
        <div>
            <GrandChild setUserName={setUserName}/>
        </div> 
    )
}
export const GrandChild = ({ setUserName }) => {
    return (
        <div>
            <button onClick={()=>setUserName("Meme")} />
        </div>
    )
}

    </div>
  );
}

export default App;
