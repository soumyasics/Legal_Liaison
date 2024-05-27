const router=require('express').Router()
const user=require('./User/userController')
const advocates=require('./Advocates/advocateController')


//advocate routes
router.post('/registerAdvocate',advocates.upload,advocates.registerAdvocate)
router.post('/viewAdvocateById/:id',advocates.viewAdvocateById)
router.post('/forgotPassword',advocates.forgotPassword)
router.post('/loginAdvocate',advocates.login)
router.post('/editAdvocateById/:id',advocates.upload,advocates.editAdvocateById)
router.post('/deleteAdvocateById/:id',advocates.deleteAdvocateById)
router.post('/resetPassword/:id',advocates.resetPassword)
router.post('/approveAdvocateById/:id',advocates.approveAdvocateById)
router.post('/rejectAdvocateById/:id',advocates.rejectAdvocateById)
router.post('/requireAuth',advocates.requireAuth)
router.post('/viewAdvocateReqs',advocates.viewAdvocateReqs)
router.post('/viewAdvocates',advocates.viewAdvocates)


router.post('/registerUser',user.registerUser)
router.post('/loginUser',user.login)
router.post('/editUserById/:id',user.editUserById)
router.post('/viewUserById/:id',user.viewUserById)
router.post('/forgotPassword',user.forgotPassword)
router.post('/resetPassword',user.resetPassword)
router.post('/deleteUserById/:id',user.deleteUserById)
router.post('/editUserById',user.login)
router.post('/requireAuth',user.requireAuth)
router.post('/viewUsers',user.viewUsers)

module.exports=router