export default {
  methods: {
    helper_validEmail(email) {
      let re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    helper_scrollToElement(sectionId) {
      if (this.$route.path == "/") {
        const el = document.querySelector(`${sectionId}`);
        console.log(el);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        new Promise((resolve, reject) => {
          resolve(this.$router.push("/"));
          console.log(reject);
        }).then((res) => {
          setTimeout(() => {
            const el = document.querySelector(`${sectionId}`);
            console.log(el,res);
            el.scrollIntoView({ behavior: "smooth" });
          }, 2000);
        });
      }
    },
  },
};
