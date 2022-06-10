import React, { useState } from 'react';

export const Userpage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [descr, setDescr] = useState("");
    const [tags, setTags] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);
    const [validStatus, setValidStatus] = useState({ username: false, password: false, email: false, descr: false, tags: false })

    const handleOnChangeUsername = (e) => {
        setUsername(e.target.value);
        let temp = validStatus;
        temp.username = e.target.value.length > 0 ? true : false;
        setValidStatus(temp);
    }
    const handleOnChangePassword = (e) => {
        setPassword(e.target.value);
        let temp = validStatus;
        temp.password = e.target.value.length > 0 ? true : false;
        setValidStatus(temp);
    }
    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value);
        let temp = validStatus;
        temp.email = e.target.value.length > 0 ? true : false;
        setValidStatus(temp);
    }
    const handleOnChangeDescr = (e) => {
        setDescr(e.target.value);
        let temp = validStatus;
        temp.descr = e.target.value.length > 0 ? true : false;
        setValidStatus(temp);
    }
    const handleOnChangeTags = (e) => {
        setTags(e.target.value);
        let temp = validStatus;
        temp.tags = e.target.value.length > 0 ? true : false;
        setValidStatus(temp);
    }
    const handleOnChangeFile = (e) => {
        let temp = validStatus;
        temp.file = e.target.value.length > 0 ? true : false;
        setValidStatus(temp);
        let url = URL.createObjectURL(e.target.files[0]);
        setImgUrl(url);
    }

    const submitForm = (e) => {
        e.preventDefault();
        const result = Object.values(validStatus);
        for (let item of result) {
            if (item === false) {
                setIsCorrect(false);
                break;
            }
            else {
                setIsCorrect(true);
            }
        };
    }
    return (
        <div style={{ display: "inline-flex" }}>
              {!isCorrect ?
            <div style={{ display: "inline" }}>
                <form onSubmit={e => submitForm(e)} className="row g-3">
                    <div className="col-md-4">
                        <label htmlFor="validationDefault02" className="form-label">Ник</label>
                        <input onChange={e => handleOnChangeUsername(e)} value={username} type="text" className="form-control" id="validationDefault02" required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="validationDefault02" className="form-label">Пароль</label>
                        <input onChange={e => handleOnChangePassword(e)} value={password} type="password" className="form-control" id="validationDefault02" required />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="validationDefault02" className="form-label">Email</label>
                        <input onChange={e => handleOnChangeEmail(e)} value={email} type="email" className="form-control" id="validationDefault02" required />
                    </div>
                    <div className="mb-3">
                        <input onChange={e => handleOnChangeFile(e)} type="file" className="form-control" aria-label="file example" required />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="validationTextarea" className="form-label">Описание</label>
                        <textarea onChange={e => handleOnChangeDescr(e)} value={descr} className="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="validationTextarea" className="form-label">Теги</label>
                        <textarea onChange={e => handleOnChangeTags(e)} value={tags} className="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>

                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Сохранить</button>
                    </div>
                </form>
            </div> : null}
            {isCorrect ?
                <div class="card mb-6" style={{ display: "inline" }} >
                    <div class="row g-0">
                        <div class="col-md-8">
                            <img src={imgUrl} class="img-fluid rounded-start" alt="avatar" />
                        </div>
                        <div class="col-md-3">
                            <div class="card-body">
                                <h5 class="card-title">НИК:</h5>
                                <p class="card-text">{username}</p>
                                <h5 class="card-title">Пароль:</h5>
                                <p class="card-text">{password}</p>
                                <h5 class="card-title">Email:</h5>
                                <p class="card-text">{email}</p>
                                <h5 class="card-title">Описание:</h5>
                                <p class="card-text">{descr}</p>
                                <h5 class="card-title">Теги:</h5>
                                <p class="card-text">{tags}</p>
                            </div>
                        </div>
                    </div>
                </div>
                : null}
        </div>
    )
}   