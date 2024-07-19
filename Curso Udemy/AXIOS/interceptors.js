// requisição
postsFetch.interceptors.request.use(
    function (config) {
        console.log("Antes da requisição...")
        return config

    },
    function (error) {
        return Promise.reject(error)
    }
)

//resposta
postsFetch.interceptors.response.use(
    function (config) {
        console.log("Antes da resposta...")
        return config

    },
    function (error) {
        return Promise.reject(error)
    }
)