import express from "express"
import { isValid } from "../../midlleware/middleware"
import controller from "../controllers/links"

const router = express.Router()

router.get("/", controller.getAll)
router.get("/:id", controller.getOne)
router.get("/reduced/:reduced", controller.getByReduced)
router.get("/user/:uid", controller.getByUser)
router.get("/with-qr/:uid", controller.getWithQr)
router.post("/", controller.create)
router.post("/search", controller.search)
router.put("/", controller.update)
router.delete("/:id", controller.delete)

export default router