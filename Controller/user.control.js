const errorHandler = require("../Utils/error");
const { User } = require ('../Models/db.js');
const {bcryptjs} = require ('bcrypt');

exports.test = (req , res )=>{
    res.json({
                message: "API is working!"
            });
};


//update userSelect: 

exports.updateUser = async (req,res,next) => {
    if(req.user.id !== req.params.id){
        return next(errorHandler(401,"You can update only your account!"));
    }
    try{
        if(req.body.password){
            req.body.password = bcryptjs.hashSync(req.body.password,10);

        }
        const updatedUser = await User.findByIdAndUpdate(
            re.params.id,
            {
                $set:{
                    username:req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    profilePicture: req.body.profilePicture,
                }
            },
            {new: true }
        );
        const { password, ...rest} = updatedUser._doc;
        res.status(200).json(rest);

    }catch(error) {
        next(error);
    }
};



exports.updateUser = async (req,res,next) => {
    if (req.user.id !== req.params.id) {
        return next(errorHandler(401, 'You can delete only your account!'));
      }
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User has been deleted...');
      } catch (error) {
        next(error);
      }
    
}


exports.deleteUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) {
        return next(errorHandler(401, 'You can delete only your account!'));
      }
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User has been deleted...');
      } catch (error) {
        next(error);
      }
    
}
