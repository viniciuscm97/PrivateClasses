const modalOverlay = document.querySelector('.modal-overlay')

const cards = document.querySelectorAll('.card-courses')

for( let card of cards){
    card.addEventListener('click', function(){
        const linkId = card.getAttribute('id')
        window.location.href = `/courses/${linkId}`
        
    })
}
