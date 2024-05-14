import userRouter from './user/userRouter'

userRouter.use('/user',userRouter)



export default userRouter;