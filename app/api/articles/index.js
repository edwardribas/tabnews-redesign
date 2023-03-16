const API_BASE_URL = "https://www.tabnews.com.br/api/v1/contents";

export const getPopularArticles = async (page = 1) => {
    const res = await fetch(`${API_BASE_URL}?page=${page}`);

    if (!res.ok)
        throw new Error({
            error: res.status,
            location: 'ARTICLES:GETPOPULARARTICLES',
            message: res.statusText
        })

    return res.json();
}

export const getRecentArticles = async (page = 1) => {
    const res = await fetch(`${API_BASE_URL}?strategy=new&page=${page}`);

    if (!res.ok)
        throw new Error({
            errorCode: res.status,
            location: 'ARTICLES:GETRECENTARTICLES',
            message: res.statusText
        })

    return res.json();
}