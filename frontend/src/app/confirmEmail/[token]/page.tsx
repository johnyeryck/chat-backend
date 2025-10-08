'use client'
import { useParams } from "next/navigation"
import { useEffect } from "react"
export default function ConfirmEmail (){
    const {token} = useParams()
useEffect(()=>{
    
    const res = async()=>{
        await fetch(`http://localhost:4000/confirmemail?token=${token}`,{
            method : "GET",
            credentials : 'include'
        })
    }
    res()
})
    
    return(
        <h1>teste</h1>
    )
}