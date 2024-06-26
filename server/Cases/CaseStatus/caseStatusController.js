
const caseSchema = require('../caseSchema');
const Casestatus = require('./caseStatusSchema'); 
// Create a new status
const createStatus = async (req, res) => {
    const caseId=req.params.id
    const caseDatas=await caseSchema.findById(caseId)
 
    try {
        const newStatus = new Casestatus({
            caseId:caseId,
            userId:caseDatas.userId,
            advocateId:caseDatas.advocateId,
            status:req.body.status,
            date:req.body.date,
            description:req.body.description
        });

        await newStatus.save();
        res.json({status:200,
            data:newStatus,
        msg:"added successfully"});
    } catch (error) {
        console.log(error);
        res.json({ status:500,
            message: error.message });
    }
};

// Get all statuses
const getAllStatuses = async (req, res) => {
    try {
        const statuses = await Casestatus.find();
        res.status(200).json(statuses);
    } catch (error) {
        res.json({status:500,message: error.message });
    }
};

// Get a specific status by ID
const getStatusById = async (req, res) => {
    const { id } = req.params;

    try {
        const status = await Casestatus.findById(id).populate('advocateId').populate('userId');
        if (!status) {
            return res.json({status:500,
                message: 'Status not found' });
        }
        res.json({
            status:200,
        data:status}
    );
    } catch (error) {
        res.json({status:500, message: error.message });
    }
};


// Get a specific status by ID
const getStatusByCaseId = async (req, res) => {
    const { id } = req.params;

    try {
        const status = await Casestatus.find({caseId:req.params.id}).sort({createdAt:-1}).populate('advocateId').populate('userId');
        if (!status) {
            return res.json({status:500,
                message: 'Status not found' });
        }
        res.json({
            status:200,
        data:status}
    );
    } catch (error) {
        res.json({status:500, message: error.message });
    }
};
module.exports = {
    createStatus,
    getAllStatuses,
    getStatusById,
    getStatusByCaseId
    
};
