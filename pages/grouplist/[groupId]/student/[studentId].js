/* default */
import { useRouter } from 'next/router'

function Student() {
    const router = useRouter()
    const { groupId, studentId } = router.query

    return <h1>Estuduante con id: {studentId} del grupo {groupId} </h1>
     
}

export default Student