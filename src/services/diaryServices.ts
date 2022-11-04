import { DiaryEntry, newDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types';
import diaryData from './diaries.json';




//aquí se hizo afirmación de tipos
const diaries:Array<DiaryEntry> = diaryData as Array<DiaryEntry>;


export const findById = (id:number):NonSensitiveInfoDiaryEntry| undefined =>{
    const entry = diaries.find(d => d.id === id);
    if(entry !== undefined){
        const {comment, ...restOfDiary}  = entry;
        return restOfDiary;
    }
    return undefined
    
}  


export const getEntriesWithoutSensitiveInfo = ():NonSensitiveInfoDiaryEntry[]  => {
    return diaries.map(({id,date, weather, visibility}) =>({id,date,weather,visibility}));
};

export const addDiary = (data:newDiaryEntry):DiaryEntry => {
    const newDiaryEntry = {
        ...data,
        id:Math.max(...diaries.map(d => d.id)) +1
    }
    diaries.push(newDiaryEntry);
    return newDiaryEntry;

};

