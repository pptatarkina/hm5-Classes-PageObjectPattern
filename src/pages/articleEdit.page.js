export class EditArticle {
    constructor (page) {
        this.page = page;
        this.articleTitleEdit = page.getByPlaceholder('Article Title');
        this.articleDescriptionEdit = page.getByPlaceholder("What's this article about?");
        this.articleBodyEdit = page.getByPlaceholder('Write your article (in markdown)');
        this.articleTagsEdit = page.getByPlaceholder('Enter tags');
        this.updateArticleButton = page.getByRole('button', {name: 'Update Article'});

    }
async editArticle(title, description, body, tags) {
    await this.articleTitleEdit.click();
    await this.articleTitleEdit.fill(title);

    await this.articleDescriptionEdit.click();
    await this.articleDescriptionEdit.fill(description);

    await this.articleBodyEdit.click();
    await this.articleBodyEdit.fill(body);

    await this.articleTagsEdit.click();
    await this.articleTagsEdit.fill(tags);

    await this.updateArticleButton.click();
}
}