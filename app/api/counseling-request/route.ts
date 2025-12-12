import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { error } = await supabase.from("counseling_requests").insert({
      name: body.name,
      email: body.email ?? null,
      phone: body.phone,
      preferred_contact: body.preferred_contact,
      service_type: body.service_type,
      preferred_date: body.preferred_date, // "YYYY-MM-DD"
      preferred_time_slot: body.preferred_time_slot,
      timezone: body.timezone ?? "Asia/Kolkata",
      language: body.language ?? "Hindi",
      consent: Boolean(body.consent),
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Server error" },
      { status: 500 }
    );
  }
}
