import { newDiaryEntry,Weather,Visibility } from "./types";

const parseComment = (commentFromRequest: any): string => {
    if(!isString(commentFromRequest)) throw new Error('incorrect commet');
    return commentFromRequest;
}

const parseDate = (dateFromRequest: any): string => {
    if(!isString(dateFromRequest) || !isDate(dateFromRequest)) 
        throw new Error('incorrect date');
    return dateFromRequest;
}

const parseWeather = (weatherFromRequest: any): Weather =>{
    if(!isWeather(weatherFromRequest))
        throw new Error(" Incorrect weather");
    return weatherFromRequest 
        
}
const parseVisibility = (visibilityFromRequest: any): Visibility =>{
    if(!isVisibility(visibilityFromRequest))
        throw new Error(" Incorrect visibility");
    return visibilityFromRequest; 
        
}

const isVisibility = (visibility:any): boolean =>  Object.values(Visibility).includes(visibility);
const isWeather = (weather:any): boolean =>  Object.values(Weather).includes(weather);
const isDate = (date:string): boolean => Boolean(Date.parse(date));
const isString = (string:string):boolean => typeof string === 'string';

const toNewDiaryEntry = (object:any):newDiaryEntry =>{
    const newEntry: newDiaryEntry ={
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        visibility: parseVisibility(object.visibility),
        weather: parseWeather(object.weather),
    }

    return newEntry;

}

export default toNewDiaryEntry;