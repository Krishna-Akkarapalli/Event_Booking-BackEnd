const Concert = require("../Models/Concert.js");
// const Concert = require ("../Models/Concert.js");
const errorHandler = require("../Utils/error");

exports.concertdata = async (req, res, next)=>{
    // const {name, location , showtype , price , showname, artistimage } =req.body;  
    // req.body.images = images;

    // req.body.user =req.user.id;
    // const product = await Concert.create(req.body);
    // try{
    //     await newUser.save();
    //     res.status(201).json({message:"user created successfully"});
    // }catch(error){
    //     next(errorHandler(300,"Duplicate values"));
    // }

    try{
        const concert = new Concert(req.body)
        await concert.save();
        console.log("concert created successfully")
        res.status(201).json({message:"concert created successfully"});
    }
    catch (error){
        next(("Duplicate values"));
    }
};