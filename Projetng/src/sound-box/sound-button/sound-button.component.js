import css from './sound-button.component.css';

class SoundButtonController {
    constructor($scope) {
        this.$scope = $scope;
    }

    $onInit() {}

    $onChanges(changes) {
        if (changes.sound && changes.sound.currentValue) {
            this.audio = new Audio(changes.sound.currentValue.url);
            this.title = changes.sound.currentValue.title || changes.sound.currentValue.url.split('/').pop();
            this.audio.onended = () => this.$scope.$apply();
            this.audio.playbackRate = 2;
        }
    }

    toggle() {
        if (this.audio.paused) this.audio.play();
        else {
            this.audio.pause();
            this.audio.currentTime = 0;
        }
    }

    delete() {
        this.onDelete();
    }


}

export const SoundButton = {

    bindings: {
        sound: '<',
        onDelete: '&'
    },

    template: `

        <div class="checkbox">
            <label>
            <input type="checkbox" ng-model="$ctrl.audio.loop"> loop
            </label>
        </div>
 
        <button ng-click="$ctrl.delete()" type="button" class="close">
            <span>&times;</span>
        </button>
        
        <button ng-click="$ctrl.toggle()" type="button" class="btn btn-lg btn-block">
            <span ng-class="{ 'ion-ios-play': $ctrl.audio.paused, 'ion-ios-pause': !$ctrl.audio.paused }"></span>
            {{ $ctrl.title }}
        </button>

        <input type="range" class="form-control" ng-model="$ctrl.audio.playbackRate" min="0" max="2" step=".1">
        {{ toto }}
    `,

    controller: SoundButtonController

};