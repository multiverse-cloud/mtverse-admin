'use client';

import React, { useState, useMemo } from 'react';
import {
  Copy,
  Check,
  ChevronDown,
  Download,
  Sparkles,
  Clock,
  Cpu,
  FileText,
  Code2,
  Image as ImageIcon,
  MessageSquare,
  Hash,
  Thermometer,
  Zap,
  RotateCcw,
} from 'lucide-react';
import { aiData } from '@/lib/mtverse/data/mock-data';

/* ──────────────────────── shared helpers ──────────────────────── */

function PageHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">{title}</h2>
      <p className="mt-1 text-theme-sm text-gray-500">{description}</p>
    </div>
  );
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg border border-gray-200 bg-white dark:border-white/5 dark:bg-gray-dark ${className}`}>
      {children}
    </div>
  );
}

const inputClass =
  'h-11 w-full rounded-lg border border-gray-300 bg-white px-4 text-theme-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-gray-500';

/* ══════════════════════════════════════════════════════════════════
   1. AI TEXT GENERATOR PAGE
   ══════════════════════════════════════════════════════════════════ */

const PLACEHOLDER_TEXT = `In the rapidly evolving landscape of artificial intelligence, the convergence of machine learning algorithms and natural language processing has opened up unprecedented possibilities. Today's AI systems can understand context, generate creative content, and assist professionals across industries in ways that were once thought impossible.

From drafting compelling marketing copy to analyzing complex data sets, AI-powered text generation is transforming how we work and create. The key lies in crafting precise prompts that guide the model toward producing relevant, high-quality output.

