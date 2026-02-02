# Accessibility Improvements with ARIA Attributes

## Plan

- Add `aria-labelledby` to sections with headings for better screen reader navigation.
- Improve form accessibility in BookingForm by associating error messages with inputs using `aria-describedby`.
- Ensure consistent use of ARIA attributes across components.
- Add `aria-label` or `aria-labelledby` to interactive elements where needed.

## Files to Edit

- src/components/sections/CallToAction.js: Add aria-labelledby to hero section.
- src/components/sections/Specials.js: Add aria-labelledby to specials section.
- src/components/sections/CustomersSay.js: Add aria-labelledby to testimonials section.
- src/components/sections/Chicago.js: Add aria-labelledby to about section.
- src/components/sections/BookingForm.js: Associate error messages with inputs using aria-describedby.
- src/Footer.js: Add aria-labelledby to footer sections.
- src/components/HomePage.js: Add aria-labelledby to main sections if needed.

## Followup Steps

- Test with screen readers to ensure improvements.
- Run accessibility audits.
