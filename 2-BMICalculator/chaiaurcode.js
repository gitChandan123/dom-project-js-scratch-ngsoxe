const form = document.querySelector('form')


form.addEventListener('submit',function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')

  if(height<0 || height==='' || isNaN(height)){
    result.innerHTML = `Please give a valid height ${height}`
  }else if(weight<0 || weight==='' || isNaN(weight)){
    result.innerHTML = `Please give a valid weight ${weight}`
  }else{

    const res = (weight/(height*height/1000)).toFixed(2)
    result.innerText = res;

  }
})