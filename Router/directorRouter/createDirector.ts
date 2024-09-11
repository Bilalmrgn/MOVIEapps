import express from 'express';
import Director from '../../db/director.model.js';

const router = express.Router();

router.post('/director',async (req,res) => {
    //create director
    const {name,surname,bio} = req.body;

    if(!name || !surname || !bio){
        return res.status(400).json({message: 'Tüm director bilgilerini doldur'});
    }
    //create director
    try {
        const newDirector = new Director({
            name: name,
            surname: surname,
            bio: bio
        });
        const savedDirector = await newDirector.save();
        //başarılı mesajı döndür
        res.status(201).json({
            message: 'Yeni film eklendi',
            director: savedDirector
        });
    } catch (error:any) {
        res.status(500).json({
            message: 'Veritabanına kaydedilirken bir hata oluştu(createDirector.ts)',
            error: error.message
        });
    }
})
export default router;
