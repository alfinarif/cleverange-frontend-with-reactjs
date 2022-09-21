import toast from 'cogo-toast';


class NotificationHelper{

     successToast = (msg)=>{
        toast.success(msg)
     }

     errorToast = (msg)=>{
        toast.error(msg)
     }

}

export const {successToast, errorToast} = new NotificationHelper();