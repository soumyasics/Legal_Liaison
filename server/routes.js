const router=require('express').Router()
const user=require('./User/userController')
const advocates=require('./Advocates/advocateController')
const junioradvocates=require('./JuniorAdvocate/junioradvocateController')
const cases=require('./Cases/caseController')



//advocate routes
router.post('/registerAdvocate',advocates.upload,advocates.registerAdvocate)
router.post('/viewAdvocateById/:id',advocates.viewAdvocateById)
router.post('/forgotPassword',advocates.forgotPassword)
router.post('/loginAdvocate',advocates.login)
router.post('/editAdvocateById/:id',advocates.uploadProfile,advocates.editAdvocateById)
router.post('/deleteAdvocateById/:id',advocates.deleteAdvocateById)
router.post('/resetPassword/:id',advocates.resetPassword)
router.post('/approveAdvocateById/:id',advocates.approveAdvocateById)
router.post('/rejectAdvocateById/:id',advocates.rejectAdvocateById)
router.post('/requireAuth',advocates.requireAuth)
router.post('/viewAdvocateReqs',advocates.viewAdvocateReqs)
router.post('/viewAdvocates',advocates.viewAdvocates)
router.post('/activateAdvocateById/:id',advocates.activateAdvocateById)
router.post('/deactivateAdvocateById/:id',advocates.deactivateAdvocateById)


//junior advocate routes
router.post('/registerJuniorAdvocate',junioradvocates.upload,junioradvocates.registerJuniorAdvocate)
router.post('/viewJuniorAdvocates',junioradvocates.viewJuniorAdvocates)
router.post('/viewJuniorAdvocateReqs',junioradvocates.viewJuniorAdvocateReqs)
router.post('/approveJuniorAdvocateById/:id',junioradvocates.approveJuniorAdvocateById)
router.post('/rejectJuniorAdvocateById/:id',junioradvocates.rejectJuniorAdvocateById)
router.post('/activateJuniorAdvocateById/:id',junioradvocates.activateJuniorAdvocateById)
router.post('/deactivateJuniorAdvocateById/:id',junioradvocates.deactivateJuniorAdvocateById)
router.post('/editJuniorAdvocateById/:id',junioradvocates.uploadProfile,junioradvocates.editJuniorAdvocateById)
router.post('/viewJuniorAdvocateById/:id',junioradvocates.viewJuniorAdvocateById)
router.post('/deleteJuniorAdvocateById/:id',junioradvocates.deleteJuniorAdvocateById)
router.post('/junioradvocateforgotPassword',junioradvocates.forgotPassword)
router.post('/junioradvocateresetPassword/:id',junioradvocates.resetPassword)
router.post('/loginJuniorAdvocate',junioradvocates.login)
router.post('/requireAuth',junioradvocates.requireAuth)


//users routers
router.post('/registerUser',user.upload,user.registerUser)
router.post('/loginUser',user.login)
router.post('/editUserById/:id',user.upload,user.editUserById)
router.post('/viewUserById/:id',user.viewUserById)
router.post('/forgotPassword',user.forgotPassword)
router.post('/resetPassword',user.resetPassword)
router.post('/deleteUserById/:id',user.deleteUserById)
router.post('/editUserById',user.upload,user.login)
router.post('/requireAuth',user.requireAuth)
router.post('/viewUsers',user.viewUsers)

//case routes
router.post('/createCase/:id',cases.upload,cases.createCase)


module.exports=router