/*-------------------------------------------Project---------------------------------------------*/

const firstProjectImageWrapper = document.querySelector("#first-project-image-wrapper")

firstProjectImageWrapper.addEventListener("mouseenter", () => {
    cursor.classList.add("active")
    cursor.style.backgroundColor = "white"
})

firstProjectImageWrapper.addEventListener("mouseleave", () => {
    cursor.classList.remove("active")
    cursor.style.backgroundColor = "#212121"
})

// Second Project

const secondProjectImageWrapper = document.querySelector("#second-project-image-wrapper")

secondProjectImageWrapper.addEventListener("mouseenter", () => {
    cursor.classList.add("active")
    cursor.style.backgroundColor = "white"
})

secondProjectImageWrapper.addEventListener("mouseleave", () => {
    cursor.classList.remove("active")
    cursor.style.backgroundColor = "#212121"
})

// Third Project

const thirdProjectImageWrapper = document.querySelector("#third-project-image-wrapper")

thirdProjectImageWrapper.addEventListener("mouseenter", () => {
    cursor.classList.add("active")
    cursor.style.backgroundColor = "#FFFFFF"
})

thirdProjectImageWrapper.addEventListener("mouseleave", () => {
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
    scrollingSpeed: 700,
    navigation: true,
    onLeave: (origin, destination, direction) => {
        const section = destination.item
        console.log(destination.item)
        //const text = section.querySelector('.presentationS1')
        //const image = section.querySelector('.imgPresentationS1')
        //const tl = new TimelineMax({delay: 0.75})
        //tl.fromTo(text, 0.75, {y: '50', opacity: 0}, {y: 0, opacity: 1})
        //tl.fromTo(image, 0.75, {y: '-50', opacity: 0}, {y: 0, opacity: 1})
    }
})

/*---------------------------------------Insert Projects------------------------------------------*/


const firstProjectTitleWrapper = document.getElementById('first-project-title-wrapper')
const firstProjectSubtitleWrapper = document.getElementById('first-project-subtitle-wrapper')

const secondProjectTitleWrapper = document.getElementById('second-project-title-wrapper')
const secondProjectSubtitleWrapper = document.getElementById('second-project-subtitle-wrapper')

const thirdProjectTitleWrapper = document.getElementById('third-project-title-wrapper')
const thirdProjectSubtitleWrapper = document.getElementById('third-project-subtitle-wrapper')

const requestProjects = async () => {
    const locationApi = "https://portfolio-b1.herokuapp.com/"
    //const locationApi = "http://localhost:3000/"

    const response = await axios.get(`${locationApi}getProjectYohan`)

    try {
        console.log(response.data)
        const datas = response.data
        datas.forEach(data => {
            let verifFirstProject = data.description.indexOf("Project1")
            if (verifFirstProject !== -1) {
                firstProjectTitleWrapper.innerHTML = `<h1 class="project-title">${data.title}</h1>`
                firstProjectSubtitleWrapper.innerHTML = `<h1 class="project-subtitle">${data.tags}</h1>`
                firstProjectImageWrapper.innerHTML += `<img src="${data.images.normal}" alt="image" class="project-image">`
            }

            let verifSecondProject = data.description.indexOf("Project2")
            if (verifSecondProject !== -1) {
                secondProjectTitleWrapper.innerHTML = `<h1 class="project-title">${data.title}</h1>`
                secondProjectSubtitleWrapper.innerHTML = `<h1 class="project-subtitle">${data.tags}</h1>`
                secondProjectImageWrapper.innerHTML += `<img src="${data.images.normal}" alt="image" class="project-image">`
            }

            let verifThirdProject = data.description.indexOf("Project3")
            if (verifThirdProject !== -1) {
                thirdProjectTitleWrapper.innerHTML = `<h1 class="project-title">${data.title}</h1>`
                thirdProjectSubtitleWrapper.innerHTML = `<h1 class="project-subtitle">${data.tags}</h1>`
                thirdProjectImageWrapper.innerHTML += `<img src="${data.images.normal}" alt="image" class="project-image">`
            }
        })
    } catch (err) {
        console.log(err)
    }
}


/*----------------------------------------------Functions----------------------------------------*/

cursorFunction()
requestProjects()