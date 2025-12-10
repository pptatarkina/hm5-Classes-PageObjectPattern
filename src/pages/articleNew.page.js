export class NewArticlePage {
    constructor(page) {
        this.page = page;
        this.articleTitleInput = page.getByPlaceholder('Article Title');
        this.articleDescriptionInput = page.getByPlaceholder("What's this article about?");
        this.articleInput = page.getByPlaceholder('Write your article (in markdown)');
        this.articleTagsInput = page.getByPlaceholder('Enter tags');
        this.articlePublishButton = page.getByRole('button', {name: 'Publish Article'});
    }

async createArticle(title, description, body, tags) {
    await this.articleTitleInput.click();
    await this.articleTitleInput.fill(title);

    await this.articleDescriptionInput.click();
    await this.articleDescriptionInput.fill(description);

    await this.articleInput.click();
    await this.articleInput.fill(body);

    await this.articleTagsInput.click();
    await this.articleTagsInput.fill(tags);

    await this.articlePublishButton.click();

}

}