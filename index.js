const main = document.querySelector('#main');


for(let i = 0; i < 3; i++){
  
  const article = `<article>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqi7lpnqg0qzQI_iWmPcrI6L3PVVn-CtfEaw&usqp=CAU">
    <h3>Lorem Ipsum</h3>
    <p>Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов</p>
    <button>Создать</button>
  </article>`

  main.innerHTML += article;
}