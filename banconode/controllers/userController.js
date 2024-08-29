const userService = require('../services/userService');

async function getUsers(req, res) {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
    //res.status(200).send({ message: "oi mundo" })
  }catch(error) {
      
  }
  
}

async function createUser(req, res) { 
  const { id, nome, idade, email, senha } = req.body
  try {
    await userService.createUser(id, nome, idade, email, senha)
    res.status(201).send({message: "Usuario criado!"})
  } catch (error) {
    
  }
}




async function updateUser(req, res) {
  const { id } = req.params;
  const { nome } = req.body;
  try {
    await userService.updateUser(id, nome)
    res.status(201).json({message: "Usuário alterado com sucesso"})
  } catch (error) {
   console.log(error);
   res.status(500).jdson({ message: "Erro ao atualizar usuário" });
    
  }
 } 
async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    await userService.deleteUser(id);
    res.status(204).json({message: "Usuário removido com sucesso"})
  } catch (error) {
    res.status(500).json({message: "Erro ao executar usuário"})
  }
 }
module.exports = {
    getUsers,
    createUser,
    deleteUser,
    updateUser
}
