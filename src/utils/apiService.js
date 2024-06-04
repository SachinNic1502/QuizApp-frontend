import axios from 'axios';

const baseURL = 'http://localhost:3000'; 

const apiService = axios.create({
  baseURL,
});

export const signup = async (email, password) => {
  try {
    const response = await apiService.post('/auth/signup', { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await apiService.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginwithgoogle =async()=>{
  try {
    const response = await apiService.get('/auth/google');
    return response.data;
  }catch(error){
    throw error;
  }
}

export const fetchQuestions = async () => {
  try {
    const response = await apiService.get('/api/questions');
    return response.data;
  
  } catch (error) {
    throw error;
  }
};
export const submitQuiz = async (userId, answers, token) => {
  console.log(userId);
  console.log(answers);
  try {
    const response = await apiService.post('/api/submit-quiz', { userId, answers }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default apiService;
