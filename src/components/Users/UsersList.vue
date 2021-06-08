<template>
  <div>
        <ul>
            <li v-for="(user, index) in users" :key="user + index">
                <span>{{ user.name }} - {{ user.email }} </span>
                <router-link :to="`/users/${user.id}`">Gå til detaljer</router-link>
            </li>
        </ul>

        <slot></slot>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'UsersList',
    created() {
        this.getUsers()
    },
    data: () => ({
        users: []
    }),
    methods: {
        getUsers() {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(result => {
                    console.log('resultat', result)
                    this.users = result.data
                }).catch(error => {
                    console.log('error', error)
                })
        }
    }
}
</script>

<style>

</style>