import {IApp} from '@os/apps/config/apps';
import {SnackbarContent, CustomContentProps} from 'notistack';
import React, {forwardRef} from 'react';
import {useTranslation} from 'react-i18next';
import {useHistory} from 'react-router-dom';
import {useNotification} from '../useNotification';
import {cn} from "@npwd/keyos";

interface NotificationBaseProps extends CustomContentProps {
    app: IApp;
    secondaryTitle?: string;
    path?: string;
    onClick?: () => void;
}

export type NotificationBaseComponent = React.FC<NotificationBaseProps>;

const NotificationBase = forwardRef<HTMLDivElement, NotificationBaseProps>((props, ref) => {
    const {markAsRead} = useNotification();
    const {app, message, secondaryTitle, path, onClick} = props;
    const [t] = useTranslation();
    const history = useHistory();

    const handleNotisClick = () => {
        path && !onClick ? history.push(path) : onClick();
        markAsRead(props.id.toString());
    };

    if (!app) {
        console.error('App was not found. Could not render notification.');
        console.error(
            'If you are using an external app, make sure it is started before NPWD and that you pass the correct app id to the notification.',
        );
        return null;
    }

    if (!app.NotificationIcon) {
        console.warn('App does not have a notification icon');
    }

    return (
        <SnackbarContent
            onClick={handleNotisClick}
            ref={ref}
            style={{minWidth: '370px'}}
            className="bg-[#161c26] py-3 px-3 flex border border-[#2c3445]"
        >
            <div className="flex items-center text-neutral-50 w-full mb-2">
                <div
                    className={cn("p-2 flex items-center justify-center")}
                    style={{backgroundColor: app.backgroundColor}}
                >
                    {app.NotificationIcon && <app.NotificationIcon fontSize="inherit"/>}
                </div>
                <div className="text-neutral-50 font-semibold pl-2 grow text-xs tracking-[0.08em] uppercase">
                    {t(app.nameLocale)}
                </div>
                <div>
                    <p className="text-[#a7b0c2] text-xs">{secondaryTitle}</p>
                </div>
            </div>
            <div className="text-neutral-100 text-sm overflow-hidden line-clamp-2">
                <p>{message}</p>
            </div>
        </SnackbarContent>
    );
});

export default NotificationBase;
