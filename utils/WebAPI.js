const SERVER_HOST = 'localhost:8080';
const COWORKIO_HOST_URL = window.location ? window.location.protocol  + '//' + SERVER_HOST : 'https://coworkio.herokuapp.com';

const WebAPI = {
    ACCOUNT_LOGIN: COWORKIO_HOST_URL + '/auth/login',
    ACCOUNT_REGISTER: COWORKIO_HOST_URL + '/auth/register',
    ADD_TASK: COWORKIO_HOST_URL + '/task/add',
    FETCH_TASK :  COWORKIO_HOST_URL + '/task/{taskID}',
    FETCH_TASKS :  COWORKIO_HOST_URL + '/task/{projectID}/all',
    FETCH_PROJECTS: COWORKIO_HOST_URL + '/project/all',
    FETCH_PROJECT: COWORKIO_HOST_URL + '/project',
    CREATE_PROJECT: COWORKIO_HOST_URL + '/project/create',
    FETCH_PROJECTS_BY_USER: COWORKIO_HOST_URL + '/user/getProjects',
    FETCH_USER_PROFILE: COWORKIO_HOST_URL + '/user/profile',
    UPDATE_USER_PROFILE: COWORKIO_HOST_URL + '/user/update'
};

export default WebAPI;
