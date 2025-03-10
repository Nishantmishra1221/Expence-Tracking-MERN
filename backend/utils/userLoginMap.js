const userLoginMap = new Map();

const setUser = (email, sessionId) => {
  userLoginMap.set(sessionId, email);
};
const getUser = (sessionId) => {
  return userLoginMap.get(sessionId);
};

export { setUser, getUser };
