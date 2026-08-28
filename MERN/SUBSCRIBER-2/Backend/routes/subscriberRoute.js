const express = require("express");
const router = express.Router();
const {
    createSubscriber,
    allSubscriber,
    singleSubscriber,
    updateSubscriber,
    deleteSubscriber
} =  require("../controllers/subscriberController");

// create subscriber
router.post("/", createSubscriber);
// get all subscriber
router.get("/", allSubscriber);
// singl subscriber
router.get("/:id", singleSubscriber);
// update subscriber
router.put("/:id", updateSubscriber);
// delete subscriber
router.delete("/:id", deleteSubscriber);

module.exports = router;