import Vapi from "@vapi-ai/web"

const token = process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN || "";
if (!token && typeof window !== "undefined") {
  console.warn("Vapi SDK Token is missing!");
}
export const vapi = new Vapi(token);