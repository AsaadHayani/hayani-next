import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET() {
  const { error } = await supabase.from("links").select("id").limit(1);

  if (error) {
    return new Response("Error", { status: 500 });
  }

  return new Response("OK", { status: 200 });
}
