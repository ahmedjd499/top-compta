"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  MessageSquare,
  X,
  Send,
  RotateCcw,
  Phone,
  ArrowUpRight,
  Copy,
  Check,
  Bot,
  User,
  ExternalLink,
  Briefcase,
  CircleDollarSign,
  Rocket,
  FileText,
} from "lucide-react";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: string;
}

const QUICK_SUGGESTIONS = [
  {
    icon: Briefcase,
    label: "Quelle formule pour mon entreprise ?",
    prompt: "Quelle est la meilleure formule comptable pour mon entreprise entre Essentiel, Confort et Indépendant ?",
  },
  {
    icon: CircleDollarSign,
    label: "Quels sont vos tarifs ?",
    prompt: "Quels sont vos tarifs mensuels et que comprennent vos formules ?",
  },
  {
    icon: Rocket,
    label: "Créer une société (SASU / SARL)",
    prompt: "Comment m'accompagnez-vous pour créer ma société (SASU, SARL, SCI) et obtenir mon Kbis ?",
  },
  {
    icon: FileText,
    label: "Facturation électronique 2026",
    prompt: "Comment TOP-COMPTA m'aide pour l'obligation de facturation électronique de septembre 2026 ?",
  },
];

// Helper to format inline markdown links and bold text
function renderFormattedContent(text: string) {
  // Split lines
  const lines = text.split("\n");

  return lines.map((line, lineIdx) => {
    // Check if line is bullet
    const isBullet = line.trim().startsWith("•") || line.trim().startsWith("- ");
    const cleanLine = isBullet ? line.trim().replace(/^[•\-]\s*/, "") : line;

    // Parse bold and markdown links [text](url)
    const parts: React.ReactNode[] = [];
    const regex = /(\[.*?\]\(.*?\)|\*\*.*?\*\*)/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(cleanLine)) !== null) {
      if (match.index > lastIndex) {
        parts.push(cleanLine.substring(lastIndex, match.index));
      }

      const token = match[0];
      if (token.startsWith("[") && token.includes("](")) {
        const linkMatch = /\[(.*?)\]\((.*?)\)/.exec(token);
        if (linkMatch) {
          const [, label, href] = linkMatch;
          const isExternal = href.startsWith("http") || href.startsWith("https");
          parts.push(
            <a
              key={match.index}
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-0.5 text-secondary font-semibold underline underline-offset-2 hover:text-secondary/80 transition-colors"
            >
              <span>{label}</span>
              {isExternal && <ArrowUpRight className="w-3 h-3 inline-block" />}
            </a>
          );
        }
      } else if (token.startsWith("**") && token.endsWith("**")) {
        parts.push(
          <strong key={match.index} className="font-semibold text-on-surface">
            {token.slice(2, -2)}
          </strong>
        );
      }
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < cleanLine.length) {
      parts.push(cleanLine.substring(lastIndex));
    }

    if (isBullet) {
      return (
        <li key={lineIdx} className="ml-4 list-disc marker:text-secondary my-0.5">
          {parts}
        </li>
      );
    }

    return (
      <p key={lineIdx} className={cn("min-h-[1.25rem]", lineIdx > 0 && "mt-1.5")}>
        {parts.length > 0 ? parts : " "}
      </p>
    );
  });
}

const getInitialMessages = (): Message[] => [
  {
    id: "welcome-1",
    role: "assistant",
    content:
      "Bonjour ! Je suis l'assistant de **TOP-COMPTA.FR**.\n\nComment puis-je vous aider ? Choisissez une question fréquente ci-dessous ou posez-moi directement votre question !",
    timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  },
];

