'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  Github,
  Chrome,
  ArrowLeft,
  ShieldCheck,
  Clock,
} from 'lucide-react';

// Shared styles
const inputClass =
  'h-11 w-full rounded-lg border border-gray-300 bg-white px-4 text-theme-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-gray-500 dark:focus:border-brand-500';

const labelClass =
  'mb-1.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-300';

// ─── SignInPage ──────────────────────────────────────────────────────────────
export function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-950">
      <div className="w-full max-w-[480px]">
        <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-white/5 dark:bg-gray-dark">
          {/* Logo */}
          <div className="mb-8 text-center">
            <div className="mb-3 flex items-center justify-center gap-1">
              <span className="text-2xl font-bold text-brand-500">mtverse</span>
              <span className="text-2xl font-normal text-gray-400">admin</span>
            </div>
            <h1 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">
              Welcome Back
            </h1>
            <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
              Enter your credentials to sign in
            </p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            <div>
              <label className={labelClass}>Email</label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  className={`${inputClass} pl-10`}
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Password</label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={`${inputClass} pl-10 pr-10`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-theme-sm text-gray-700 dark:text-gray-300">
                <input
                  type="checkbox"
                  className="size-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500/20 dark:border-gray-600"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              <Link
                href="/forgot-password"
                className="text-theme-sm font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="button"
              className="h-11 w-full rounded-lg bg-brand-500 text-theme-sm font-medium text-white hover:bg-brand-600 transition-colors"
            >
              Sign In
            </button>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200 dark:bg-white/5" />
            <span className="text-theme-xs font-medium text-gray-400 dark:text-gray-500">OR</span>
            <div className="h-px flex-1 bg-gray-200 dark:bg-white/5" />
          </div>

          {/* Social */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex h-11 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white text-theme-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-white/5 transition-colors"
            >
              <Chrome className="size-4" />
              Google
            </button>
            <button
              type="button"
              className="flex h-11 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white text-theme-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-white/5 transition-colors"
            >
              <Github className="size-4" />
              GitHub
            </button>
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-theme-sm text-gray-500 dark:text-gray-400">
            Don&apos;t have an account?{' '}
            <Link
              href="/sign-up"
              className="font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── SignUpPage ──────────────────────────────────────────────────────────────
export function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-950">
      <div className="w-full max-w-[480px]">
        <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-white/5 dark:bg-gray-dark">
          {/* Logo */}
          <div className="mb-8 text-center">
            <div className="mb-3 flex items-center justify-center gap-1">
              <span className="text-2xl font-bold text-brand-500">mtverse</span>
              <span className="text-2xl font-normal text-gray-400">admin</span>
            </div>
            <h1 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">
              Create Account
            </h1>
            <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
              Get started with your free account
            </p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            <div>
              <label className={labelClass}>Full Name</label>
              <div className="relative">
                <User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  className={`${inputClass} pl-10`}
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Email</label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  className={`${inputClass} pl-10`}
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Password</label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={`${inputClass} pl-10 pr-10`}
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            <div>
              <label className={labelClass}>Confirm Password</label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  className={`${inputClass} pl-10 pr-10`}
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showConfirmPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            <label className="flex items-start gap-2 text-theme-sm text-gray-700 dark:text-gray-300">
              <input
                type="checkbox"
                className="mt-0.5 size-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500/20 dark:border-gray-600"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <span>
                I agree to the{' '}
                <Link href="/sign-up" className="font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/sign-up" className="font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400">
                  Privacy Policy
                </Link>
              </span>
            </label>

            <button
              type="button"
              className="h-11 w-full rounded-lg bg-brand-500 text-theme-sm font-medium text-white hover:bg-brand-600 transition-colors"
            >
              Create Account
            </button>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200 dark:bg-white/5" />
            <span className="text-theme-xs font-medium text-gray-400 dark:text-gray-500">OR</span>
            <div className="h-px flex-1 bg-gray-200 dark:bg-white/5" />
          </div>

          {/* Social */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex h-11 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white text-theme-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-white/5 transition-colors"
            >
              <Chrome className="size-4" />
              Google
            </button>
            <button
              type="button"
              className="flex h-11 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white text-theme-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-white/5 transition-colors"
            >
              <Github className="size-4" />
              GitHub
            </button>
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-theme-sm text-gray-500 dark:text-gray-400">
            Already have an account?{' '}
            <Link
              href="/sign-in"
              className="font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── ForgotPasswordPage ──────────────────────────────────────────────────────
export function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-950">
      <div className="w-full max-w-[480px]">
        <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-white/5 dark:bg-gray-dark">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="flex size-14 items-center justify-center rounded-full bg-brand-50 dark:bg-brand-500/20">
              <Lock className="size-6 text-brand-500 dark:text-brand-400" />
            </div>
          </div>

          <div className="mb-6 text-center">
            <h1 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">
              Forgot Password?
            </h1>
            <p className="mt-2 text-theme-sm text-gray-500 dark:text-gray-400">
              No worries, we&apos;ll send you reset instructions.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className={labelClass}>Email</label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  className={`${inputClass} pl-10`}
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <button
              type="button"
              className="h-11 w-full rounded-lg bg-brand-500 text-theme-sm font-medium text-white hover:bg-brand-600 transition-colors"
            >
              Send Reset Link
            </button>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/sign-in"
              className="inline-flex items-center gap-1 text-theme-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <ArrowLeft className="size-4" />
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── ResetPasswordPage ───────────────────────────────────────────────────────
export function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');

  const getPasswordStrength = () => {
    if (password.length === 0) return { label: '', color: '', percent: 0 };
    if (password.length < 6) return { label: 'Weak', color: 'bg-error-500', percent: 33 };
    if (password.length < 10) return { label: 'Medium', color: 'bg-warning-500', percent: 66 };
    return { label: 'Strong', color: 'bg-success-500', percent: 100 };
  };

  const strength = getPasswordStrength();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-950">
      <div className="w-full max-w-[480px]">
        <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-white/5 dark:bg-gray-dark">
          <div className="mb-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex size-14 items-center justify-center rounded-full bg-brand-50 dark:bg-brand-500/20">
                <ShieldCheck className="size-6 text-brand-500 dark:text-brand-400" />
              </div>
            </div>
            <h1 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">
              Reset Password
            </h1>
            <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
              Enter your new password below
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className={labelClass}>New Password</label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={`${inputClass} pl-10 pr-10`}
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            {/* Password Strength Indicator */}
            {password.length > 0 && (
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-theme-xs text-gray-500 dark:text-gray-400">
                    Password Strength
                  </span>
                  <span
                    className={`text-theme-xs font-medium ${
                      strength.label === 'Weak'
                        ? 'text-error-500'
                        : strength.label === 'Medium'
                          ? 'text-warning-500'
                          : 'text-success-500'
                    }`}
                  >
                    {strength.label}
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${strength.color}`}
                    style={{ width: `${strength.percent}%` }}
                  />
                </div>
              </div>
            )}

            <div>
              <label className={labelClass}>Confirm Password</label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  className={`${inputClass} pl-10 pr-10`}
                  placeholder="Confirm new password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showConfirmPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            <button
              type="button"
              className="h-11 w-full rounded-lg bg-brand-500 text-theme-sm font-medium text-white hover:bg-brand-600 transition-colors"
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── TwoStepPage ─────────────────────────────────────────────────────────────
export function TwoStepPage() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const [countdown, setCountdown] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    setCountdown(30);
    setOtp(Array(6).fill(''));
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-950">
      <div className="w-full max-w-[480px]">
        <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-white/5 dark:bg-gray-dark">
          <div className="mb-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex size-14 items-center justify-center rounded-full bg-brand-50 dark:bg-brand-500/20">
                <ShieldCheck className="size-6 text-brand-500 dark:text-brand-400" />
              </div>
            </div>
            <h1 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">
              Verify Your Identity
            </h1>
            <p className="mt-2 text-theme-sm text-gray-500 dark:text-gray-400">
              We&apos;ve sent a 6-digit code to your email. Please enter it below.
            </p>
          </div>

          <div className="space-y-6">
            {/* OTP Inputs */}
            <div className="flex justify-center gap-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => { inputRefs.current[index] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="size-12 rounded-lg border border-gray-300 bg-white text-center text-lg font-semibold text-gray-800 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-500"
                />
              ))}
            </div>

            <button
              type="button"
              className="h-11 w-full rounded-lg bg-brand-500 text-theme-sm font-medium text-white hover:bg-brand-600 transition-colors"
            >
              Verify
            </button>

            {/* Resend */}
            <p className="text-center text-theme-sm text-gray-500 dark:text-gray-400">
              Didn&apos;t receive a code?{' '}
              {countdown > 0 ? (
                <span className="font-medium text-gray-400 dark:text-gray-500">
                  Resend in {countdown}s
                </span>
              ) : (
                <button
                  type="button"
                  onClick={handleResend}
                  className="font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >
                  Resend Code
                </button>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── LockScreenPage ──────────────────────────────────────────────────────────
export function LockScreenPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-950">
      <div className="w-full max-w-[400px]">
        <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-white/5 dark:bg-gray-dark">
          <div className="mb-6 text-center">
            {/* Avatar */}
            <div className="mb-4 flex justify-center">
              <div className="flex size-20 items-center justify-center rounded-full bg-brand-100 text-2xl font-bold text-brand-600 dark:bg-brand-500/20 dark:text-brand-400 ring-4 ring-brand-50 dark:ring-brand-500/10">
                AM
              </div>
            </div>
            <h2 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">
              Alex Morgan
            </h2>
            <div className="mt-2 flex items-center justify-center gap-2 text-theme-sm text-gray-500 dark:text-gray-400">
              <Clock className="size-4" />
              <span>
                {currentTime.toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                })}{' '}
                {currentTime.toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <label className={labelClass}>Password</label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={`${inputClass} pl-10 pr-10`}
                  placeholder="Enter password to unlock"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            <button
              type="button"
              className="h-11 w-full rounded-lg bg-brand-500 text-theme-sm font-medium text-white hover:bg-brand-600 transition-colors"
            >
              Unlock
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
