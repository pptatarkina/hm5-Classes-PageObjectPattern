import { HomePage, MainPage, RegisterPage } from './index';
import { LoginPage } from './login.page';
import { NewArticlePage } from './articleNew.page';
import { ArticlePage } from './articleView.page';
import { EditArticle } from './articleEdit.page';
import { ProfilePage } from './profile.page';
import { EditProfileSettings } from './settings.page';

export class App {
    constructor(page) {
    this.page = page;
    this.home = new HomePage(page);
    this.main = new MainPage(page);
    this.register = new RegisterPage(page);
    this.login = new LoginPage(page);
    this.newArticle = new NewArticlePage(page);
    this.article = new ArticlePage(page);
    this.profile = new ProfilePage(page);
    this.editArticlePage = new EditArticle(page);
    this.settings = new EditProfileSettings(page);


    }
}

