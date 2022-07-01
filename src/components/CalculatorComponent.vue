<template class="calculator">
  <body class="calculator">
    <div class="text-container">
      <text class="calculation-history-output">{{ currentCalculationDisplay }}</text>
      <br>
      <text class="calculation-output">{{ currentCalculatorValue }}</text>
    </div>
    <div class="flex-container">
      <button class="calculator-button"></button>
      <button @click="executeCE()" class="calculator-button">CE</button>
      <button @click="executeC()" class="calculator-button">C</button>
      <button @click="executeBack()" class="calculator-button">Back</button>
    </div>
    <div class="flex-container">
      <button @click="addNumber('7')" class="calculator-button">7</button>
      <button @click="addNumber('8')" class="calculator-button">8</button>
      <button @click="addNumber('9')" class="calculator-button">9</button>
      <button @click="calculation('*')" class="calculator-button">X</button>
    </div>
    <div class="flex-container">
      <button @click="addNumber('4')" class="calculator-button">4</button>
      <button @click="addNumber('5')" class="calculator-button">5</button>
      <button @click="addNumber('6')" class="calculator-button">6</button>
      <button @click="calculation('-')" class="calculator-button">-</button>
    </div>
    <div class="flex-container">
      <button @click="addNumber('1')" class="calculator-button">1</button>
      <button @click="addNumber('2')" class="calculator-button">2</button>
      <button @click="addNumber('3')" class="calculator-button">3</button>
      <button @click="calculation('+')" class="calculator-button">+</button>
    </div>
    <div class="flex-container">
      <button @click="calculation('/')" class="calculator-button">/</button>
      <button @click="addNumber('0')" class="calculator-button">0</button>
      <button @click="addComma()" class="calculator-button">,</button>
      <button @click="calculate()" class="calculator-button">=</button>
    </div>
  </body>
</template>

<script>
export default {
  name: 'CalculatorPage',
  setup(){
  },

  data() {
    let currentCalculationDisplay = '';
    let currentCalculatorValue = '0';
    let previousCalculatorValue = '';
    let calculatorAction = '';
    
    return {  
      currentCalculationDisplay,
      currentCalculatorValue,
      previousCalculatorValue,
      calculatorAction,
    }
  },

  methods: {
    addNumber(input) {
      // Removes initial 0 if first input
      if (this.currentCalculatorValue == '0') {
        this.currentCalculatorValue = '';
      }

      this.currentCalculatorValue += input;
    },

    addComma() {
      if (this.currentCalculatorValue.includes('.')) {
        console.log('Only one comma allowed');
      }

      else {
        this.currentCalculatorValue = this.currentCalculatorValue + '.';
      }
    },

    executeCE() {
      this.currentCalculatorValue = '0';
    },

    executeC() {
      this.currentCalculationDisplay = '';
      this.currentCalculatorValue = '0';
      this.previousCalculatorValue = '';
      this.calculatorAction = '';
    },

    executeBack() {
      if (this.currentCalculatorValue != '0') {
        this.currentCalculatorValue = this.currentCalculatorValue.slice(0, this.currentCalculatorValue.length - 1);
        if (this.currentCalculatorValue.length == 0) {
          this.currentCalculatorValue = '0';
        }
      }
    },

    calculate() {
      this.calculation(this.calculatorAction, true);
      this.currentCalculatorValue = this.previousCalculatorValue;
      this.previousCalculatorValue = '';
      this.currentCalculationDisplay = '';
    },

    calculation(newAction, equalSign) {
      // Check if first setup
      if (this.previousCalculatorValue == '') {
        this.calculatorAction = newAction;
        this.previousCalculatorValue = this.currentCalculatorValue;
        this.currentCalculationDisplay = (this.currentCalculatorValue + ' ' + newAction);
        this.currentCalculatorValue = '0';
      } 


      else if (this.currentCalculatorValue == '0' && !equalSign) {
        console.log('Insert number to calculate');
      }

      // Calculate
      else {
        switch (this.calculatorAction) {
          case '+': 
            this.currentCalculatorValue = (parseFloat(this.previousCalculatorValue) + parseFloat(this.currentCalculatorValue));
            this.previousCalculatorValue = this.currentCalculatorValue;

            this.currentCalculationDisplay = (parseFloat(this.currentCalculatorValue) + ' ' + newAction);
            this.currentCalculatorValue = '0';
          break;

          case '-': 
            this.currentCalculatorValue = (parseFloat(this.previousCalculatorValue) - parseFloat(this.currentCalculatorValue));
            this.previousCalculatorValue = this.currentCalculatorValue;

            this.currentCalculationDisplay = (parseFloat(this.currentCalculatorValue) + ' ' + newAction);
            this.currentCalculatorValue = '0';
          break;

          case '*': 
            this.currentCalculatorValue = (parseFloat(this.previousCalculatorValue) * parseFloat(this.currentCalculatorValue));
            this.previousCalculatorValue = this.currentCalculatorValue;

            this.currentCalculationDisplay = (parseFloat(this.currentCalculatorValue) + ' ' + newAction);
            this.currentCalculatorValue = '0';
          break;

          case '/': 
            this.currentCalculatorValue = (parseFloat(this.previousCalculatorValue) / parseFloat(this.currentCalculatorValue));
            this.previousCalculatorValue = this.currentCalculatorValue;

            this.currentCalculationDisplay = (parseFloat(this.currentCalculatorValue) + ' ' + newAction);
            this.currentCalculatorValue = '0';
          break;

          default: 
          break;
        }
        this.calculatorAction = newAction;
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.calculator {
  margin: 10px 10px 10px 10px;
  padding: 0 0 3em 0;
  width: 20em;
  background-color: #457B9D;
}
.calculator-button {
  background: #F2FCEF;
  border: none;
  height: 4em;
  width: 5em;
  margin: 2px;
}
.calculator-button:hover {
  background: #cad1c8;
  border: none;
  height: 4em;
  width: 5em;
  margin: 2px;
}
.calculation-output {
  font-size: 2em;
  margin: 1em;
}
.calculation-history-output {
  font-size: 1em;
  margin: 1em;
}
.text-container {
  margin: 1em;
}
.flex-container {
  display: flex;
  justify-content: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>