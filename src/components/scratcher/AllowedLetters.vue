<template>
  <div class="allowed-letters-section">
    <v-row>
      <v-col class="mx-4" v-for="letter in lettersWithStyle" :key="letter.letter"
        :class="{allowed : letter.isAllowed, 'not-allowed': !letter.isAllowed}"
      >
        {{ letter.letter }}
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          id="allowed-letters-input"
          v-model="allowedLettersInput"
          label="Your Letters"
        />

      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  props: {
    letters: { type: Array, required: true},
    // allowedLetters: { type: Array, required: true},
  },
  data: () => ({
    allowedLettersInput: undefined,
  }),
  watch: {
    allowedLetters(newValue) {
      this.$emit('allowed-updated', newValue)
    }
  },
  computed: {
    allowedLetters () {
      if (this.allowedLettersInput === undefined) {
        return new Set()
      }
      const letters = this.allowedLettersInput.toUpperCase().replace(/[^A-Z]/gi, '')
      const letterSet = new Set(letters.split(''))
      return letterSet
    },
    lettersWithStyle () {
      // Allow "All" letters if none are entered
      if (this.allowedLetters.size === 0) {
        return this.letters.map(letter => {
          return {
            letter: letter,
            isAllowed: true
          }
        })
      }


      return this.letters.map(letter => {
        const isAllowed = this.allowedLetters.has(letter)
        return {
          letter: letter,
          isAllowed: isAllowed
        }
      })
    }
  },
}
</script>
<style scoped lang="scss">

  .allowed {
    color: #000000;
  }
  .not-allowed {
    color: red;
    text-decoration: line-through;
  }
</style>
