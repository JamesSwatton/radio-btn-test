document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript loaded')

  const formContainer = document.querySelector('#form')
  formContainer.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target.drink.value)
  })
})
