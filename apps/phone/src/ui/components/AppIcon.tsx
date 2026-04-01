import React from 'react';
import { darken, Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import { green } from '@mui/material/colors';
import { Badge } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { INotificationIcon } from '@os/notifications/providers/NotificationsProvider';

const useStyles = makeStyles<Theme, { color: string; backgroundColor: string }>((theme) => ({
  root: {
    width: '100%',
    minHeight: 84,
    border: 0,
    cursor: 'pointer',
    background: ({ backgroundColor }) => `linear-gradient(160deg, ${darken(backgroundColor, 0.2)} 0%, ${backgroundColor} 100%)`,
    color: ({ color }) => color,
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderRadius: 0,
    padding: theme.spacing(1.2),
    textAlign: 'left',
    transition: 'transform 120ms ease, filter 120ms ease',
    '&:hover': {
      transform: 'translateY(-1px)',
      filter: 'brightness(1.07)',
    },
    '&:active': {
      transform: 'scale(0.985)',
    },
  },
  icon: {
    fontSize: '1.9rem',
    width: '1.9rem',
    height: '1.9rem',
  },
  label: {
    fontSize: '0.7rem',
    fontWeight: 700,
    letterSpacing: '0.05em',
    lineHeight: 1.15,
    color: 'rgba(245,247,250,0.95)',
  },
}));

export interface AppIconProps {
  id: string;
  nameLocale: string;
  Icon: React.ElementType;
  icon: React.ReactNode;
  backgroundColor: string;
  color: string;
  notification: INotificationIcon;
}

export const AppIcon: React.FC<AppIconProps> = ({
  id,
  nameLocale,
  Icon,
  backgroundColor,
  color,
  icon,
  notification,
}) => {
  const [t] = useTranslation();
  const classes = useStyles({
    backgroundColor: backgroundColor || green[50],
    color: color || green[400],
  });

  return (
    <button className={classes.root} type="button">
      <Badge
        color="error"
        badgeContent={notification?.badge}
        invisible={!notification || notification.badge < 1}
      >
        {Icon ? (
          <Icon className={classes.icon} fontSize="large" />
        ) : (
          <div className={classes.icon}>{icon || t(nameLocale)}</div>
        )}
      </Badge>
      <div className={classes.label}>{t(nameLocale)}</div>
    </button>
  );
};
