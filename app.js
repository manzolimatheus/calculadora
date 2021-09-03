const Calculadora = {
  data() {
    return {
      valor_visor: "",
    };
  },
  methods: {
    Calcular() {
      try {
        this.valor_visor = eval(this.valor_visor);
      } catch (error) {
        this.valor_visor = "Operação inválida!";
      }
    },
    Adicionar(string) {
      this.valor_visor += string;
    },
    Limpar() {
      this.valor_visor = "";
    },
    Raiz() {
      let resultado = Math.sqrt(this.valor_visor);

      if (isNaN(resultado)) {
        this.valor_visor = "Operação inválida!";
      } else {
        this.valor_visor = resultado;
      }
    },
  },
  computed: {
    AnoAtual() {
      const data = new Date();
      const ano = data.getFullYear();

      return ano;
    },
  },
};

Vue.createApp(Calculadora).mount("#app");
