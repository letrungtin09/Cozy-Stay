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

const GetUserEmail = () => {
    if (typeof window !== 'undefined') {
        const isLoggedIn = sessionStorage.getItem('currentUser');
        if (isLoggedIn) {
            const userObject = JSON.parse(isLoggedIn);
            const email = userObject.email;
            return email;
        } else {
            return false;
        }
    } else {
        return null;
    }
};

const GetUserAvatar = () => {
    if (typeof window !== 'undefined') {
        const isLoggedIn = sessionStorage.getItem('currentUser');
        if (isLoggedIn) {
            const userObject = JSON.parse(isLoggedIn);
            const avatar = userObject.avatar;
            return avatar;
        } else {
            return false;
        }
    } else {
        return null;
    }
};
const UserCurrent = { CheckUser, GetUserId, GetUserEmail, GetUserAvatar };

export default UserCurrent;