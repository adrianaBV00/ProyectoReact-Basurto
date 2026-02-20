import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useFetchData } from '../hooks/useFetchData';
import Loading from './Loading';

const ItemListContainer = ({titulo})=>{
    const {type} = useParams()
    const {data, loading} = useFetchData(type)

    // useEffect(()=>{
    //     getDocs(collection(db, 'kamiCollections'))
    //         .then((res)=>res.forEach((doc)=>console.log(doc.id, "=>", doc.data())))
    //         .catch((error)=>console.log(error))

    // },[type])

    // console.log(type)
    const title = type ? "" : "Productos KamiCollections"
    return(
        <>
            {loading ? <Loading></Loading>
                :
                <>
                    <ItemList data={data} title={title}/>
                </>
            
            }
        </>
    )
}

export default ItemListContainer