interface Engineer {
    name: string;
    role: string;
}

interface Blogger {
    name: string;
    follower: number;
}

// type EngineerBlogger = Engineer & Blogger;

interface EngineerBlogger extends Engineer, Blogger{}

const quill: EngineerBlogger = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000
}

function toUpperCase(x: string | number){
    if(typeof x === 'string'){
        x.toUpperCase();
    }
    return '';
}

type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker){
    console.log(nomadWorker.name)
    if('role' in nomadWorker){
        console.log(nomadWorker.name)
    }
    if('follower' in nomadWorker){
        console.log(nomadWorker.follower)
    }
}

class Dog {
    speak(){
        console.log('bow-bow')
    }
}

class Bird {
    speak(){
        console.log('tweet-tweet')
    }
    fly(){
        console.log('flutter')
    }
}

type Pet = Dog | Bird;
function havePet(pet: Pet){
    pet.speak();
    if(pet instanceof Bird){
        pet.fly();
    }
}

havePet(new Bird())