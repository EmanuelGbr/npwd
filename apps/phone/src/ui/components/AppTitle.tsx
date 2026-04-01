import React, { HTMLAttributes } from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IApp } from '@os/apps/config/apps';
import { OverridableStringUnion } from '@mui/types';
import { TypographyPropsVariantOverrides } from '@mui/material/Typography/Typography';
import { Variant } from '@mui/material/styles/createTypography';

interface AppTitleProps extends HTMLAttributes<HTMLDivElement> {
  app: IApp;
  variant?: OverridableStringUnion<Variant | 'inherit', TypographyPropsVariantOverrides>;
}

// Taso: Maybe we should pass an icon (maybe fa?) as a prop as well at somepoint
// but need to think about the best way to do that for standardization sake.
export const AppTitle: React.FC<AppTitleProps> = ({
  app: { backgroundColor, color, nameLocale },
  variant = 'h5',
  ...props
}) => {
  const [t] = useTranslation();
  return (
    <div
      className="px-4 py-3 border-b border-[#2c3445] bg-[#11151e] text-neutral-100"
      style={{ borderLeft: `4px solid ${backgroundColor}` }}
      {...props}
    >
      <h3 className="text-3xl font-extrabold tracking-tight text-neutral-100">
        {t(nameLocale)}
      </h3>
    </div>
  );
};
