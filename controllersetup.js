module.exports = {
    read: (req,res) =>{
        res.status(200).send(JSON.stringify(scoreArr));
    },
    create:(req,res) =>{

        let {score} = req.body;
        scoreArr.push({ID:id,Score:score*1});
        id++;
        res.status(200).send(JSON.stringify(scoreArr))
    },
    update:(req,res) =>{
        const {score} = req.body;                       
        const updateID = req.params.ID;                 
        const scoreIndex = scoreArr.findIndex(          
            val => {return val.ID == updateID});        
        let val = scoreArr[scoreIndex];                     
        scoreArr[scoreIndex] = {                        
            ID: val.ID,                                 
            Score: score*1 || val.score*1
        }
        res.status(200).send(JSON.stringify(scoreArr));
    },
    delete:(req,res) =>{
        const deleteID = req.params.ID;
        scoreIndex=scoreArr.findIndex(val => val.ID == deleteID);
        scoreArr.splice(scoreIndex,1);
        res.status(200).send(JSON.stringify(scoreArr));
    }
}



///////    OR     ////////



module.exports={
    create:(req,res,next) => {const dbInstance = req.app.get('db');
        dbInstance.create_product([req.body.name,req.body.description,req.body.price,req.body.imageurl])
        .then(()=>res.sendStatus(200))
        .catch(err=>{
            res.status(500).send({errorMessage:"Ya done broke it dagnabbit..."});
            console.log(err)
        })
},
    getOne:(req,res,next) => {const dbInstance = req.app.get('db');
        dbInstance.read_product(req.params.id)
        .then(product => res.status(200).send(product))
        .catch(err=>{
            res.status(500).send({errorMessage: "Ya done broke it dagnabbit..."});
            console.log(err)})
},
    getAll:(req,res,next) => {const dbInstance = req.app.get('db');
        dbInstance.read_products()
        .then(products=>res.status(200).send(products))
        .catch(err=>{
            res.status(500).send({errorMessage: "Ya done broke it dagnabbit..."});
            console.log(err)
        })
},
    update:(req,res,next) => {const dbInstance = req.app.get('db');
        dbInstance.update_product(req.query.desc,req.params.id)
        .then(()=>res.sendStatus(200))
        .catch(err=>{
            res.status(500).send({errorMessage: "Ya done broke it dagnabbit..."});
            console.log(err)
        })
},
    delete:(req,res,next) => {const dbInstance = req.app.get('db');
        dbInstance.delete_product(req.params.id)
        .then(()=>res.sendStatus(200))
        .catch(err=>{
            res.status(500).send({errorMessage:"Ya done broke it dagnabbit..."});
            console.log(err)
        })
}
}