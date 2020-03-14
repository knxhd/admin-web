export default {
  testNumber(context, newNumber) {
    context.commit('testNumber', newNumber);
  },

  testStringAction(context, val) {
    context.commit('testStringMutations', val);
  },
}
