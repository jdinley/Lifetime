new Vue({
  el: '.container',

  data: {
    age: '45',
    life: '79',
    show: false,
    ageSize: true,
  },

  computed: {
    weeksAge: function () {
      return parseInt(this.age) * 52
    },
    weeksLife: function () {
      return (parseInt(this.life) * 52) - this.weeksAge
    },
    weeksTotal: function () {
      return parseInt(this.life) * 52
    },
    weeksRemaining: function () {
      return (this.weeksTotal - this.weeksAge)
    },
    yearsRemaining: function () {
      return (this.life - this.age)
    },
    ageLength: function () {
      return this.age.length
    },
  }
})