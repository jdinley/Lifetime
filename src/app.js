import Vue from "vue";

new Vue({
	el: "#app",

	data: {
		age: "45",
		life: "82",
		show: false,
		ageSize: true,
		months: 52.143
	},

	computed: {
		weeksAge: function() {
			return Math.round(parseInt(this.age) * this.months);
		},
		weeksLife: function() {
			return Math.round(parseInt(this.life) * 52.143 - this.weeksAge);
		},
		weeksTotal: function() {
			return Math.round(parseInt(this.life) * 52.143);
		},
		weeksRemaining: function() {
			return this.weeksTotal - this.weeksAge;
		},
		yearsRemaining: function() {
			return this.life - this.age;
		},
		monthsInYear: function() {
			return Math.round(parseInt(this.age) * 12);
		},
		ageLength: function() {
			return this.age.length;
		}
	}
});
