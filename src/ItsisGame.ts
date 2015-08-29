module Itsis {

    export class ItsisGame extends Phaser.Game {

        constructor() {

            super(1600, 900, Phaser.AUTO, 'content', null);

            this.state.add('Boot', Boot, true);
            this.state.add('Preloader', Preloader, false);
            this.state.add('MainMenu', MainMenu, false);

        }

    }

}
