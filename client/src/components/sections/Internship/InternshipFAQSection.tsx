import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

export function InternshipFAQSection() {
  const faqs = [
    {
      question: 'Are internships mandatory at IMAS Business School?',
      answer: 'Yes, internships are a core part of the PGDM programme.'
    },
    {
      question: 'How long is the internship programme?',
      answer: 'The Summer Internship Programme lasts 6–8 weeks.'
    },
    {
      question: 'Can internships lead to job offers?',
      answer: 'Yes, many students receive Pre-Placement Offers (PPOs).'
    },
    {
      question: 'What industries are available?',
      answer: 'Technology, finance, consulting, healthcare, logistics, and more.'
    },
    {
      question: 'How does IMAS Business School help students secure internships?',
      answer:
        'Through the Corporate Relations & Placement Cell, including training and company connections.'
    }
  ];

  return (
    <section id="faq" className="bg-[#f7f8ff] px-4 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-lg font-semibold text-[#143674] mb-5 text-center sm:text-left sm:text-xl sm:mb-6">
          Frequently Asked Questions
        </h2>

        <Accordion.Root type="single" collapsible className="space-y-3">
          {faqs.map((item) => (
            <Accordion.Item
              key={item.question}
              value={item.question}
              className="rounded-xl bg-white p-3.5 shadow-[0_10px_30px_rgba(20,54,116,0.08)] sm:p-4"
            >
              <Accordion.Header className="flex">
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-3 text-left font-semibold text-[#143674] outline-none transition-colors data-[state=open]:text-[#2e7bb3]">
                  <span className="text-sm sm:text-base">{item.question}</span>
                  <ChevronDown className="h-4 w-4 shrink-0 text-[#143674]/70 transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-[#2e7bb3]" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="pt-2 text-xs text-[#444655] sm:text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                {item.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
