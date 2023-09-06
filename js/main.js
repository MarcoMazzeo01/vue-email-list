const {createApp} = Vue;

const emailAPI = createApp({
    data() {
        return {
            emails: [],
            maxEmails: 10,
        }
    },

    mounted() {
        const emails = []

        for (i=0; i < this.maxEmails; i++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(emails)
                emails.push(response.data.response)

                if (emails.length >= (this.maxEmails)) {
                    console.log("Emails obtained.")
                    this.emails = [...emails]
                }
            })
        }

  


    }
}).mount("#emailAPI")