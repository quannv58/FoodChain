'use strict';

import {
    URL_UPLOAD_FILE_SERVER, URL_DELETE_FILE_SERVER, BASE_URL,
} from '../config/settings';
import {AsyncStorage} from 'react-native';

export async function POST(url, data) {
    let dataToken = await AsyncStorage.getItem('@MySuperStore:UserToken');
    let userToken = JSON.parse(dataToken)
    console.log('TOKEN', userToken, 'POST ', BASE_URL + url, JSON.stringify(data));
    return new Promise((resolve, reject) => {
        fetch(BASE_URL + url,
            {
                // mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`,
                },
                method: 'POST',
                body: JSON.stringify(data),
            })
            .then((res) => res.json())
            .then((json) => {
                console.log('POST res::', url, json);
                // let response = new BaseResponseModel().parse(json);
                resolve(json);
            })
            .catch((e) => {
                console.log(url, e);
                reject(e);
            });
    });
}

export async function GET(url, data) {
    let dataToken = await AsyncStorage.getItem('@MySuperStore:UserToken');
    let userToken = JSON.parse(dataToken)
    console.log('TOKEN', userToken,'GET ', BASE_URL + url, data);
    return new Promise((resolve, reject) => {
        let params = BASE_URL + url;
        if (data) {
            params += '?';
            let i = 0;
            for (let key in data) {
                if (data[key] != '')
                    if (i != 0)
                        params += '&' + key + '=' + data[key];
                    else
                        params += key + '=' + data[key];
                i++;
            }
        }
        fetch(params,
            {
                // mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`,
                },
                method: 'GET',
            })
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                console.log('GET res::', url, json);
                // let response = new BaseResponseModel().parse(json);
                resolve(json);
            })
            .catch((e) => {
                console.log(url, e);
                reject(e);
            });
    });
}

export async function PUT(url, data) {
    let dataToken = await AsyncStorage.getItem('@MySuperStore:UserToken');
    let userToken = JSON.parse(dataToken)
    console.log('TOKEN', userToken,'PUT ', BASE_URL + url, data);
    return new Promise((resolve, reject) => {
        fetch(BASE_URL + url,
            {
                // mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`,
                },
                method: 'PUT',
                body: JSON.stringify(data),
            })
            .then((res) => res.json())
            .then((json) => {
                console.log('PUT res::', url, json);
                // let response = new BaseResponseModel().parse(json);
                resolve(json);
            })
            .catch((e) => {
                console.log(url, e);
                reject(e);
            });
    });
}

export async function DELETE(url, data) {
    let dataToken = await AsyncStorage.getItem('@MySuperStore:UserToken');
    let userToken = JSON.parse(dataToken)
    return new Promise((resolve, reject) => {
        let params = BASE_URL + url;
        if (data) {
            params += '?';
            let i = 0;
            for (let key in data) {
                if (data[key] != '')
                    if (i != 0)
                        params += '&' + key + '=' + data[key];
                    else
                        params += key + '=' + data[key];
                i++;
            }
        }
        fetch(params,
            {
                // mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`,
                },
                method: 'DELETE',
            })
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                console.log('DELETE res::', url, json);
                // let response = new BaseResponseModel().parse(json);
                resolve(json);
            })
            .catch((e) => {
                console.log(url, e);
                reject(e);
            });
    });
}

export function UPLOAD(files) {
    return new Promise((resolve, reject) => {
        if (!files) {
            resolve({
                'success': true,
                'statusCode': 200,
                'message': 'Upload thành công',
                'data': {
                    'files': [],
                },
            });
            return;
        }

        let formData = new FormData();
        if (files instanceof Array) {
            if (files.length == 0) {
                resolve({
                    'success': true,
                    'statusCode': 200,
                    'message': 'Upload thành công',
                    'data': {
                        'files': [],
                    },
                });
                return;
            }
            for (let i = 0; i < files.length; i++) {
                formData.append('UploadForm[files][]', files[i], files[i].name.replace(/ /gi, '_'));
            }
        } else {
            formData.append('UploadForm[files][]', files, files.name.replace(/ /gi, '_'));
        }

        fetch(URL_UPLOAD_FILE_SERVER, {
            headers: {
                'accept': 'application/json',
            },
            method: 'POST',
            body: formData,
        })
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                resolve(json);
            })
            .catch((e) => {
                reject(e);
            });
    });
}

export function DELETE_FILES(files) {
    console.log('DELETE_FILES ', files);
    return new Promise((resolve, reject) => {
        fetch(URL_DELETE_FILE_SERVER,
            {
                // mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({files}),
            })
            .then((res) => res.json())
            .then((json) => {
                console.log('DELETE_FILES res::', json);
                resolve(json);
            })
            .catch((e) => {
                console.log('/site/del-file', e);
                reject(e);
            });
    });
}
