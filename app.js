const vm = new Vue({
  el: '#app',
  data() {
    return {
      card: {
        code: '0000 0000 0000 1234',
        name: 'edouard herrengt',
        date: '01/24',
        cvv: '977',
      },
      /* Form inputs*/
      owner: '',
      number: '',
      month: '',
      year: '',
      cvv: '',
      errMsg: true,
    };
  },
  methods: {
    submitForm() {
      console.log(this.owner, this.number, this.cvv);
    },
  },
});
