<template>
    <div id="gs_bdy">
        <div id="gs_bdy_ccl" role="main">
            <div id="gsc_vcpb">
                <div id="gsc_oci_title_wrapper">
                    <div id="gsc_oci_title_gg">
                        <div class="gsc_oci_title_ggi">
                            <a :href="scholar.linkUrl">
                                <span class='gsc_vcd_title_ggt'>{{ scholar.linkText }}</span></a>
                        </div>
                    </div>
                    <div id="gsc_oci_title">
                        <a class="gsc_oci_title_link" :href="scholar.linkUrl">{{ scholar.title }}
                        </a>
                    </div>
                </div>
                <div>
                    <div id="gsc_oci_table">
                        <div class="gs_scl">
                            <div class="gsc_oci_field">Authors</div>
                            <div class="gsc_oci_value">{{ scholar.authors }}</div>
                        </div>
                        <div class="gs_scl">
                            <div class="gsc_oci_field">Publication date</div>
                            <div class="gsc_oci_value">{{ scholar.publicationDate }}</div>
                        </div>
                        <div class="gs_scl">
                            <div class="gsc_oci_field">Journal</div>
                            <div class="gsc_oci_value">{{ scholar.journal }}</div>
                        </div>
                        <div class="gs_scl">
                            <div class="gsc_oci_field">Volume</div>
                            <div class="gsc_oci_value">{{ scholar.volume }}</div>
                        </div>
                        <div class="gs_scl">
                            <div class="gsc_oci_field">Issue</div>
                            <div class="gsc_oci_value">{{ scholar.issue }}</div>
                        </div>
                        <div class="gs_scl">
                            <div class="gsc_oci_field">Pages</div>
                            <div class="gsc_oci_value">{{ scholar.pages }}</div>
                        </div>
                        <div class="gs_scl">
                            <div class="gsc_oci_field">Publisher</div>
                            <div class="gsc_oci_value">{{ scholar.publisher }}</div>
                        </div>
                        <div class="gs_scl">
                            <div class="gsc_oci_field">Description</div>
                            <div class="gsc_oci_value" id="gsc_oci_descr">
                                <div class="gsh_small">{{ scholar.description }}
                                </div>
                            </div>
                        </div>
                        <div class="gs_scl">
                            <div class="gsc_oci_field">Total citations</div>
                            <div class="gsc_oci_value">
                                <div style="margin-bottom:1em">
                                    Cited by {{ scholar.totalCitations }}
                                </div>
                                <div ref="chart" style="width:400px;height:200px"></div>

                                <!-- <div id="gsc_oci_graph_wrapper">
                                <div id="gsc_oci_graph" style="width:30px;">
                                    <div id="gsc_oci_graph_x"></div>
                                    <div id="gsc_oci_graph_bars"><span class="gsc_oci_g_t"
                                            style="left:0px">2022</span>
                                            <a href="https://scholar.google.com/scholar?oi=bibs&amp;hl=en&amp;cites=13722492436141811516&amp;as_sdt=5&amp;as_ylo=2022&amp;as_yhi=2022"
                                            class="gsc_oci_g_a" style="left:5px;height:57px;top:0px;z-index:1">
                                            <span
                                                class="gsc_oci_g_al">2</span>
                                                </a>
                                                </div>
                                </div>
                            </div> -->
                            </div>
                        </div>
                    </div>
                    <div id="gsc_oci_title_gg">
                        Group Member
                    </div>

                </div>
            </div>
        </div>
    </div>
    <!-- <div>

        <div id="gs_bdy_ccl"></div>
        <div id="gsc_oci_title_wrapper">
            <div id="gsc_oci_title_gg">
                <div class="gsc_oci_title_ggi">
                    <a :href="scholar.linkUrl"><span class="gsc_vcd_title_ggt"></span> {{ scholar.linkText }} </a>
                </div>
            </div>
        </div>
        <div id="gsc_oci_title">
            <a class="gsc_oci_title_link" :href="scholar.linkUrl">
                {{ scholar.title }}
            </a>
        </div>
    </div> -->
    <!-- <div >
            <a :href="scholar.linkUrl">{{ scholar.title }}</a>
        </div>
        <el-descriptions :column="1" :contentStyle="CS" :labelStyle="LS">

            <el-descriptions-item label="Authors" >
                {{ scholar.authors }}
            </el-descriptions-item>
            <el-descriptions-item label="Publication Date">
                {{ scholar.publicationDate }}
            </el-descriptions-item>
        </el-descriptions> -->


</template>

<script>
import scholarApi from '@/api/scholar'

import '~/assets/css/scholar.css'
export default {
    created() {
        // console.log(this.$route)
        this.scholar.id = this.$route.params.id
        this.getScholarTotalInfo(this.scholar.id)
        console.log(this.scholar)
        console.log(this.citationList)
    },
    mounted() {
        this.echartsInit()
    },
    data() {
        return {
            mychart: null,
            option: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ["2001", "2002"],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        minInterval: 2
                    }
                ],
                series: [
                    {
                        name: 'Citation',
                        type: 'bar',
                        barWidth: '60%',
                        data: [1, 2, 3]
                    }
                ]
            },
            CS: {
                'text-align': 'center',  //文本居中
                'min-width': '250px',   //最小宽度
                'word-break': 'break-all'  //过长时自动换行
            },
            LS: {
                'text-align': 'right',
                'display': 'flex',
                'align-item': 'right',
                'color': '#777',
                'min-width': '120px',
                // 'word-break': 'keep-all'
            },
            scholar: {
                id: '',
            }
        }

    },
    methods: {
        echartsInit() {
            this.myChart = this.$echarts.init(this.$refs.chart)
            this.myChart.setOption(this.option)
        },
        getScholarTotalInfo(id) {

            scholarApi.getAllByScholarId(id)
                .then(response => {
                    // console.log(response)
                    this.scholar = response.data.data.scholar
                    this.citationList = response.data.data.citation
                    this.option.xAxis[0].data = this.citationList.map(o => o.year)
                    this.option.series[0].data = this.citationList.map(o => Number(o.citations))
                    this.memberList = response.data.data.member
                    console.log(this.option)
                    this.myChart.setOption(this.option)
                })
        }
    }


}
</script>