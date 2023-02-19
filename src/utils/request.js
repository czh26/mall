import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.fastmock.site/mock/da93472fba0eef3a73891c0459778e5a/mall',
    timeout: 10000
})
export const get = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        instance.get(url, { params }, {
        }).then((res) => {
            resolve(res)
        }), err => {
            reject(err)
        }
    })
}
export const post = (url, data) => {
    return new Promise((resolve, reject) => {
        instance.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            resolve(res)
        }), err => {
            reject(err)
        }
    })
}