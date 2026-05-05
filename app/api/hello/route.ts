export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name") || "Guest";

  return Response.json({
    message: `Hello ${name} 🚀`
  });
}
export async function POST(req: Request) {
  const body = await req.json();

  return Response.json({
    received: body,
    status: "success"
  });
}