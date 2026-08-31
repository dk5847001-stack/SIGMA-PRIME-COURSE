const Subscriber = require("../models/Subscriber");

const createSubscriber = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({
                message: "email is required!"
            })
        };

        const existingSubscriber = await Subscriber.findOne({ email });
        if (existingSubscriber) {
            return res.status(409).json({
                message: "This email is already subscribed!"
            })
        }

        const newEmail = await Subscriber.create({ email });
        console.log(newEmail)
        res.status(201).json({
            success: true,
            message: "you subscribed successfully!"
        });
    } catch (err) {
        console.log(err.message)
        res.status(500).json({
            success: false,
            message: "something went wrong!"
        })
    }
}

// READ ROUTE
const getAllSubscriber = async (req, res) => {
    try {
        const allSubscriber = await Subscriber.find().sort({ _id: -1 });
        console.log(allSubscriber);
        res.status(201).json({
            message: "subscriber fetch successfully!",
            subscriber: allSubscriber
        })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({
            success: false,
            message: "something went wrong!"
        })
    }
};

// EDIT SUBSCRIBER
const randerEditForm = async (req, res) => {
    try {
        const { id } = req.params;
        const subscriber = await Subscriber.findById(id);
        if (!subscriber) {
            return res.status(404).json({
                message: "subscriber not found"
            })
        };

        res.status(200).json({
            success: true,
            subscriber
        });

    } catch (err) {
        console.log(err.message)
        res.status(500).json({
            success: false,
            message: "something went wrong!"
        })
    }
};

// UPDATE SUBSCRIBER
const updateSubscriber = async (req, res) => {
    try {
        const { id } = req.params;
        const { email } = req.body;
        const updateSubscriber = await Subscriber.findByIdAndUpdate(id, { email });
        console.log(updateSubscriber);
        res.status(200).json({
            success: true,
            message: "subscriber updated successfully!",
            updateSubscriber
        })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({
            success: false,
            message: "something went wrong!"
        })
    }
};

// DELETE SUBSCRIEBER
const deleteSubscriber = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteSubscriber = await Subscriber.findByIdAndDelete(id);
        if(!deleteSubscriber){
            return res.status(404).json({
                message: "subscriber not found!"
            })
        }
        console.log(deleteSubscriber);
        res.status(200).json({
            success: true,
            message: "subscriber deleted successfully!",
            subscriber: deleteSubscriber
        })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({
            success: false,
            message: "something went wrong!",
            error: err.message
        })
    }
}

module.exports = {
    createSubscriber,
    getAllSubscriber,
    randerEditForm,
    updateSubscriber,
    deleteSubscriber
}