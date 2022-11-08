import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
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