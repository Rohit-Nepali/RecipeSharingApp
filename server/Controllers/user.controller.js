import { profileInfo } from "../models/userInfo.model.js";

//create profile info 
const createUserInfo = async (req, res) => {
    try {
        const userInfo = await profileInfo.create(req.body);
        res.status(200).json(userInfo);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//get
const getUserInfobyId = async (req, res) => {
    try {
        const { id } = req.params;
        const userInfo = await profileInfo.findById(id);
        res.status(200).json(userInfo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//to update the data submitted from backend
const updateUserInfobyId = async (req, res) => {
    try {
        //frontend dekhi aaune data lai construct garne
        const { id: userId } = req.params;
        // const updatedData = req.body;
        const { FirstName, LastName, Email,Age } = req.body;

        const UpdatedData = {
            ...(FirstName && {'baseInfo.firstName':FirstName}),
            ...(LastName && {'baseInfo.LastName':LastName}),
            ...(Email && {'professionalInfo.email':Email}),
            ...(Age && {'baseInfo.age':Age}),
        }

        const updateUserInfo = await profileInfo.findByIdAndUpdate(userId, UpdatedData, { new: true }); //new true returns the updated data

        if (!updateUserInfo) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'Profile updated successfully', updateUserInfo });

    } catch (error) {
        res.status(500).json({ message: 'Error updating profile', error });
    }
}

export { createUserInfo, getUserInfobyId, updateUserInfobyId }; 