As we continue to refine these technologies, the partnership between human creativity and machine intelligence promises to unlock new frontiers of innovation and productivity.`;

export function AITextGeneratorPage() {
  const [prompt, setPrompt] = useState('');
  const [model, setModel] = useState('GPT-4');
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState('2048');
  const [generatedText, setGeneratedText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const textHistory = useMemo(() => {
    return aiData.promptHistory.filter((h) =>
      ['GPT-4', 'GPT-3.5', 'Claude'].includes(h.model)
    );
  }, []);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setGeneratedText('');
    // Simulate generation
    let i = 0;
    const text = PLACEHOLDER_TEXT;
    const interval = setInterval(() => {
      setGeneratedText(text.slice(0, i + 10));
      i += 10;
      if (i >= text.length) {
        clearInterval(interval);
        setIsGenerating(false);
      }
    }, 30);
  };

  const handleCopy = () => {
    if (generatedText) {
      navigator.clipboard.writeText(generatedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const wordCount = generatedText ? generatedText.split(/\s+/).filter(Boolean).length : 0;
  const tokenCount = Math.round(wordCount * 1.3); // rough estimate

  return (
    <div>
      <PageHeader title="AI Text Generator" description="Generate high-quality text content with AI" />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* Left Panel — Input */}
        <div className="xl:col-span-5">
          <Card className="p-6">
            <h3 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
              Prompt
            </h3>

            {/* Prompt Textarea */}
            <textarea
              rows={6}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt here... Describe what you want to generate."
              className="mb-4 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-theme-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-gray-500"
            />

            {/* Model Selector */}
            <div className="mb-4">
              <label className="mb-1.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-300">
                Model
              </label>
              <div className="relative">
                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className={inputClass + ' appearance-none pr-10'}
                >
                  <option>GPT-4</option>
                  <option>GPT-3.5</option>
                  <option>Claude</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Temperature Slider */}
            <div className="mb-4">
              <div className="mb-1.5 flex items-center justify-between">
                <label className="text-theme-sm font-medium text-gray-700 dark:text-gray-300">
                  Temperature
                </label>
                <span className="text-theme-sm font-semibold text-brand-500">{temperature}</span>
              </div>
              <input
                type="range"
                min={0}
                max={2}
                step={0.1}
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-brand-500 dark:bg-white/10"
              />
              <div className="mt-1 flex justify-between text-theme-xs text-gray-400">
                <span>Precise</span>
                <span>Creative</span>
              </div>
            </div>

            {/* Max Tokens */}
            <div className="mb-6">
              <label className="mb-1.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-300">
                Max Tokens
              </label>
              <input
                type="number"
                value={maxTokens}
                onChange={(e) => setMaxTokens(e.target.value)}
                className={inputClass}
                min={1}
                max={4096}
              />
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-500 text-theme-sm font-semibold text-white hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <RotateCcw className="h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  Generate
                </>
              )}
            </button>
          </Card>
        </div>

        {/* Right Panel — Output */}
        <div className="xl:col-span-7">
          <Card className="flex flex-col">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-white/5">
              <h3 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">Output</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopy}
                  disabled={!generatedText}
                  className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-theme-xs font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-40 dark:border-white/10 dark:text-gray-400 dark:hover:bg-white/5"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-success-500" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="flex-1 p-6">
              {generatedText ? (
                <div className="whitespace-pre-wrap text-theme-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {generatedText}
                  {isGenerating && <span className="animate-pulse text-brand-500">|</span>}
                </div>
              ) : (
                <div className="flex h-64 flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100 dark:bg-white/5">
                    <MessageSquare className="h-8 w-8 text-gray-400" />
                  </div>
                  <p className="text-theme-sm text-gray-500">
                    Enter a prompt and click Generate to create text
                  </p>
                </div>
              )}
            </div>

            {/* Stats Bar */}
            {generatedText && (
              <div className="flex items-center gap-6 border-t border-gray-100 px-6 py-3 dark:border-white/5">
                <div className="flex items-center gap-1.5 text-theme-xs text-gray-500">
                  <FileText className="h-3.5 w-3.5" />
                  <span>{wordCount} words</span>
                </div>
                <div className="flex items-center gap-1.5 text-theme-xs text-gray-500">
                  <Hash className="h-3.5 w-3.5" />
                  <span>{tokenCount} tokens</span>
                </div>
                <div className="flex items-center gap-1.5 text-theme-xs text-gray-500">
                  <Cpu className="h-3.5 w-3.5" />
                  <span>{model}</span>
                </div>
              </div>
            )}
          </Card>

          {/* Prompt History */}
          <Card className="mt-6 p-6">
            <h3 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
              Prompt History
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {textHistory.map((h) => (
                <div
                  key={h.id}
                  className="flex items-start gap-3 rounded-lg border border-gray-100 p-3 dark:border-white/5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 dark:bg-brand-500/15">
                    <MessageSquare className="h-4 w-4 text-brand-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-theme-sm text-gray-800 dark:text-white/90 truncate">{h.prompt}</p>
                    <div className="mt-1 flex items-center gap-3 text-theme-xs text-gray-500">
                      <span className="inline-flex rounded-full bg-gray-100 px-2 py-0.5 font-medium text-gray-600 dark:bg-white/10 dark:text-gray-400">
                        {h.model}
                      </span>
                      <span>{h.tokens} tokens</span>
                      <span>{h.time}</span>
                    </div>
                  </div>
                  <span className="text-theme-xs text-gray-400 shrink-0">{h.date}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   2. AI IMAGE GENERATOR PAGE
   ══════════════════════════════════════════════════════════════════ */

const GRADIENTS = [
  'from-brand-400 to-purple-500',
  'from-success-400 to-teal-500',
  'from-warning-400 to-orange-500',
  'from-blue-light-400 to-cyan-500',
];

const IMAGE_SIZES = ['1024x1024', '768x1344', '1344x768', '512x512'];
const STYLES = ['Photorealistic', 'Digital Art', 'Anime', 'Oil Painting', 'Watercolor', 'Pixel Art'];

export function AIImageGeneratorPage() {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState('1024x1024');
  const [style, setStyle] = useState('Photorealistic');
  const [numImages, setNumImages] = useState(4);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setGenerated(false);
    setTimeout(() => {
      setIsGenerating(false);
      setGenerated(true);
    }, 2000);
  };

  return (
    <div>
      <PageHeader title="AI Image Generator" description="Create stunning images from text descriptions" />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* Settings Panel */}
        <div className="xl:col-span-4">
          <Card className="p-6">
            <h3 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
              Settings
            </h3>

            {/* Prompt */}
            <div className="mb-4">
              <label className="mb-1.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-300">
                Prompt
              </label>
              <textarea
                rows={4}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the image you want to create..."
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-theme-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-gray-500"
              />
            </div>

            {/* Size Selector */}
            <div className="mb-4">
              <label className="mb-1.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-300">
                Image Size
              </label>
              <div className="grid grid-cols-2 gap-2">
                {IMAGE_SIZES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`rounded-lg border px-3 py-2 text-theme-xs font-medium transition-colors ${
                      size === s
                        ? 'border-brand-500 bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400 dark:border-brand-500'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-white/10 dark:text-gray-400 dark:hover:bg-white/5'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Style Selector */}
            <div className="mb-4">
              <label className="mb-1.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-300">
                Style
              </label>
              <div className="relative">
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className={inputClass + ' appearance-none pr-10'}
                >
                  {STYLES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Number of Images */}
            <div className="mb-6">
              <label className="mb-1.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-300">
                Number of Images
              </label>
              <div className="flex gap-2">
                {[1, 2, 4].map((n) => (
                  <button
                    key={n}
                    onClick={() => setNumImages(n)}
                    className={`flex h-10 w-10 items-center justify-center rounded-lg border text-theme-sm font-medium transition-colors ${
                      numImages === n
                        ? 'border-brand-500 bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400 dark:border-brand-500'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-white/10 dark:text-gray-400 dark:hover:bg-white/5'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            {/* Generate */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-500 text-theme-sm font-semibold text-white hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <RotateCcw className="h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <ImageIcon className="h-4 w-4" />
                  Generate Images
                </>
              )}
            </button>
          </Card>
        </div>

        {/* Output Grid */}
        <div className="xl:col-span-8">
          <Card className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">
                Generated Images
              </h3>
              {generated && (
                <span className="text-theme-xs text-gray-500">
                  {numImages} images • {size} • {style}
                </span>
              )}
            </div>

            {isGenerating ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {Array.from({ length: numImages }).map((_, i) => (
                  <div
                    key={i}
                    className="flex h-64 items-center justify-center rounded-lg bg-gray-100 dark:bg-white/5"
                  >
                    <div className="text-center">
                      <RotateCcw className="mx-auto h-8 w-8 animate-spin text-gray-400" />
                      <p className="mt-2 text-theme-xs text-gray-500">Generating image {i + 1}...</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : generated ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {Array.from({ length: numImages }).map((_, i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-lg"
                  >
                    <div
                      className={`flex h-64 items-center justify-center bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]}`}
                    >
                      <ImageIcon className="h-12 w-12 text-white/50" />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                      <div className="p-4">
                        <p className="text-theme-xs text-white/90 line-clamp-2">{prompt}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <button className="flex items-center gap-1 rounded-lg bg-white/20 px-3 py-1.5 text-theme-xs font-medium text-white backdrop-blur-sm hover:bg-white/30">
                            <Download className="h-3.5 w-3.5" /> Download
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex h-64 flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100 dark:bg-white/5">
                  <ImageIcon className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-theme-sm text-gray-500">
                  Configure settings and click Generate to create images
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   3. AI CODE GENERATOR PAGE
   ══════════════════════════════════════════════════════════════════ */

const LANGUAGES = ['JavaScript', 'Python', 'TypeScript', 'Rust', 'Go', 'Java', 'C++'];

const SAMPLE_CODE = `// Generated API endpoint handler
async function handleRequest(req, res) {
  const { method } = req;

  try {
    switch (method) {
      case 'GET':
        const data = await fetchData(req.query);
        res.status(200).json({
          success: true,
          data,
          message: 'Data fetched successfully'
        });
        break;

      case 'POST':
        const newItem = await createItem(req.body);
        res.status(201).json({
          success: true,
          data: newItem,
          message: 'Item created successfully'
        });
        break;

      case 'PUT':
        const updated = await updateItem(req.params.id, req.body);
        res.status(200).json({
          success: true,
          data: updated,
          message: 'Item updated successfully'
        });
        break;

      case 'DELETE':
        await deleteItem(req.params.id);
        res.status(200).json({
          success: true,
          message: 'Item deleted successfully'
        });
        break;

      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).json({
          success: false,
          message: \`Method \${method} not allowed\`
        });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}`;

export function AICodeGeneratorPage() {
  const [language, setLanguage] = useState('JavaScript');
  const [prompt, setPrompt] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const totalTokens = 4096;
  const usedTokens = generatedCode ? Math.round(generatedCode.length * 0.4) : 0;
  const tokenPercentage = Math.min((usedTokens / totalTokens) * 100, 100);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setGeneratedCode('');
    let i = 0;
    const code = SAMPLE_CODE;
    const interval = setInterval(() => {
      setGeneratedCode(code.slice(0, i + 8));
      i += 8;
      if (i >= code.length) {
        clearInterval(interval);
        setIsGenerating(false);
      }
    }, 20);
  };

  const handleCopy = () => {
    if (generatedCode) {
      navigator.clipboard.writeText(generatedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div>
      <PageHeader title="AI Code Generator" description="Generate code from natural language descriptions" />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* Input Panel */}
        <div className="xl:col-span-4">
          <Card className="p-6">
            <h3 className="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90">
              Configuration
            </h3>

            {/* Language Selector */}
            <div className="mb-4">
              <label className="mb-1.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-300">
                Language
              </label>
              <div className="flex flex-wrap gap-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`rounded-lg px-3 py-1.5 text-theme-xs font-medium transition-colors ${
                      language === lang
                        ? 'bg-brand-500 text-white'
                        : 'border border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-white/10 dark:text-gray-400 dark:hover:bg-white/5'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Prompt */}
            <div className="mb-6">
              <label className="mb-1.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-300">
                Describe what code you need...
              </label>
              <textarea
                rows={5}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., Create a REST API endpoint that handles CRUD operations for a user resource with error handling..."
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-theme-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-gray-500"
              />
            </div>

            {/* Generate */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-500 text-theme-sm font-semibold text-white hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <RotateCcw className="h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Code2 className="h-4 w-4" />
                  Generate Code
                </>
              )}
            </button>

            {/* Token Usage Meter */}
            <div className="mt-6">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-theme-sm font-medium text-gray-700 dark:text-gray-300">
                  Token Usage
                </span>
                <span className="text-theme-xs text-gray-500">
                  {usedTokens.toLocaleString()} / {totalTokens.toLocaleString()}
                </span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-gray-100 dark:bg-white/10">
                <div
                  className={`h-2.5 rounded-full transition-all ${
                    tokenPercentage > 85
                      ? 'bg-error-500'
                      : tokenPercentage > 60
                        ? 'bg-warning-500'
                        : 'bg-brand-500'
                  }`}
                  style={{ width: `${tokenPercentage}%` }}
                />
              </div>
              <p className="mt-1 text-theme-xs text-gray-500">
                {totalTokens - usedTokens} tokens remaining
              </p>
            </div>
          </Card>
        </div>

        {/* Code Output Panel */}
        <div className="xl:col-span-8">
          <Card className="overflow-hidden">
            {/* Code Header */}
            <div className="flex items-center justify-between border-b border-gray-700 bg-[#1e1e2e] px-6 py-3">
              <div className="flex items-center gap-3">
                {/* Traffic Light Dots */}
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-error-500" />
                  <span className="h-3 w-3 rounded-full bg-warning-500" />
                  <span className="h-3 w-3 rounded-full bg-success-500" />
                </div>
                <span className="text-theme-xs font-medium text-gray-400">
                  {language.toLowerCase() === 'javascript'
                    ? 'index.js'
                    : language.toLowerCase() === 'typescript'
                      ? 'index.ts'
                      : language.toLowerCase() === 'python'
                        ? 'main.py'
                        : language.toLowerCase() === 'rust'
                          ? 'main.rs'
                          : language.toLowerCase() === 'go'
                            ? 'main.go'
                            : `main.${language.toLowerCase()}`}
                </span>
              </div>
              <button
                onClick={handleCopy}
                disabled={!generatedCode}
                className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-theme-xs font-medium text-gray-400 hover:bg-white/10 disabled:opacity-40"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-success-500" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
                {copied ? 'Copied!' : 'Copy Code'}
              </button>
            </div>

            {/* Code Body */}
            <div className="bg-[#1e1e2e] p-6">
              {generatedCode ? (
                <pre className="overflow-x-auto">
                  <code className="text-theme-sm font-mono leading-relaxed">
                    {generatedCode.split('\n').map((line, i) => (
                      <div key={i} className="flex">
                        <span className="mr-4 inline-block w-8 text-right text-gray-600 select-none">
                          {i + 1}
                        </span>
                        <SyntaxLine line={line} />
                      </div>
                    ))}
                    {isGenerating && <span className="animate-pulse text-brand-400">|</span>}
                  </code>
                </pre>
              ) : (
                <div className="flex h-64 flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-white/5">
                    <Code2 className="h-8 w-8 text-gray-500" />
                  </div>
                  <p className="text-theme-sm text-gray-500">
                    Describe the code you need and click Generate
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────── syntax highlighting helper ──────────────────────── */

function SyntaxLine({ line }: { line: string }) {
  // Simple syntax coloring for display purposes
  const keywords = ['const', 'let', 'var', 'function', 'async', 'await', 'switch', 'case', 'break', 'try', 'catch', 'return', 'if', 'else', 'new', 'default', 'import', 'export', 'from', 'class', 'extends'];
  const builtins = ['req', 'res', 'error', 'console', 'Math', 'Array', 'Object', 'Promise', 'JSON'];

  if (!line.trim()) return <span>{'\n'}</span>;

  // Tokenize and color
  const parts: React.ReactNode[] = [];
  const tokens = line.split(/(\s+|[{}()[\];,.]|"[^"]*"|'[^']*'|`[^`]*`)/);

  tokens.forEach((token, i) => {
    if (keywords.includes(token)) {
      parts.push(<span key={i} className="text-blue-light-400">{token}</span>);
    } else if (/^["'`]/.test(token)) {
      parts.push(<span key={i} className="text-success-400">{token}</span>);
    } else if (/^\d+$/.test(token)) {
      parts.push(<span key={i} className="text-warning-400">{token}</span>);
    } else if (builtins.includes(token)) {
      parts.push(<span key={i} className="text-brand-400">{token}</span>);
    } else if (/\/\/.*$/.test(token)) {
      parts.push(<span key={i} className="text-gray-500">{token}</span>);
    } else {
      parts.push(<span key={i} className="text-gray-300">{token}</span>);
    }
  });

  return <span>{parts}{'\n'}</span>;
}
