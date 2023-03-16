export const getArticleInfoFromAPI = (articleInfo) => ({
    comments: articleInfo.children_deep_count,
    title: articleInfo.title,
    tabcoins: articleInfo.tabcoins,
    author: articleInfo.owner_username,
    created_at: articleInfo.published_at,
    slug: articleInfo.slug,
}) 