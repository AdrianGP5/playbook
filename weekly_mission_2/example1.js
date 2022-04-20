const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
        return `This repository ${this.name} was created by ${this.author}`
    },
    getOther:() => {
        return 'Arrow function'
    }
    }
    
    const Issue = {
        title: "TítuloIsssue",
        repositoryNameAssociated: "NombreAsociado",
        status: "Estatus",
        numberOfComments: 100,
        labels: ['etiqueta1','etiqueta2','etiqueta3'],
        author: "AdrianGP5",
        dateCreated: "18/08/2021",
        lastUpdated: "18/08/2022",
    
        getTitleAndAuthor: () =>{
            return `El título es: ${Issue.title}. El autor es: ${Issue.author}`
        },
        getGeneralInfo: function(){
            return this.numberOfComments + " " + this.labels[0] + " " + Issue.labels[2]
        }
    
    }
    
    const PullRequest = {
        title: "Título",
        branchName: "NombreRama",
        dateCreated: new Date(2018, 7, 18),
        dateModified: Date(),
        getDateCreated: function(){
            return PullRequest.dateCreated
        },
        getDateModified: () =>{
            return PullRequest.dateModified
        }
    }
    
    
    console.log("Nombre del repo:" + repo.name)
    console.log("Issues totales: " + repo.getTotalIssues())
    console.log(repo.getGeneralInfo())
    console.log("Date: " + repo.getOther())
    
    console.log(Issue.getTitleAndAuthor())
    console.log(Issue.getGeneralInfo())
    
    console.log("DateCreated: " + PullRequest.getDateCreated())
    console.log("DateModified: " + PullRequest.getDateModified())