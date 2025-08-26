import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export function GalleryPage(): React.JSX.Element {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-primary-dark">Gallery</h1>
      <Card>
        <CardHeader>
          <CardTitle>Campus Gallery</CardTitle>
          <CardDescription>Photos and videos from our campus</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Gallery content will be displayed here...</p>
        </CardContent>
      </Card>
    </div>
  );
}