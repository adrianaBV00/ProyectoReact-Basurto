import { getDocs, collection, query, where } from "firebase/firestore";
import {db} from "../services/firebase"
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";


export const useFetchData = (type,destacado) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(null)
    const navigate = useNavigate()

    const prodCollection = type==="destacado" ? query(collection(db,"kamiCollections"), where("destacado","==",true)): 
                            ( type ? query(collection(db,"kamiCollections"), where("categoria","==",type)) : collection(db,"kamiCollections"))

    useEffect(()=>{
        const fetchData = setTimeout(()=>{
            getDocs(prodCollection)
            .then((res)=>{
                const list = res.docs.map((doc)=>{
                    return{
                        id:doc.id,
                        ... doc.data()
                    }
                })
                setData(list)
            })
            .catch((error)=>{
                console.log(error)
                navigate('/error')
            })
            .finally(()=>setLoading(false))

        }, 2000)

        return () => {
            clearTimeout(fetchData);
            setLoading(true)
        }

    },[type,destacado])

  return {data,loading}
}
