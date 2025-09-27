import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import { Button } from './ui/button';

export function BrochureModal(): React.JSX.Element {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('imas:openBrochureModal', handler as EventListener);
    return () => {
      window.removeEventListener('imas:openBrochureModal', handler as EventListener);
    };
  }, []);

  const brochures = [
    {
      title: 'IMAS PGDM+ 2026 Brochure',
      href: '/uploads/IMAS_PGDM_Plus_2025_Brochure.pdf',
    },
    {
      title: 'MBA Global Brochure',
      href: '/uploads/MBA_Global_Brochure.pdf',
    },
    {
      title: 'PGDM Programmes for Executives',
      href: '/uploads/PGDM_Programmes_for_Executives.pdf',
    },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Download Brochures</DialogTitle>
          <DialogDescription>
            Choose a brochure to download.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-3">
          {brochures.map((b) => (
            <Button
              key={b.href}
              variant="secondary"
              onClick={() => {
                window.open(b.href, '_blank');
                setOpen(false);
              }}
            >
              {b.title}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}