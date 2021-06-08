<template>
  <section>
      <h2>User Details</h2>
        <ul v-if="person && person.name">
            <li>Name: {{ person.name }}</li>
            <li>e-mail: {{ person.email }}</li>
            <li>Username: {{ person.username }}</li>
            <li>Website: {{ person.website }}</li>

        </ul>
      <p>{{ message }}</p>
  </section>
</template>

<script>
import axios from 'axios'

export default {
    name: 'UserDetail',
    created() {
        // get user detail 
        console.log(this.$route.params.id)
        this.getUserDetail(this.$route.params.id)
    },
    data: () => ({
        person: {},
        message: ''
    }),
    methods: {
        getUserDetail(id) {
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(result => {
                console.log('details', result.data);
                this.person = result.data
            }).catch(() => {
                this.message = 'Fant ikke noe bruker med dette brukernavnet'
            })
        }
    }
}
</script>

<style>

</style>