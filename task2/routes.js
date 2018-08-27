const express =  require('express');
const router = express();

router.get('/',(req,res)=>{
    res.send('Hello Wors');
});

router.post('/',(req,res)=>{
    res.send('POST');
});


module.exports = router;