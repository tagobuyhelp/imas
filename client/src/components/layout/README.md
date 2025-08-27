# StickyCTAFooter Component

A reusable sticky call-to-action footer component that can be used across all pages of the IMAS website.

## Features

- **Responsive Design**: Adapts to desktop and mobile layouts
- **Customizable Content**: Configurable titles, subtitles, and button texts
- **Flexible Actions**: Customizable click handlers for all buttons
- **Floating Button**: Optional floating action button for mobile
- **IMAS Branding**: Uses consistent IMAS brand colors and styling

## Usage

### Basic Usage

```tsx
import { StickyCTAFooter } from '../components/layout/StickyCTAFooter';

export function MyPage() {
  return (
    <div>
      {/* Your page content */}
      <StickyCTAFooter />
    </div>
  );
}
```

### Customized Usage

```tsx
import { StickyCTAFooter } from '../components/layout/StickyCTAFooter';
import { Phone } from 'lucide-react';

export function MyPage() {
  const handleApplyNow = () => {
    // Handle apply now action
    console.log('Apply Now clicked');
  };

  const handleEnquire = () => {
    // Handle enquiry action
    console.log('Enquire clicked');
  };

  const handleDownload = () => {
    // Handle download action
    console.log('Download clicked');
  };

  return (
    <div>
      {/* Your page content */}
      <StickyCTAFooter
        title="Programs Open 2025"
        subtitle="Transform your career with IMAS"
        primaryButtonText="Apply Now"
        secondaryButtonText="Contact Us"
        tertiaryButtonText="Get Brochure"
        onPrimaryClick={handleApplyNow}
        onSecondaryClick={handleEnquire}
        onTertiaryClick={handleDownload}
        showFloatingButton={true}
        floatingButtonIcon={<Phone className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `"Admissions Open 2025"` | Main title text |
| `subtitle` | `string` | `"Join the next generation of leaders"` | Subtitle text |
| `primaryButtonText` | `string` | `"Apply Now"` | Primary button text |
| `secondaryButtonText` | `string` | `"Enquire Now"` | Secondary button text |
| `tertiaryButtonText` | `string` | `"Download Brochure"` | Tertiary button text |
| `onPrimaryClick` | `() => void` | `undefined` | Primary button click handler |
| `onSecondaryClick` | `() => void` | `undefined` | Secondary button click handler |
| `onTertiaryClick` | `() => void` | `undefined` | Tertiary button click handler |
| `onFloatingClick` | `() => void` | `undefined` | Floating button click handler (falls back to primary) |
| `showFloatingButton` | `boolean` | `true` | Whether to show floating button on mobile |
| `floatingButtonIcon` | `React.ReactNode` | `<Plus />` | Icon for floating button |

## Implementation Examples

### Faculty Page
```tsx
<StickyCTAFooter />
```

### Programs Page
```tsx
<StickyCTAFooter
  title="Programs Open 2025"
  subtitle="Choose your path to success"
  primaryButtonText="Apply for Program"
  secondaryButtonText="Learn More"
  tertiaryButtonText="Download Curriculum"
/>
```

### Contact Page
```tsx
<StickyCTAFooter
  title="Get in Touch"
  subtitle="We're here to help"
  primaryButtonText="Send Message"
  secondaryButtonText="Call Now"
  tertiaryButtonText="Visit Campus"
  showFloatingButton={false}
/>
```

## Styling

The component uses IMAS brand colors and responsive design:

- **Desktop**: Horizontal layout with title, subtitle, and three buttons
- **Mobile**: Vertical layout with title and stacked buttons
- **Floating Button**: Circular button with custom icon (mobile only)
- **Colors**: Uses `IMAS_TAILWIND_CLASSES` for consistent branding

## Notes

- The component automatically adds bottom padding to prevent content from being hidden
- The floating button is only visible on mobile devices
- All buttons have hover effects and smooth transitions
- The component is positioned with `fixed` positioning and high z-index
