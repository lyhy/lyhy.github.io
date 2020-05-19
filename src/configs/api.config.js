const APIConfig = {
    corsDomain: 'https://cors-anywhere.herokuapp.com/',
    options: {
        crossDomain: true,
        withCredentials: false,
        headers: {'x-requested-with': 'XMLHttpRequest'},
        method: 'GET',
        responseType: 'json',
        timeout: 0,
        createXHR: function () {
            return new XMLHttpRequest();
        }
    },

    getConfig (url){
        return {
            ...APIConfig.options,
            url: APIConfig.corsDomain + url
        }
    },
    

    //endpoints
    endpoints: {
        GIT_USERS: 'https://api.github.com/users'
    }

}

export default APIConfig

