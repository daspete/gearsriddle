<template>
    <div class="page w-screen h-screen bg-black text-white absolute font-body">
        <div class="page__backgroundsoftener"></div>
        <div class="page__fog">
            <div id="foglayer_01" class="fog">
                <div class="image image--1"></div>
                <div class="image image--2"></div>
            </div>
            <div id="foglayer_02" class="fog">
                <div class="image image--1"></div>
                <div class="image image--2"></div>
            </div>
            <div id="foglayer_03" class="fog">
                <div class="image image--1"></div>
                <div class="image image--2"></div>
            </div>
        </div>

        <div class="step step--1" v-if="currentStep == 1">
            <h1>OH!</h1>
            <div class="step__teaser">
                Du hast also die Schatzkiste gefunden.
            </div>

            <div class="step__content">
                Bist du bereit herauszufinden, wie man sie öffnet?
            </div>

            <div class="step__buttons">
                <button class="btn btn--confirm" @click="SetStep(2)">Ja klar!</button>
            </div>
        </div>

        <div class="step step--2" v-if="currentStep == 2">
            <gearsriddle />
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            currentStep: 1
        }
    },

    methods: {
        Exit(){

        },

        SetStep(step){
            this.currentStep = step
        }
    }
}
</script>

<style lang="scss">
.page {
    background-image: url('/images/bg.jpg');
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;

    &__backgroundsoftener {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(black, 0.7);
    }

    &__fog {
        top: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        overflow: hidden;
        -webkit-filter: blur(1px) grayscale(0.2) saturate(1.2) sepia(0.2);
        filter: blur(1px) grayscale(0.2) saturate(1.2) sepia(0.2);
    }
}

.step {
    position: relative;
    text-align: center;
    font-size: 2.5rem;

    &__teaser {
        font-size: 1.8rem;
    }

    &__content {
        @apply pt-10;
    }

    &__buttons {
        @apply pt-10;
    }

    .btn {
        display: inline-block;
        padding: 8px 15px;
        // @apply font-bold;
        @apply text-white;

        &--confirm {
            @apply bg-green-800;
        }

        &--cancel {
            @apply bg-red-900;
        }

    }

    &--1 {
        h1 {
            font-size: 4rem;
            @apply font-bold;
        }

        
    }

    &--2 {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow-x: hidden;
        overflow-y: auto;

    }
}

.fog {
    height: 100%;
    position: absolute;
    width: 200%;

    .image {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-size: cover;
        background-position: center center;
    }
}

#foglayer_01 {
    animation: foglayer_01_opacity 10s linear infinite, foglayer_moveme 15s linear infinite;
}
#foglayer_02, 
#foglayer_03 {
    animation: foglayer_02_opacity 21s linear infinite, foglayer_moveme 13s linear infinite;
}

#foglayer_01 .image--1, #foglayer_01 .image--2 {
    background-image: url("/images/fog1.png");
}
#foglayer_02 .image--1, #foglayer_02 .image--2,
#foglayer_03 .image--1, #foglayer_03 .image--2{
    background-image: url("/images/fog2.png");
}

// @media only screen
//   and (min-width: 280px)
//   and (max-width: 767px) {
//     #foglayer_01 .image--1, #foglayer_01 .image--2,
//     #foglayer_02 .image--1, #foglayer_02 .image--2,
//     #foglayer_03 .image--1, #foglayer_03 .image--2 {
//       width: 100%;
//     }
//   }

@-webkit-keyframes foglayer_01_opacity {
  0% { opacity: .1; }
  22% { opacity: .5; }
  40% { opacity: .28; }
  58% { opacity: .4; }
  80% { opacity: .16; }
  100% { opacity: .1; }
}
@-moz-keyframes foglayer_01_opacity {
  0% { opacity: .1; }
  22% { opacity: .5; }
  40% { opacity: .28; }
  58% { opacity: .4; }
  80% { opacity: .16; }
  100% { opacity: .1; }
}
@-o-keyframes foglayer_01_opacity {
  0% { opacity: .1; }
  22% { opacity: .5; }
  40% { opacity: .28; }
  58% { opacity: .4; }
  80% { opacity: .16; }
  100% { opacity: .1; }
}
@keyframes foglayer_01_opacity {
  0% { opacity: .1; }
  22% { opacity: .5; }
  40% { opacity: .28; }
  58% { opacity: .4; }
  80% { opacity: .16; }
  100% { opacity: .1; }
}
/* ---------- Keyframe Layer 2 ---------- */
@-webkit-keyframes foglayer_02_opacity {
  0% { opacity: .5; }
  25% { opacity: .2; }
  50% { opacity: .1; }
  80% { opacity: .3; }
  100% { opacity: .5; }
}
@-moz-keyframes foglayer_02_opacity {
  0% { opacity: .5; }
  25% { opacity: .2; }
  50% { opacity: .1; }
  80% { opacity: .3; }
  100% { opacity: .5; }
}
@-o-keyframes foglayer_02_opacity {
  0% { opacity: .5; }
  25% { opacity: .2; }
  50% { opacity: .1; }
  80% { opacity: .3; }
  100% { opacity: .5; }
}
@keyframes foglayer_02_opacity {
  0% { opacity: .5; }
  25% { opacity: .2; }
  50% { opacity: .1; }
  80% { opacity: .3; }
  100% { opacity: .5; }
}
/* ---------- Keyframe Layer 3 ---------- */
@-webkit-keyframes foglayer_03_opacity {
  0% { opacity: .8 }
  27% { opacity: .2; }
  52% { opacity: .6; }
  68% { opacity: .3; }
  100% { opacity: .8; }
}
@-moz-keyframes foglayer_03_opacity {
  0% { opacity: .8 }
  27% { opacity: .2; }
  52% { opacity: .6; }
  68% { opacity: .3; }
  100% { opacity: .8; }
}
@-o-keyframes foglayer_03_opacity {
  0% { opacity: .8 }
  27% { opacity: .2; }
  52% { opacity: .6; }
  68% { opacity: .3; }
  100% { opacity: .8; }
}
@keyframes foglayer_03_opacity {
  0% { opacity: .8; }
  27% { opacity: .2; }
  52% { opacity: .6; }
  68% { opacity: .3; }
  100% { opacity: .8; }
}
/* ---------- Keyframe moveMe ---------- */
// @-webkit-keyframes foglayer_moveme {
//   0% { left: 0; }
//   100% { left: -100%; }
// }
// @-moz-keyframes foglayer_moveme {
//   0% { left: 0; }
//   100% { left: -100%; }
// }
// @-o-keyframes foglayer_moveme {
//   0% { left: 0; }
//   100% { left: -100%; }
// }
// @keyframes foglayer_moveme {
//   0% { left: 0; }
//   100% { left: -100%; }
// }
</style>