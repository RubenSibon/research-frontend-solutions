"use server";

export async function updateName(name) {
  if (!name) {
    return { error: "Name is required" };
  }

  return await new Promise((resolve) => {
    setTimeout(() => resolve(name), 3000);
  });
}
