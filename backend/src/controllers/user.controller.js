import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/ApiError.js'
import {User} from '../models/user.model.js'
import {ApiResponse} from '../utils/ApiResponse.js'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose';

const registerUser = asyncHandler(async (req,res)=>{
  const {fullname,email,password} = req.body;
  if(
    [fullname,email,password].some((field)=>field?.trim()==="")
  ){
    throw new ApiError(400,"All fields are required")
  }

  const exitedUser = await User.findOne({email})
  if(exitedUser){
    throw new ApiError(409,"User with email already exists")
  }
  const user = await User.create({
    fullname,
    email,
    password
  })

  const createdUser = await User.findById(user._id).
  select(
    "-password -refreshToken"
  )

  if(!createdUser){
    throw new ApiError(500,"Something went wrong while registering a user")
  }

  return res.status(201).json(
    new ApiResponse(200,createdUser,"User Registered Successfully")
  )
})

export {registerUser}