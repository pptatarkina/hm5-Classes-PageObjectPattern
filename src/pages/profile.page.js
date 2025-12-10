import { expect } from "@playwright/test";


export class ProfilePage {
    constructor(page){
        this.page = page;
        this.selectedArticle = page.locator('a.preview-link').first();
        this.selectedArticleTitle = this.selectedArticle.locator('h1');
        this.addToFavoriteButton = page.locator('button.btn.btn-sm.btn-outline-primary.pull-xs-right').first();
        this.favoritedArticlesSection = page.getByRole('link', {name: 'Favorited Articles'});

    }

   async openArticlePage(title) {
    const articleLocator = this.page.locator('a.preview-link', { hasText: title });
    await expect(articleLocator).toBeVisible({ timeout: 10000 });
    await articleLocator.click();
}


    async addToFavorite() {
    await this.addToFavoriteButton.click();
    }

    async gotoFavoritedArticles() {
    await this.favoritedArticlesSection.click();
    }

    async getArticleTitleText() {
    const text = await this.selectedArticleTitle.textContent();
    return text;
    }

    getFavoritedArticleLocator(title) {
    return this.page.locator('a.preview-link', { has: this.page.locator('h1', { hasText: title }) });
}

    async expectArticleNotPresent(title) {
    const article = this.page.getByRole('heading', {
    level: 1,
    name: new RegExp(title, "i")
    }).first();

    await expect(article).not.toBeVisible();
}
}