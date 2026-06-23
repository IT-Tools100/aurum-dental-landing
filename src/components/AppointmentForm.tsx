"use client";

import { FormEvent, useState } from "react";
import type { ReactNode } from "react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type FormValues = {
  name: string;
  contact: string;
  service: string;
  date: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  contact: "",
  service: "",
  date: "",
  message: ""
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const contactPattern = /^(\+?[0-9\s().-]{7,}|[^\s@]+@[^\s@]+\.[^\s@]+)$/;

  if (values.name.trim().length < 2) {
    errors.name = "Введите имя минимум из 2 символов.";
  }

  if (!contactPattern.test(values.contact.trim())) {
    errors.contact = "Укажите корректный телефон или email.";
  }

  if (!values.service) {
    errors.service = "Выберите услугу.";
  }

  if (!values.date) {
    errors.date = "Выберите желаемую дату.";
  }

  return errors;
}

export function AppointmentForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setIsSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setIsSubmitted(false);
      return;
    }

    setIsSubmitted(true);
    setValues(initialValues);
  }

  return (
    <section
      id="appointment"
      className="relative overflow-hidden bg-gradient-to-b from-ice via-white to-white py-20 sm:py-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-royal/10 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-royal">
              Запись на консультацию
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Оставьте заявку, и мы поможем выбрать следующий шаг
            </h2>
            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              Оставьте контакты и удобную дату. Мы уточним цель визита, подберем
              специалиста и заранее объясним формат первой консультации.
            </p>

            <div className="mt-8 rounded-2xl border border-navy/10 bg-navy p-6 text-white shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
                Внимание к пациенту
              </p>
              <p className="mt-3 text-sm leading-7 text-white/72">
                Мы уточняем цель визита, подбираем подходящего специалиста и заранее
                объясняем формат первой консультации.
              </p>
            </div>
          </div>

          <form
            className="rounded-2xl border border-navy/10 bg-white p-5 shadow-[0_24px_80px_rgba(11,37,69,0.1)] sm:p-7"
            noValidate
            onSubmit={handleSubmit}
          >
            {isSubmitted ? (
              <div className="mb-6 rounded-2xl border border-mint/30 bg-mint/10 px-5 py-4 text-sm font-semibold text-navy">
                Спасибо. Заявка принята в демо-режиме, без сохранения данных.
              </div>
            ) : null}

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Имя" error={errors.name} htmlFor="name">
                <input
                  id="name"
                  aria-describedby={errors.name ? "name-error" : undefined}
                  aria-invalid={Boolean(errors.name)}
                  className="field-input"
                  name="name"
                  placeholder="Ваше имя"
                  type="text"
                  value={values.name}
                  onChange={(event) => updateField("name", event.target.value)}
                />
              </Field>

              <Field label="Телефон или email" error={errors.contact} htmlFor="contact">
                <input
                  id="contact"
                  aria-describedby={errors.contact ? "contact-error" : undefined}
                  aria-invalid={Boolean(errors.contact)}
                  className="field-input"
                  name="contact"
                  placeholder="+7 999 000-00-00"
                  type="text"
                  value={values.contact}
                  onChange={(event) => updateField("contact", event.target.value)}
                />
              </Field>

              <Field label="Услуга" error={errors.service} htmlFor="service">
                <select
                  id="service"
                  aria-describedby={errors.service ? "service-error" : undefined}
                  aria-invalid={Boolean(errors.service)}
                  className="field-input"
                  name="service"
                  value={values.service}
                  onChange={(event) => updateField("service", event.target.value)}
                >
                  <option value="">Выберите услугу</option>
                  {siteConfig.services.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Желаемая дата" error={errors.date} htmlFor="date">
                <input
                  id="date"
                  aria-describedby={errors.date ? "date-error" : undefined}
                  aria-invalid={Boolean(errors.date)}
                  className="field-input"
                  name="date"
                  type="date"
                  value={values.date}
                  onChange={(event) => updateField("date", event.target.value)}
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Комментарий" error={errors.message} htmlFor="message">
                <textarea
                  id="message"
                  aria-describedby={errors.message ? "message-error" : undefined}
                  aria-invalid={Boolean(errors.message)}
                  className="field-input min-h-32 resize-y"
                  name="message"
                  placeholder="Расскажите, что вас беспокоит или какой результат вы хотите обсудить"
                  value={values.message}
                  onChange={(event) => updateField("message", event.target.value)}
                />
              </Field>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Button as="button" type="submit" className="w-full sm:w-auto">
                Отправить заявку
              </Button>
              <p className="text-xs leading-5 text-muted sm:max-w-xs">
                Нажимая кнопку, вы отправляете демо-форму без сохранения данных.
              </p>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}

function Field({
  children,
  error,
  htmlFor,
  label
}: {
  children: ReactNode;
  error?: string;
  htmlFor: string;
  label: string;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-navy" htmlFor={htmlFor}>
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${htmlFor}-error`} className="mt-2 text-sm font-medium text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
