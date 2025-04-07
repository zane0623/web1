// Google OAuth 配置
const googleConfig = {
    clientId: 'YOUR_GOOGLE_CLIENT_ID', // 需要替换为实际的Google Client ID
    scope: 'email profile'
};

// 检查客户端ID是否已配置
function checkClientIdConfig() {
    if (googleConfig.clientId === 'YOUR_GOOGLE_CLIENT_ID') {
        console.error('错误：Google客户端ID未配置');
        alert('Google登录错误：客户端ID未正确配置，请联系管理员');
        return false;
    }
    return true;
}

// 用户状态管理
let currentUser = null;

// 初始化Google认证
function initGoogleAuth() {
    // 先检查客户端ID是否已配置
    if (!checkClientIdConfig()) {
        return;
    }
    
    gapi.load('auth2', () => {
        gapi.auth2.init(googleConfig).then(
            (auth2) => {
                console.log('Google Auth initialized');
                updateSignInStatus(auth2.isSignedIn.get());
                auth2.isSignedIn.listen(updateSignInStatus);
            },
            (error) => {
                console.error('Google Auth initialization error', error);
                alert('Google登录错误：' + error.error);
            }
        );
    });
}

// 更新登录状态
function updateSignInStatus(isSignedIn) {
    const userStatusElement = document.getElementById('userStatus');
    const signInButton = document.getElementById('signIn');
    const signOutButton = document.getElementById('signOut');

    if (isSignedIn) {
        const auth2 = gapi.auth2.getAuthInstance();
        const user = auth2.currentUser.get();
        const profile = user.getBasicProfile();
        currentUser = {
            id: profile.getId(),
            name: profile.getName(),
            email: profile.getEmail(),
            imageUrl: profile.getImageUrl()
        };

        userStatusElement.innerHTML = `欢迎, ${currentUser.name}`;
        signInButton.style.display = 'none';
        signOutButton.style.display = 'block';
    } else {
        currentUser = null;
        userStatusElement.innerHTML = '';
        signInButton.style.display = 'block';
        signOutButton.style.display = 'none';
    }
}

// 处理登录
function handleSignIn() {
    // 先检查客户端ID是否已配置
    if (!checkClientIdConfig()) {
        return;
    }
    
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then(
        (user) => {
            console.log('User signed in');
            updateSignInStatus(true);
        },
        (error) => {
            console.error('Sign in error', error);
            alert('登录失败：' + (error.error || '未知错误'));
        }
    );
}

// 处理登出
function handleSignOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
        console.log('User signed out');
        updateSignInStatus(false);
    });
}

// 导出函数
window.initGoogleAuth = initGoogleAuth;
window.handleSignIn = handleSignIn;
window.handleSignOut = handleSignOut;