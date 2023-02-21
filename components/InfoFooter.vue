<template>
    <footer class="text-center bg-teal-500 mt-6 bottom-0 mx-auto w-full" >
        <div class="whitespace-pre-line sm:whitespace-normal">Copyright© Chang Liu Lab 2022-2042,
             All Rights Reserved Ver.1.0.0.0 Design:Venson</div>
        <div class=""><Location24Regular class="inline-block" />: 中国 黑龙江哈尔滨市香坊区和兴路26号 CHINA &nbsp;&nbsp;</div>
        <div>
          <Call24Regular class="inline-block" />: 86-21-54924161 &nbsp;&nbsp;
          <Mail24Regular class="inline-block" />: <a href="mailto:junhuishen@cemps.ac.cn">junhuishen@cemps.ac.cn</a>
        </div>
    </footer>
</template>

<script>
import Location24Regular from '@/components/svg/Location24Regular'
import Call24Regular from '@/components/svg/Call24Regular'
import Mail24Regular from '@/components/svg/Mail24Regular'
export default{
    components:{Location24Regular, Call24Regular, Mail24Regular},
    name: "InfoFooter",
}
</script>