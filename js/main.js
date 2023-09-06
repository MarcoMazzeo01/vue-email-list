const {createApp} = Vue;

const emailAPI = createApp({
    data() {
        return {
            emails: [],
            maxEmails: 10,
        }
    },

    mounted() {

        for (i=0; i < this.maxEmails; i++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                this.emails.push(response.data.response)
            })
        }


    }
}).mount("#emailAPI")