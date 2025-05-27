import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/orders/CreateOrderController";
import { RemoveOrderController } from "./controllers/orders/RemoveOrderController";
import { AddItemController } from "./controllers/orders/AddItemController";
import { RemoveItemController } from "./controllers/orders/RemoveItemController";
import { SendOrderController } from "./controllers/orders/SendOrderController";
import { ListOrderController } from "./controllers/orders/ListOrderController";
import { DetailOrderController } from "./controllers/orders/DetailOrderController";
import { FinishOrderController } from "./controllers/orders/FinishOrderController";

import { isAuthenticated } from "./middleware/isAuthenticated";
import uploadConfig from "./config/multer"

const router = Router();

const upload = multer(uploadConfig.upload('./tmp'))

//--- ROTAS USERS ---
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailUserController().handle)

//--- ROTAS CATEGORIES ---
router.post('/category', isAuthenticated, new CreateCategoryController().handle)

router.get('/category', isAuthenticated, new ListCategoryController().handle)

//--- ROTAS PRODUCTS ---
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)

router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)

//--- ROTAS ORDERS ---
router.post('/order', isAuthenticated, new CreateOrderController().handle)

router.delete('/order', isAuthenticated, new RemoveOrderController().handle)

router.post('/order/add', isAuthenticated, new AddItemController().handle)

router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)

router.put('/order/send', isAuthenticated, new SendOrderController().handle)

router.get('/orders', isAuthenticated, new ListOrderController().handle)

router.get('/order/details', isAuthenticated, new DetailOrderController().handle)

router.put('/order/finish', isAuthenticated, new FinishOrderController().handle)

export { router }