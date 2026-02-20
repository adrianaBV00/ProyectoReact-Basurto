import { getDoc, doc} from "firebase/firestore";
import {db} from "../services/firebase"
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";



export const useFetchDetail = (id) => {
    const [detail, setDetail] = useState(null)
    const [loading, setLoading] = useState(true)
    const [invalid, setInvalid] = useState(null)
    const navigate = useNavigate()
    const docRef = doc(db, "kamiCollections", id)

    useEffect(()=>{
        getDoc(docRef)
            .then((res)=>{
                if(res.exists()){
                    setDetail({id:id, ... res.data()})
                }
                else{
                    setInvalid(true)
                }
            
            })
            .catch((error)=>{
                console.log(error)
                navigate("/error")
            })
            .finally(()=>setLoading(false))

        return () => {
            setLoading(true)
        }

    },[id])

  return {detail,loading, invalid}
}
