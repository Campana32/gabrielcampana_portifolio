document.addEventListener('DOMContentLoaded', () =>{
    new TypeIt('.animacao', {
        speed: 200,
        loop: true,
    })
    .type('Front-end', {delay: 1500})
    .delete(9)
    .type('Web', {delay: 1500})
    .delete(3)

    .go()
})