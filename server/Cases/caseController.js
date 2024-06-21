const Case = require('./caseSchema'); // Adjust the path as necessary
const multer = require('multer')
const advocateSchema = require('../Advocates/advocateSchema');


const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    const uniquePrefix = 'prefix-'; // Add your desired prefix here
    const originalname = file.originalname;
    const extension = originalname.split('.').pop();
    const filename = uniquePrefix + originalname.substring(0, originalname.lastIndexOf('.')) + '-' + Date.now() + '.' + extension;
    cb(null, filename);
  },
});
const upload = multer({ storage: storage }).single("evidence");
// Create a new case
const createCase = async (req, res) => {
  const newCase = new Case({
    userId: req.params.id,
    title: req.body.title,
    description: req.body.description,
    type: req.body.type,
    datoOfIncident: req.body.datoOfIncident,
    opponentName: req.body.opponentName,
    opponentAddress: req.body.opponentAddress,
    location: req.body.location,
    evidence: req.file 
  });

  try {
    const savedCase = await newCase.save();
    res.json({
      status: 200,
      msg: 'Case created successfully',
      data: savedCase,
    });
  } catch (err) {
    res.json({
      status: 500,
      msg: 'Error creating case',
      data: err,
    });
  }
};

// Get all cases
const getAllCases = async (req, res) => {
  try {
    const cases = await Case.find();
    res.json({
      status: 200,
      data: cases,
    });
  } catch (err) {
    res.json({
      status: 500,
      msg: 'Error retrieving cases',
      data: err,
    });
  }
};

// Get a single case by ID
const getCaseById = async (req, res) => {
  try {
    const caseItem = await Case.findById(req.params.id);
    if (!caseItem) {
      return res.json({
        status: 404,
        msg: 'Case not found',
      });
    }
    res.json({
      status: 200,
      data: caseItem,
    });
  } catch (err) {
    res.json({
      status: 500,
      msg: 'Error retrieving case',
      data: err,
    });
  }
};

// Update a case by ID
const updateCase = async (req, res) => {
  try {
    const updatedCase = await Case.findByIdAndUpdate({_id:req.params.id},
        {
            title: req.body.title,
            description: req.body.description,
            type: req.body.type,
            datoOfIncident: req.body.datoOfIncident,
            opponentName: req.body.opponentName,
            opponentAddress: req.body.opponentAddress,
            location: req.body.location,
            evidence: req.file
        }
        
        
       );
    if (!updatedCase) {
      return res.json({
        status: 404,
        msg: 'Case not found',
      });
    }
    res.json({
      status: 200,
      msg: 'Case updated successfully',
      data: updatedCase,
    });
  } catch (err) {
    res.json({
      status: 500,
      msg: 'Error updating case',
      data: err,
    });
  }
};

// Delete a case by ID
const deleteCase = async (req, res) => {
  try {
    const deletedCase = await Case.findByIdAndDelete(req.params.id);
    if (!deletedCase) {
      return res.json({
        status: 404,
        msg: 'Case not found',
      });
    }
    res.json({
      status: 200,
      msg: 'Case deleted successfully',
      data: deletedCase,
    });
  } catch (err) {
    res.json({
      status: 500,
      msg: 'Error deleting case',
      data: err,
    });
  }
};

module.exports = {
  createCase,
  getAllCases,
  getCaseById,
  updateCase,
  deleteCase,
  upload
};
