const screen = {
    userProfile: document.querySelector('.profile-data'),

    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto de Perfil"/>
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😥'}</p>
                                            <h4 class="follows">Seguidores: ${user.followers ?? 'Não possui seguidores 😥'}</h4>
                                            <h4 class="follows">Seguindo: ${user.following ?? 'Não está seguindo ninguém 😥'}</h4>
                                        </div>
                                    </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => {
            repositoriesItens += `<li class="repo-card">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                <span class="repo-stats">⭐ ${repo.stargazers_count ?? 0} | 🍴 ${repo.forks_count ?? 0} | 👀 ${repo.watchers_count ?? 0} | 📝 ${repo.language ?? 'N/A'}</span>
            </li>`
        })

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }
        let eventsItens = ''
            user.events.forEach(event => {
                const repoName = event.repo?.name ?? 'Repositório desconhecido';
                let commitMsg = '';
                if (event.type === 'PushEvent' && event.payload?.commits?.length > 0) {
                    commitMsg = ` -  ${event.payload.commits[0].message}`;
                } else {
                    commitMsg = ' - Sem mensagem de commit';
                }
                eventsItens += `<li><p>${repoName}${commitMsg}</p></li>`
            })
        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Eventos</h2>
                                                <ul>${eventsItens}</ul>
                                            </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }