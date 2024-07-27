import { useCallback } from "react";

const URL_BASE = process.env.URL_BASE;

export default function useAPI() {
  const httpGet = useCallback(async function (uri: string): Promise<any> {
    console.log("URL_BASE", URL_BASE, "httpGet");
    const res = await fetch(`${URL_BASE}/${uri}`);
    const data = await res.json();
    return data;
  }, []);

  const httpPost = useCallback(async function (
    uri: string,
    body: any
  ): Promise<any> {
    console.log("URL_BASE", URL_BASE, "httpPost");
    await fetch(`${URL_BASE}/${uri}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }, []);

  return { httpGet, httpPost };
}
