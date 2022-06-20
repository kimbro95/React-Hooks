import { useState } from "react";

export const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => {
        //const value = event.target.value
        //위 코드를 ES6 syntax를 사용한 방법
        const {
            target: { value }
        } = e;

        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }
        if (willUpdate) setValue(value);
    }
    return { value, onChange };
};
