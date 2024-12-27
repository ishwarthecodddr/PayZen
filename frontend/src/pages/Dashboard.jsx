import {Appbar} from '../SignedIn_components/Appbar'
import {Balance} from '../SignedIn_components/Balance'
import {Users} from '../SignedIn_components/Users'
export default function Dashboard() {
    return <div>
        <Appbar></Appbar>
        <div className='m-8'>
            <Balance balance={"1000"}></Balance>
        <Users></Users>
        </div>
        
    </div>
}