
import { Router} from "express"; //import fs from "fs" 
import mongoose from "mongoose"; 

export const router = Router(); 

const User = mongoose.model(
    'User', new mongoose.Schema({ 
        nombre: String, apellido: String, }))

//obtiene la lista de usuarios
router.get("/", function (req, res){


    User.find().then(function(users){
    res.json({
            data: users
        })

    })
    
    
});

//obtiene un usuario específico por el id
router.get("/:id", function (req, res){

    User.findById(req.params.id).then(function(users){
        if (users){ 
            res.json({ data:users})};
    })
    
});

//crea un nuevo usuario
router.post("/", function (req, res){ 

    const user = new User(req.body)
    user.save().then(function(){
        res.json({
            mensaje:"Usuario Creado!"
        })
    })
    
    });


router.post("/usuario", function (req, res){

    res.json({
        mensaje:"Hola desde la ruta usuario"
    })
    
});

//actualiza un usuario existente
router.put("/:id", function (req, res){

    User.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(users){
        if(users){
            res.json({ mensaje: "Usuario Actualizado!", data: users });
        }
    })

    
});

router.delete("/:id", function (req, res){
    //borra un usuario existente

User.findByIdAndDelete(req.params.id).then(function(users){
    if (users) {
        res.json({ mensaje: "Usuario Eliminado!" });
}})
    
});

