

import React from 'react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { login } from '@/components/Content'
import { FaLockOpen } from "react-icons/fa";
const forgotPassword = () => {
  return (
    <div className="min-h-screen background-styling">
      <Navbar />
      <div className='flex justify-center  mt-20'>
        <div class="rounded-lg border-2 bg-white bg-card text-card-foreground shadow-sm w-full max-w-sm" data-v0-t="card">
          <div class="flex flex-col space-y-1.5 p-6">
            <FaLockOpen width={20} height={20} />
            <div className='flex justify-center text-3xl font-semibold'>ForgotPassword</div>
            <div className='text-slate-500 '>Enter your email address and we'll send you a link to reset your password.</div>
          </div>
          <div class="p-6 grid gap-4">
            <div class="space-y-1.5">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="email"
              >
                Email
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="email"
                placeholder="john@example.com"
                required=""
                type="email"
              />
            </div>
            <button
              class="text-primary-main border-[2px] border-solid border-[#0E72E8] inline-flex items-center justify-center bg-[#0E72E8] hover:text-[#F3F3F3]  whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
              type="submit"
            >
              Submit
            </button>
          </div>
          <div class="flex items-center p-6">
            Remember your password?{' '}
            <Link
              href={login[0].toLowerCase()}
              className='underline text-blue-800'
            // class="inline-flex items-center justify-center hover:bg-[#0E72E8] hover:text-[#F3F3F3] whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full"
            // className='inline-flex h-[50px] pt-[19px] pr-[20px] pb-[20px] pl-[20px] justify-center items-center rounded-[10px] border-[2px] border-solid border-[#0E72E8]
            // text-[#0E72E8]  hover:bg-[#0E72E8] hover:text-[#F3F3F3] active:bg-[#00489E] active:border-[#00489E] active:text-[#F3F3F3] text-center text-[16px] font-bold not-italic leading-[150%]'
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default forgotPassword