/* ============================================
   CONFIG — Firebase + AI (OpenRouter + Groq)
   ============================================ */

// ========== LOAD FROM GLOBAL (injected via config.local.js) ==========
const _C = (typeof window !== "undefined" && window.FLUX_CONFIG) || {};

// ========== FIREBASE ==========
export const FIREBASE_CONFIG = {
  apiKey: _C.FIREBASE_API_KEY || "",
  authDomain: _C.FIREBASE_AUTH_DOMAIN || "",
  projectId: _C.FIREBASE_PROJECT_ID || "",
  storageBucket: _C.FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: _C.FIREBASE_MESSAGING_SENDER_ID || "",
  appId: _C.FIREBASE_APP_ID || ""
};

// ========== OPENROUTER ==========
export const OPENROUTER_API_KEY = _C.OPENROUTER_API_KEY || "";
export const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";
export const OPENROUTER_REFERER = "https://fluxchat.app";
export const OPENROUTER_TITLE = "FluxChat";

// ========== GROQ ==========
export const GROQ_API_KEY = _C.GROQ_API_KEY || "";
export const GROQ_BASE_URL = "https://api.groq.com/openai/v1";

// ========== DAFTAR MODEL ==========
export const AI_MODELS = [
  { id: "openai/gpt-oss-120b", name: "GPT-OSS 120B", desc: "OpenAI open model (Groq FREE)", badge: "FREE", provider: "groq", multimodal: false },
  { id: "openai/gpt-oss-20b",  name: "GPT-OSS 20B",  desc: "Ringan & cepet (Groq FREE)",   badge: "FREE", provider: "groq", multimodal: false },
  { id: "qwen/qwen3.8-27b",    name: "Qwen 3.8 27B", desc: "Multibahasa bagus (Groq FREE)", badge: "FREE", provider: "groq", multimodal: false },
  { id: "allam-2-7b",          name: "ALLaM 2 7B",   desc: "Arabic-focused (Groq FREE)",   badge: "FREE", provider: "groq", multimodal: false },
  { id: "google/gemini-flash-1.5:free", name: "Gemini Flash 1.5", desc: "Bisa baca gambar (OR free)", badge: "FREE", provider: "openrouter", multimodal: true },
  { id: "openai/gpt-4o-mini",  name: "GPT-4o mini",  desc: "Kualitas top (bayar)",         badge: "PRO",  provider: "openrouter", multimodal: true }
];

export const DEFAULT_AI_MODEL = "openai/gpt-oss-120b";
export const GEMINI_MODEL = DEFAULT_AI_MODEL;

export const AI_CONFIG = {
  temperature: 0.7,
  maxTokens: 2048,
  contextTurns: 10,
  streamEnabled: true
};
