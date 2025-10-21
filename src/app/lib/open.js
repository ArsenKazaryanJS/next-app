export function messageApiModul(){
    return {message:'Hello, from shared Module !'}
}

export function createMessageGreeting(ms){
    return {message:`Hello,${ms} from shared module (POST)!`}
}