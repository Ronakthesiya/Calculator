import "./App.css"
import React,{useState} from 'react'

const App = () => {
    const [input,setInput] = useState('')
    const hB=(value)=>{
        if(value === 'C'){
            setInput('');
        }else if(value === '<'){
            setInput(input.slice(0,-1));
        }else if(value === '='){
            try{
                setInput(eval(input).toString())
            }
            catch(error){
                setInput('Error')
            }
            
        }else{
            setInput((preValue) => preValue+value)
        }
    }
    return (
        <>
        <div id="header"><h1>Calculater</h1></div>
        <div className="container">
            <div className="calc">
                <h1 id="input">{input}</h1>
                <div>
                    <button onClick={() => hB('C')}>C</button>
                    <button onClick={() => hB('<')}>&lt;-</button>
                    <button onClick={() => hB('%')}>%</button>
                    <button onClick={() => hB('/')}>/</button>
                </div>
                <div>
                    <button onClick={() => hB('7')}>7</button>
                    <button onClick={() => hB('8')}>8</button>
                    <button onClick={() => hB('9')}>9</button>
                    <button onClick={() => hB('*')}>*</button>
                </div>
                <div>
                    <button onClick={() => hB('4')}>4</button>
                    <button onClick={() => hB('5')}>5</button>
                    <button onClick={() => hB('6')}>6</button>
                    <button onClick={() => hB('-')}>-</button>
                </div>
                <div>
                    <button onClick={() => hB('1')}>1</button>
                    <button onClick={() => hB('2')}>2</button>
                    <button onClick={() => hB('3')}>3</button>
                    <button onClick={() => hB('+')}>+</button>
                </div>
                <div>
                    <button onClick={() => hB('0')}>0</button>
                    <button onClick={() => hB('00')}>00</button>
                    <button onClick={() => hB('.')}>.</button>
                    <button onClick={() => hB('=')}>=</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default App;