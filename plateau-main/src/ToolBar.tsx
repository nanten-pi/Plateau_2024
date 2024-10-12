import { useState } from "react";

export const ToolBar: React.FC = () => {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div>
            <button onClick={() => setIsClicked(!isClicked)}>Click me</button>
            {isClicked && <div>Clicked!</div>}
        </div>
    );
}