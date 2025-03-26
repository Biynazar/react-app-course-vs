import { useState } from "react"
import { Button } from "./components/Button/Button"

export const Counter = () => {

    // let count = 1;

    const [count, setCount] = useState(1)

    const countHandler = () => {
        setCount((count) => count + 1)
    }

    // console.log(`Render ${count}`);


    return (
        <Button onClick={countHandler}>
            count is {count}
        </Button>

    )
}