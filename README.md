# vue3-plugin-api-strapi

Simple Vue3 plugin connect api and strapi. Power by axios.

---

## Install

`npm install vue3-plugin-api-strapi --save`

or

`yarn add vue3-plugin-api-strapi`

`edit file src/main.js`

```js
import api from 'vue3-plugin-api-strapi'

const app = createApp(App);

app.use(api, {
    defaults: {
        baseURL: 'http://localhost:1337'
    },
    models: ['users']
})

app.mount('#app')
```

---

## Get started

### Vue options api

```js
this.$axios //axios instance
this.$api // new axios instance api set BaseUrl in options by plugin
this.$models[model_name] // Strapi endpoins ['find', 'findone', 'count', 'create', 'update', 'delete']
```

### Vue composition api

```vue
<template>
    ...
</template>

<script>
import { useApi } from 'vue3-plugin-api-strapi'

export default{
    setup(){
        const { axios, api, models } = useApi()
    }
}
</script>
```
