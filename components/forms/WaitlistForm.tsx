"use client"

import * as React from "react"
import { CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n"

type Role = "senior" | "family" | "caregiver" | ""

interface FormData {
  name: string
  email: string
  role: Role
  location: string
}

interface FormErrors {
  name?: string
  email?: string
  role?: string
}

export function WaitlistForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    role: "",
    location: "",
  })
  const [errors, setErrors] = React.useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    let isValid = true

    if (!formData.name.trim()) {
      newErrors.name = t('form.name.error')
      isValid = false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = t('form.email.error.empty')
      isValid = false
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t('form.email.error.invalid')
      isValid = false
    }

    if (!formData.role) {
      newErrors.role = t('form.role.error')
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    // Mock API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center space-y-6 rounded-3xl bg-kasama-secondary/10 p-8 text-center animate-in fade-in zoom-in duration-500">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-kasama-secondary/20 text-kasama-secondary">
          <CheckCircle2 className="h-10 w-10" aria-hidden="true" />
        </div>
        <div className="space-y-2">
          <h3 className="font-display text-3xl font-bold text-kasama-espresso">
            {t('form.success.title')}
          </h3>
          <p className="text-lg text-kasama-muted">
            {t('form.success.desc')}
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <div className="space-y-6">
        {/* Name Field */}
        <div className="space-y-2">
          <Label htmlFor="name">{t('form.name.label')} <span className="text-kasama-primary" aria-hidden="true">*</span></Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder={t('form.name.placeholder')}
            value={formData.name}
            onChange={handleInputChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p id="name-error" className="text-sm font-medium text-kasama-primary">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email">{t('form.email.label')} <span className="text-kasama-primary" aria-hidden="true">*</span></Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={t('form.email.placeholder')}
            value={formData.email}
            onChange={handleInputChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p id="email-error" className="text-sm font-medium text-kasama-primary">
              {errors.email}
            </p>
          )}
        </div>

        {/* Role Radio Group */}
        <fieldset className="space-y-3">
          <legend className="text-base font-semibold leading-none text-kasama-espresso mb-3">
            {t('form.role.label')} <span className="text-kasama-primary" aria-hidden="true">*</span>
          </legend>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { value: "senior", label: t('form.role.senior') },
              { value: "family", label: t('form.role.family') },
              { value: "caregiver", label: t('form.role.caregiver') },
            ].map((option) => (
              <label
                key={option.value}
                className={cn(
                  "flex cursor-pointer items-center justify-center rounded-2xl border-2 px-4 py-3 text-sm font-medium transition-all focus-within:ring-4 focus-within:ring-kasama-secondary/50",
                  formData.role === option.value
                    ? "border-kasama-secondary bg-kasama-secondary/10 text-kasama-secondary"
                    : "border-black/10 bg-white text-kasama-espresso hover:border-black/20 hover:bg-black/5",
                  isSubmitting && "cursor-not-allowed opacity-50"
                )}
              >
                <input
                  type="radio"
                  name="role"
                  value={option.value}
                  checked={formData.role === option.value}
                  onChange={handleInputChange}
                  className="sr-only"
                  disabled={isSubmitting}
                  aria-describedby={errors.role ? "role-error" : undefined}
                />
                {option.label}
              </label>
            ))}
          </div>
          {errors.role && (
            <p id="role-error" className="text-sm font-medium text-kasama-primary">
              {errors.role}
            </p>
          )}
        </fieldset>

        {/* Location Field (Optional) */}
        <div className="space-y-2">
          <Label htmlFor="location">{t('form.location.label')} <span className="text-kasama-muted font-normal">{t('form.location.optional')}</span></Label>
          <Input
            id="location"
            name="location"
            type="text"
            placeholder={t('form.location.placeholder')}
            value={formData.location}
            onChange={handleInputChange}
            disabled={isSubmitting}
          />
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full text-lg h-14" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
            {t('form.submitting')}
          </>
        ) : (
          t('form.submit')
        )}
      </Button>
    </form>
  )
}
