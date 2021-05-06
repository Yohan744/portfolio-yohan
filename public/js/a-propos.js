/*----------------------------------------Import projects info-------------------------------------------*/

const aProposImageWrapper = document.querySelector("#a-propos-right-wrapper")
const aProposParagraph = document.querySelector("#a-propos-paragraph-wrapper")

const requestProjects = async () => {
    const locationApi = "https://portfolio-b1.herokuapp.com/"
    //const locationApi = "http://localhost:3000/"

    const response = await axios.get(`${locationApi}getProjectYohan`)

    try {
        const datas = response.data

        datas.forEach(data => {

            let verifUserImage = data.description.indexOf("Profil")
            if (verifUserImage !== -1) {
                aProposImageWrapper.innerHTML = `<img src="${data.images.hidpi}" alt="image" class="a-propos-image">`
                aProposParagraph.innerHTML = `${data.description}`
            }
        })
    } catch (err) {
        console.log(err)
    }
}

requestProjects()