(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[8],{127:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}));var r={TITLE:"NANDKUMAR GANGAI",LOGIN_BTN_TEXT:"Login"},n={LEARN_MORE_BTN_TEXT:"Learn more..."}},138:function(e,t,a){"use strict";var r=a(35),n=a(912),i=a(913),o=a(915),l=a(917),s=a(918),c=a(916),d=a(163),u=a.n(d),h=a(127),m=a(3),b=Object(n.a)((function(e){return{root:{flexGrow:1,width:"100%",position:"fixed",top:0,left:0,zIndex:999},menuButton:{marginRight:e.spacing(2)},title:Object(r.a)({flexGrow:1},e.breakpoints.down("sm"),{textAlign:"center"})}})),j=function(e){var t=e.admin,a=void 0!==t&&t,r=b(),n=a;return Object(m.jsx)("div",{className:r.root,children:Object(m.jsx)(i.a,{position:"static",children:Object(m.jsxs)(o.a,{children:[n?Object(m.jsx)(c.a,{edge:"start",className:r.menuButton,color:"inherit","aria-label":"menu",children:Object(m.jsx)(u.a,{})}):null,Object(m.jsx)(l.a,{variant:"h6",className:r.title,children:h.b.TITLE}),n?Object(m.jsx)(s.a,{color:"inherit",children:h.b.LOGIN_BTN_TEXT}):null]})})})},f=Object(n.a)((function(e){return{children:Object(r.a)({margin:"5rem 10%",marginBottom:"0",minHeight:"calc(100vh - 5rem)",borderLeft:"1px solid white"},e.breakpoints.down("sm"),{margin:"4rem 5%",minHeight:"calc(100vh - 4rem)"})}}));t.a=function(e){var t=e.children,a=e.admin,r=void 0!==a&&a,n=f();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(j,{admin:r}),Object(m.jsx)("div",{className:n.children,children:t})]})}},207:function(e){e.exports=JSON.parse('{"services":{"create_new_blog":{"path":"/api/v1/create-new"},"get_all_blog_posts":{"path":"/api/v1/get/posts/"},"updateUserProfile":{"path":"/api/v1/update-user-profile"},"getUserProfile":{"path":"/api/v1/get-user-profile"},"getCandidateProfiles":{"path":"/api/v1/get-candidate-profiles"}}}')},241:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var r=a(11),n=a(22),i=a.n(n),o=a(149),l=a.n(o),s=a(207),c=Object(r.a)({"Content-Type":"application/json"},{}),d={CREATE_NEW_BLOG:l()(s,"services.create_new_blog.path",""),GET_ALL_BLOG_POSTS:l()(s,"services.get_all_blog_posts.path","")},u=function(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw new Error({success:!1,cause:t})}};console.info("Default Headers: ",c);var h=function(e){var t=e.host,a=void 0===t?"":t,n=e.path,o=e.method,l=void 0===o?"post":o,s=e.body,d=e.headers,u=void 0===d?c:d,h=Object(r.a)(Object(r.a)({},u),{});return console.log("headers: ",h),i()({method:l,url:"".concat(a).concat(n),data:s,headers:h})},m=function(e){return e.push("/error")},b=function(e,t){return function(){t(),function(e){e.push("/admin/overview")}(e)}},j=function(e){return function(t){return console.error("Custom Error: ",t),m(e)}},f={addNewBlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0,r={path:d.CREATE_NEW_BLOG,method:"post",body:JSON.stringify(e)};return h(r).then(u).then(b(t,a)).catch(j(t))},getAllBlogPosts:function(e){return h({path:d.GET_ALL_BLOG_POSTS,method:"get"}).then(u).then((function(e){return l()(e,"data.body",{})})).catch(function(e){return function(t){return console.error("Custom Error: ",t),m(e)}}(e))}}},937:function(e,t,a){"use strict";a.r(t);var r=a(35),n=(a(0),a(885)),i=a(2),o=a(353),l=a(918),s=a(912),c=a(917),d=a(931),u=a(930),h=a(3),m=Object(s.a)((function(e){return{formControl:{margin:e.spacing(0),width:"100%"},formLabel:{padding:"0.5rem 0"}}})),b=function(e){var t=e.id,a=e.label,r=e.formik,n=m();return Object(h.jsx)(u.a,{component:"span",error:r.touched[t]&&Boolean(r.errors[t]),className:n.formControl,children:Object(h.jsx)("div",{children:Object(h.jsx)(d.a,{id:t,name:t,label:a,type:"date",fullWidth:!0,className:n.textField,InputLabelProps:{shrink:!0},"aria-label":a,value:r.values[t],onChange:r.handleChange,error:r.touched[t]&&Boolean(r.errors[t]),helperText:r.touched[t]&&r.errors[t]})})})},j=function(e){var t=e.formik,a=e.id,r=e.label,n=e.classNames,i=void 0===n?"":n;return Object(h.jsx)(d.a,{classNames:i,autoComplete:"",name:a,variant:"outlined",fullWidth:!0,id:a,label:r,"aria-label":r,value:t.values[a],onChange:t.handleChange,error:t.touched[a]&&Boolean(t.errors[a]),helperText:t.touched[a]&&t.errors[a],autoFocus:!0})},f=a(887),p=a(934),O=a(933),x=Object(s.a)((function(e){return{formControl:{margin:e.spacing(0),width:"100%"},formLabel:{padding:"0.5rem 0"}}})),v=function(e){var t=e.id,a=e.label,r=e.formik,n=x();return Object(h.jsxs)(u.a,{component:"span",error:r.touched[t]&&Boolean(r.errors[t]),className:n.formControl,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(O.a,{component:"legend",className:n.formLabel,children:a}),Object(h.jsx)(f.a,{height:"50vh",value:r.values[t],onChange:function(e){r.setFieldValue(t,e)},preview:"edit"}),null]}),r.touched[t]&&Boolean(r.errors[t])?Object(h.jsx)(p.a,{children:r.touched[t]&&r.errors[t]}):null]})},g=a(932),N=a(935),_=a(940),E=Object(s.a)((function(e){return{formControl:{margin:e.spacing(0),width:"75%"},formLabel:{padding:"0.5rem 0"}}})),w=function(e){var t=e.formik,a=e.id,r=e.label,n=e.menuItems,i=void 0===n?[]:n,o=E();return Object(h.jsxs)(u.a,{variant:"outlined",error:t.touched[a]&&Boolean(t.errors[a]),className:o.formControl,children:[Object(h.jsx)(g.a,{id:"".concat(a,"-label"),children:r}),Object(h.jsx)(N.a,{labelId:a,id:a,name:a,label:r,value:t.values[a],onChange:function(e){return t.handleChange(e)},children:i.map((function(e,t){var a=e.value,r=e.desc;return Object(h.jsx)(_.a,{value:a,children:r},t)}))}),t.touched[a]&&Boolean(t.errors[a])?Object(h.jsx)(p.a,{children:t.touched[a]&&t.errors[a]}):null]})},C=a(138),T=a(886),B=T.b({title:T.c("Enter blog title").required("Title is required"),sub_title:T.c("Enter sub-title").required("Sub title is required"),quote:T.c("Enter quote").required(),content:T.c().required("Please add some content in mardown format."),date_publish:T.a("Please select publish date").required("Date is required").nullable("Please select date of publish"),status:T.c("Please select blog status").required("Please select blog status"),author:T.c("Please enter author name").required("Please enter author name"),author_mail:T.c("Enter author's email").email("Enter a valid email").required("Email is required")}),L=a(241),k=Object(s.a)((function(e){return{root:{display:"flex",justifyContent:"left",alignItems:"center",flexDirection:"column"},halfWidth:Object(r.a)({width:"50%"},e.breakpoints.down("sm"),{width:"100%"}),formControl:{width:"100%"}}}));t.default=Object(i.g)((function(e){var t=e.history,a=k(),r=Object(n.a)({initialValues:{title:"",sub_title:"",quote:"",content:"",date_publish:"",status:"",author:"",author_mail:""},validationSchema:B,onSubmit:function(e,a){var r=a.resetForm;console.log(e),L.a.addNewBlog(e,t,r)},enableReinitialize:!0});return Object(h.jsx)(C.a,{admin:!0,children:Object(h.jsx)("section",{children:Object(h.jsx)("form",{onSubmit:r.handleSubmit,children:Object(h.jsxs)(o.a,{container:!0,spacing:3,className:a.root,children:[Object(h.jsxs)(o.a,{item:!0,md:12,xs:12,children:[Object(h.jsx)(c.a,{variant:"h1",children:"Create new blog"}),Object(h.jsx)("hr",{})]}),Object(h.jsx)(o.a,{item:!0,md:12,xs:12,className:a.halfWidth,children:Object(h.jsx)(j,{id:"title",label:"Enter blog title",formik:r})}),Object(h.jsx)(o.a,{item:!0,md:12,xs:12,className:a.halfWidth,children:Object(h.jsx)(j,{id:"sub_title",label:"Enter sub title",formik:r})}),Object(h.jsx)(o.a,{item:!0,md:12,xs:12,className:a.halfWidth,children:Object(h.jsx)(j,{id:"quote",label:"Enter quote",formik:r})}),Object(h.jsx)(o.a,{item:!0,md:12,xs:12,className:a.halfWidth,children:Object(h.jsx)(v,{id:"content",name:"content",label:"Blog content",formik:r})}),Object(h.jsx)(o.a,{item:!0,md:12,xs:12,className:a.halfWidth,children:Object(h.jsx)(b,{id:"date_publish",name:"date_publish",label:"Date of publish",formik:r})}),Object(h.jsx)(o.a,{item:!0,md:12,xs:12,className:a.halfWidth,children:Object(h.jsx)(w,{id:"status",name:"status",label:"Status",menuItems:[{value:"draft",desc:"Draft"},{value:"published",desc:"Published"}],formik:r})}),Object(h.jsx)(o.a,{item:!0,md:12,xs:12,className:a.halfWidth,children:Object(h.jsx)(j,{id:"author",name:"author",label:"Enter author's full name",formik:r})}),Object(h.jsx)(o.a,{item:!0,md:12,xs:12,className:a.halfWidth,children:Object(h.jsx)(j,{id:"author_mail",name:"author_mail",label:"Enter author's email id",formik:r})}),Object(h.jsx)(o.a,{item:!0,md:8,xs:12,className:"flex-center",children:Object(h.jsx)(l.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.saveBtn,children:"Save Profile"})})]})})})})}))}}]);
//# sourceMappingURL=8.542bc013.chunk.js.map