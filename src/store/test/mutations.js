export default {
  testNumber(state) {
    state.testNumber ++;
  },

  testStringMutations(state, val) {
    state.testString = state.testString + "测试getter"+val;
  },

  testArray(state) {
    state.testArray.push("111");
  },

  testObject(state) {
    state.testObject= {
      id:"1",
      name:'22'
    };
  },
  testBoolean(state) {
    state.testBoolean = !state.testBoolean;
  },

}
