let ArrayLista = []

function enviar(e) {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    var lista = formData.get('fname')

    ArrayLista.push(lista)
    localStorage.setItem('Lista de tarefas', JSON.stringify(ArrayLista))
    document.getElementById('lista').insertAdjacentHTML("beforebegin",lista + "<br>") 
    console.log(ArrayLista)
    
  }