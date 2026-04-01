import React from 'react';
import { AppWrapper } from '@ui/components';
import { Box } from '@mui/material';
import { GridMenu } from '@ui/components/GridMenu';
import { useApps } from '@os/apps/hooks/useApps';
import { useExternalApps } from '@common/hooks/useExternalApps';

export const HomeApp: React.FC = () => {
  const { apps } = useApps();
  const externalApps = useExternalApps();
  return (
    <AppWrapper style={{ background: 'transparent', minHeight: 0 }}>
      <Box component="div" px={2.5} pt={3} pb={1}>
        <div className="text-xs uppercase tracking-[0.25em] text-neutral-400 mb-2">NPWD OS</div>
        <h1 className="text-5xl font-bold tracking-tight text-neutral-50 leading-none">Start</h1>
      </Box>
      <Box component="div" px={1.5} pb={2} className="overflow-y-auto">
        {apps && <GridMenu xs={6} items={[...apps, ...externalApps]} />}
      </Box>
    </AppWrapper>
  );
};
