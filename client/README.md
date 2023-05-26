Problem domain
English is hard to spell, and it only uses 26 letters. Japanese uses not just sound representation in a different script entirely from English, but also uses kanji. 
Kanji are the logographic Chinese characters taken from the Chinese script, and used in the writing of Japanese. They were made a major part of the Japanese writing system during the time of Old Japanese and are still used, along with the subsequently-derived syllabic scripts of hiragana and katakana.
We want to provide a platform for selecting kanji to learn.

User stories
We want to provide features for people who:
want to track the kanji they have practised
want to select kanji appropriate to their level of learning
want to learn how to draw kanji
want to relate kanji to English meanings
to Japanese usage

Planning
We started from a wireframe and a dicussion of possible user needs

Communication
We used a trello board and discord and github to keep up to date with progress and next tasks. We used branches and pull requests to allow each other to review changes before merging them with the main project. This meant that we could resolve any differences of opinion. We did a lot of paired programming, taking turns driving and navigating, so that we could learn from each other. Later in the week we worked separately but used the above means to communicate.

MVP
Our project is slightly beyond the MVP we set out to achieve. We aimed for 4 database functions and interrogating an API; pages for selecting and reviewing kanji and finding out about the site. We were able to add

The name of the project  
# Can U Kanji  

## Names of the team members  
Rachael and Jezinho

## A description of the project

## The overall problem domain and how the project solves those problems
English is hard to spell, and it only uses 26 letters. Japanese uses not just sound representation in a different script entirely from English, but also uses kanji. 
Kanji are the logographic Chinese characters taken from the Chinese script, and used in the writing of Japanese. They were made a major part of the Japanese writing system during the time of Old Japanese and are still used, along with the subsequently-derived syllabic scripts of hiragana and katakana.
We want to provide a platform for selecting kanji to learn. And produce imaginative and effective ways to learn them.
## Semantic versioning, beginning with version 1.0.0 and incremented as changes are made  
We are close to version 1.0.0, but there are some essential features which are needed - video play, ratings and one game

## A list of any libraries, frameworks, or packages that your application requires in order to properly function  

    "axios": "^1.4.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-dropdown": "^1.11.0",
    "react-router-dom": "^6.11.2",
    "react-scripts": "5.0.1"


## Instructions that the user may need to follow in order to get your application up and running on their own computer  
Visit Home for instructions. Select kanji on the All Kanji page. Save. View selected kanji in more detail on My Kanji page. Use your kanji for games on Pairs Game page.

## Clearly defined API endpoints with sample responses  

https://can-u-kanji.onrender.com/ which gives a root message: Welcome to the root!  

https://can-u-kanji.onrender.com/kanji/${grade} takes a grade as a number and returns all kanji matching that grade, but with a reduced number of properties:  
{
                    character:   
                    videomp4:  
                    videowebm:  
                    playVideo:   
                    grade:   
                    meaning:  
                    kunyomi:   
                    romaji1:   
                    onyomi:   
                    romaji2:   
                    hint:   
                    rating: 0  
                }

https://can-u-kanji.onrender.com/mykanji/?email=${logInEmail} A query using a saved email address will return an object with properties of email and mykanji. mykanji is the collection of selected kanji for that user.

put/update: `https://can-u-kanji.onrender.com/mykanji/${userId}` with body. This is used for adding a rating and also for removing kanji from the user's collection. 

https://kanjialive-api.p.rapidapi.com/api/public/kanji/all calls 3rd party API and returns all kanji, with some 40 properties  
https://can-u-kanji.netlify.app/kanji will return an example kanji with all those properties  

## Database schema
{  
    email: String,  
    mykanji: [  
        {  
            character: { type: String, required: false },  
            videoMp4: { type: String, required: false },  
            videoWebm: { type: String, required: false },  
            playVideo:{type: Boolean},  
            grade: { type: Number, required: false },  
            meaning: { type: String, required: false },  
            kunyomi: { type: String, required: false },  
            romaji1: { type: String, required: false },  
            onyomi: { type: String, required: false },  
            romaji2: { type: String, required: false },  
            hint: { type: String, required: false },  
            rating: { type: String, required: false },  
        },   
    ],  
}  