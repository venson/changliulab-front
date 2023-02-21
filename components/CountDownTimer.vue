<template>
    <div>
    <button type="button" @click="startTimer" class=" rounded px-2 relative h-8 flex items-center "
    :class="clickAble? 'bg-green-400':'bg-gray-200'">
        <div v-if="timerOn" class="h-8 flex items-center justify-center ">{{ formattedTimeLeft }}</div>
        <div v-else>Code</div>

    </button>

    </div>

</template>
<script>
export default {
    name: 'CountDownTimer',
    props: {
        time: {
            type: Number,
            default: 300
        },
        clickAble:{
            type:Boolean,
            default:false
        }
    },
    data() {
        return {
            timePassed: 0,
            timerOn: false,
            timerInterval: null
        }

    },
    computed: {
        formattedTimeLeft() {
            const timeLeft = this.timeLeft
            // The largest round integer less than or equal to the result of time divided being by 60.
            const minutes = Math.floor(timeLeft / 60)
            // Seconds are the remainder of the time divided by 60 (modulus operator)
            let seconds = timeLeft % 60
            // If the value of seconds is less than 10, then display seconds with a leading zero
            if (seconds < 10) {
                seconds = `0${seconds}`
            }
            if (timeLeft === 0) {
                clearInterval(this.timerInterval)
                this.timePassed = 0
                this.timerOn = false
                this.$emit('timePassed',true)
            }
            // The output in MM:SS format
            return `${minutes}:${seconds}`
        },
        timeLeft() {
            return this.time - this.timePassed
        },
        circleDasharray() {
            return `${(this.timeFraction * 283).toFixed(0)} 283`;
        },
        timeFraction() {
            // Divides time left by the defined time limit.      
            return this.timeLeft / this.time;
        }
    },
    methods: {
        startTimer() {
            if (!this.timerOn && this.clickAble) {
                this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
                this.timerOn = true
            }
        },
    }
}
</script>