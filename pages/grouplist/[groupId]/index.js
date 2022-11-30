/* default */
import  { useRouter } from 'next/router'

function GroupDetail(){
    const router = useRouter()
    const groupId = router.query.groupId
    return(
       
        <Link> Detalle del grupo {groupId} </Link>
        
        
    )
}
export default GroupDetail