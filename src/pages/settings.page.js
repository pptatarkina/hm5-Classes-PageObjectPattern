import { th } from "@faker-js/faker";

export class EditProfileSettings {
    constructor(page) {
        this.page = page;
        this.urlPictureInput = page.getByPlaceholder('URL of profile picture');
        this.nameInput = page.getByPlaceholder('Your Name');
        this.bioInput = page.getByPlaceholder('Short bio about you');
        this.emailInput = page.getByPlaceholder('Email');
        this.passwordInput = page.getByPlaceholder('Password');
        this.updateSettingButton = page.getByRole('button', {name: 'Update Settings'});
    }

    async editSettings(url, name, bio, email, password) {
        await this.urlPictureInput.click();
        await this.urlPictureInput.fill(url);

        await this.nameInput.click();
        await this.nameInput.fill(name);
        
        await this.bioInput.click();
        await this.bioInput.fill(bio);

        await this.emailInput.click();
        await this.emailInput.fill(email);

        await this.passwordInput.click();
        await this.passwordInput.fill(password);

        await this.updateSettingButton.click();
    }
}