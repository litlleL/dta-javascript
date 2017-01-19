import css from './sound-box.component.css';

class SoundBoxController {
    constructor() {}

    $onInit() {
        this.sounds = [
            { url: 'http://192.168.99.41:1337/10415.mp3', title: 'SON 1' },
            { url: 'http://192.168.99.41:1337/3634.mp3', title: 'SON 2' },
            { url: 'http://192.168.99.41:1337/4072.mp3', title: 'SON 3' },
            { url: 'http://192.168.99.41:1337/clap-slapper.wav', title: 'clap-slapper.wav' },
            { url: 'http://192.168.99.41:1337/hihat-digital.wav', title: 'hihat-digital.wav' },
            { url: 'http://192.168.99.41:1337/kick-stomp.wav', title: 'kick-stomp.wav' },
            { url: 'http://192.168.99.41:1337/kick-big.wav', title: 'kick-big.wav' },
            { url: 'http://192.168.99.41:1337/kick-oldschool.wav', title: 'kick-oldschool.wav' },
            { url: 'http://192.168.99.41:1337/clap-fat.wav', title: 'clap-fat.wav' }
        ];
    }

    delete(sound) {
        this.sounds = this.sounds.filter(s => s !== sound);
    }
}

export const SoundBox = {
    template: ` 
        <sound-button class="col-md-3"
          ng-repeat="sound in $ctrl.sounds track by $index"
          on-delete="$ctrl.delete(sound)" 
          sound="sound">
        </sound-button>
    `,
    controller: SoundBoxController
}