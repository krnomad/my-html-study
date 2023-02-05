addEventListener('mousemove', (ev) => {
    // change the position of the target element to the mouse position
    // get the mouse position, and print it to the console
    console.log(ev.clientX, ev.clientY)

    // calculate the size of span of which class name is target
    const target = document.querySelector('.target')
    const targetRect = target.getBoundingClientRect()

    // select target element, and change position to mouse position
    document.querySelector('.target').style.left = ev.clientX-targetRect.width/2 + 'px'
    document.querySelector('.target').style.top = ev.clientY-targetRect.height/2 + 'px'

    // change the position of the horizontal line to the mouse position
    document.querySelector('.horizontal').style.top = ev.clientY + 'px'

    // change the position of the vertical line to the mouse position
    document.querySelector('.vertical').style.left = ev.clientX + 'px'
})