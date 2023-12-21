import { Attendance, AttendanceList } from "../screens/Attendance";
import { KeyLogin, Login } from "../screens/Auth";

const Routes = {
    KeyLogin: {
        component: KeyLogin,
        name: 'KeyLogin',
        options: {headerShown: false},
        auth: false
    },
    Login: {
        component: Login,
        name: 'Login',
        options: {headerShown: false},
        auth: false

    },
    Attendance: {
        component: Attendance,
        name: 'Attendance',
        options: {headerShown: false},
        auth: true
    },
    AttendanceList: {
        component: AttendanceList,
        name: 'AttendanceList',
        options: {headerShown: false},
        auth: true
    }
}

export default Routes