import axios from 'axios'

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

async function fetchNewsList() {
    /* return axios.get(config.baseUrl + '/news/1.json'); */

    try {
        return axios.get(`${config.baseUrl}news/1.json`);
    } catch(error) {
        console.log(error);
    }
}

async function fetchAskList() {
    try {
        return axios.get(`${config.baseUrl}ask/1.json`);
    } catch (error) {
        console.log(error);
    }
}

async function fetchJobsList() {
    try {
        return axios.get(`${config.baseUrl}jobs/1.json`); 
    } catch (error) {
        console.log(error);
    }
}

// news, ask, jobs 한방에
async function fetchList(pageName) {
    try {
        return axios.get(`${config.baseUrl}${pageName}/1.json`);
    } catch (error) {
        console.log(error);
    }
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchItemInfo(id) {
    return axios.get(`${config.baseUrl}item/${id}.json`);
}

export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchList,
    fetchUserInfo,
    fetchItemInfo
}