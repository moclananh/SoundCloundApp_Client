"use client"
// import { useState } from "react";

const LikePage = () => {
    // const [name, setName] = useState("Hoi Dan IT")
    const handleClick = () => {
        alert("me")
    }
    return (
        <div onClick={() => handleClick()}>
            like page : with name
        </div>
    )
}

export default LikePage;