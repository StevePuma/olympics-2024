// src/components/dashboard-card.tsx
import React, { ReactNode } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';

type DashboardCardProps = {
  title?: string;
  height?: number;
  gridColumns: number;
  children?: ReactNode;
};

const DashboardCard: React.FC<DashboardCardProps> = (props) => {
  return (
    <Grid item xs={props.gridColumns}>
      <Card sx={{ border: '1px solid #ddd' }}>
        <CardHeader
          subheader={props.title || ''}
          sx={{ paddingTop: '8px', paddingBottom: '8px' }}
        />
        <CardContent sx={{ height: props.height || 300 }}>
          {props.children}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default DashboardCard;
