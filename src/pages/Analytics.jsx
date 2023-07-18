import { useParams } from "react-router-dom"
const Analytics = () => {
    const { aID } = useParams()
    return (
        <div>
            <h1>Analytics / {aID}</h1>
        </div>
    );
};

export default Analytics;