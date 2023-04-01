const { User } =require('../DB_connection');

const login = async(req, res) => {
    const {email, password} = req.query;
    if(!email || !password) res.status(400).json({message: 'Fatan datos'});
    try {
        const user = await User.findOne({
            where:{email}});
        if(!user) res.status(404).json({message:'Usuario no encontrado'});
        (user.password === password) ? res.status(200).json({access: true, UserId: user.id}) : res.status(403).json({message: 'Contraseña incorrecta'});    
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
// const login = async(email, password) => {
//     if(!email || !password) throw new Error('Fatan datos');
//         const user = await User.findOne({
//             where:{email}});
//         if(!user) throw new Error('Usuario no encontrado');
//         if (user.password !== password) throw new Error('Contraseña incorrecta');
//         return  {access: true, userId: user.id};
// };  

module.exports = {
    login
}