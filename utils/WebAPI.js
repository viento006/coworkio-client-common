const WebAPI = {
    ACCOUNT_LOGIN:          '/api/auth/login',
    ACCOUNT_REGISTER:       '/api/auth/register',
    ADD_TASK:               '/api/task/add',
    UPDATE_TASK:             '/api/task/update',
    FETCH_TASK :            '/api/task/{taskID}',
    FETCH_TASKS :           '/api/task/{projectID}/all',
    FETCH_PROJECTS:         '/api/project/all',
    FETCH_PROJECT:          '/api/project',
    CREATE_PROJECT:         '/api/project/create',
    FIND_PROJECT:           '/api/project/find',
    FETCH_PROJECTS_BY_USER: '/api/user/getProjects',
    FETCH_USER_PROFILE:     '/api/user/profile',
    FETCH_PROFILES:         '/api/user/all',
    UPSERT_USER_PROFILE:    '/api/user/update'
}; 

export default WebAPI;