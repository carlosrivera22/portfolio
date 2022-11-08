import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function BasicCard({content}:{content: string}) {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 750 }} style={{ border: "3px solid #f3e700", borderRadius: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="black" gutterBottom>
         <b>{content}</b>
        </Typography>
      </CardContent>
    </Card>
  );
}