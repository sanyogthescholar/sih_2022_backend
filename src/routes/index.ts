import { Router } from "express"
import { getTickets, addTickets } from "../controllers/todos"

const router: Router = Router()

router.get("/tickets", getTickets)
router.post("/add-ticket", addTickets)
//router.put("/edit-todo/:id", updateTodo)
//router.delete("/delete-todo/:id", deleteTodo)

export default router