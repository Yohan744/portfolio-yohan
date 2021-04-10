/*-------------------------------------------Project---------------------------------------------*/

const firstProjectImageWrapper = document.querySelector("#first-project-image-wrapper")

firstProjectImageWrapper.addEventListener("mouseenter", ()  => {
    cursor.classList.add("active")
    cursor.style.backgroundColor = "white"
})

firstProjectImageWrapper.addEventListener("mouseleave", ()  => {
    cursor.classList.remove("active")
    cursor.style.backgroundColor = "#212121"
})

// Second Project

const secondProjectImageWrapper = document.querySelector("#second-project-image-wrapper")

secondProjectImageWrapper.addEventListener("mouseenter", ()  => {
    cursor.classList.add("active")
    cursor.style.backgroundColor = "white"
})

secondProjectImageWrapper.addEventListener("mouseleave", ()  => {
    cursor.classList.remove("active")
    cursor.style.backgroundColor = "#212121"
})

// Third Project

const thirdProjectImageWrapper = document.querySelector("#third-project-image-wrapper")

thirdProjectImageWrapper.addEventListener("mouseenter", ()  => {
    cursor.classList.add("active")
    cursor.style.backgroundColor = "#FFFFFF"
})

thirdProjectImageWrapper.addEventListener("mouseleave", ()  => {
    cursor.classList.remove("active")
    cursor.style.backgroundColor = "#212121"
})

/*-------------------------------------------Parallax-------------------------------------------*/

const firstProjectWrapper = document.getElementById('first-project-wrapper');
let parallaxFirstProject = new Parallax(firstProjectWrapper, {
    pointerEvents: true,
})

// Second Project

const secondProjectWrapper = document.getElementById('second-project-wrapper');
let parallaxSecondProject = new Parallax(secondProjectWrapper, {
    pointerEvents: true,
})

// Third Project

const thirdProjectWrapper = document.getElementById('third-project-wrapper');
let parallaxThirdProject = new Parallax(thirdProjectWrapper, {
    pointerEvents: true,
})

// Projects

const projects = document.getElementById('projects-wrapper')
let parallaxProjects = new Parallax(projects, {
    pointerEvents: true,
})

/*-------------------------------------------Full Page------------------------------------------*/

new fullpage("#fullpage", {
    fixedElements: '#logo',
    autoScrolling: true,
    navigation: true,
    scrollingSpeed: 700,
    onLeave: (origin, destination) => {
        const section = destination.item
        //console.log(destination.item)
        //const text = section.querySelector('.presentationS1')
        //const image = section.querySelector('.imgPresentationS1')
        //const tl = new TimelineMax({delay: 0.75})
        //tl.fromTo(text, 0.75, {y: '50', opacity: 0}, {y: 0, opacity: 1})
        //tl.fromTo(image, 0.75, {y: '-50', opacity: 0}, {y: 0, opacity: 1})
    }
})

/*----------------------------------------------Functions----------------------------------------*/

cursorFunction()

const requestProjects = async () => {
    const locationApi = "https://portfolio-b1.herokuapp.com/"
    //const locationApi = "http://localhost:3000/"

    const response = await axios.get(`${locationApi}getProjectYohan`)


    try {
        console.log(response.data)
        const datas = response.data
        datas.forEach(data => {
            if (data.description === "<p>one</p>\n\n<p>This is a test</p>") {
                firstProjectImageWrapper.innerHTML += `<img src="${data.images.normal}" alt="image" class="project-image">`
                console.log("test")
            }
        })
    } catch (err) {
        console.log(err)
    }
}

requestProjects()