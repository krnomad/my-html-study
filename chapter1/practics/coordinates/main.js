addEventListener('load', () => {
    // calculate the size of span of which class name is target
    const target = document.querySelector('.target')
    const targetRect = target.getBoundingClientRect()

    const horizontal = document.querySelector('.horizontal')
    const vertical = document.querySelector('.vertical')
    const stringTarget = document.querySelector('.stringTarget')

    // initialize the position of the target element to the center of the screen
    target.style.transform = `translate(-${targetRect.width / 2}px, -${targetRect.height / 2}px)`

    addEventListener('mousemove', (ev) => {
        // change the position of the target element to the mouse position
        // get the mouse position, and print it to the console
        console.log(ev.clientX, ev.clientY)
    
        const positionX = ev.clientX - targetRect.width / 2
        const positionY = ev.clientY - targetRect.height / 2
    
        // select target element, and change position to mouse position using left, top - low performance
        // target.style.left = positionX + 'px'
        // target.style.top = positionY + 'px'
        // change position to mouse position using transform - high performance
        target.style.transform = `translate(${positionX}px, ${positionY}px)`
        // horizontal.style.top = ev.clientY + 'px'
        horizontal.style.transform = `translateY(${ev.clientY}px)`
    
        
        // change the position of the vertical line to the mouse position
        // vertical.style.left = ev.clientX + 'px'
        vertical.style.transform = `translateX(${ev.clientX}px)`
    
        
        stringTarget.textContent = `(${ev.clientX}, ${ev.clientY})`
        stringTarget.style.transform = `translate(${ev.clientX}px, ${ev.clientY}px)`
        // stringTarget.style.left = (ev.clientX) + 'px'
        // stringTarget.style.top = ev.clientY + 'px'
    })
})