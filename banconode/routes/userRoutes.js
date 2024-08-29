const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get("/usuarios", userController.getUsers);
router.post("/usuarios", userController.createUser);
router.put("/usuarios/:id", userController.updateUser);
router.delete("/usuarios/:id", userController.deleteUser);

module.exports = router;
