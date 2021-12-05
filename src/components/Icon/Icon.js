import { ReactComponent as LockIcon } from './icons/lock.svg';
import { ReactComponent as SearchIcon } from './icons/search.svg';
import { ReactComponent as CloseIcon } from './icons/close.svg';
import { ReactComponent as SunIcon } from './icons/sun.svg';
import { ReactComponent as FilterIcon } from './icons/filter.svg';
import { ReactComponent as RefreshIcon } from './icons/refresh.svg';
import { ReactComponent as ArrowDownIcon } from './icons/v_arrow.svg';

export const Icon = ({ type, style, color }) => {
    const defaultStyle = {
        width: '9px',
    };
    const stroke = color ? color : '#BAD8F5';

    switch (type) {
        case 'arrow-down':
            const styleArrowDownIcon = {
                width: '16px',
                height: '16px',
            }
            return <ArrowDownIcon style = {
                {...styleArrowDownIcon, ...style } }
            fill = { stroke }
            />;
        case 'refresh':
            const styleRefreshIcon = {
                width: '16px',
                height: '16px',
            }
            return <RefreshIcon style = {
                {...styleRefreshIcon, ...style } }
            stroke = "#459DF5" / > ;
        case 'filter':
            const styleFilterIcon = {
                width: '14px',
                height: '16px',
            }
            return <FilterIcon style = {
                {...styleFilterIcon, ...style } }
            fill = "#FFFFFF" / > ;
        case 'lock':
            const styleLockIcon = {
                width: '16px',
                height: '16px',
            }
            return <LockIcon style = {
                {...styleLockIcon, ...style } }
            fill = "#000" / > ;
        case 'search':
            const styleSearchIcon = {
                width: '13px',
                height: '13px',
            }
            return <SearchIcon style = {
                {...styleSearchIcon, ...style } }
            stroke = "#459DF5" / > ;
        case 'close':
            const styleCloseIcon = {
                width: '14px',
            }
            return <CloseIcon style = {
                {...styleCloseIcon, ...style } }
            stroke = { stroke }
            />;
        case 'sun':
            const styleSunIcon = {
                width: '16px',
                height: '16px',
            }
            return <SunIcon style = {
                {...styleSunIcon, ...style } }
            stroke = { stroke }
            />;
        default:
            return < > < />;
    }
}