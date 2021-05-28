import Axios from 'axios'

const axios = Axios;

const api = Axios.create({
    baseURL: '/'
});

const models = {}

const generateModels = (configModels) => {

    configModels.forEach(model => {
        models[model] = {
            find(params = ''){
                return api.get(`/${model}${params}`)
            },
            findone(id){
                return api.get(`/${model}/${id}`)
            },
            count(params = ''){
                return api.get(`/${model}/count${params}`)
            },
            create(data){
                return api.post(`/${model}`, data)
            },
            update(id, data){
                return api.put(`/${model}/${id}`, data)
            },
            delete(id){
                return api.delete(`/${model}/${id}`)
            },
            ...api
        }
    })
}


export function useApi(){
    return { api, axios, models }
}

export default {
    install: (app, options = {defaults: {}, models: ['users']}) => {

        if(options.defaults){
            api.defaults = Object.assign(api.defaults, options.defaults);
        }

        if(options.models){
            generateModels(options.models)
        }else{
            generateModels(['users'])
        }

        app.config.globalProperties.$api = api;
        app.config.globalProperties.$axios = axios;
        app.config.globalProperties.$models = models;
    }
}
