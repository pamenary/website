(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{570:function(t,e,r){},571:function(t,e,r){},572:function(t,e,r){},573:function(t,e,r){},577:function(t,e,r){},578:function(t,e,r){},579:function(t,e,r){},607:function(t,e,r){"use strict";r(570)},608:function(t,e,r){"use strict";r(571)},609:function(t,e,r){"use strict";r(572)},610:function(t,e,r){"use strict";r(573)},614:function(t,e,r){"use strict";r(577)},615:function(t,e,r){"use strict";r(578)},616:function(t,e,r){"use strict";r(579)},617:function(t,e,r){"use strict";r(13);var n={props:{review:{type:Object,required:!0},single:{type:Boolean,default:!1}},computed:{title:function(){var t=this.review,e=t.company,title=t.title;return"".concat("تجربه کاری در شرکت"," ").concat(e.name,": ").concat(title)},linkWidthSlug:function(){return"/review/".concat(this.review.id,"/").concat(this.titleToSlug(this.review.title))}}},o=(r(607),r(6)),l=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("div",{staticClass:"layout-h layout-justified layout-center"},[!1===t.single?r("h3",{staticClass:"title"},[r("nuxt-link",{attrs:{to:t.linkWidthSlug}},[t._v("\n        "+t._s(t.title)+"\n      ")])],1):r("h1",{staticClass:"title"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),r("div",{staticClass:"date layout-h layout-center"},[r("i",{staticClass:"fa fa-calendar ml-5"}),t._v(" "),r("span",{staticClass:"text"},[t._v("\n        "+t._s(t._f("timeAgo")(t.review.created))+"\n      ")])])])])}),[],!1,null,"1ed3f4eb",null).exports,c={components:{UserRating:r(591).a},props:{review:{type:Object,required:!0},details:{type:Boolean,default:!1}},computed:{rateAvg:function(){return this.review?this.review.rate_avg.toFixed(2):0}}},v=(r(608),{components:{ReviewMeta:Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"meta layout-v"},[r("div",{staticClass:"top layout-h layout-justified"},[r("div",{staticClass:"skill layout-h layout-center"},[r("i",{staticClass:"fa fa-briefcase ml-5"}),t._v(" "),r("span",{staticClass:"text"},[t._v("\n        "+t._s(t.review.job.name)+"\n      ")])]),t._v(" "),r("div",{staticClass:"state"},[r("span",{staticClass:"text"},[t._v("\n        "+t._s(t.contractTypeString(t.review.state))+"\n      ")])])]),t._v(" "),t.details?r("UserRating",{staticClass:"mt-10",attrs:{data:t.review}}):t._e()],1)}),[],!1,null,"7641c560",null).exports},filters:{yesOrNo:function(t){return t?"بله":"خیر"}},props:{review:{type:Object,required:!0},details:{type:Boolean,default:!1}},data:function(){return{rates:{over_all_rate:0,work_life_balance:0,salary_benefit:0,security:0,management:0,culture:0}}},mounted:function(){this.rates.over_all_rate=this.review.over_all_rate,this.rates.work_life_balance=this.review.work_life_balance,this.rates.salary_benefit=this.review.salary_benefit,this.rates.security=this.review.security,this.rates.management=this.review.management,this.rates.culture=this.review.culture}}),d=(r(609),Object(o.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrap-content"},[r("ReviewMeta",{attrs:{review:t.review,details:t.details}}),t._v(" "),r("div",{staticClass:"desc mt-40"},[t.details?r("div",{staticClass:"description-te",domProps:{innerHTML:t._s(t.review.description)}}):r("div",{staticClass:"description-te"},[t._v("\n      "+t._s(t.review.description)+"\n    ")])]),t._v(" "),!1===t.details?r("div",{staticClass:"extra-info mt-20"},[r("div",{staticClass:"item rtl mt-20"},[r("div",{staticClass:"rates-wrap"},[r("div",{staticClass:"layout-h layout-center layout-justified rtl mt-20"},[r("span",{staticClass:"text"},[t._v(" میانگین کل امتیازات: ")]),t._v(" "),r("div",{staticClass:"ltr rate"},[r("el-rate",{attrs:{colors:["#F71735","#F7BA2A","#20BF55"],"allow-half":"",disabled:"","aria-label":"امتیاز میانگین کل امتیازات"},model:{value:t.rates.over_all_rate,callback:function(e){t.$set(t.rates,"over_all_rate",e)},expression:"rates.over_all_rate"}})],1)])])])]):t._e(),t._v(" "),t.details?r("div",{staticClass:"extra-info mt-20"},[r("div",{staticClass:"pros-cons full-width layout-h layout-justified mt-30"},[t.review.pros.length>0?r("div",{staticClass:"pros"},[r("strong",{staticClass:"title"},[t._v(" نکات مثبت ")]),t._v(" "),r("div",{staticClass:"items"},t._l(t.review.pros,(function(e,n){return r("el-tag",{key:n,attrs:{size:"medium"}},[t._v("\n            "+t._s(e.name)+"\n          ")])})),1)]):t._e(),t._v(" "),t.review.cons.length>0?r("div",{staticClass:"cons"},[r("strong",{staticClass:"title"},[t._v(" نکات منفی ")]),t._v(" "),r("div",{staticClass:"items"},t._l(t.review.cons,(function(e,n){return r("el-tag",{key:n,attrs:{type:"danger",size:"medium"}},[t._v("\n            "+t._s(e.name)+"\n          ")])})),1)]):t._e()]),t._v(" "),r("div",{staticClass:"item rtl mt-30"},[r("div",{staticClass:"layout-h layout-center layout-justified rtl"},[r("div",{staticClass:"title"},[t._v("پیشنهاد به دوست:")]),t._v(" "),t.review.recommend_to_friend?r("el-tag",{attrs:{type:"success"}},[t._v("\n          "+t._s(t._f("yesOrNo")(t.review.recommend_to_friend))+"\n        ")]):r("el-tag",{attrs:{type:"danger"}},[t._v("\n          "+t._s(t._f("yesOrNo")(t.review.recommend_to_friend))+"\n        ")])],1)]),t._v(" "),t.rates.over_all_rate>0?r("div",{staticClass:"item rtl mt-20"},[r("div",{staticClass:"title"},[t._v("جزئیات امتیاز ها:")]),t._v(" "),r("div",{staticClass:"rates-wrap"},[r("div",{staticClass:"layout-h layout-center layout-justified rtl mt-20"},[r("span",{staticClass:"text"},[t._v(" میانگین کل امتیازات: ")]),t._v(" "),r("div",{staticClass:"ltr rate"},[r("el-rate",{attrs:{colors:["#F71735","#F7BA2A","#20BF55"],"allow-half":"",disabled:"","aria-label":"امتیاز میانگین کل امتیازات"},model:{value:t.rates.over_all_rate,callback:function(e){t.$set(t.rates,"over_all_rate",e)},expression:"rates.over_all_rate"}})],1)]),t._v(" "),r("div",{staticClass:"layout-h layout-center layout-justified rtl mt-20"},[r("span",{staticClass:"text"},[t._v(" تعادل کار/زندگی ")]),t._v(" "),r("div",{staticClass:"ltr rate"},[r("el-rate",{attrs:{colors:["#F71735","#F7BA2A","#20BF55"],disabled:"","aria-label":"امتیاز تعادل کار/زندگی"},model:{value:t.rates.work_life_balance,callback:function(e){t.$set(t.rates,"work_life_balance",e)},expression:"rates.work_life_balance"}})],1)]),t._v(" "),r("div",{staticClass:"layout-h layout-center layout-justified rtl mt-20"},[r("span",{staticClass:"text"},[t._v(" حقوق و مزایا ")]),t._v(" "),r("div",{staticClass:"ltr rate"},[r("el-rate",{attrs:{colors:["#F71735","#F7BA2A","#20BF55"],disabled:"","aria-label":"امتیاز حقوق و مزایا"},model:{value:t.rates.salary_benefit,callback:function(e){t.$set(t.rates,"salary_benefit",e)},expression:"rates.salary_benefit"}})],1)]),t._v(" "),r("div",{staticClass:"layout-h layout-center layout-justified rtl mt-20"},[r("span",{staticClass:"text"},[t._v(" امنیت شغلی/پیشرفت ")]),t._v(" "),r("div",{staticClass:"ltr rate"},[r("el-rate",{attrs:{colors:["#F71735","#F7BA2A","#20BF55"],disabled:"","aria-label":"امتیاز امنیت شغلی/پیشرفت"},model:{value:t.rates.security,callback:function(e){t.$set(t.rates,"security",e)},expression:"rates.security"}})],1)]),t._v(" "),r("div",{staticClass:"layout-h layout-center layout-justified rtl mt-20"},[r("span",{staticClass:"text"},[t._v(" مدیریت ")]),t._v(" "),r("div",{staticClass:"ltr rate"},[r("el-rate",{attrs:{colors:["#F71735","#F7BA2A","#20BF55"],disabled:"","aria-label":"امتیاز مدیریت"},model:{value:t.rates.management,callback:function(e){t.$set(t.rates,"management",e)},expression:"rates.management"}})],1)]),t._v(" "),r("div",{staticClass:"layout-h layout-center layout-justified rtl mt-20"},[r("span",{staticClass:"text"},[t._v(" فرهنگ کار ")]),t._v(" "),r("div",{staticClass:"ltr rate"},[r("el-rate",{attrs:{colors:["#F71735","#F7BA2A","#20BF55"],disabled:"","aria-label":"امتیاز فرهنگ کار"},model:{value:t.rates.culture,callback:function(e){t.$set(t.rates,"culture",e)},expression:"rates.culture"}})],1)])])]):t._e(),t._v(" "),"نامشخص"!==t.review.start_date?r("div",{staticClass:"item rtl date mt-20"},[r("div",{staticClass:"layout-h layout-justified cols"},[r("div",{staticClass:"col layout-h layout-justified"},[r("strong",[t._v("تاریخ شروع به فعالیت")]),t._v(" "),r("span",[t._v("\n            "+t._s(t.gregorianToJalali(t.review.start_date,"YYYY-MM","jMMMM jYYYY"))+"\n          ")])]),t._v(" "),"نامشخص"!==t.review.end_date?r("div",{staticClass:"col layout-h layout-justified"},[r("strong",[t._v("تاریخ پایان فعالیت")]),t._v(" "),!1===t.review.current_work?r("span",[t._v("\n            "+t._s(t.gregorianToJalali(t.review.end_date,"YYYY-MM","jMMMM jYYYY"))+"\n          ")]):r("span",[t._v(" در حال همکاری ")])]):t._e()])]):t._e()]):t._e()],1)}),[],!1,null,"136c6530",null).exports),m=r(4),_=(r(9),r(589)),f=r(590),y=r(563),w=r(565),h=r(17),C={components:{Vote:w.a,Views:_.a,Share:f.a,Edit:y.a},props:{review:{type:Object,required:!0},details:{type:Boolean,default:!1}},data:function(){return{vote:{vote_count:this.review.vote_count,down_vote_count:this.review.down_vote_count,vote_state:this.review.vote_state}}},computed:{shareLink:function(){return"".concat(h.a,"/review/").concat(this.review.id)},linkWidthSlug:function(){return"/review/".concat(this.review.id,"/").concat(this.titleToSlug(this.review.title))}},methods:{onLike:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("NONE"!==t.vote.vote_state&&"DOWN"!==t.vote.vote_state){e.next=14;break}return e.prev=1,e.next=4,t.$axios.get("/company_review/".concat(t.review.id,"/add_vote/"));case 4:r=e.sent,t.vote.vote_count=r.data.data.vote_count,t.vote.vote_state=r.data.data.vote_state,t.vote.down_vote_count=r.data.data.down_vote_count,e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:e.next=25;break;case 14:return e.prev=14,e.next=17,t.$axios.get("/company_review/".concat(t.review.id,"/remove_vote/"));case 17:n=e.sent,t.vote.vote_count=n.data.data.vote_count,t.vote.vote_state=n.data.data.vote_state,t.vote.down_vote_count=n.data.data.down_vote_count,e.next=25;break;case 23:e.prev=23,e.t1=e.catch(14);case 25:case"end":return e.stop()}}),e,null,[[1,10],[14,23]])})))()},onDislike:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("NONE"!==t.vote.vote_state&&"UP"!==t.vote.vote_state){e.next=14;break}return e.prev=1,e.next=4,t.$axios.get("/company_review/".concat(t.review.id,"/add_down_vote/"));case 4:r=e.sent,t.vote.vote_count=r.data.data.vote_count,t.vote.vote_state=r.data.data.vote_state,t.vote.down_vote_count=r.data.data.down_vote_count,e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:e.next=25;break;case 14:return e.prev=14,e.next=17,t.$axios.get("/company_review/".concat(t.review.id,"/remove_down_vote/"));case 17:n=e.sent,t.vote.vote_count=n.data.data.vote_count,t.vote.vote_state=n.data.data.vote_state,t.vote.down_vote_count=n.data.data.down_vote_count,e.next=25;break;case 23:e.prev=23,e.t1=e.catch(14);case 25:case"end":return e.stop()}}),e,null,[[1,10],[14,23]])})))()}}},x=(r(610),{components:{ReviewHeader:l,ReviewContent:d,ReviewFooter:Object(o.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer layout-h layout-justified layout-center"},[r("div",{staticClass:"right-side layout-h"},[r("div",{staticClass:"views-count"},[r("Views",{attrs:{views:t.review.view_count}})],1),t._v(" "),r("div",{staticClass:"wrap-like mr-15"},[r("client-only",[r("Vote",{attrs:{vote:t.vote,"handle-like":t.onLike,"handle-dislike":t.onDislike}})],1)],1),t._v(" "),r("div",{staticClass:"share mr-20"},[r("Share",{attrs:{link:t.shareLink}})],1),t._v(" "),t.review.my_review?r("div",{staticClass:"edit mr-20"},[r("Edit",{attrs:{id:t.review.id}})],1):t._e()]),t._v(" "),t.details?t._e():r("div",{staticClass:"left-side"},[r("nuxt-link",{staticClass:"el-button el-button--default el-button--mini",attrs:{to:t.linkWidthSlug}},[t._v("\n      جزئیات\n    ")])],1)])}),[],!1,null,"10228578",null).exports},props:{review:{type:Object,default:null,required:!0},details:{type:Boolean,default:!1},single:{type:Boolean,default:!1}}}),j=Object(o.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",{staticClass:"rtl mt-30",attrs:{"body-style":{padding:"0"}}},[r("div",{staticClass:"layout-v review-item-details"},[r("ReviewHeader",{attrs:{review:t.review,single:t.single}}),t._v(" "),r("ReviewContent",{attrs:{details:t.details,review:t.review}}),t._v(" "),r("ReviewFooter",{attrs:{review:t.review,details:t.details}})],1)])}),[],!1,null,"b8e614dc",null);e.a=j.exports},619:function(t,e,r){"use strict";var n={props:{loading:{type:Boolean,required:!0}},data:function(){return{form:{},rules:{body:[{required:!0,message:"متن نظر اجباری است.",trigger:"blur"},{min:3,max:500,message:"متن نظر حداقل 3 الی 500 کاراکتر می باشد.",trigger:"blur"}]}}},methods:{handleSubmit:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.$emit("add-comment",t.form),t.form.body=null)}))},handleLogin:function(){this.$store.commit("theme/TOGGLE_DIALOG")}}},o=(r(614),r(6)),l=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"form-comment"},[t.$isLogin?r("ElForm",{ref:"form",staticClass:"p-20",attrs:{model:t.form,rules:t.rules}},[r("ElFormItem",{attrs:{prop:"body"}},[r("ElInput",{staticClass:"comment",attrs:{rows:4,type:"textarea",placeholder:"دیدگاه شما...",maxlength:"500","show-word-limit":""},model:{value:t.form.body,callback:function(e){t.$set(t.form,"body",e)},expression:"form.body"}})],1),t._v(" "),r("div",{staticClass:"submit"},[r("ElButton",{attrs:{size:"small",type:"success"},on:{click:t.handleSubmit}},[t._v("\n        ارسال\n      ")])],1)],1):r("div",{staticClass:"login-text text-center layout-v layout-center-center"},[r("p",[t._v("لطفا برای ارسال دیدگاه وارد سایت شوید.")]),t._v(" "),r("ElButton",{staticClass:"mt-10",attrs:{size:"mini",type:"success"},on:{click:t.handleLogin}},[t._v("\n      ورود به سایت\n    ")])],1)],1)}),[],!1,null,"9eecf05c",null).exports,c={props:{comment:{type:Object,required:!0}}},v=(r(615),{components:{CommentItem:Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"comment layout-v p-12"},[r("div",{staticClass:"body"},[t._v("\n    "+t._s(t.comment.body)+"\n    "),r("div",{staticClass:"date"},[t._v("\n      "+t._s(t._f("timeAgo")(t.comment.created))+"\n    ")])])])}),[],!1,null,"c4dfdc48",null).exports},props:{comments:{type:Array,required:!0}}}),d={components:{CommentForm:l,CommentList:Object(o.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"comments layout-v"},t._l(t.comments,(function(t){return r("CommentItem",{key:t.id,attrs:{comment:t}})})),1)}),[],!1,null,"40bea8a2",null).exports},props:{comments:{type:Array,required:!0},loading:{type:Boolean,required:!0}},methods:{handleAddComment:function(form){this.$emit("add-comment",form)}}},m=Object(o.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ElCard",{staticClass:"rtl full-width",attrs:{"body-style":{padding:"0"}}},[r("CommentForm",{attrs:{loading:t.loading},on:{"add-comment":t.handleAddComment}}),t._v(" "),r("CommentList",{staticClass:"mt-30",attrs:{comments:t.comments}})],1)}),[],!1,null,"c8ebacfc",null);e.a=m.exports},623:function(t,e,r){"use strict";r(13);var n={components:{Empty:r(581).a},props:{data:{type:Object,required:!0},typeReply:{type:String,required:!0}},computed:{title:function(){return"پاسخ رسمی ".concat(this.data.company.name)},logo:function(){return this.mediaUrl(this.data.company.logo)}}},o=(r(616),r(6)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ElCard",{staticClass:"reply rtl",attrs:{"body-style":{padding:"10px"}}},[r("div",{staticClass:"title layout-h layout-center",attrs:{slot:"header"},slot:"header"},[r("div",{staticClass:"logo"},[r("el-image",{attrs:{src:t.logo,width:"50",height:"50"}})],1),t._v(" "),r("span",{staticClass:"mr-10"},[t._v(t._s(t.title))])]),t._v(" "),t.data.reply?r("div",{staticClass:"content",domProps:{innerHTML:t._s(t.data.reply)}}):r("Empty",[r("nuxt-link",{attrs:{to:"/contact"}},[t._v("\n      به منظور پاسخ گویی و برای دریافت پنل با ما از طریق ایمیل تماس بگیرید.\n    ")])],1)],1)}),[],!1,null,"5ba1583c",null);e.a=component.exports},873:function(t,e,r){"use strict";r.r(e);r(28),r(18),r(27),r(42),r(43);var n=r(5),o=r(4),l=(r(13),r(9),r(67)),c=r(617),v=r(622),d=r(619),m=r(623);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={components:{Review:c.a,Cover:v.a,Comments:d.a,Reply:m.a},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,c,v,d,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.$axios,n=t.params,o=t.store,l=t.redirect,!n.review){e.next=15;break}return c=n.review,e.next=5,o.dispatch("company/review/getReview",n.review);case 5:return v=o.state.company.review.review.company.company_slug,e.next=8,o.dispatch("company/company/getCompany",v);case 8:return e.next=10,r.get("/public/company_review/".concat(c,"/comment_list/"),{params:{size:30}});case 10:return d=e.sent,data=d.data,e.abrupt("return",{reviewId:n.review,comments:data.data||[]});case 15:l("/404");case 16:case"end":return e.stop()}}),e)})))()},data:function(){return{loading:!1}},head:function(){return f(f({},this.$seo({title:"تجربه کاری در شرکت ".concat(this.company.name,": ").concat(this.review.title),description:this.cutString(this.review.description,180)})),{},{bodyAttrs:{class:"page-review-details company-".concat(this.company.company_slug)}})},computed:f(f({},Object(l.b)("company/review",["review"])),Object(l.b)("company/company",["company"])),methods:{handleAddComment:function(form){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,r=t.$route.params.review,e.next=5,t.$axios.post("/review_comment/create/",f(f({},form),{},{review:{id:r}}));case 5:n=e.sent,data=n.data,t.comments.unshift(data.data),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:return e.prev=12,t.loading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,10,12,15]])})))()}}},w=r(6),component=Object(w.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.company?r("div",{staticClass:"wrap"},[r("Cover",{attrs:{company:t.company}}),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"breadcrumb mt-30"},[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-left"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v(" خانه ")]),t._v(" "),r("el-breadcrumb-item",{attrs:{to:{path:"/companies"}}},[t._v("\n          شرکت ها\n        ")]),t._v(" "),r("el-breadcrumb-item",{attrs:{to:"/company/"+t.company.company_slug}},[t._v("\n          "+t._s(t.company.name)+"\n        ")]),t._v(" "),r("el-breadcrumb-item",[t._v("\n          "+t._s(t.review.title)+"\n        ")])],1)],1),t._v(" "),r("ElRow",{attrs:{type:"flex",justify:"center",align:"middle"}},[r("ElCol",{attrs:{span:24}},[r("Review",{attrs:{review:t.review,details:"",single:""}})],1)],1),t._v(" "),r("ElRow",{staticClass:"mt-20 mb-30",attrs:{type:"flex",justify:"center",align:"middle"}},[r("ElCol",{attrs:{span:24}},[r("Reply",{attrs:{data:t.review,"type-reply":"review"}})],1)],1),t._v(" "),r("ElRow",{staticClass:"mt-20 mb-30",attrs:{type:"flex",justify:"center",align:"middle"}},[r("ElCol",{attrs:{span:24}},[r("Comments",{attrs:{comments:t.comments,loading:t.loading},on:{"add-comment":t.handleAddComment}})],1)],1)],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);