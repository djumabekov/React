import { observer } from "mobx-react-lite";
import PCStore from "../data/store/PCStore";

export const PC = observer(() => {

    //for button
    const handlerClick = (e) => {
        console.log("id = " + e.target.id);
        let id = e.target.id - 1;
        PCStore.setStatus(id, !PCStore.getPCById(id).status);
    }

    //for name
    const handlerClickName = (e) => {
        PCStore.setNameChanges(e.target.id - 1, !PCStore.getChanges(e.target.id - 1).name);
    }

    const handlerChangeName = (e) => {
        let id = e.target.id - 1;
        PCStore.setName(id, e.target.value);
        console.log("e.target.value = " + e.target.value)
    }

    //for password
    const handlerClickIP = (e) => {
        PCStore.setIpChanges(e.target.id - 1, !PCStore.getChanges(e.target.id - 1).ip);
    }

    const handlerChangeIP = (e) => {
        let id = e.target.id - 1;
        PCStore.setIp(id, e.target.value);
        console.log("e.target.value = " + e.target.value)
    }

    return (

        <>
            <blockquote className="blockquote text-center">
                <p>Панель управления ПК</p>
                <p>Вы сожете отредактировать поля, нажав на них.</p>
            </blockquote>
            <div className="row row-cols-1 row-cols-md-3 g-4" style={{ margin: "0 auto", maxWidth: "900px" }}>
                {PCStore.PC.map((item, key) => (
                    <div key={key} className="col">
                        <div className="card text-center">
                            <img src={item.pic} className="card-img-top" alt={item.name} />
                            <div className="card-body">
                                {
                                    PCStore.changes[item.id - 1].name | item.name.length === 0 ?
                                        <input id={item.id} type="text" onChange={e => handlerChangeName(e)} onBlur={e => handlerClickName(e)} value={item.name} required />
                                        :
                                        <h5 id={item.id} onMouseDown={e => handlerClickName(e)} className="card-title">{item.name}</h5>
                                }
                                <div>
                                    {
                                        PCStore.changes[item.id - 1].ip | item.ip.length === 0 ?
                                            <input id={item.id} type="text" onChange={e => handlerChangeIP(e)} onBlur={e => handlerClickIP(e)} value={item.ip} placeholder="192.168.1.1" required />
                                            :
                                            <p id={item.id} onMouseDown={e => handlerClickIP(e)} className="card-text">{item.ip}</p>
                                    }
                                </div>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item" style={{ color: item.status ? "red" : "green" }}>{item.status ? "Отключен" : "Включен"}</li>
                            </ul>
                            <div className="card-body">
                                <button id={item.id} onClick={e => handlerClick(e)} className="card-link">{item.status ? "Включить" : "Отключить"}</button>
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>
        </>
    )
});