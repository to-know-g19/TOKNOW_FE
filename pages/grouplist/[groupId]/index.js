/* default */
import  { useRouter } from 'next/router'

function GroupDetail(){
    const router = useRouter()
    const groupId = router.query.groupId
    return(
       <>
        <Link> Detalle del grupo {groupId} </Link>
        <h2>materias</h2>
        <ul>
            <li>materias 1</li>            
        </ul>
        <h2>students</h2>
        <ul>
            <li>materias 1</li>            
        </ul>
        <h2>Teacher</h2>
        <ul>
            <li>materias 1</li>            
        </ul>


        </>

        
    )
}
export default GroupDetail