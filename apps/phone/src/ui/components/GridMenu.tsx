import React, { Fragment } from 'react';
import { AppIcon } from './AppIcon';
import { Box, Grid, GridSize } from '@mui/material';
import { Link } from 'react-router-dom';
import { IApp } from '@os/apps/config/apps';

interface GridMenuProps {
  items: IApp[];
  Component?: React.ElementType;
  xs?: GridSize;
}

const LARGE_TILES = new Set(['MESSAGES', 'TWITTER', 'MARKETPLACE', 'DARKCHAT']);

export const GridMenu: React.FC<GridMenuProps> = ({ items, Component = AppIcon, xs }) => {
  return (
    <Grid container alignItems="stretch" direction="row" spacing={1}>
      {items &&
        items.length &&
        items.map((item) => (
          <Fragment key={item.id}>
            {!item.isDisabled && (
              <Grid item xs={LARGE_TILES.has(item.id) ? 6 : xs || 3} key={item.id}>
                <Box>
                  <Link to={item.path} style={{ display: 'block' }}>
                    <Component {...item} />
                  </Link>
                </Box>
              </Grid>
            )}
          </Fragment>
        ))}
    </Grid>
  );
};
