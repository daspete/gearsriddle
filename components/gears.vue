<template>
    <div class="gears font-gears">
        <div class="gear gear--one gear--counterclockwise">
            <div class="gear-inner">
                <div class="bar">
                    <div class="grid w-full grid-cols-2">
                        <div class="bar-text">s</div>
                        <div class="bar-text text-right">6</div>
                    </div>
                </div>
                <div class="bar">
                    <div class="grid w-full grid-cols-2">
                        <div class="bar-text">1</div>
                        <div class="bar-text text-right">e</div>
                    </div>
                </div>
                <div class="bar">
                    <div class="grid w-full grid-cols-2">
                        <div class="bar-text">d</div>
                        <div class="bar-text text-right">3</div>
                    </div>
                </div>
                <div class="bar">
                    <div class="grid w-full grid-cols-2">
                        <div class="bar-text">6</div>
                        <div class="bar-text text-right">s</div>
                    </div>
                </div>
                <div class="bar">
                    <div class="grid w-full grid-cols-2">
                        <div class="bar-text">z</div>
                        <div class="bar-text bar-text--missing text-right">?</div>
                    </div>
                </div>
            </div>
        </div>


        <div class="gear gear--two gear--clockwise">
            <div class="gear-inner">
                <div class="bar">
                    <div class="grid w-full grid-cols-2">
                        <div class="bar-text">a</div>
                        <div class="bar-text bar-text--missing text-right">?</div>
                    </div>
                </div>
                <div class="bar">
                    <div class="grid w-full grid-cols-2">
                        <div class="bar-text">1</div>
                        <div class="bar-text text-right">e</div>
                    </div>
                </div>
                <div class="bar">
                    <div class="grid w-full grid-cols-2">
                        <div class="bar-text">s</div>
                        <div class="bar-text text-right">6</div>
                    </div>
                </div>
                <div class="bar">
                    <div class="grid w-full grid-cols-2">
                        <div class="bar-text">9</div>
                        <div class="bar-text text-right">n</div>
                    </div>
                </div>
                <div class="bar">
                    <div class="grid w-full grid-cols-2">
                        <div class="bar-text">s</div>
                        <div class="bar-text text-right">7</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="gear gear--three gear--counterclockwise">
            <div class="gear-inner">
                <div class="bar">
                    <div class="grid w-full grid-cols-2">
                        <div class="bar-text bar-text--missing">?</div>
                        <div class="bar-text text-right">v</div>
                    </div>
                </div>
                <div class="bar">
                    <div class="grid w-full grid-cols-2">
                        <div class="bar-text">n</div>
                        <div class="bar-text text-right">0</div>
                    </div>
                </div>
                <div class="bar">
                    <div class="grid w-full grid-cols-2">
                        <div class="bar-text">6</div>
                        <div class="bar-text text-right">s</div>
                    </div>
                </div>
                <div class="bar">
                    <div class="grid w-full grid-cols-2">
                        <div class="bar-text">e</div>
                        <div class="bar-text text-right">1</div>
                    </div>
                </div>
                <div class="bar">
                    <div class="grid w-full grid-cols-2">
                        <div class="bar-text">1</div>
                        <div class="bar-text text-right">e</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>


<style lang="scss">
$gearRadiusOuter: 240px;
$gearRadiusInner: 160px;
$gearToothWidth: 320px;
$gearToothHeight: 45px;

$gearColorLight: #af6e38;
$gearColorMedium: #382511;
$gearColorSolid: #5b2e0d;

.gears {
    position: relative;
    margin: 0 auto;
    width: 800px;
    height: 600px;

    &:hover {
        .gear-inner { animation-play-state: paused; }
    }
}

.gear {
    position: absolute;
    height: $gearRadiusOuter;
    width: $gearRadiusOuter;
    box-shadow: 0px -1px 0px 0px $gearColorLight, 0px 1px 0px 0px black;
    border-radius: #{$gearRadiusOuter * 0.5};

    &--one {
        top: 50px;
        left: 50px;
    }

    &--two {
        top: 270px;
        left: 270px;
    }

    &--three {
        top: 50px;
        left: 490px;
    }

    &--counterclockwise {
        .gear-inner, &:after { animation: counter-clockwise 25s infinite linear; }
    }

    &--clockwise {
        .gear-inner, &:after { animation: clockwise 25s infinite linear; }
    }

    

    &:after {
        content: "";
        position: absolute;
        height: $gearRadiusInner;
        width: $gearRadiusInner;
        border-radius: #{$gearRadiusInner * 0.5};
        background: black;
        background-image: url('/images/gear.png');
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        top: 50%;
        left: 50%;
        margin-left: -#{$gearRadiusInner * 0.5};
        margin-top: -#{$gearRadiusInner * 0.5};
        z-index: 3;
        box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1), inset 0px 0px 10px rgba(0, 0, 0, 0.1), inset 0px 2px 0px 0px $gearColorMedium, inset 0px -1px 0px 0px $gearColorLight;
    }
}

.gear-inner {
    position: relative;
    height: 100%;
    width: 100%;
    background: $gearColorSolid;
    animation-iteration-count: infinite;
    border-radius: #{$gearRadiusOuter * 0.5};
    border: 1px solid rgba(255, 255, 255, 0.1);

    .bar {
        background: $gearColorSolid;
        height: $gearToothHeight;
        width: $gearToothWidth;
        position: absolute;
        left: 50%;
        margin-left: -#{$gearToothWidth * 0.5};
        top: 50%;
        margin-top: -#{$gearToothHeight * 0.5};
        border-radius: 2px;
        border-left: 1px solid rgba(255, 255, 255, 0.1);
        border-right: 1px solid rgba(255, 255, 255, 0.1);

        &:nth-child(2) {
            transform: rotate(36deg);
        }
        &:nth-child(3) {
            transform: rotate(72deg);
        }
        &:nth-child(4) {
            transform: rotate(108deg);
        }
        &:nth-child(5) {
            transform: rotate(144deg);
        }

        .bar-text {
            font-size: 1.5rem;
            line-height: 3rem;
            padding: 0 6px;
            text-shadow: 1px 2px 3px rgba(black, 0.4);
            
            @apply text-yellow-500;
            // @apply font-bold;
            @apply uppercase;

            &--missing {
                @apply text-red-600;
            }
        }
    }
}

@keyframes clockwise {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
@keyframes counter-clockwise {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}
</style>