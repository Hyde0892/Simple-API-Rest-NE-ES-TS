import express from 'express';
import *  as diaryServices from '../services/diaryServices';
import { DiaryEntry } from '../types';

const router = express.Router();


router.get('/',(_req,res)=>{
    res.send(diaryServices.getEntriesWithoutSensitiveInfo());
})

router.get('/:id', (req,res) =>{
    const diary = diaryServices.findById(+req.params.id );
    return diary ? res.send(diary) : res.sendStatus(404);
})

router.post('/',(req,res)=>{
    const entry = req.body as DiaryEntry;
    const newDiaryEntry = diaryServices.addDiary(entry);
    res.json(newDiaryEntry);
})

export default router;