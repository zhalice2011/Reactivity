const { reactive, computed, effect } = window.VueReactivity
const state = reactive({
  counter: 0,
  label: computed(() => 
  `${state.counter} click${state.counter === 1 ? '' : 's'}`)
})
effect(() => {
  const counter = document.querySelector('#counter')
  counter.innerHTML = state.label
})
window.addEventListener('load', () => {
  const button = document.querySelector('#btn')
  button.addEventListener('click', () => {
    state.counter++
  })
})
