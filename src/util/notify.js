import { notify } from 'react-notify-toast';

export const success = (message) => {
    let myColor = { background: '#008000', text: "#FFFFFF", "z-index":"99999" };
    notify.show(message, "custom", 5000, myColor);    
}
// export const error = (message) => {
//     let myColor = { background: '#FB6056', text: "#FFFFFF" };
//     notify.show(message, "custom", 5000, myColor);
// }
export const error = (message) => {
    let myColor = { background: '#FB6056', text: "#FFFFFF" };
    let h ="x"
    notify.show(message, "custom", 5000, myColor);
}
export const warning = (message) => {
    notify.show(message, "warning", 5000);
}

export const customerror = (message) => {
    let myColor = { background: '#ff0000', text: "#FFFFFF" };
    notify.show(message, "custom", 60000, myColor);
}

export const hide = () => {
    notify.hide();
}