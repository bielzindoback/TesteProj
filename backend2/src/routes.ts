import { Router } from "express";
import { CreateUserController } from "./controllers/Users/CreateUserControlle";
import { AuthUserController } from "./controllers/Users/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/Users/DetailUserController";
import { CreatePublicationController } from "./controllers/Publications/CreatePublicationController";
import { ListByUserController } from "./controllers/Publications/ListByUserController";
import { ListPublicationsController } from "./controllers/Publications/ListPublicationsController";
import { DeletePublicationByIdController } from "./controllers/Publications/DeletePublicationByIdController";


const router = Router();


router.post('/user',  new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailUserController().handle)

router.post('/publication', isAuthenticated, new CreatePublicationController().handle)
router.get('/publications/user', isAuthenticated, new ListByUserController().handle)
router.get('/publications',isAuthenticated,new ListPublicationsController().handle)
router.delete('/publication/delete',isAuthenticated,new DeletePublicationByIdController().handle)

export {router}