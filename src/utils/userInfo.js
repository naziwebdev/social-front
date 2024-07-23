export const userInfo = async () => {
  const res = await fetch("http://localhost:4002/auth/me", {
    credentials: "include",
  });
  const data = await res.json();

  if (res.status === 200) {
    return data;
  } else {
    return false;
  }
};
