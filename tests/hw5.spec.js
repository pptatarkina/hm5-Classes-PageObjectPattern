// Тесты:
// - Пользователь может редактировать статью
// - Пользователь может удалить статью
// - Пользователь может оставить комментарий к своей статье
// - Пользвоатель может добавить статью в избранное
// - Пользователь может изменить настройки профайла


import { test, expect } from '@playwright/test';
import  { App } from '../src/pages/app.page';
import { UserBuilder } from '../src/helpers/builders/index';
import { faker } from '@faker-js/faker';

const url = 'https://realworld.qa.guru/';

let app;
let user;
let article;

test.beforeEach(async ({page}) => {
  user = new UserBuilder()
    .withName('Polly Polly')
    .withEmail('pttrkn+1@gmail.com')
    .withPassword('123123456')
    .build();

   app = new App(page);

   // логинимся под существующим юзером 

   await app.main.open(url);
   await app.main.gotoLogin();
   await app.login.LoginUser(user.email, user.password);

   // создаем новую статью для тестов

   article = {
   title: faker.lorem.sentence(),
   description: faker.lorem.sentence(2),
   body: faker.lorem.paragraphs(2),
   tag: faker.lorem.word(),
};
   await app.home.gotoNewArticle();
   await app.newArticle.createArticle(article.title, article.description, article.body, article.tag);
   await app.article.getArticleTitleLocator().waitFor({ state: 'visible' });

})


test ('Пользователь может редактировать статью', async ({ page }) => {

   const articleUpdated = {
   titleUpdated: faker.lorem.sentence(),
   descriptionUpdated: faker.lorem.sentence(2),
   bodyUpdated: faker.lorem.paragraphs(2),
   tagUpdated: faker.lorem.word(),
};

   await app.home.gotoMyArticles();
   await app.profile.openArticlePage(article.title);
   await app.article.gotoEditArticle();
   await app.editArticlePage.editArticle(articleUpdated.titleUpdated, articleUpdated.descriptionUpdated, articleUpdated.bodyUpdated, articleUpdated.tagUpdated);
   await expect(app.article.getArticleTitleLocator()).toContainText(articleUpdated.titleUpdated);
})

test ('Пользователь может удалить статью', async ({page}) => {
   await app.article.deleteArticle();
   await app.profile.expectArticleNotPresent(article.title);

})

test ('Пользователь может оставить комментарий к своей статье', async ({}) => {

   let comment = faker.lorem.sentence();

   await app.home.gotoMyArticles();
   await app.profile.openArticlePage(article.title);
   await app.article.postNewComment(comment);
   await expect(app.article.getAddedComment()).toContainText(comment);
})

test ('Пользователь может добавить статью в избранное', async ({page}) => {
   await app.home.gotoMyArticles();
   const articleTitle = await app.profile.getArticleTitleText();
   await app.profile.addToFavorite();
   await app.profile.gotoFavoritedArticles();
   const favoritedArticle = app.profile.getFavoritedArticleLocator(articleTitle);
   await expect(favoritedArticle).toBeVisible();
   await expect(favoritedArticle).toContainText(articleTitle);
})

const updatedUser = {
   url: 'https://optim.tildacdn.com/tild3639-3964-4634-b239-393833386638/-/resize/824x/-/format/webp/54080808080.png.webp',
   name: 'Polly Polly',
   bio: 'new bio',
   email: 'pttrkn+1@gmail.com',
   password: '123123456',
}

test ('Пользователь может изменить настройки профайла', async ({page}) => {

   await app.home.gotoSettings();
   await app.settings.editSettings(updatedUser.url, updatedUser.name, updatedUser.bio, updatedUser.email, updatedUser.password);

   await expect(app.home.getProfileNameLocator()).toContainText(updatedUser.name);
})
