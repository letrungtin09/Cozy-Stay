const CheckUser = () => {
    if (typeof window !== 'undefined') {
        const isLoggedIn = sessionStorage.getItem('currentUser');
        if (isLoggedIn) {
            const userObject = JSON.parse(isLoggedIn);
            const role = userObject.role;
            return role;
        } else {
            return false;
        }
    } else {
        return null;
    }
};

const GetUserId = () => {
    if (typeof window !== 'undefined') {
        const isLoggedIn = sessionStorage.getItem('currentUser');
        if (isLoggedIn) {
            const userObject = JSON.parse(isLoggedIn);
            const role = userObject.idUser;
            return role;
        } else {
            return false;
        }
    } else {
        return null;
    }
};
const UserCurrent = { CheckUser, GetUserId };

export default UserCurrent;