const express = require("express");
const router = express.Router();
const {
    createSubscriber,
    getAllSubscriber,
    randerEditForm,
    updateSubscriber,
    deleteSubscriber
} = require("../controllers/subscriberController");

// CREATE AND READ ROUTES
router.route("/")
    .post(createSubscriber)
    .get(getAllSubscriber)

// EDIT, UPDATE, DELETE ROUTE
router.route("/:id")
    .get(randerEditForm)
    .put(updateSubscriber)
    .delete(deleteSubscriber)

module.exports = router;