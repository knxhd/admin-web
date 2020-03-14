export default {
  testNumber(state) {
   return  state.testNumber +1
  },
  getTestString(state) {
    return state.testString +"测试getter"
  },
  testArray(state) {
    state.testArray.push("111");
    return state.testArray;
  },
  testObject(state) {
    state.testObject= {
      id:"1",
      name:'22'
    };
    return state.testObject;
  },
  testBoolean(state) {
    return !state.testBoolean;
  },
  /*testNumber1:(state) => (newNumber) => {
    state.testNumber += newNumber;
    return  state.testNumber;
  },
  testString1: (state) => (newString)  => {
    return state.testString + newString;
  },

  testArray1 : (state) => (newArray) => {
    state.testArray.push(newArray);
    return state.testArray;
  },*/
}
