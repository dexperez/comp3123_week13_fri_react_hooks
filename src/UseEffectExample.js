import React, { useEffect, useState, useMemo, useCallback} from "react";
import UseCallBackExample from "./UseCallBackExample";

export default function useEffectExample(){

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [c, setC] = useState(0)

    console.log('*** Render() called ***')
    
    const callUseEffect = () => {
        console.log('1 - useEffect() called everytime render() is called')
    }

    useEffect(callUseEffect)

    useEffect(() => {
        console.log('2 - useEffect() called only on first time rendering')
    }, [])

    useEffect(() => {
        console.log('3 - useEffect() called only when Update A button is clicked since it is controlled by useState[a]')
    }, [a])

    useEffect(() => {
        console.log('4 - useEffect() called only when Update B button is clicked since it is controlled by useState[b]')
    }, [b])

    useEffect(() => {
        console.log('5 - useEffect() called only when Update A or B button is clicked since it is controlled by useState[a, b]')
    }, [a, b])

    useEffect(() => {
            console.log('6 - useEffect() called when component is mounted')
        
        return() => {
            console.log('7 - useEffect() called when component is unmounted')
        }
    }, [])

    const complexLogicFunction = () => {
        console.log('Complex logic function called')
        return a + c
    }

    const result = useMemo(complexLogicFunction, [a, c])

    const myCallBackFunction = () => {
        setA(a + 1)
        console.log("callback function called : " + a)
    }

    const myCallBackFunctionHandler = useCallback(myCallBackFunction, [a])

    return(
    <div>
        <h2>useEffect() Example</h2>
        <button onClick={() => setA ( a + 1 ) }>Update A</button>
        <br/>
        <button onClick={() => setB ( b + 1 ) }>Update B</button>
        <br/>
        <button onClick={() => setC(c + 0)}>Update C</button>
        <br/>
        <UseCallBackExample handler={myCallBackFunctionHandler}/>
        <br/>
        <button onClick={() => myCallBackFunctionHandler()}>Update A with Callback</button>
    </div>
    )
}