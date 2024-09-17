import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import { createRecipe, getRecipes, getRecipeById, updateRecipe, deleteRecipe } from '../Controllers/recipe.controller.js';
import { uploadRecipe } from '../Controllers/uploads.controller.js';
import {createUserInfo,getUserInfobyId, updateUserInfobyId} from '../Controllers/user.controller.js';

const router = Router();

//multer configuration 
const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ storage: storage });

router.get('/', (req, res) => {
  res.send("Mel World ");
});

router.post('/api/createRecipe', createRecipe);
router.get('/api/getRecipe', getRecipes);
router.get('/api/getRecipeById/:id', getRecipeById);
router.put('/api/updateRecipe/:id', updateRecipe);
router.delete('/api/deleteRecipe/:id', deleteRecipe);
router.post('/api/uploadRecipes', upload.single('image'),uploadRecipe);


//user informations routes
router.post('/api/createUserInfo',createUserInfo);
router.get('/api/getUserInfo/:id',getUserInfobyId)
router.put('/api/updateProfile/:id',updateUserInfobyId);

export default router;


