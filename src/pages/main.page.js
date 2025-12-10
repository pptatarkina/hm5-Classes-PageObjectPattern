export class MainPage {
// техническое описание страницы

    constructor (page) {
        this.page = page;
        this.signupLink = page.getByRole('link', { name: 'Sign up' }).describe('Кнопка//cсылка зарегистрироваться');
        this.loginLink = page.getByRole('link', {name: 'Login'});
        this.newArticleLink = page.getByRole('link', {name: 'New Article'});
    }
// бизнесовые действия со страницей

async gotoRegister() {
    await this.signupLink.click();
}

async open(url) {
    await this.page.goto(url);
}

async gotoLogin(){
    await this.loginLink.click()
}

}

