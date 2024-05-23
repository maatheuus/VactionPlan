import toast from "react-hot-toast";

export function handleErrorsMessages(err) {
  if (!err) return;
  toast.error(err);
}

export function handleSuccessMessages(message) {
  if (!message) return;
  toast.success(message);
}
