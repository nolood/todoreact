
const UseFetchData = (url, options) => {
    return fetch(url, options).then((response) => response.json())
}

export default UseFetchData;
