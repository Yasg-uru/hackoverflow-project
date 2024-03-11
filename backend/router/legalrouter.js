import express from "express";
import { createcategory,deleteCategory,updateCategory,getCategories } from "../controller/legalcontroller.js";
const router=express.Router();
router.post('/categories', createcategory);

// Delete a category
router.delete('/categories/:id', deleteCategory);

// Update a category
router.put('/categories/:id', updateCategory);

// Get categories with pagination and search
router.get('/categories', getCategories);
export default router;
