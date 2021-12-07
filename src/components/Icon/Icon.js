import { ReactComponent as LockIcon } from './icons/lock.svg';
import { ReactComponent as SearchIcon } from './icons/search.svg';
import { ReactComponent as CloseIcon } from './icons/close.svg';
import { ReactComponent as SunIcon } from './icons/sun.svg';
import { ReactComponent as FilterIcon } from './icons/filter.svg';
import { ReactComponent as RefreshIcon } from './icons/refresh.svg';
import { ReactComponent as ArrowDownIcon } from './icons/v_arrow.svg';
import { ReactComponent as CancelIcon } from './icons/cancel.svg';
import { ReactComponent as NewIcon } from './icons/new.svg';
import { ReactComponent as DoneIcon } from './icons/done.svg';
import { ReactComponent as EditIcon } from './icons/edit.svg';
import { ReactComponent as DeleteIcon } from './icons/delete.svg';
export const Icon = ({type, style, color, ...props}) => {
  const stroke = color ? color : '#BAD8F5';

  switch (type) {
    case 'delete':
      const styleDeleteIcon = {
        width: '16px',
        height: '16px',
      }
      return <DeleteIcon style={{...styleDeleteIcon, ...style}} stroke="#fff" {...props} />;
    case 'edit':
      const styleEditIcon = {
        width: '16px',
        height: '16px',
      }
      return <EditIcon style={{...styleEditIcon, ...style}} stroke="#fff"  {...props} />;
    case 'done':
      const styleDoneIcon= {
        width: '16px',
        height: '16px',
      }
      return <DoneIcon style={{...styleDoneIcon, ...style}} fill={stroke}  {...props} />;
    case 'new':
      const styleNewIcon= {
        width: '16px',
        height: '16px',
      }
      return <NewIcon style={{...styleNewIcon, ...style}} fill={stroke}  {...props} />;
    case 'cancel':
      const styleIcon = {
        width: '16px',
        height: '16px',
      }
      return <CancelIcon style={{...styleIcon, ...style}} fill={stroke}  {...props} />;
    case 'arrow-down':
      const styleArrowDownIcon = {
        width: '16px',
        height: '16px',
      }
      return <ArrowDownIcon style={{...styleArrowDownIcon, ...style}} fill={stroke}  {...props} />;
    case 'refresh':
      const styleRefreshIcon = {
        width: '16px',
        height: '16px',
      }
      return <RefreshIcon style={{...styleRefreshIcon, ...style}} stroke="#459DF5"  {...props} />;
    case 'filter':
      const styleFilterIcon = {
        width: '14px',
        height: '16px',
      }
      return <FilterIcon style={{...styleFilterIcon, ...style}} fill="#FFFFFF"  {...props} />;
    case 'lock':
      const styleLockIcon = {
        width: '16px',
        height: '16px',
      }
      return <LockIcon style={{...styleLockIcon, ...style}} fill="#000"  {...props} />;
    case 'search':
      const styleSearchIcon = {
        width: '13px',
        height: '13px',
      }
      return <SearchIcon style={{...styleSearchIcon, ...style}} stroke="#459DF5"  {...props} />;
    case 'close':
      const styleCloseIcon = {
        width: '14px',
      }
      return <CloseIcon style={{...styleCloseIcon, ...style}} stroke={stroke}  {...props} />;
    case 'sun':
      const styleSunIcon = {
        width: '16px',
        height: '16px',
      }
      return <SunIcon style={{...styleSunIcon, ...style}} stroke={stroke}  {...props} />;
    default:
      return <></>;
  }
}
