import { observer } from "mobx-react-lite";
import PCStore from "../data/store/PCStore";

export const PCMonitor = observer(() => {

    return (
        <>
            <blockquote className="blockquote text-center">
                <p>Монитор состояния компьютеров в сети.</p>
            </blockquote>
            <div className="row row-cols-1 row-cols-md-3 g-4" style={{ margin: "0 auto", maxWidth: "900px" }}>
                {PCStore.PC.map((item, key) => (
                    <div key={key} className="col">
                        <div className="card text-center">
                            <img src={item.pic} className="card-img-top" alt={item.name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <div>
                                    <p className="card-text">{item.ip}</p>
                                </div>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item" style={{ color: item.status ? "red" : "green" }}>{item.status ? "Отключен" : "Включен"}</li>
                            </ul>
                        </div>
                    </div>
                )
                )}
            </div>
        </>
    )
});