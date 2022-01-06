<template>
  <div class="word-checker-outer">
  <div class="word-checker">
    <h1 class="ma-4">Scratcher Word Check</h1>
    <allowed-letters class="mb-3"
      :letters="allLetters"
      @allowed-updated="e => allowedLetters = e"
    />
    <word-list
      :allowed-letters="allowedLetters"

    />
    </div>
  </div>
</template>
<script>
import AllowedLetters from '@/components/scratcher/AllowedLetters'
import WordList from '@/components/scratcher/WordList'
export default {
  components: {WordList, AllowedLetters},
  data: () => ({
    allowedLetters: new Set(),
  }),
  computed: {
    allLetters () {
      return [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
        'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.word-checker {
  max-width: 800px;
  margin: 0 auto
}
.word-checker-outer {
  max-width: 90%;
  margin: 0 auto
}
</style>

