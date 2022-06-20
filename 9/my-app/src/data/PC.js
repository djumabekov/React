

const PC = [
    {
        id: 1,
        name: "Компьютер 1",
        ip: "192.168.1.1",
        status: false,
        pic: "https://avatars.mds.yandex.net/i?id=9d90339460de35156abc56e25efa9e06-4421884-images-thumbs&n=13&exp=1",
    },
    {
        id: 2,
        name: "Компьютер 2",
        ip: "192.168.1.2",
        status: true,
        pic: "https://avatars.mds.yandex.net/i?id=a9e2ebf380a2c294e9c1ae6e1a6f306d-5598230-images-thumbs&n=13&exp=1",
    },    
    {
        id: 3,
        name: "Компьютер 3",
        ip: "192.168.1.3",
        status: false,
        pic: "https://avatars.mds.yandex.net/i?id=5ba236812f1dd476f55f2e26521ca241_sr-6357036-images-thumbs&n=13&exp=1",
    },
]

export const getPC = () => {
    return PC;
}

