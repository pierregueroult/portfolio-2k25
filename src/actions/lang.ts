"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default async function update(locale: string, path: string): Promise<boolean> {
  const store = await cookies();
  store.set("locale", locale);

  revalidatePath(path);

  return true;
}
