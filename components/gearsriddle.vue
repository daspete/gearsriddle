<template>
    <div class="gearsriddle font-body">
        <h2>Das Zahlenschloss</h2>
        <div class="py-4 text-md">
            Es scheint so, als ob das Zahlenschloss drei Stellen hat.
            <div v-if="currentTry != 1">Wie lautet die Kombination?</div>
            <div class="inputbox" v-if="currentTry != 1"><input class="text-black px-4" type="text" v-model="combination" placeholder="Deine Lösung"><button class="bg-green-600 px-4" @click="CheckCombination">Prüfen</button></div>
            <div v-if="currentTry == 1" class="text-green-600 font-bold">
                RICHTIG, die Kombination lautet: 2 8 4 
            </div>

            <div v-if="currentTry == 0" class="text-red-600 font-bold">
                Leider falsch, versuch's nochmal
            </div>
        </div>
        <div class="text-left">
            <gears />
        </div>

        <div class="helpmodebutton">
            <button @click="EnableHelpMode">?</button>
        </div>

        <div class="helpmode" v-if="helpModeEnabled">
            <div class="helpmode__close" @click="DisableHelpMode">
                x
            </div>
            <h2>Hmm...</h2>
            <div class="py-5">
                Wie funktioniert dieses Rätsel nur?<br>
            </div>
            <div v-if="hintsRevealed < 3">
                <button @click="RevealHint">Ich brauche {{ hintsRevealed > 0 ? 'noch' : '' }} einen Hinweis</button>
            </div>

            <div class="hint pt-5" v-if="hintsRevealed > 0 && hintsRevealed < 4">
                <h3>Hinweis 1</h3>
                Um das Rätsel zu lösen, muss man die Verbindung zwischen den zwei sich gegenüber liegenden Zeichen herausfinden. Z.B. 1 = E, 3 = D, 6 = S, 7 = S.
            </div>

            <div class="hint pt-5" v-if="hintsRevealed > 1 && hintsRevealed < 4">
                <h3>Hinweis 2</h3>
                Wie bei Hinweis 1 erwähnt: Eins = E, Drei = D, Sechs = S, Sieben = 7.
            </div>

            <div class="hint pt-5" v-if="hintsRevealed > 2 && hintsRevealed < 4">
                <h3>Hinweis 3</h3>
                Der Anfangsbuchstaben der Zahl, z.B. E bei Eins, steht der Zahl gegenüber: E = 1.
            </div>

            <div class="hint pt-5" v-if="hintsRevealed == 4">
                <h3>Die Lösung</h3>
                Die Kombination lautet: 2 8 4
            </div>

            <div class="pt-5" v-if="hintsRevealed == 3">
                <button @click="RevealHint">Ich komm nicht drauf, bitte sag mir die Lösung</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            helpModeEnabled: false,
            hintsRevealed: 0,
            combination: '',
            currentTry: -1,
        }
    },

    methods: {
        EnableHelpMode(){
            this.helpModeEnabled = true
        },

        DisableHelpMode(){
            this.helpModeEnabled = false
        },


        RevealHint(){
            this.hintsRevealed += 1
        },

        CheckCombination(){
            this.currentTry = -1

            let guess = this.combination.trim()
            try {
                guess = parseInt(guess, 10)
            }catch(err){}

            let guessed = true

            if(guess != 284) guessed = false

            if(!guessed){
                this.currentTry = 0
            }else{
                this.currentTry = 1
            }
        }
    }
}
</script>

<style lang="scss">
.gearsriddle {

    h2 {
        font-size: 4rem;
    }

    .inputbox {
        font-size: 2rem;
    }

    .helpmodebutton {
        position: fixed;
        bottom: 20px;
        right: 20px;
        font-size: 6rem;
        line-height: 40px;

        button {
            cursor: pointer;
            @apply text-yellow-300;
            text-shadow: 1px 1px 2px rgba(black, 0.7);

            &:hover {
                @apply text-green-600;
            }
        }
        
    }

    .helpmode {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(black, 0.9);
        z-index: 56;
        overflow: auto;

        &__close {
            position: absolute;
            top: 10px;
            right: 20px;
            font-size: 6rem;
            line-height: 40px;
            cursor: pointer;
            @apply text-yellow-300;

            &:hover {
                @apply text-green-600;
            }
        }

        button {
            display: inline-block;
            padding: 8px 15px;
            @apply text-white;
            @apply bg-green-800;
        }

        .hint {

            font-size: 2rem;
            h3 {
                font-size: 3rem;
            }
        }
    }
}
</style>