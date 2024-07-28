
import moment from 'moment';

export const formatDate = (dateString: string) => {
    const date = moment(dateString, 'MMM D, YYYY HH:mm:ss Z');
    return date.format('DD.MM.YYYY, HH:mm:ss');
};