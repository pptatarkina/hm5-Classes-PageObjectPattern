export class ArticlePage {
    constructor(page){
        this.page = page;
        this.title = page.getByRole('heading', {level: 1});
        this.deleteArticleButton = page.getByRole('button', {name: 'Delete Article'}).first();
        this.editArticleButton = page.getByRole('link', {name: 'Edit Article'}).first();
        this.newCommentInput = page.getByPlaceholder('Write a comment...');
        this.postCommentButton = page.getByRole('button', {name: 'Post Comment'});
        this.addedComment = page.locator('.card-text').last();
    }

    getArticleTitleLocator() {
        return this.title;
    }

    async deleteArticle() {
       this.page.once('dialog', async (dialog) => {
        await dialog.accept();
       })
       
        await this.deleteArticleButton.click();
    }

    async gotoEditArticle() {
        await this.editArticleButton.click();
    }

    async postNewComment(comment) {
        await this.newCommentInput.click();
        await this.newCommentInput.fill(comment);
        await this.postCommentButton.click();
    }

    getAddedComment() {
        return this.addedComment;
    }
}