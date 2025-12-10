export class HomePage {
    // техническое описание страницы
    
    constructor (page) {
        this.page = page;
        //todo нейминг и селектор
        this.profileName = page.locator('.dropdown-toggle');
        this.profileSection = page.getByRole('link', {name: 'Profile'});
        this.settingsSection = page.getByRole('link', {name: 'Settings'});
        this.newArticleLink = page.getByRole('link', {name: 'New Article'});
        this.noArticleMessage = page.getByText('Articles not available.');
    }
    
    // бизнесовые действия со страницей

    getProfileNameLocator() {
        return this.profileName;
    }

    async gotoNewArticle() {
        await this.newArticleLink.click();
}

    async gotoMyArticles() {
        await this.profileName.click();
        await this.profileSection.click();
    }

    getDeletedArticle(){
        return this.noArticleMessage;
    }

    async gotoSettings() {
        await this.profileName.click();
        await this.settingsSection.click();

    }
}