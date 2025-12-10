export class LoginPage {
    constructor(page){
        this.page = page;
        this.emailInput = page.getByRole('textbox', {name: 'email'});
        this.passwordInput = page.getByRole('textbox', {name: 'password'});
        this.loginButton = page.getByRole('button', {name: 'Login'});
    }

async LoginUser(email, password){
    await this.emailInput.click();
    await this.emailInput.fill(email);

    await this.passwordInput.click();
    await this.passwordInput.fill(password);

    await this.loginButton.click();
}
}