import React, { useState } from 'react'

export default function App() {
    const [count, setCount] = useState(4)
    const [theme, setTheme] = useState('sky')

    function decreaseCount() {
        setCount(prevCount => prevCount - 1)
        setTheme(prevCount => prevCount === 'sky' ? 'low' : 'sky')
    }

    function increaseCount() {
        setCount(prevCount => prevCount + 1)
        setTheme(prevCount => prevCount === 'sky' ? 'high' : 'sky')
    }

    return (
        <>
            <button onClick={decreaseCount}>-</button>
            <span>{count}</span>
            <span>{theme}</span>
            <button onClick={increaseCount}>+</button>
        </>
    )
    
}








// import React, { useState } from 'react'
// import './App.css'
// // import { GrCheckbox as Box }  from 'react-icons/gr'
// // import { GrCheckboxSelected as BoxTwo } from 'react-icons/gr' 

// export default function App() {
//     const [count, setCount] = useState(0)

//     function decrease() {
//         setCount(prevCount => prevCount - 1)
//     }
//     function increase() {
//         setCount(prevCount => prevCount + 1)
//     }


//     return (
//         <>
//             <button onClick={decrease}>-</button>
//             <span>{count}</span>
//             <button onClick={increase}>+</button>
//         </>
//     )
// }
// 잘 되는 버전 -  icon toggle feature (check, uncheck)
// export default function App() {
//     const [tick, setTick] = useState(false)

//     const handleTick = () => {
//         setTick(!tick)
//     }

//     return (
//         <>
//             <div>
//                 <p>This is a bookmark app. Tick box is not from web api (html). </p>
//                 <p>You can toggle the box and see how it changes when you click.</p>
            
//                 <div className="TickIcon" 
//                     onClick={handleTick}>
//                     {tick ? (
//                         <Box className="tickFillIcon" />
//                         ) : (
//                         <BoxTwo className="tickIcon" />
//                     )}
//                 </div>
//             </div>
//         </>
//     )
// }




// Almost worked
// export default function App() {
//   const [icon, setIcon] = useState(false);

//   function handleClick() {
//     setIcon(prevIcon => !prevIcon); 
// }
  
//   return (
//     <div>
//         <img src={ icon ? Box : BoxTwo } alt="icon" onClick={handleClick} />
//     </div>
//   );
// }





// export default function App() {
//     const [valueState, setValueState] = useState(true)
//     const [id, setId] = useState(null)

//     const togglearrow = (val) => {
//         if (valueState == true) {
//             setValueState(false)
//         } else {
//             setValueState(true)
//         }
//         setId(val)
//     }

//     return (
//         <div>
//             <p>Clicked  times</p>
//             <button onClick={() => setValueState(valueState + 1)}>
//                 Click me
//             </button>
//         </div>
//     )
// }





// This one
// function Example() {
//     const [count, setCount] = useState(0)

//     return (
//         <div>
//             <p>Clicked {<GrCheckbox />} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//             </button>
//         </div>
//     )
// }

// export default Example





// export default function App() {
//     const [icon, setIcon] = useState(false)
//     const [v, setV] = useState(GrCheckbox)
    
//     function handleClick() {
//         setIcon(!icon)
//         icon ? setV(GrCheckbox) : setV(GrCheckboxSelected)
//     }
//     return (
//         <div className='App'>
//             <img src={v} alt="icon" onClick={handleClick} />
//         </div>
//     )
//  }
