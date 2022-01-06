<template>
  <div class="word-list-section">
    <h3>Word List</h3>
    <p>Type the words here and the app will determine if they are winners.</p>
    <p>A word is a winner when all of the letters exist in your letters. </p>
    <p>Put a space between each word</p>
    <v-row>
      <v-col>
        <v-text-field
          id="word-list"
          v-model="wordsInput"
          label="Word List"
        />

      </v-col>
    </v-row>
    <v-row>
      <v-col>Number of Words: {{numberOfWords}} </v-col>
      <v-col>Number of Winners:  {{numberOfWinners}} </v-col>
    </v-row>
    <v-row>
      <v-col class="mx-4" v-for="word in allWords" :key="word"
      >
        {{ word }}
      </v-col>
    </v-row>

    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th>Good Words</th>
          <th>Bad Words</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="row in rows" :key="row.badWord">
          <td>{{row.goodWord}}</td>
          <td>{{row.badWord}}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>

  </div>
</template>
<script>
export default {
  props: {
    allowedLetters: { type: Set, required: true},
  },
  data: () => ({
    wordsInput: undefined,
  }),
  watch: {
  },
  computed: {
    allWords () {
      if (this.wordsInput === undefined) {
        return []
      }
      return this.wordsInput.split(' ').filter(w => !!w).map(w => w.toUpperCase())
    },
    goodWords () {
      if (this.allowedLetters === undefined || this.allowedLetters.length === 0) {
        return this.allWords
      }
      return this.allWords.filter(w => {
        const letters = w.split('')
        return letters.every(letter => this.allowedLetters.has(letter))
      })
    },
    badWords () {
      if (this.allowedLetters === undefined || this.allowedLetters.length ===0) {
        return []
      }
      return this.allWords.filter(word => !this.goodWords.includes(word))
    },
    rows () {
      const rows = []
      if (this.goodWords.length > this.badWords.length) {
        for (let i = 0; i < this.goodWords.length; i++) {
          const badWord = this.badWords.length > i ? this.badWords[i] : undefined
          rows.push({
            goodWord: this.goodWords[i],
            badWord: badWord,
          })
        }
      } else {
        for (let i = 0; i < this.badWords.length; i++) {
          console.log(this.goodWords)
          const goodWord = this.goodWords.length > i ? this.goodWords[i] : undefined
          rows.push({
            goodWord: goodWord,
            badWord: this.badWords[i],
          })
        }
      }
      return rows
    },
    numberOfWords () {
      return this.allWords.length
    },
    numberOfWinners () {
      return this.goodWords.length
    },
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
