let languages = ["Spanish","English","Italian","Arabic","Japanese","Korean"]

class language {
    language_name: string
    country: string
    popularity: string
    manuscript: string

    constructor(language_name:string, country:string, popularity:string, manuscript: string){
        this.language_name = language_name
        this.country = country
        this.popularity = popularity
        this.manuscript = manuscript
    }
}
let languageObjects = []
languageObjects[0] = new language(languages[0],"Spain","Medium","English")

console.log(languageObjects)