
// get document height
const docHeight = document.documentElement.scrollHeight

document.querySelector('button').addEventListener('click', (event) => {
    console.log('clicked')
    const rabbit = document.querySelector('#rabbit')
    const rect = rabbit.getBoundingClientRect()
    console.log(rect)
    console.log(docHeight)

    // + rect.top - docHeight/2 + rect.width/2,
    // move scroll to the rabbit
    // console.log(`rect.top: ${rect.top} rect.height: ${rect.height} docHeight: ${docHeight}`)
    // window.scrollTo({
    //     top: rect.top+rect.height-docHeight/2,
    //     left: 0,
    //     behavior: 'smooth'
    // })
    
    rabbit.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
    })
})