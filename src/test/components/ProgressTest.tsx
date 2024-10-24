import {Progress} from "../../components";
import {useEffect, useState} from "react";

const ProgressTest = () => {
    const [prog, setProg] = useState(0);

    useEffect(() => {
        const time = setTimeout(() => {
            setProg(prev => prev >= 100 ? 0 : prev + 1);
        }, 100)
          
        return () => {
            clearTimeout(time);
        }
    }, [prog])

    return (
      <Progress value={prog}/>
    )
}

export default ProgressTest;