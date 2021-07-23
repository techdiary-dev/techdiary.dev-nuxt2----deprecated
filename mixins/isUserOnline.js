import { mapState } from 'vuex'

export default {
    data(){
        return {
            online: false
        }
    },
    computed: mapState('onlineusers', ['users']),
    methods: {
        isOnline(username){
            return Boolean(this.users.find(u => u.username === username));
        }
    }
}