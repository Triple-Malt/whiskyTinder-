export async function getWhisky() {
  const response = await fetch(
    "https://evening-citadel-85778.herokuapp.com:443/whiskey/"
  );

  if (!response.ok) {
    throw new Error(response.status);
  }

  const data = await response.json();
  return data;
}
