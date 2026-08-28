const Subscriber = require("../models/Subscriber");


const createSubscriber = async (req, res) => {

    try {

        const { email } = req.body;

        // Check email
        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required!"
            });
        }

        // Check duplicate email
        const existingSubscriber = await Subscriber.findOne({
            email: email.toLowerCase()
        });

        if (existingSubscriber) {
            return res.status(409).json({
                success: false,
                message: "This email is already subscribed! ✓"
            });
        }

        // Create subscriber
        const newSubscriber = new Subscriber({
            email: email.toLowerCase()
        });

        const savedSubscriber = await newSubscriber.save();

        console.log("New subscriber:", savedSubscriber);

        res.status(201).json({
            success: true,
            message: "You subscribed successfully! ✓",
            subscriber: savedSubscriber
        });

    } catch (err) {

        console.error("POST ERROR:", err);

        res.status(500).json({
            success: false,
            message: "Something went wrong!",
            error: err.message
        });
    }
};

// Get all subscriber
 const allSubscriber =  async (req, res) => {

    try {

        const subscribers = await Subscriber
            .find()
            .sort({ _id: -1 });

        res.status(200).json({
            success: true,
            message: "Subscribers fetched successfully!",
            email: subscribers
        });

    } catch (err) {

        console.error("GET ERROR:", err);

        res.status(500).json({
            success: false,
            message: "Something went wrong!",
            error: err.message
        });
    }
};

// get singleSubscriber
const singleSubscriber =  async (req, res) => {

    try {

        const { id } = req.params;

        const subscriber = await Subscriber.findById(id);

        if (!subscriber) {
            return res.status(404).json({
                success: false,
                message: "Subscriber not found!"
            });
        }

        res.status(200).json({
            success: true,
            message: "Subscriber fetched successfully!",
            subscriber: subscriber
        });

    } catch (err) {

        console.error("GET SINGLE ERROR:", err);

        res.status(500).json({
            success: false,
            message: "Something went wrong!",
            error: err.message
        });
    }
};

// update subscriber
const updateSubscriber =  async (req, res) => {

    try {

        const { id } = req.params;
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required!"
            });
        }

        // Check if another subscriber already has this email
        const existingSubscriber = await Subscriber.findOne({
            email: email.toLowerCase(),
            _id: { $ne: id }
        });

        if (existingSubscriber) {
            return res.status(409).json({
                success: false,
                message: "This email is already subscribed!"
            });
        }

        const updatedSubscriber = await Subscriber.findByIdAndUpdate(
            id,
            {
                email: email.toLowerCase()
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedSubscriber) {
            return res.status(404).json({
                success: false,
                message: "Subscriber not found!"
            });
        }

        console.log("Updated subscriber:", updatedSubscriber);

        res.status(200).json({
            success: true,
            message: "Subscriber updated successfully!",
            subscriber: updatedSubscriber
        });

    } catch (err) {

        console.error("PUT ERROR:", err);

        res.status(500).json({
            success: false,
            message: "Something went wrong!",
            error: err.message
        });
    }
};

// delete subscriber
const deleteSubscriber = async (req, res) => {

    try {

        const { id } = req.params;

        const deletedSubscriber =
            await Subscriber.findByIdAndDelete(id);

        if (!deletedSubscriber) {
            return res.status(404).json({
                success: false,
                message: "Subscriber not found!"
            });
        }

        console.log("Deleted subscriber:", deletedSubscriber);

        res.status(200).json({
            success: true,
            message: "Subscriber deleted successfully!",
            subscriber: deletedSubscriber
        });

    } catch (err) {

        console.error("DELETE ERROR:", err);

        res.status(500).json({
            success: false,
            message: "Something went wrong!",
            error: err.message
        });
    }
};

module.exports = {
    createSubscriber,
    allSubscriber,
    singleSubscriber,
    updateSubscriber,
    deleteSubscriber
}