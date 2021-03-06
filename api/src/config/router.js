import Express from 'express';

const router = new Express.Router();

/** Controllers **/
import { AuthController } from 'src/modules/auth/auth.controller';
import { TodoController } from 'src/modules/todo/todo.controller';
import { ChatController } from 'src/modules/chat/chat.controller';
import { RoomController } from 'src/modules/room/room.controller';


/** Middlewares **/
import { AuthMiddleware } from 'src/modules/auth/auth.middleware';

router.get('/', (req, res) => {
    res.send("Hello world");
});

router.use('/auth', AuthController);

router.use('/todo', [AuthMiddleware, TodoController]);

router.use('/chat', [AuthMiddleware, ChatController]);

router.use('/rooms', [AuthMiddleware, RoomController]);

router.use('/user', [AuthMiddleware, (req, res, next) => {
    res.json(req.payload.user);
}]);

export { router };
