
export class ProfilePage {
    constructor(page){
        this.page = page;
        this.selectedArticle = page.locator('a.preview-link').first();
        this.selectedArticleTitle = this.selectedArticle.locator('h1');
        this.addToFavoriteButton = page.locator('button.btn.btn-sm.btn-outline-primary.pull-xs-right').first();
        this.favoritedArticlesSection = page.getByRole('link', {name: 'Favorited Articles'});
        this.articleByTitle = (title) =>  page.locator('a.preview-link', { hasText: title });
    }

    async openArticlePage(title) {
    const article = this.articleByTitle(title);
    await article.click();
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

    async isArticleNotPresent(title) {
    const article = this.page.getByRole('heading', {
        level: 1,
        name: new RegExp(title, "i")
    }).first();

    const count = await article.count();
    return count === 0; 
}

}
