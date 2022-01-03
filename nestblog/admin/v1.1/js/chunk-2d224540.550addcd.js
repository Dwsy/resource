(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d224540"],{e054:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{margin:"20px"}},[a("v-toolbar",{attrs:{color:"#2e62cd",dark:""}},[a("v-toolbar-title",[t._v("草稿列表")]),a("v-divider",{staticClass:"mx-4",attrs:{vertical:""}}),a("span",{staticClass:"subheading"},[t._v("共"+t._s(t.tags.length)+"篇。")]),a("v-spacer"),a("v-btn",{staticClass:"mb-2",attrs:{dark:"",color:"primary",to:"/write/article"}},[t._v("撰写文章")])],1),a("v-card",{staticClass:"employee-list mb-1"},[a("v-card-title",{staticClass:"pa-6 pb-3"},[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"搜索",clearable:"","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.tags,search:t.search,"item-key":"name","show-select":""},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1)]},proxy:!0},{key:"item.cover",fn:function(t){var e=t.item;return[a("a",{attrs:{href:e.cover,target:"_blank"}},[a("v-img",{attrs:{src:e.cover,width:"200px","aspect-ratio":16/9}})],1)]}},{key:"item.coverSmall",fn:function(t){var e=t.item;return[a("a",{attrs:{href:e.coverSmall,target:"_blank"}},[a("v-img",{attrs:{src:e.coverSmall,"max-height":"100","max-width":"100"}})],1)]}},{key:"item.tag",fn:function(e){var i=e.item;return t._l(i.tag,(function(e){return a("v-chip",{key:e.name,staticClass:"ma-1",attrs:{color:e.colours,small:"",outlined:""}},[t._v(" "+t._s(e.name)+" "),a("v-avatar",{directives:[{name:"show",rawName:"v-show",value:e.icon,expression:"i.icon"}]},[a("v-icon",[t._v(t._s(e.icon))])],1)],1)}))}},{key:"item.createdAt",fn:function(e){var a=e.item;return[t._v(" "+t._s(t._f("formatDate")(a.createdAt,"yyyy年MM月dd日hh:mm"))+" ")]}},{key:"item.updatedAt",fn:function(e){var a=e.item;return[t._v(" "+t._s(t._f("formatDate")(a.updatedAt,"yyyy年MM月dd日hh:mm"))+" ")]}},{key:"item.actions",fn:function(e){var i=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(i)}}},[t._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(i)}}},[t._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("Reset")])]},proxy:!0}],null,!0),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)},s=[],n={props:{selected:[],search:""},data:()=>({tags:[],dialog:!1,headers:[{text:"标题",align:"start",sortable:!1,value:"title"},{text:"分类",value:"classification.name"},{text:"标签",value:"tag"},{text:"大图",value:"cover"},{text:"小图",value:"coverSmall"},{text:"创建时间",value:"createdAt"},{text:"更新时间",value:"updatedAt"},{text:"Actions",value:"actions",sortable:!1}],editedIndex:-1,editedItem:{name:"",calories:0,fat:0,carbs:0,protein:0},defaultItem:{name:"",calories:0,fat:0,carbs:0,protein:0}}),computed:{formTitle(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog(t){t||this.close()}},created(){this.get()},methods:{async get(){const t=await this.$http.getDraft();return this.tags=t[0].data},dialogControl(){this.dialog=!this.dialog},editItem(t){let e=t._id;t.contentsId;this.$router.push("/edit/"+e)},async deleteItem(t){const e=this.tags.indexOf(t);confirm("你确定要删除这篇文章吗？")&&(await this.$http.delContent(t.contentsId),await this.$http.delField(t._id),await this.$http.ClassificationContentsNum(t.classification._id,-1),await this.$http.TagContentsNum(t.tag.map(t=>t._id),-1),console.log("删除成功"),this.tags.splice(e,1))},close(){this.dialog=!1,this.$nextTick(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1})},save(){this.editedIndex>-1?Object.assign(this.tags[this.editedIndex],this.editedItem):this.tags.push(this.editedItem),this.close()}}},r=n,l=a("2877"),c=a("6544"),o=a.n(c),d=a("8212"),m=a("8336"),v=a("b0afa"),h=a("99d9"),u=a("cc20"),f=a("8fea"),p=a("169a"),g=a("ce7e"),b=a("132d"),x=a("adda"),_=a("2fa4"),k=a("8654"),y=a("71d9"),w=a("2a7f"),I=Object(l["a"])(r,i,s,!1,null,null,null);e["default"]=I.exports;o()(I,{VAvatar:d["a"],VBtn:m["a"],VCard:v["a"],VCardActions:h["a"],VCardTitle:h["c"],VChip:u["a"],VDataTable:f["a"],VDialog:p["a"],VDivider:g["a"],VIcon:b["a"],VImg:x["a"],VSpacer:_["a"],VTextField:k["a"],VToolbar:y["a"],VToolbarTitle:w["a"]})}}]);
//# sourceMappingURL=chunk-2d224540.550addcd.js.map