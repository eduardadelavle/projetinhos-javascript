
const botao = 
         document.querySelector ('button')

botao.onclick = () => {
  
  var anosLuz  =      Number(document.querySelector('input').                 
             value.replace(',','.'))
  
 document.querySelector('h2').innerHTML = ':'+(anosLuz *  9460536068 + " Distância em Km")
  
}