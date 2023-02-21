<template>
    <div class="flex flex-col text-sm mt-4">
            <div class="sm:flex flex-row my-2">
                <div class="basis-28 text-gray-500 sm:text-right pl-2 text-base sm:text-sm">Authors</div>
                <div class=" px-4">{{ scholar.authors }}</div>
            </div>
            <div class="sm:flex flex-row my-2">
                <div class="basis-28 text-gray-500 sm:text-right pl-2 text-base sm:text-sm">Publication Date</div>
                <div class="px-4">{{ scholar.publicationDate }}</div>
            </div>
            <div class="sm:flex flex-row my-2">
                <div class="basis-28 text-gray-500 sm:text-right pl-2 text-base sm:text-sm">Journal</div>
                <div class="px-4">{{ scholar.journal }}</div>
            </div>
            <div class="sm:flex flex-row my-2">
                <div class="basis-28 text-gray-500 sm:text-right pl-2 text-base sm:text-sm">Volume</div>
                <div class="px-4">{{ scholar.volume }}</div>
            </div>
            <div class="sm:flex flex-row my-2">
                <div class="basis-28 text-gray-500 sm:text-right pl-2 text-base sm:text-sm">Issue</div>
                <div class="px-4">{{ scholar.issue }}</div>
            </div>
            <div class="sm:flex flex-row my-2">
                <div class="basis-28 text-gray-500 sm:text-right pl-2 text-base sm:text-sm">Pages</div>
                <div class="px-4">{{ scholar.pages }}</div>
            </div>
            <div class="sm:flex flex-row my-2">
                <div class="basis-28 text-gray-500 sm:text-right pl-2 text-base sm:text-sm">Publisher</div>
                <div class=" px-4">{{ scholar.publisher }}</div>
            </div>
            <div class="sm:flex sm:flex-row my-2">
                <div class="basis-28 text-gray-500 sm:text-right pl-2 text-base sm:text-sm shrink-0">Description</div>
                <div class=" px-4 break-normal">{{ scholar.description }}</div>
            </div>
            <div class="sm:flex flex-row my-2">
                <div class="basis-28 text-gray-500 sm:text-right pl-2 text-base sm:text-sm shrink-0">Total Citations</div>
                <div class="basis-full px-4">
                    <div>
                        Cited By {{ scholar.totalCitations }}
                        <cititation-bar :value="citations"></cititation-bar>
                    </div>

                </div>

            </div>
    </div>
</template>
<script>
export default{
    name:"ScholarForm",
    props:{
        scholar:{
        type:Object,
        default:()=>{
        },
        },
        citations:{
            type:Array},
    }
}
</script>