export function ChatWidget() {
  const shouldReduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(getInitialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen, messages, isLoading]);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleReset = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setMessages(getInitialMessages());
    setHasInteracted(false);
    setInput("");
    setIsLoading(false);
  };

  const handleSubmit = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    setHasInteracted(true);
    setInput("");

    const userMessage: Message = {
      id: "u-" + Date.now(),
      role: "user",
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setIsLoading(true);

    const assistantId = "a-" + Date.now();
    const assistantMessage: Message = {
      id: assistantId,
      role: "assistant",
      content: "",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages([...newMessages, assistantMessage]);

    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur de connexion au service.");
      }

      if (!response.body) {
        throw new Error("Flux de réponse vide.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedText = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");

        for (const line of lines) {
          const trimmed = line.trim();
          if (trimmed.startsWith("data: ")) {
            const dataStr = trimmed.slice(6);
            if (dataStr === "[DONE]") break;
            try {
              const parsed = JSON.parse(dataStr);
              const delta = parsed.choices?.[0]?.delta?.content;
              if (delta) {
                accumulatedText += delta;
                setMessages((prev) =>
                  prev.map((msg) =>
                    msg.id === assistantId ? { ...msg, content: accumulatedText } : msg
                  )
                );
              }
            } catch {
              // Ignore non-json or incomplete chunks
            }
          }
        }
      }
    } catch (err: unknown) {
      if (err instanceof Error && err.name === "AbortError") {
        return;
      }
      console.error("Chat error:", err);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantId
            ? {
                ...msg,
                content:
                  "Désolé, je rencontre une petite difficulté momentanée pour vous répondre. Vous pouvez joindre directement notre équipe par téléphone au [01 70 60 00 82](tel:0170600082) ou sur [WhatsApp](https://wa.me/33779335302).",
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-20 right-4 sm:bottom-22 sm:right-6 lg:bottom-8 lg:right-8 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={shouldReduceMotion ? undefined : { scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={shouldReduceMotion ? undefined : { scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="relative group"
            >
              {/* Desktop tooltip preview */}
              <div className="hidden lg:flex absolute right-full mr-3 top-1/2 -translate-y-1/2 items-center gap-2 px-3.5 py-2 rounded-full bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/40 shadow-xl text-on-surface select-none pointer-events-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-on-surface">Robot IA Top Compta</span>
                <span className="text-[11px] text-on-surface-variant font-medium">• En ligne</span>
              </div>

              {/* Launcher circle with floating robot logo in gold / yellow */}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-label="Discuter avec le robot assistant IA"
                className={cn(
                  "relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 text-slate-950 flex items-center justify-center",
                  "shadow-[0_8px_24px_rgba(245,158,11,0.45)] hover:shadow-[0_12px_32px_rgba(217,119,6,0.65)] border border-yellow-200/80",
                  "transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400/50 hover:scale-110 active:scale-95 group"
                )}
              >
                {/* Ping pulse */}
                <span className="absolute -inset-1 rounded-full bg-amber-400/35 animate-ping pointer-events-none" />

                {/* Subtle golden energy ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-amber-600/20 via-transparent to-white/50 pointer-events-none" />

                {/* Status Dot */}
                <span
                  className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-2xs z-10"
                  title="Robot IA en ligne"
                />

                {/* Floating Robot Logo with gentle idle bobbing */}
                <motion.div
                  animate={shouldReduceMotion ? undefined : { y: [0, -2.5, 0] }}
                  transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
                  className="relative flex items-center justify-center"
                >
                  <Bot className="w-6 h-6 sm:w-7 sm:h-7 text-slate-950 drop-shadow-[0_1px_2px_rgba(255,255,255,0.35)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                </motion.div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className={cn(
              "fixed z-50 flex flex-col overflow-hidden bg-surface-container-lowest border border-outline-variant/40 shadow-2xl",
              // Mobile layout
              "inset-x-2 bottom-20 top-20 rounded-2xl sm:inset-x-auto sm:top-auto sm:bottom-22 sm:right-6 sm:w-[410px] sm:h-[580px] lg:bottom-8 lg:right-8 lg:w-[420px] lg:h-[620px]"
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3.5 bg-gradient-to-r from-surface-container-high via-surface-container to-surface-container-high border-b border-outline-variant/30">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full bg-secondary/15 border border-secondary/30 flex items-center justify-center text-secondary">
                  <Bot className="w-5 h-5" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-space-grotesk text-sm font-bold text-on-surface">
                      Assistant TOP-COMPTA
                    </h3>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-secondary/10 text-secondary">
                      IA
                    </span>
                  </div>
                  <p className="text-[11px] text-on-surface-variant font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    En ligne • Répond instantanément
                  </p>
                </div>
              </div>

              {/* Action Buttons in Header */}
              <div className="flex items-center gap-1">
                {/* WhatsApp Link */}
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contacter sur WhatsApp"
                  title="Parler à un conseiller sur WhatsApp"
                  className="p-1.5 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                </a>

                {/* Reset Conversation */}
                <button
                  type="button"
                  onClick={handleReset}
                  aria-label="Réinitialiser la conversation"
                  title="Réinitialiser"
                  className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Fermer le chat"
                  className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-surface text-xs sm:text-sm">
              {messages
                .filter((message) => message.content.trim().length > 0)
                .map((message) => {
                  const isAssistant = message.role === "assistant";
                  return (
                    <div
                      key={message.id}
                      className={cn(
                        "flex gap-2.5 items-start group",
                        isAssistant ? "justify-start" : "justify-end"
                      )}
                    >
                      {isAssistant && (
                        <div className="w-7 h-7 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                          <Bot className="w-4 h-4" />
                        </div>
                      )}

                      <div
                        className={cn(
                          "relative max-w-[84%] rounded-2xl px-3.5 py-2.5 shadow-xs leading-relaxed break-words",
                          isAssistant
                            ? "bg-surface-container-lowest border border-outline-variant/30 text-on-surface rounded-tl-sm"
                            : "bg-secondary text-white rounded-tr-sm shadow-[0_2px_8px_rgba(55,85,195,0.25)]"
                        )}
                      >
                        {/* Message Content */}
                        <div className="text-[13px] leading-relaxed">
                          {renderFormattedContent(message.content)}
                          {isLoading &&
                            isAssistant &&
                            message.id === messages[messages.length - 1]?.id && (
                              <span className="inline-block w-1.5 h-3.5 bg-secondary ml-1 animate-pulse align-middle" />
                            )}
                        </div>

                        {/* Footer info: time & copy */}
                        <div
                          className={cn(
                            "flex items-center justify-between gap-2 mt-1.5 pt-1 text-[10px]",
                            isAssistant
                              ? "text-on-surface-variant/70 border-t border-outline-variant/20"
                              : "text-white/70"
                          )}
                        >
                          <span>{message.timestamp}</span>

                          {isAssistant && message.content && (
                            <button
                              type="button"
                              onClick={() => handleCopy(message.id, message.content)}
                              aria-label="Copier le texte"
                              className="opacity-0 group-hover:opacity-100 hover:text-on-surface transition-opacity flex items-center gap-1"
                            >
                              {copiedId === message.id ? (
                                <Check className="w-3 h-3 text-emerald-600" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          )}
                        </div>
                      </div>

                      {!isAssistant && (
                        <div className="w-7 h-7 rounded-full bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-on-surface shrink-0 mt-0.5">
                          <User className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  );
                })}

              {/* Typing indicator: shown ONLY when waiting for the assistant's first words */}
              {isLoading &&
                (!messages[messages.length - 1]?.content ||
                  messages[messages.length - 1]?.role === "user") && (
                  <div className="flex gap-2.5 items-start">
                    <div className="w-7 h-7 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary shrink-0">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl rounded-tl-sm px-4 py-2.5 flex items-center gap-1.5 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-secondary/60 animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-2 h-2 rounded-full bg-secondary/60 animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-2 h-2 rounded-full bg-secondary/60 animate-bounce" />
                    </div>
                  </div>
                )}

              {/* Quick suggestions on fresh interaction */}
              {!hasInteracted && messages.filter((m) => m.role === "user").length === 0 && (
                <div className="pt-2">
                  <p className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-2 flex items-center gap-1">
                    Suggestions rapides
                  </p>
                  <div className="grid grid-cols-1 gap-1.5">
                    {QUICK_SUGGESTIONS.map((sug, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSubmit(sug.prompt)}
                        className="text-left px-3 py-2 rounded-xl bg-surface-container-lowest border border-outline-variant/40 hover:border-secondary/50 hover:bg-surface-container-low text-xs text-on-surface transition-all flex items-center gap-2 group cursor-pointer"
                      >
                        <sug.icon className="w-4 h-4 text-secondary shrink-0" />
                        <span className="flex-1 font-medium group-hover:text-secondary transition-colors">
                          {sug.label}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-on-surface-variant group-hover:text-secondary transition-colors shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Handoff Banner */}
            <div className="px-3.5 py-1.5 bg-surface-container-low border-t border-outline-variant/20 flex items-center justify-between text-[11px] text-on-surface-variant">
              <span>Besoin d&apos;un humain ?</span>
              <div className="flex items-center gap-3">
                <a
                  href="tel:0170600082"
                  className="font-medium text-secondary hover:underline flex items-center gap-1"
                >
                  01 70 60 00 82
                </a>
                <span className="text-outline-variant">•</span>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-emerald-600 hover:underline flex items-center gap-0.5"
                >
                  WhatsApp <ExternalLink className="w-2.5 h-2.5 inline" />
                </a>
              </div>
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="p-3 bg-surface-container-lowest border-t border-outline-variant/30 flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez votre question comptable..."
                disabled={isLoading}
                className="flex-1 bg-surface-container border border-outline-variant/40 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Envoyer le message"
                className={cn(
                  "w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 shrink-0",
                  input.trim() && !isLoading
                    ? "bg-secondary text-white hover:bg-secondary/90 shadow-md hover:scale-105 active:scale-95"
                    : "bg-surface-container-high text-on-surface-variant/40 cursor-not-allowed"
                )}
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
