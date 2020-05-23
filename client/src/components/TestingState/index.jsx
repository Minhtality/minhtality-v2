import React, {useState} from 'react'

const TestingState = () => {
    const [state,setState] = useState({
        count: 0,
        color: "#000",
    })

    const handleCountIncremnet = (incrementValue) => () => {
        if (state.count > 0 || incrementValue > 1) {
            return
        } else {
            setState({
                count: state.count + incrementValue
            })
        }
    }
    return (
        <div>
            <div>{state.count}</div>
            {state.count > 0 && (
                <div>You have hit the maximum click(1)</div>
            )}
            <button onClick={handleCountIncremnet(1)}>Click me</button>
            <button onClick={handleCountIncremnet(2)}>Click me to increase my 2</button>
        </div>
    )
}

export default TestingState
