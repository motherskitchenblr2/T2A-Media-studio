/**
 * Seed script for populating the gallery_items table with demo data.
 *
 * Usage:
 *   npx ts-node --compiler-options '{"module":"commonjs","moduleResolution":"node"}' scripts/seed-gallery.ts
 *
 * Or run directly with:
 *   node scripts/seed-gallery.mjs
 *
 * Requires SUPABASE_SERVICE_ROLE_KEY and NEXT_PUBLIC_SUPABASE_URL in .env.local
 */

const { createClient } = require("@supabase/supabase-js");

// Load env vars
require("dotenv").config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error(
    "❌ Missing Supabase credentials. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local"
  );
  process.exit(1);
}

if (supabaseUrl === "https://your-project.supabase.co") {
  console.error(
    "❌ Please update .env.local with your actual Supabase project URL and keys."
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const SEED_ITEMS = [
  {
    tool_type: "text2image",
    title: "Neon City Sunset",
    prompt:
      "A futuristic neon-lit city at sunset with flying cars and holographic billboards, 4K photorealistic",
    thumbnail_url: "/gallery/placeholders/text2image-1.svg",
    is_public: true,
  },
  {
    tool_type: "img2video",
    title: "Dancing Robot",
    prompt:
      "A robot breaking into dance in a neon alleyway, smooth fluid motion, cinematic lighting",
    thumbnail_url: "/gallery/placeholders/img2video-1.svg",
    is_public: true,
  },
  {
    tool_type: "add-audio",
    title: "Thunderstorm Soundscape",
    prompt:
      "Add realistic thunder and rain sounds to this night cityscape timelapse with ambient wind",
    thumbnail_url: "/gallery/placeholders/add-audio-1.svg",
    is_public: true,
  },
  {
    tool_type: "wan2.5",
    title: "Cyberpunk Chase Scene",
    prompt:
      "High-speed hoverbike chase through a densely packed neon metropolis, 1080p cinematic, 10 second duration",
    thumbnail_url: "/gallery/placeholders/wan-1.svg",
    is_public: true,
  },
  {
    tool_type: "extendVideo",
    title: "Forest Portal Extension",
    prompt:
      "Extend the video beyond the glowing portal revealing an enchanted alien forest with bioluminescent flora",
    thumbnail_url: "/gallery/placeholders/extend-1.svg",
    is_public: true,
  },
  {
    tool_type: "text2image",
    title: "Crystal Dragon",
    prompt:
      "A majestic dragon made of translucent crystal, 4K photorealistic, rim lighting, dark atmospheric background",
    thumbnail_url: "/gallery/placeholders/text2image-2.svg",
    is_public: true,
  },
  {
    tool_type: "img2video",
    title: "Ocean Wave Crash",
    prompt:
      "Static ocean image coming to life with crashing waves, sea spray particles, and dynamic foam",
    thumbnail_url: "/gallery/placeholders/img2video-2.svg",
    is_public: true,
  },
  {
    tool_type: "wan2.5",
    title: "Space Colony Sunrise",
    prompt:
      "Dome colony on Mars watching the sunrise, people walking between structures, flags waving in artificial wind, 1080p",
    thumbnail_url: "/gallery/placeholders/wan-2.svg",
    is_public: true,
  },
  {
    tool_type: "text2image",
    title: "Samurai in Tokyo",
    prompt:
      "A cyber samurai standing on a rooftop in Shinjuku at night, neon reflections on carbon-fiber armor, rain droplets, 4K",
    thumbnail_url: "/gallery/placeholders/text2image-3.svg",
    is_public: true,
  },
  {
    tool_type: "img2video",
    title: "Phoenix Rising",
    prompt:
      "A phoenix erupting from flames, feathers glowing gold and crimson, dynamic camera orbit, particle embers, 15s",
    thumbnail_url: "/gallery/placeholders/img2video-3.svg",
    is_public: true,
  },
  {
    tool_type: "add-audio",
    title: "Synthwave Beat",
    prompt:
      "Retro 80s synthwave beat with driving bass, arpeggiated leads, and punchy drums for this neon city driving sequence",
    thumbnail_url: "/gallery/placeholders/add-audio-2.svg",
    is_public: true,
  },
  {
    tool_type: "extendVideo",
    title: "Desert Storm Roll",
    prompt:
      "Extend the sandstorm sequence as it rolls over ancient ruins, adding dramatic lightning flashes and debris",
    thumbnail_url: "/gallery/placeholders/extend-2.svg",
    is_public: true,
  },
];

async function seed() {
  console.log("🌱 Seeding gallery_items table...\n");

  // First, check if table has data
  const { count: existingCount } = await supabase
    .from("gallery_items")
    .select("*", { count: "exact", head: true });

  if (existingCount && existingCount > 0) {
    console.log(
      `⚠️  Table already has ${existingCount} rows. Skipping seed to avoid duplicates.`
    );
    console.log("   Delete existing rows first if you want to re-seed.");
    process.exit(0);
  }

  // Insert seed data
  const { data, error } = await supabase
    .from("gallery_items")
    .insert(SEED_ITEMS)
    .select();

  if (error) {
    console.error("❌ Error seeding data:", error.message);
    process.exit(1);
  }

  console.log(`✅ Successfully inserted ${data.length} gallery items!`);
  console.log("\n📋 Seeded items:");
  data.forEach((item) => {
    console.log(`   - [${item.tool_type}] ${item.title} (${item.id})`);
  });
}

seed();
