import { useState } from "react"

const Message = ({data}) => {
    const [info, setInfo] = useState({data});



    return <div className="App__Message">
        <p>
            {data.level}
        </p>
    </div>

}

export default Message