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
      expDate: '',
      cvv: '',
      errMsg: false,
    };
  },
});
