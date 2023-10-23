const profileAvatar = document.querySelector('.profile-avatar')
let profileName = document.querySelector('.profile-name')
const profileUsername = document.querySelector('.profile-username')
const numberRepos = document.querySelector('#numbers-repos')
const numberFallow = document.querySelector('#number-fallowers')
const numberFalling = document.querySelector('#number-Fallowing')
const link = document.querySelector('.profile-link')

fetch('https://api.github.com/users/brd3v')
.then(r => r.json())
.then((resposta) => {
  profileAvatar.src = resposta.avatar_url
   profileName.innerHTML = `${resposta.login}`
    console.log(resposta)
    profileUsername.innerHTML = resposta.name
    numberRepos.innerHTML = resposta.repos_url.length
    numberFallow.innerHTML = resposta.followers_url.length
    numberFalling.innerHTML = resposta.following_url.length
    link.href = resposta.html_url

})