# A4 Aesthetics & Design Website

A creative, responsive website for an interior, architecture and construction brand.

## Included pages

- `index.html` â€” interactive landing page with a light-switch experience.
- `categories.html` â€” services overview and client enquiry form.
- `gallery.html` â€” image gallery with click-to-expand lightbox.
- `real.html` â€” copy of the main landing page for compatibility with the original structure.
- `contact.php` â€” basic email handler for the project-enquiry form.

## New updates included

- A more realistic chandelier with warm glow when the room light is turned on.
- Attention arrow pointing toward the light switch.
- All main landing-page action buttons and navigation links remain disabled until the light is turned on.
- New gallery page for showcasing project images.
- Expanded project enquiry form with:
  - full name
  - email address
  - phone number
  - company / organisation
  - project location
  - service needed
  - project type
  - budget
  - desired timeline
  - preferred contact method
  - referral source
  - project brief

## Important before deployment

1. Update the recipient email in `contact.php`:

```php
$recipientEmail = 'hello@a4aesthetics.com';
```

2. The enquiry form sends email through PHP `mail()`, so the hosting environment must support PHP mail delivery.
3. If the final hosting does not support `mail()`, connect the form to SMTP or a transactional email service.

## Run locally

For a static preview you can open `index.html` directly.

If you want the form to work, run the site from a PHP-enabled server, for example:

```bash
php -S localhost:8000
```

Then open:

```text
http://localhost:8000/index.html
```
