'use client';

import React, { useState } from 'react';
import {
  Search,
  Eye,
  EyeOff,
  Lock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Upload,
  FileText,
  X,
  ChevronRight,
  ChevronLeft,
  DollarSign,
  Phone,
  Globe,
} from 'lucide-react';

// Shared input class
const inputClass =
  'h-11 w-full rounded-lg border border-gray-300 bg-white px-4 text-theme-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-gray-500 dark:focus:border-brand-500';

const labelClass =
  'mb-1.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-300';

const helperClass = 'mt-1 text-theme-xs text-gray-500 dark:text-gray-400';

const sectionCardClass =
  'rounded-lg border border-gray-200 bg-white dark:border-white/5 dark:bg-gray-dark';

const sectionHeaderClass =
  'border-b border-gray-100 px-6 py-4 dark:border-white/5';

const sectionBodyClass = 'p-6 space-y-5';

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={sectionCardClass}>
      <div className={sectionHeaderClass}>
        <h4 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">
          {title}
        </h4>
      </div>
      <div className={sectionBodyClass}>{children}</div>
    </div>
  );
}

export default function FormsPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [wizardStep, setWizardStep] = useState(1);
  const [wizardData, setWizardData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
  });
  const [checkboxes, setCheckboxes] = useState({
    default: false,
    checked: true,
    disabled: false,
    groupA: false,
    groupB: true,
    groupC: false,
  });
  const [radioValue, setRadioValue] = useState('option1');
  const [toggleOn, setToggleOn] = useState(true);
  const [multiSelectValues, setMultiSelectValues] = useState<string[]>([
    'React',
    'TypeScript',
  ]);
  const [multiSelectSearch, setMultiSelectSearch] = useState('');
  const [showMultiSelect, setShowMultiSelect] = useState(false);
  const [selectGroupValue, setSelectGroupValue] = useState('');

  const multiSelectOptions = [
    'React',
    'TypeScript',
    'JavaScript',
    'Python',
    'Go',
    'Rust',
    'Swift',
    'Kotlin',
  ];

  const filteredMultiSelectOptions = multiSelectOptions.filter(
    (opt) =>
      !multiSelectValues.includes(opt) &&
      opt.toLowerCase().includes(multiSelectSearch.toLowerCase())
  );

  const maxChars = 200;
  const charCount = textareaValue.length;

  const handleFileUpload = () => {
    const fakeFile = `document_${Date.now().toString().slice(-4)}.pdf`;
    setUploadedFiles((prev) => [...prev, fakeFile]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleWizardNext = () => {
    if (wizardStep < 3) setWizardStep((s) => s + 1);
  };

  const handleWizardBack = () => {
    if (wizardStep > 1) setWizardStep((s) => s - 1);
  };

  const toggleMultiSelectOption = (opt: string) => {
    setMultiSelectValues((prev) =>
      prev.includes(opt) ? prev.filter((v) => v !== opt) : [...prev, opt]
    );
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-title-sm font-semibold text-gray-800 dark:text-white/90">
          Form Elements
        </h1>
        <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
          Comprehensive collection of form components and input styles
        </p>
      </div>

      {/* 1. Text Inputs Section */}
      <SectionCard title="Text Inputs">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Default */}
          <div>
            <label className={labelClass}>Default Input</label>
            <input type="text" className={inputClass} defaultValue="John Doe" />
          </div>

          {/* With placeholder */}
          <div>
            <label className={labelClass}>With Placeholder</label>
            <input
              type="text"
              className={inputClass}
              placeholder="Enter your name..."
            />
          </div>

          {/* With label and helper text */}
          <div>
            <label className={labelClass}>
              Username{' '}
              <span className="text-error-500">*</span>
            </label>
            <input
              type="text"
              className={inputClass}
              placeholder="Enter username"
            />
            <p className={helperClass}>
              Must be 3-20 characters, letters and numbers only
            </p>
          </div>

          {/* With left icon */}
          <div>
            <label className={labelClass}>Search</label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className={`${inputClass} pl-10`}
                placeholder="Search..."
              />
            </div>
          </div>

          {/* With right icon */}
          <div>
            <label className={labelClass}>Password Field</label>
            <div className="relative">
              <input
                type="text"
                className={`${inputClass} pr-10`}
                defaultValue="s3cur3p@ss"
              />
              <Lock className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Disabled */}
          <div>
            <label className={labelClass}>Disabled Input</label>
            <input
              type="text"
              className={`${inputClass} cursor-not-allowed opacity-60`}
              value="Cannot edit this"
              disabled
            />
          </div>

          {/* Readonly */}
          <div className="md:col-span-2">
            <label className={labelClass}>Readonly Input</label>
            <input
              type="text"
              className={`${inputClass} bg-gray-50 dark:bg-gray-800`}
              value="Read-only content"
              readOnly
            />
          </div>
        </div>
      </SectionCard>

      {/* 2. Input Variants Section */}
      <SectionCard title="Input Variants">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Email */}
          <div>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              className={inputClass}
              placeholder="name@example.com"
            />
          </div>

          {/* Password with toggle */}
          <div>
            <label className={labelClass}>Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className={`${inputClass} pr-10`}
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {showPassword ? (
                  <EyeOff className="size-4" />
                ) : (
                  <Eye className="size-4" />
                )}
              </button>
            </div>
          </div>

          {/* Number */}
          <div>
            <label className={labelClass}>Number</label>
            <input
              type="number"
              className={inputClass}
              placeholder="0"
              min={0}
            />
          </div>

          {/* Search */}
          <div>
            <label className={labelClass}>Search</label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                className={`${inputClass} pl-10`}
                placeholder="Search..."
              />
            </div>
          </div>

          {/* URL */}
          <div>
            <label className={labelClass}>URL</label>
            <div className="relative">
              <Globe className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
              <input
                type="url"
                className={`${inputClass} pl-10`}
                placeholder="https://example.com"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className={labelClass}>Phone</label>
            <div className="relative">
              <Phone className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                className={`${inputClass} pl-10`}
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          {/* Currency */}
          <div className="md:col-span-2 lg:col-span-3">
            <label className={labelClass}>Currency</label>
            <div className="relative">
              <DollarSign className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
              <input
                type="number"
                className={`${inputClass} pl-10`}
                placeholder="0.00"
                min={0}
                step={0.01}
              />
            </div>
          </div>
        </div>
      </SectionCard>

      {/* 3. Validation States Section */}
      <SectionCard title="Validation States">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* Success */}
          <div>
            <label className={labelClass}>Success State</label>
            <div className="relative">
              <input
                type="text"
                className={`${inputClass} border-success-500 focus:border-success-500 focus:ring-success-500/10 dark:border-success-500`}
                defaultValue="valid_username"
              />
              <CheckCircle className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-success-500" />
            </div>
            <p className="mt-1 text-theme-xs text-success-500">
              Username is available
            </p>
          </div>

          {/* Error */}
          <div>
            <label className={labelClass}>Error State</label>
            <div className="relative">
              <input
                type="text"
                className={`${inputClass} border-error-500 focus:border-error-500 focus:ring-error-500/10 dark:border-error-500`}
                defaultValue="invalid@"
              />
              <XCircle className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-error-500" />
            </div>
            <p className="mt-1 text-theme-xs text-error-500">
              Please enter a valid email address
            </p>
          </div>

          {/* Warning */}
          <div>
            <label className={labelClass}>Warning State</label>
            <div className="relative">
              <input
                type="text"
                className={`${inputClass} border-warning-500 focus:border-warning-500 focus:ring-warning-500/10 dark:border-warning-500`}
                defaultValue="weak_pass"
              />
              <AlertTriangle className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-warning-500" />
            </div>
            <p className="mt-1 text-theme-xs text-warning-500">
              Password strength is weak
            </p>
          </div>
        </div>
      </SectionCard>

      {/* 4. Select/Multi-select Section */}
      <SectionCard title="Select & Multi-select">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Basic select */}
          <div>
            <label className={labelClass}>Basic Select</label>
            <select className={inputClass}>
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>
          </div>

          {/* Select with groups */}
          <div>
            <label className={labelClass}>Select with Groups</label>
            <select
              className={inputClass}
              value={selectGroupValue}
              onChange={(e) => setSelectGroupValue(e.target.value)}
            >
              <option value="">Choose a city</option>
              <optgroup label="North America">
                <option value="nyc">New York</option>
                <option value="la">Los Angeles</option>
                <option value="chi">Chicago</option>
              </optgroup>
              <optgroup label="Europe">
                <option value="lon">London</option>
                <option value="par">Paris</option>
                <option value="ber">Berlin</option>
              </optgroup>
              <optgroup label="Asia">
                <option value="tok">Tokyo</option>
                <option value="sel">Seoul</option>
                <option value="sin">Singapore</option>
              </optgroup>
            </select>
          </div>

          {/* Multi-select with tags */}
          <div className="md:col-span-2">
            <label className={labelClass}>Multi-select (Tags)</label>
            <div className="relative">
              <div
                className={`flex min-h-[44px] flex-wrap items-center gap-2 rounded-lg border bg-white px-3 py-2 text-theme-sm dark:bg-gray-900 ${
                  showMultiSelect
                    ? 'border-brand-300 ring ring-brand-500/10 dark:border-brand-500'
                    : 'border-gray-300 dark:border-gray-700'
                }`}
                onClick={() => setShowMultiSelect(!showMultiSelect)}
              >
                {multiSelectValues.map((val) => (
                  <span
                    key={val}
                    className="inline-flex items-center gap-1 rounded-md bg-brand-50 px-2 py-0.5 text-theme-xs font-medium text-brand-600 dark:bg-brand-500/20 dark:text-brand-400"
                  >
                    {val}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMultiSelectOption(val);
                      }}
                      className="ml-0.5 hover:text-brand-800 dark:hover:text-brand-300"
                    >
                      <X className="size-3" />
                    </button>
                  </span>
                ))}
                <input
                  type="text"
                  className="min-w-[80px] flex-1 border-0 bg-transparent p-0 text-theme-sm outline-none placeholder:text-gray-400 dark:text-white/90"
                  placeholder={
                    multiSelectValues.length === 0
                      ? 'Select skills...'
                      : 'Add more...'
                  }
                  value={multiSelectSearch}
                  onChange={(e) => {
                    setMultiSelectSearch(e.target.value);
                    setShowMultiSelect(true);
                  }}
                  onFocus={() => setShowMultiSelect(true)}
                />
              </div>
              {showMultiSelect && (
                <div className="absolute z-50 mt-1 max-h-48 w-full overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
                  {filteredMultiSelectOptions.length === 0 ? (
                    <div className="px-3 py-2 text-theme-sm text-gray-500">
                      No results found
                    </div>
                  ) : (
                    filteredMultiSelectOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        className="flex w-full items-center px-3 py-2 text-theme-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5"
                        onClick={() => {
                          toggleMultiSelectOption(opt);
                          setMultiSelectSearch('');
                        }}
                      >
                        {opt}
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>
            <p className={helperClass}>
              Click to select, click the × to remove
            </p>
          </div>
        </div>
      </SectionCard>

      {/* 5. Checkbox & Radio Section */}
      <SectionCard title="Checkbox & Radio">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Checkboxes */}
          <div className="space-y-4">
            <h5 className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
              Checkboxes
            </h5>
            <div className="space-y-3">
              <label className="flex items-center gap-3 text-theme-sm text-gray-700 dark:text-gray-300">
                <input
                  type="checkbox"
                  className="size-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500/20 dark:border-gray-600"
                  checked={checkboxes.default}
                  onChange={(e) =>
                    setCheckboxes((prev) => ({
                      ...prev,
                      default: e.target.checked,
                    }))
                  }
                />
                Default Checkbox
              </label>
              <label className="flex items-center gap-3 text-theme-sm text-gray-700 dark:text-gray-300">
                <input
                  type="checkbox"
                  className="size-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500/20 dark:border-gray-600"
                  checked={checkboxes.checked}
                  onChange={(e) =>
                    setCheckboxes((prev) => ({
                      ...prev,
                      checked: e.target.checked,
                    }))
                  }
                />
                Checked Checkbox
              </label>
              <label className="flex items-center gap-3 text-theme-sm text-gray-400">
                <input
                  type="checkbox"
                  className="size-4 rounded border-gray-300 dark:border-gray-600"
                  checked={checkboxes.disabled}
                  disabled
                />
                Disabled Checkbox
              </label>
            </div>

            {/* Checkbox Group */}
            <div>
              <h5 className="mb-2 text-theme-sm font-medium text-gray-800 dark:text-white/90">
                Checkbox Group
              </h5>
              <div className="space-y-2">
                {['Option A', 'Option B', 'Option C'].map((label, i) => {
                  const keys = ['groupA', 'groupB', 'groupC'] as const;
                  return (
                    <label
                      key={label}
                      className="flex items-center gap-3 text-theme-sm text-gray-700 dark:text-gray-300"
                    >
                      <input
                        type="checkbox"
                        className="size-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500/20 dark:border-gray-600"
                        checked={checkboxes[keys[i]]}
                        onChange={(e) =>
                          setCheckboxes((prev) => ({
                            ...prev,
                            [keys[i]]: e.target.checked,
                          }))
                        }
                      />
                      {label}
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Radio & Toggle */}
          <div className="space-y-4">
            <div>
              <h5 className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                Radio Buttons
              </h5>
              <div className="space-y-3">
                {[
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' },
                  { value: 'option3', label: 'Option 3' },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className="flex items-center gap-3 text-theme-sm text-gray-700 dark:text-gray-300"
                  >
                    <input
                      type="radio"
                      name="radio-group"
                      value={opt.value}
                      checked={radioValue === opt.value}
                      onChange={() => setRadioValue(opt.value)}
                      className="size-4 border-gray-300 text-brand-500 focus:ring-brand-500/20 dark:border-gray-600"
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h5 className="mb-2 text-theme-sm font-medium text-gray-800 dark:text-white/90">
                Toggle Switch
              </h5>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setToggleOn(!toggleOn)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    toggleOn ? 'bg-brand-500' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block size-4 transform rounded-full bg-white transition-transform ${
                      toggleOn ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className="text-theme-sm text-gray-700 dark:text-gray-300">
                  {toggleOn ? 'Enabled' : 'Disabled'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* 6. Textarea Section */}
      <SectionCard title="Textarea">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Default */}
          <div>
            <label className={labelClass}>Default Textarea</label>
            <textarea
              rows={4}
              className={`${inputClass} h-auto py-3`}
              placeholder="Write your message here..."
            />
          </div>

          {/* With character count */}
          <div>
            <label className={labelClass}>
              With Character Count{' '}
              <span className="text-gray-400">
                ({charCount}/{maxChars})
              </span>
            </label>
            <textarea
              rows={4}
              className={`${inputClass} h-auto py-3 ${
                charCount > maxChars
                  ? 'border-error-500 focus:border-error-500 focus:ring-error-500/10'
                  : ''
              }`}
              placeholder="Type something..."
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
              maxLength={maxChars + 20}
            />
            <div className="mt-1 flex justify-between">
              <p className={helperClass}>Auto-resize hint: Content expands</p>
              <p
                className={`text-theme-xs ${
                  charCount > maxChars
                    ? 'text-error-500'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                {charCount}/{maxChars}
              </p>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* 7. File Input Section */}
      <SectionCard title="File Input">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Basic file input */}
          <div>
            <label className={labelClass}>Basic File Input</label>
            <input
              type="file"
              className="block w-full text-theme-sm text-gray-700 file:mr-4 file:rounded-lg file:border-0 file:bg-brand-500 file:px-4 file:py-2 file:text-theme-sm file:font-medium file:text-white hover:file:bg-brand-600 dark:text-gray-300"
            />
          </div>

          {/* Dropzone */}
          <div>
            <label className={labelClass}>Dropzone Upload</label>
            <div
              className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 py-8 dark:border-gray-600 dark:bg-gray-800/50"
              onClick={handleFileUpload}
            >
              <Upload className="mb-2 size-8 text-gray-400" />
              <p className="text-theme-sm font-medium text-gray-700 dark:text-gray-300">
                Click to upload or drag and drop
              </p>
              <p className="mt-1 text-theme-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or PDF (max 5MB)
              </p>
            </div>
          </div>

          {/* File list */}
          {uploadedFiles.length > 0 && (
            <div className="md:col-span-2">
              <label className={labelClass}>Uploaded Files</label>
              <div className="space-y-2">
                {uploadedFiles.map((file, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 dark:border-gray-700 dark:bg-gray-800/50"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="size-4 text-gray-400" />
                      <span className="text-theme-sm text-gray-700 dark:text-gray-300">
                        {file}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(i)}
                      className="text-gray-400 hover:text-error-500"
                    >
                      <X className="size-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </SectionCard>

      {/* 8. Date/Time Section */}
      <SectionCard title="Date & Time">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div>
            <label className={labelClass}>Date</label>
            <input type="date" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Time</label>
            <input type="time" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Date Range</label>
            <div className="flex items-center gap-2">
              <input type="date" className={inputClass} />
              <span className="text-gray-400">–</span>
              <input type="date" className={inputClass} />
            </div>
          </div>
        </div>
      </SectionCard>

      {/* 9. Form Layouts Section */}
      <SectionCard title="Form Layouts">
        <div className="space-y-6">
          {/* Horizontal form */}
          <div>
            <h5 className="mb-3 text-theme-sm font-medium text-gray-800 dark:text-white/90">
              Horizontal Form
            </h5>
            <div className="space-y-4">
              <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center">
                <label className={`sm:w-32 sm:flex-shrink-0 ${labelClass} sm:mb-0`}>
                  Full Name
                </label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center">
                <label className={`sm:w-32 sm:flex-shrink-0 ${labelClass} sm:mb-0`}>
                  Email
                </label>
                <input
                  type="email"
                  className={inputClass}
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center">
                <label className={`sm:w-32 sm:flex-shrink-0 ${labelClass} sm:mb-0`}>
                  Phone
                </label>
                <input
                  type="tel"
                  className={inputClass}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
          </div>

          {/* Vertical form */}
          <div>
            <h5 className="mb-3 text-theme-sm font-medium text-gray-800 dark:text-white/90">
              Vertical Form
            </h5>
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Full Name</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  className={inputClass}
                  placeholder="john@example.com"
                />
              </div>
            </div>
          </div>

          {/* Two-column form */}
          <div>
            <h5 className="mb-3 text-theme-sm font-medium text-gray-800 dark:text-white/90">
              Two-Column Form
            </h5>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className={labelClass}>First Name</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="John"
                />
              </div>
              <div>
                <label className={labelClass}>Last Name</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="Doe"
                />
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  className={inputClass}
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className={labelClass}>Phone</label>
                <input
                  type="tel"
                  className={inputClass}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
          </div>

          {/* Form card */}
          <div className="rounded-lg border border-gray-200 bg-gray-50 dark:border-white/5 dark:bg-gray-900/50">
            <div className="border-b border-gray-200 px-6 py-4 dark:border-white/5">
              <h5 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">
                Account Settings
              </h5>
              <p className="mt-0.5 text-theme-sm text-gray-500 dark:text-gray-400">
                Update your account information
              </p>
            </div>
            <div className="space-y-4 p-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className={labelClass}>Display Name</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className={labelClass}>Email Address</label>
                  <input
                    type="email"
                    className={inputClass}
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className={labelClass}>Bio</label>
                <textarea
                  rows={3}
                  className={`${inputClass} h-auto py-3`}
                  placeholder="Tell us about yourself..."
                />
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  className="rounded-lg border border-gray-300 px-4 py-2 text-theme-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-white/5"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="rounded-lg bg-brand-500 px-4 py-2 text-theme-sm font-medium text-white hover:bg-brand-600"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* 10. Wizard/Stepper Form */}
      <SectionCard title="Wizard / Stepper Form">
        <div>
          {/* Step indicators */}
          <div className="mb-8 flex items-center justify-center">
            {[1, 2, 3].map((step) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center">
                  <div
                    className={`flex size-10 items-center justify-center rounded-full text-theme-sm font-semibold ${
                      step < wizardStep
                        ? 'bg-brand-500 text-white'
                        : step === wizardStep
                          ? 'bg-brand-500 text-white ring-4 ring-brand-500/20'
                          : 'bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
                    }`}
                  >
                    {step < wizardStep ? (
                      <CheckCircle className="size-5" />
                    ) : (
                      step
                    )}
                  </div>
                  <span
                    className={`mt-2 text-theme-xs font-medium ${
                      step <= wizardStep
                        ? 'text-brand-500'
                        : 'text-gray-400 dark:text-gray-500'
                    }`}
                  >
                    {step === 1
                      ? 'Personal Info'
                      : step === 2
                        ? 'Address'
                        : 'Review'}
                  </span>
                </div>
                {step < 3 && (
                  <div
                    className={`mx-4 h-0.5 w-20 sm:w-32 ${
                      step < wizardStep
                        ? 'bg-brand-500'
                        : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Step content */}
          <div className="mx-auto max-w-lg">
            {wizardStep === 1 && (
              <div className="space-y-4">
                <h5 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">
                  Personal Information
                </h5>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>First Name</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="John"
                      value={wizardData.firstName}
                      onChange={(e) =>
                        setWizardData((prev) => ({
                          ...prev,
                          firstName: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Last Name</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Doe"
                      value={wizardData.lastName}
                      onChange={(e) =>
                        setWizardData((prev) => ({
                          ...prev,
                          lastName: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    type="email"
                    className={inputClass}
                    placeholder="john@example.com"
                    value={wizardData.email}
                    onChange={(e) =>
                      setWizardData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
            )}

            {wizardStep === 2 && (
              <div className="space-y-4">
                <h5 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">
                  Address Information
                </h5>
                <div>
                  <label className={labelClass}>Street Address</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="123 Main St"
                    value={wizardData.street}
                    onChange={(e) =>
                      setWizardData((prev) => ({
                        ...prev,
                        street: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>City</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="New York"
                      value={wizardData.city}
                      onChange={(e) =>
                        setWizardData((prev) => ({
                          ...prev,
                          city: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <label className={labelClass}>State</label>
                    <select
                      className={inputClass}
                      value={wizardData.state}
                      onChange={(e) =>
                        setWizardData((prev) => ({
                          ...prev,
                          state: e.target.value,
                        }))
                      }
                    >
                      <option value="">Select state</option>
                      <option value="NY">New York</option>
                      <option value="CA">California</option>
                      <option value="TX">Texas</option>
                      <option value="FL">Florida</option>
                      <option value="IL">Illinois</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className={labelClass}>ZIP Code</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="10001"
                    value={wizardData.zip}
                    onChange={(e) =>
                      setWizardData((prev) => ({
                        ...prev,
                        zip: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
            )}

            {wizardStep === 3 && (
              <div className="space-y-4">
                <h5 className="text-theme-xl font-semibold text-gray-800 dark:text-white/90">
                  Review Your Information
                </h5>
                <div className="rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/50">
                  <div className="space-y-3 p-4">
                    <div className="flex justify-between">
                      <span className="text-theme-sm text-gray-500 dark:text-gray-400">
                        Name
                      </span>
                      <span className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                        {wizardData.firstName || '—'}{' '}
                        {wizardData.lastName || '—'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-theme-sm text-gray-500 dark:text-gray-400">
                        Email
                      </span>
                      <span className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                        {wizardData.email || '—'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-theme-sm text-gray-500 dark:text-gray-400">
                        Street
                      </span>
                      <span className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                        {wizardData.street || '—'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-theme-sm text-gray-500 dark:text-gray-400">
                        City / State / ZIP
                      </span>
                      <span className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                        {wizardData.city || '—'},{' '}
                        {wizardData.state || '—'}{' '}
                        {wizardData.zip || '—'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="mt-6 flex items-center justify-between">
              <button
                type="button"
                onClick={handleWizardBack}
                disabled={wizardStep === 1}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-theme-sm font-medium ${
                  wizardStep === 1
                    ? 'cursor-not-allowed text-gray-300 dark:text-gray-600'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5'
                }`}
              >
                <ChevronLeft className="size-4" />
                Back
              </button>
              {wizardStep < 3 ? (
                <button
                  type="button"
                  onClick={handleWizardNext}
                  className="flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-theme-sm font-medium text-white hover:bg-brand-600"
                >
                  Next
                  <ChevronRight className="size-4" />
                </button>
              ) : (
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-lg bg-success-500 px-4 py-2 text-theme-sm font-medium text-white hover:bg-success-600"
                >
                  <CheckCircle className="size-4" />
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
