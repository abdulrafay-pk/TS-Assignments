"use strict";
let languages = ["Spanish", "English", "Italian", "Arabic", "Japanese", "Korean"];
class language {
    constructor(language_name, country, popularity, manuscript) {
        this.language_name = language_name;
        this.country = country;
        this.popularity = popularity;
        this.manuscript = manuscript;
    }
}
let languageObjects = [];
languageObjects[0] = new language(languages[0], "Spain", "Medium", "English");
console.log(languageObjects);
