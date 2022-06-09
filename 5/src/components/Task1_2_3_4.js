import { useState } from "react"
import { getFootballClubsInfo } from "../data/FootbalClubsInfo";
import { getStyles } from "../data/Styles";
import { getPredictions } from "../data/Predictions";

export const FootballClubInfo = () => {
    const [footballClubInfo, setFootballClubInfo] = useState([]);
    const [styles] = useState(getStyles);
    const [randStyle, setRandStyle] = useState({});
    const [predictions] = useState(getPredictions);
    const [prediction, setRandPrediction] = useState("");



    const handleClick = () => {
        setFootballClubInfo(getFootballClubsInfo);
        setRandStyle(styles[Math.floor(Math.random() * (styles.length))]);
        setRandPrediction(predictions[Math.floor(Math.random() * (predictions.length))]);
    };

    return (
        <div>
            <button onClick={handleClick}>Click</button>
            <p>1. Создайте приложение для отображения информации о футбольном клубе. </p>
            <p>2. Настройте компонент из первого задания с помощью стилей. </p>
            <p>3. Расширьте первое задание таким образом, чтобы можно было показывать информацию о нескольких футбольных клубах.  </p>

            <table border="1" style={{borderCollapse:"collapse"}} id="grid" className="sortable">
                <thead>
                    <tr>
                        <th data-type="string">Name</th>
                        <th data-type="string">City</th>
                        <th data-type="string">Date</th>
                        <th data-type="image">Emblem</th>
                        <th data-type="string">Medals</th>
                        <th data-type="image">Cups</th>
                        <th data-type="image">Goals</th>
                        <th data-type="image">Teams</th>
                    </tr>
                </thead>
                <tbody style={{color: randStyle.color, fontSize: randStyle.fontSize, textDecoration: randStyle.textDecoration}}>
                    {footballClubInfo.map((item, key) => (
                            <tr key={key}>
                            <td>{item.about.name}</td>
                            <td>{item.about.city}</td>
                            <td>{item.about.date}</td>
                            <td> <img style= {{height: 50, width:50,}}src={item.about.emblem} alt="emblem"/></td>
                            <td><ol>{item.progress.medals.map((item, k) => (<li key={k}>{item}, </li>))}</ol></td>
                            <td><ol>{item.progress.cups.map((item, k) => (<li key={k}>{item}, </li>))}</ol></td>
                            <td>{item.progress.goals}</td>
                            <td><ol>{item.teams.map((item, k) => (<li key={k}>{item}, </li>))}</ol></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <p>4. Создайте приложение Магический Шар предсказаний. </p>
            <p><b>{prediction}</b></p>
        </div>
    )
}