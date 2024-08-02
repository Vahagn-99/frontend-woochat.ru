import router from "@/router/index.js";

export const linkTo = (pageName, id = null) => {
    setTimeout(() => {
        const params = id ? { id } : {};
        router.push({
            name: pageName,
            params: params,
        }).catch(err => {
            console.error('Navigation error:', err);
        });
    }, 300);
};