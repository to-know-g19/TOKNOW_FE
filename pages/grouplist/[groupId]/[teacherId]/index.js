/* default */
import { useRouter } from 'next/router'

function Teacher() {
    const router = useRouter()
    const { groupId, teacherId } = router.query

    return <h1>El maestro con id {teacherId} del grupo {groupId} </h1>
}

export default Teacher