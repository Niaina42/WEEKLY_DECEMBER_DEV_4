import express from "express"
import { isValid } from "../../midlleware/middleware"
import controller from "../controllers/users"

const router = express.Router()

router.get("/", controller.getAll)
router.get("/:id", controller.getOne)
router.get("/email/:email", controller.getByEmail)
router.post("/", controller.create)
router.post("/login", controller.getLogin)
router.post("/search", controller.search)
router.put("/", controller.update)
router.delete("/:id", controller.delete)

export default router