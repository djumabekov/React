
const products = [
    {
        id: 1,
        name: "Молоко",
        description: "Молоко 'Родина' 3.2%",
        price: 320,
        metrics: "л",
        weight: 1,
        photo: "https://polkilo.kz/image/cache/500-500/data/5-Foto%20tovara/Moloko%20i%20molochnaya%20produkstya/Moloko%203.2%20Rodina%201%20l_.jpg",
        manufacturer: "Казахстан, Акмол",
        date: "07.06.2022",
    },
    {
        id: 2,
        name: "Хлеб",
        description: "Хлеб Столичный высший сорт",
        price: 120,
        metrics: "г",
        weight: 400,
        photo: "https://yandex-images.clstorage.net/awe9A5451/adf8fdrytfNA/b7vGUAL6lF_E0JiAsRQ7dbSEQkU9R_KJ6dwl-nTmthJ938i634vqr6RRDS7fAqvy-eQZITANdKVoHu5LI8DHpfu_B-HmCjRPxOBIEQGES8U0dMIEfTfXDJhpBWtkBtfG6Cr-HBiMmNlml3qZjdXPB3wUDGUxfZVTrt47ThRUkvD-u8ehFCp3f2AhKDKCZiqhBARREW_jADtNOZYqAsUWNKz-nP5Lz9goRlcpS40FnNR_twwklX0WMV9ZmJ-HFaFAL3uFYBbL112zckuT80f5kPU2QSCv80J7jrgFW8GGNxWM_72cqL-YOiVHKqnvVr5WX9d_JFcPpcL-OIg-pmRhcX1rtzBHWMbtUgCbEPBXaXF0l3Gy3xDw2y5JZMlDVyUVnK087HiMyamUpxhbP9Zct0-2DTbX7CRSjBsJv6QHM4AcCNQhxnomTbATemAy9MogxSYAItzzMXlNOafaITYmhG6sTZ9arGiphha4-W7Hb7YcNgwFxbw2sQ6Leb5lxEMAjFh1MnWaB7yyczvh0AYZwEU3E-BfIrIJL0pEGlFEZhW_zr8tW44pilQ3aitsd72WzBRsJZf-BND9aig_FTWBAgxYdkMnWsY80mAZoHEGC4BmJkMjTcBDeo7blDiAFgSkzczef9hceqq0RysYfBQMBdzkjPQnLRbRPEgaLZZlUQC8SWQQVLtFj_MTyvDjNHvwFiSgQvxDIGnfadXIwqZW1P2_jR-ITjqotxYqqI3FX-ZdVA10hu530Hx42bzFNnBR7kvHQiV65w4DMDuAgmTK0jbmcEKd8yFpnZqUK0NVhPZ8jI0O-Lz42QTVWvjuRm-1XeaudhTMN5EtqqufpGWwc94rlgIm2wRtYBAJ4EAmKnAkNQAx__MweA14RhhzZ_VWz68dz5s9mIjm5msK7tR81b60XIfHX6fgDTioTmR303CN6MVQtZlVLZBj2cDAJJoiVvWz4K-xIlre2jUa0",
        manufacturer: "Казахстан, Караганда",
        date: "06.06.2022",
    },
    {
        id: 3,
        name: "Картофель",
        description: "Белый картофель Павлодарский",
        price: 200,
        metrics: "кг",
        weight: 1,
        photo: "https://avatars.mds.yandex.net/i?id=69b3e1e7e0391f414baff29139d12aab-4787453-images-thumbs&n=13&exp=1",
        manufacturer: "Казахстан, Павлодар",
        date: "06.05.2022",
    },
    {
        id: 4,
        name: "Лук",
        description: "Репчатый лук",
        price: 180,
        metrics: "кг",
        weight: 1,
        photo: "https://avatars.mds.yandex.net/i?id=91ea96f9decb90285b4e3104cf3d3a5a-5283746-images-thumbs&n=13&exp=1",
        manufacturer: "Казахстан, Петропавловск",
        date: "10.04.2022",
    },
    {
        id: 5,
        name: "Масло",
        description: "Масло сливочное Простоквашино 82%",
        price: 4200,
        metrics: "кг",
        weight: 1,
        photo: "https://avatars.mds.yandex.net/i?id=e8cd2daa4f145ac1aaa5f33f8e827501-5875611-images-thumbs&n=13&exp=1",
        manufacturer: "Казахстан, Кокшетау",
        date: "22.02.2022",
    },
    {
        id: 6,
        name: "Мед",
        description: "Мед цветочный Алтайский 100%",
        price: 2000,
        metrics: "кг",
        weight: 1,
        photo: "https://avatars.mds.yandex.net/i?id=877b345432fb54d6778739137e014261-4464285-images-thumbs&n=13&exp=1",
        manufacturer: "Казахстан, Усть-Каменогорск",
        date: "30.05.2022",
    },
    {
        id: 7,
        name: "Молоко",
        description: "Молоко 'Зенченко' 2.5%",
        price: 350,
        metrics: "л",
        weight: 1,
        photo: "https://yandex-images.clstorage.net/qHAK56129/9f833bA5/BlJkGD7Tw6Dsw-_QQTNwrB8R0unfSqjXK2xowxckvYYlyhPZ3GC2dmDtC5L_263qO4hD7GiR736GoyYtcsTUjZKWUQx7R3fhWMM-NLDTMXiOANdZ7zrYR65N_TYn0b23QN_H2XlEpxbQrt1luLm7Lb0qhN7aUD9LBqMSPKIlVz4CQhYbzECRts4zT9UAA5CODcMXOG6LPGSsr5oEAPY7IGKMhHzoZlZSR9_t5Tha-78-Gmc_KcCMaEZSQiigB8Q9VqPmaB1SojY-gDwkMDOgLn-Ad4svKG0EPl4KxmNXyHPD3oV92ZVlc-XcrGdo2ti_7DpGvvozL9jGsbHIsFS33xQwBiveM9PUjpKedsAyAW4eY0dIL7tvhs3_2yWDJvnxAf_3nnsmpFAVTQ3l2DjaLt661Az5wi3JNpLCqHIFth2lYaRJLCOD1w6B_hfQUaIM3ADnKZ9pDKX-3ZgV8kYrsiDchX25dlbQZX3utCvK6cw9OOSNKZI_2GbD8aqQZuQ_pSJUau2CA_dvAq90sAJy7vwRRnsdKm53T59oxlKF68Awf5YeuUSmwbbMriU7iqr9jPgk3nvQ__t3c4M7MoR1rHQQlHpucILW_mN9tCBTw06fsnR4v_rM9X7Pm9TSFDugEI8EfrhGplAU724WKumKv_zpNj6aAi3KxfFhmLHl5E_WA2WbLGGRtt8w7CRwkPDd3TNESV2IjOfPrGj24OTI4wFuJFzYFeVSN55edbs7G7xNm5SOKnA96pQw0QjhFCWtVFO3mWyiYOS8gV1mcEHy708Q9kstqyzWrQwKVJD0O9CyDdQ8GcRG0aUdDrf5uznObEpF7AoinQn1wXPZAaaF_vZzFGnOEFLE73E8p7LCU1zt01WZ7pm-dow8iuewl7rRwK8k_iqF5xCX3o5nKAgYf97KRZ1aw9_o1DGBWIHlpV62UBRrzcHy9F0BboYQEQB9PCDEOS9rrKaPjlsWApbJ8",
        manufacturer: "Казахстан, Петровавловск",
        date: "03.06.2022",
    },
    {
        id: 8,
        name: "Хлеб",
        description: "Хлеб Бородинский первый сорт",
        price: 120,
        metrics: "г",
        weight: 420,
        photo: "https://avatars.mds.yandex.net/i?id=806e2f32107af511d2109cffcef414fe-7047298-images-thumbs&n=13&exp=1",
        manufacturer: "Казахстан, Астана",
        date: "04.06.2022",
    },
    {
        id: 9,
        name: "Картофель",
        description: "Красный картофель",
        price: 240,
        metrics: "кг",
        weight: 1,
        photo: "https://avatars.mds.yandex.net/i?id=98744d63ee02ac066a5e145fa6a7e83d-5357509-images-thumbs&n=13&exp=1",
        manufacturer: "Казахстан, Оскемен",
        date: "22.04.2022",
    },
    {
        id: 10,
        name: "Лук",
        description: "Фиолетовый лук",
        price: 280,
        metrics: "кг",
        weight: 1,
        photo: "https://avatars.mds.yandex.net/i?id=e4b7542025e8754776c85a194c080d5c-7011736-images-thumbs&n=13&exp=1",
        manufacturer: "Казахстан, Астана",
        date: "10.03.2022",
    },
    {
        id: 11,
        name: "Масло",
        description: "Масло сливочное Маслодел 72%",
        price: 4200,
        metrics: "кг",
        weight: 1,
        photo: "https://yandex-images.clstorage.net/qHAK56129/9f833bA5/BlJkGD7Tw6Dsw-_QQTNwrB8R0unfSqjXK2xowxJRzcZFylaJSSBjVgWtS-eK662fG50GudjUr2ujhnOtBkGhSIMmURwqEnJEHGP_0HHj4RyPYWJpL8rpl1tJ7bKiFHmGkJ6X2RwG1eEXrw1lWYkKrdzphryo8f7fBlLgS7aV5t9EwXcrvOIDpayzXibyICF9DtCGSi0ojqV8bmslgEc6IwG8Zp2Ld-Vhl0xN99q56UwveTWf6ACuywRwc0jidBasldNEq0xRcFScg26GgGNBzk9z1yq_2R5nH8-YdiEVOyIwT1W8KXSk48fMbvcImcjN_IqWL2jjXSsUIwCqoOf271ayNUn8Q9IGbILPxuGAcQ1P4NWoTHjPhP--qfTjNEnBkvyUn9nlBWF3LmxmOhlaf_97lD6YwC5L1nIBaBG2VI2komVKfFCyZ3zhbKQj49Fs_zK2i39ajLSO3nu3whc7IlCsZh-p1eYwhNxfhNmbav4vK4YvyJEdSTQRU0oR9aSuZQPlah3T4wQcsrxGA_JwPn1x1FnOGHxnLh27xdK0KEFQnpYOemSmoZScHLVoW6qtfWlGDNkhb9iW88LZwMdkvubxZEuMsjHEjOMN5mBRQj3foXbb_0iPda6Ma6XyRLohUZyWn9hHZpKF_zz3GEq4TZy7lD1ro417FZJTOmLUlV-k4HcrreGgVNwgPnUi0HIMPdM2yU4rfFecfJjm46WaAzHP1Z37NlbxFC2t9Kk4Gv0syYQdOmI960VjktjghEdd5COGec5QERbc8TxHsPPADk3wlvgsix717Gxr1VDGamPwHnYeabUGM1atj4aI6cufDJsk_luTnzql0TKLQqTkrUaRtFmdoHDXHnKd9BIwY9yOwgRYDbueRswP6tQiZJqhw1_X31t2huOHHq43OmnL7lx6Zh96Y227JZISKwKH5K9FQBRpL9Ai9ryhztXDw_J8TzAWiA4JT7d-Dpn0YxeqM",
        manufacturer: "Казахстан, Алматы",
        date: "14.06.2022",
    },
    {
        id: 12,
        name: "Мед",
        description: "Мед гречишный 100%",
        price: 2400,
        metrics: "кг",
        weight: 1,
        photo: "https://avatars.mds.yandex.net/i?id=75d4eef7c74613698e1f46379a1a0aa8-5291270-images-thumbs&n=13&exp=1",
        manufacturer: "Казахстан, Алтай",
        date: "30.05.2021",
    },
    {
        id: 13,
        name: "Молоко",
        description: "Молоко 'Деп' 7.2%",
        price: 620,
        metrics: "л",
        weight: 1,
        photo: "https://avatars.mds.yandex.net/i?id=30f7e0825476966f28841269ee3cad30-5178205-images-thumbs&n=13&exp=1",
        manufacturer: "Казахстан, Караганды",
        date: "01.07.2022",
    },
    {
        id: 14,
        name: "Хлеб",
        description: "Батон нарезной высший сорт",
        price: 220,
        metrics: "г",
        weight: 400,
        photo: "https://yandex-images.clstorage.net/qHAK56129/9f833bA5/BlJkGD7Tw6Dsw-_QQTNwrB8R0unfSqjXK2xowxdkneYgqpaZuQCjg1DIq7Ka-7j_W51WuVj0ig52ttYtNkGxmMN2EVzqEnJEHGP_0HHj4RyPYWJpL8rpl1tJ7bKiFHmGkJ6X2RwG1eEXrw1lWYkKrdzphryo8f7fBlLgS7aV5t9EwXcrvOIDpayzXibyICF9DtCGSi0ojqV8bmslgEc6IwG8Zp2Ld-Vhl0xN99q56UwveTWf6ACuywRwc0jidBasldNEq0xRcFScg26GgGNBzk9z1yq_2R5nH8-YdiEVOyIwT1W8KXSk48fMbvcImcjN_IqWL2jjXSsUIwCqoOf271ayNUn8Q9IGbILPxuGAcQ1P4NWoTHjPhP--qfTjNEnBkvyUn9nlBWF3LmxmOhlaf_97lD6YwC5L1nIBaBG2VI2komVKfFCyZ3zhbKQj49Fs_zK2i39ajLSO3nu3whc7IlCsZh-p1eYwhNxfhNmbav4vK4YvyJEdSTQRU0oR9aSuZQPlah3T4wQcsrxGA_JwPn1x1FnOGHxnLh27xdK0KEFQnpYOemSmoZScHLVoW6qtfWlGDNkhb9iW88LZwMdkvubxZEuMsjHEjOMN5mBRQj3foXbb_0iPda6Ma6XyRLohUZyWn9hHZpKF_zz3GEq4TZy7lD1ro417FZJTOmLUlV-k4HcrreGgVNwgPnUi0HIMPdM2yU4rfFecfJjm46WaAzHP1Z37NlbxFC2t9Kk4Gv0syYQdOmI960VjktjghEdd5COGec5QERbc8TxHsPPADk3wlvgsix717Gxr1VDGamPwHnYeabUGM1atj4aI6cufDJsk_luTnzql0TKLQqTkrUaRtFmdoHDXHnKd9BIwY9yOwgRYDbueRswP6tQiZJqhw1_X31t2huOHHq43OmnL7lx6Zh96Y227JZISKwKH5K9FQBRpL9Ai9ryhztXDw_J8TzAWiA4JT7d-Dpn0YxeqM",
        manufacturer: "Казахстан, Астана",
        date: "05.07.2022",
    },
    {
        id: 15,
        name: "Картофель",
        description: "Родриго картофель",
        price: 800,
        metrics: "кг",
        weight: 1,
        photo: "https://avatars.mds.yandex.net/i?id=85d4dc737f147d3df62ed04b7395314e-6620871-images-thumbs&n=13&exp=1",
        manufacturer: "Россия, Омск",
        date: "30.03.2022",
    },
    {
        id: 16,
        name: "Лук",
        description: "Порей лук",
        price: 300,
        metrics: "кг",
        weight: 1,
        photo: "https://yandex-images.clstorage.net/qHAK56129/9f833bA5/BlJkGD7Tw6Dsw-_QQTNwrB8R0unfSqjXK2xowxcRPcZg-haMiVAmdnCovvef7h3Pe20T6Q2R-ivDptY9ZkGhuJNGEVxKEnJEHGP_0HHj4RyPYWJpL8rpl1tJ7bKiFHmGkJ6X2RwG1eEXrw1lWYkKrdzphryo8f7fBlLgS7aV5t9EwXcrvOIDpayzXibyICF9DtCGSi0ojqV8bmslgEc6IwG8Zp2Ld-Vhl0xN99q56UwveTWf6ACuywRwc0jidBasldNEq0xRcFScg26GgGNBzk9z1yq_2R5nH8-YdiEVOyIwT1W8KXSk48fMbvcImcjN_IqWL2jjXSsUIwCqoOf271ayNUn8Q9IGbILPxuGAcQ1P4NWoTHjPhP--qfTjNEnBkvyUn9nlBWF3LmxmOhlaf_97lD6YwC5L1nIBaBG2VI2komVKfFCyZ3zhbKQj49Fs_zK2i39ajLSO3nu3whc7IlCsZh-p1eYwhNxfhNmbav4vK4YvyJEdSTQRU0oR9aSuZQPlah3T4wQcsrxGA_JwPn1x1FnOGHxnLh27xdK0KEFQnpYOemSmoZScHLVoW6qtfWlGDNkhb9iW88LZwMdkvubxZEuMsjHEjOMN5mBRQj3foXbb_0iPda6Ma6XyRLohUZyWn9hHZpKF_zz3GEq4TZy7lD1ro417FZJTOmLUlV-k4HcrreGgVNwgPnUi0HIMPdM2yU4rfFecfJjm46WaAzHP1Z37NlbxFC2t9Kk4Gv0syYQdOmI960VjktjghEdd5COGec5QERbc8TxHsPPADk3wlvgsix717Gxr1VDGamPwHnYeabUGM1atj4aI6cufDJsk_luTnzql0TKLQqTkrUaRtFmdoHDXHnKd9BIwY9yOwgRYDbueRswP6tQiZJqhw1_X31t2huOHHq43OmnL7lx6Zh96Y227JZISKwKH5K9FQBRpL9Ai9ryhztXDw_J8TzAWiA4JT7d-Dpn0YxeqM",
        manufacturer: "Казахстан, Шымкент",
        date: "15.04.2022",
    },
    {
        id: 17,
        name: "Масло",
        description: "Масло подсолнечное Олейна",
        price: 2500,
        metrics: "кг",
        weight: 1,
        photo: "https://avatars.mds.yandex.net/i?id=163ac0b387025995b7a213d713541140-5349714-images-thumbs&n=13&exp=1",
        manufacturer: "Россия, Москва",
        date: "05.01.2022",
    },
    {
        id: 18,
        name: "Мед",
        description: "Мед Башкирский 100%",
        price: 5000,
        metrics: "кг",
        weight: 1,
        photo: "https://avatars.mds.yandex.net/i?id=1e4553cff31bf83c1f4e4e2ba650b966-5875821-images-thumbs&n=13&exp=1",
        manufacturer: "Башкирия, Уфа",
        date: "20.02.2022",
    },
]

export const getProducts = () => {

    return products;
}

export const getProduct = (id) => {

    return products[id - 1];
}

export const getProductBySearch = (value) => {
    let tmp = [];
    console.log("value = " + typeof(String(value)));

    products.forEach(item => {
        console.log("item.name = " + typeof(String(item.name)));
        if (item.name.toLowerCase().includes(String(value.toLowerCase()))) {
            tmp.push(item);
        }
    })
    return tmp;
} 
