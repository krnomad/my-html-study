addEventListener('mousemove', (ev) => {
    // change the position of the target element to the mouse position
    // get the mouse position, and print it to the console
    console.log(ev.clientX, ev.clientY)

    // calculate the size of span of which class name is target
    const target = document.querySelector('.target')
    const targetRect = target.getBoundingClientRect()

    const positionX = ev.clientX - targetRect.width / 2
    const positionY = ev.clientY - targetRect.height / 2

    // select target element, and change position to mouse position
    target.style.left = positionX + 'px'
    target.style.top = positionY + 'px'

    // change the position of the horizontal line to the mouse position
    document.querySelector('.horizontal').style.top = ev.clientY + 'px'

    // change the position of the vertical line to the mouse position
    document.querySelector('.vertical').style.left = ev.clientX + 'px'

    const stringTarget = document.querySelector('.stringTarget')
    stringTarget.textContent = `(${ev.clientX}, ${ev.clientY})`
    stringTarget.style.left = (ev.clientX) + 'px'
    stringTarget.style.top = ev.clientY + 'px'
})