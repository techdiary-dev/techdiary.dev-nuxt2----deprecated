import bnNum from 'bnnum'

export default {
  methods: {
    reactedByMe(reaction_type) {
      if (!this.$auth.loggedIn) return false
      return (
        this.reactions &&
        this.reactions[reaction_type] &&
        this.reactions[reaction_type].reactors.includes(this.$auth.user.id)
      )
    },
    async doReact(reaction_type, article_slug) {
      if (!this.$auth.loggedIn) {
        this.$store.commit('alert/ERROR_ALERT', 'আপনি লগইন অবস্থায় নেই')
        return
      }

      if (!this.reactions || !this.reactions.hasOwnProperty(reaction_type)) {
        let reactions = {
          [reaction_type]: {
            count: 0,
            reactors: [],
          },
        }
        this.reactions = { ...reactions, ...this.reactions }
      }

      if (this.reactions[reaction_type].reactors.includes(this.$auth.user.id)) {
        // remove me from reactors and decrement count
        --this.reactions[reaction_type].count
        this.reactions[reaction_type].reactors = this.reactions[
          reaction_type
        ].reactors.filter((uid) => uid !== this.$auth.user.id)
      } else {
        // add me from reactors and increment count
        ++this.reactions[reaction_type].count
        this.reactions[reaction_type].reactors.push(this.$auth.user.id)
      }

      const { reactions } = await this.$axios.$post(
        `api/articles/${article_slug}/reaction`,
        {
          reaction_type,
        }
      )

      this.reactions = reactions
    },

    reactionCount(reaction_type) {
      if (this.reactions && reaction_type in this.reactions) {
        return bnNum(this.reactions[reaction_type].count, true)
      }

      return bnNum(0)
    },
  },
}
