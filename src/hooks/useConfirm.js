export const useConfirm = (message = "", callback, rejection) => {
    if (typeof callback !== "function") {
        return;
    }
    const confirmAction = () => {
        if (window.confirm(message)) {
            callback();
        } else {
            try {
                rejection();
            } catch (error) {
                return;
            }
        }
    }
    return confirmAction;
}