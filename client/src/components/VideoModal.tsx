import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import { Button } from './ui/button';

const toEmbed = (url: string) => {
  try {
    const u = new URL(url);
    // Handle youtu.be short links
    if (u.hostname === 'youtu.be') {
      const id = u.pathname.replace('/', '');
      return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    }
    // Handle regular YouTube URLs
    if (u.hostname.includes('youtube.com')) {
      const id = u.searchParams.get('v');
      if (id) return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    }
  } catch {}
  return url;
};

export function VideoModal(): React.JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);

  React.useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('imas:openVideoModal', handler as EventListener);
    return () => {
      window.removeEventListener('imas:openVideoModal', handler as EventListener);
    };
  }, []);

  const videos = [
    { title: 'IMAS Video 1', url: 'https://youtu.be/rM3MWkhO6GA?si=a_DSoywRmjUrThJh' },
    { title: 'IMAS Video 2', url: 'https://youtu.be/z01O0NyN9r4?si=9B9utoNc30bDeZ81' },
    { title: 'IMAS Video 3', url: 'https://youtu.be/sOohQeYh4ac?si=x2M7usLwOmFTZvSh' },
    { title: 'IMAS Video 4', url: 'https://youtu.be/lVBNg1ispcE?si=mORtjOuU2TXCt3C0' },
    { title: 'IMAS Video 5', url: 'https://youtu.be/ynIZZZKj23Y?si=fA5p4tjOu76QQCDp' },
  ];

  const embedUrl = toEmbed(videos[activeIdx].url);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="lg:max-w-6xl">
        <DialogHeader>
          <DialogTitle>Watch IMAS Videos</DialogTitle>
          <DialogDescription>
            Choose a video to watch.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-2 items-center justify-center">
            {videos.map((v, idx) => (
              <Button
                key={v.url}
                variant={idx === activeIdx ? 'default' : 'outline'}
                className="w-full"
                onClick={() => setActiveIdx(idx)}
              >
                {v.title}
              </Button>
            ))}
          </div>

          <div className="sm:col-span-3">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-md"
                src={embedUrl}
                title={videos[activeIdx].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}