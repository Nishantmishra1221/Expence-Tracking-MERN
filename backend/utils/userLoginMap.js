const userLoginMap = new Map();

const setUser = (email, sessionId) => {
  userLoginMap.set(email, sessionId);
};
const getUser = (sessionId) => {
  return userLoginMap.get(sessionId);
};

export { setUser, getUser };
