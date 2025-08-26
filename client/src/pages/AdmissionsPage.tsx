import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export function AdmissionsPage(): React.JSX.Element {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-primary-dark">Admissions</h1>
      <Card>
        <CardHeader>
          <CardTitle>Admission Process</CardTitle>
          <CardDescription>Step-by-step guide to join IMAS</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Admissions content will be displayed here...</p>
        </CardContent>
      </Card>
    </div>
  );
}