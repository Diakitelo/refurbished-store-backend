_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{"1H5k":function(e,t,n){"use strict";var i=n("x8tt");n.d(t,"a",(function(){return i.a})),n.d(t,"b",(function(){return i.b})),n.d(t,"c",(function(){return i.c})),n.d(t,"d",(function(){return i.d}))},DB6d:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var i=n("ERkP"),a=n.n(i),r=n("1H5k"),c=n("Czhu"),o=n("J8OT"),u=n("rkyN"),s=n("J3Wx"),d=n("4/oc"),l=n("pfvO"),b=n("3jXu"),g=n("q9nS");const m=({identityField:e,secretField:t,mutationName:n,successTypename:a,failureTypename:m})=>{var j,f;const p=r.a`
    mutation($identity: String!, $secret: String!) {
      authenticate: ${n}(${e}: $identity, ${t}: $secret) {
        ... on ${a} {
          item {
            id
          }  
        }
        ... on ${m} {
          message
        }
      }
    }
  `,[h,O]=Object(i.useState)("signin"),[v,y]=Object(i.useState)({identity:"",secret:""}),w=Object(i.useRef)(null);Object(i.useEffect)((()=>{var e;null===(e=w.current)||void 0===e||e.focus()}),[h]);const[_,{error:k,loading:E,data:S}]=Object(r.c)(p),N=Object(b.e)(),P=Object(g.b)(),$=Object(b.d)();return Object(i.useEffect)((()=>{"authenticated"===$.authenticatedItem.state&&P.push(P.query.from||"/")}),[$.authenticatedItem,P.query.from]),Object(o.n)(l.a,null,Object(o.n)(o.j,{gap:"xlarge",as:"form",onSubmit:async e=>{if(e.preventDefault(),"signin"===h){try{var t;if((null===(t=(await _({variables:{identity:v.identity,secret:v.secret}})).data.authenticate)||void 0===t?void 0:t.__typename)!==a)return}catch(n){return}N(),P.push(P.query.from||"/")}}},Object(o.n)(o.e,null,"Sign In"),k&&Object(o.n)(d.a,{title:"Error",tone:"negative"},k.message),(null===S||void 0===S||null===(j=S.authenticate)||void 0===j?void 0:j.__typename)===m&&Object(o.n)(d.a,{title:"Error",tone:"negative"},null===S||void 0===S?void 0:S.authenticate.message),Object(o.n)(o.j,{gap:"medium"},Object(o.n)(s.j,{name:"identity",value:v.identity,onChange:e=>y(Object(c.a)(Object(c.a)({},v),{},{identity:e.target.value})),placeholder:"Email Address",ref:w}),"signin"===h&&Object(o.n)(s.j,{name:"password",value:v.secret,onChange:e=>y(Object(c.a)(Object(c.a)({},v),{},{secret:e.target.value})),placeholder:"password",type:"password"})),"forgot password"===h?Object(o.n)(o.j,{gap:"medium",across:!0},Object(o.n)(u.a,{type:"submit",weight:"bold",tone:"active"},"Log reset link"),Object(o.n)(u.a,{weight:"none",tone:"active",onClick:()=>O("signin")},"Go back")):Object(o.n)(o.j,{gap:"medium",across:!0},Object(o.n)(u.a,{weight:"bold",tone:"active",isLoading:E||(null===S||void 0===S||null===(f=S.authenticate)||void 0===f?void 0:f.__typename)===a,type:"submit"},"Sign In"),Object(o.n)(u.a,{weight:"none",tone:"active",onClick:()=>O("forgot password")},"Forgot your password?"))))};function j(){return a.a.createElement(m,{identityField:"email",secretField:"password",mutationName:"authenticateUserWithPassword",successTypename:"UserAuthenticationWithPasswordSuccess",failureTypename:"UserAuthenticationWithPasswordFailure"})}},jgqZ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return n("DB6d")}])},pfvO:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("J8OT");const a=({children:e})=>{const{colors:t,shadow:n}=Object(i.t)();return Object(i.n)(i.b,{css:{minWidth:"100vw",minHeight:"100vh",backgroundColor:t.backgroundMuted},rounding:"medium"},Object(i.n)(i.a,{css:{background:t.background,minWidth:600,boxShadow:n.s100},margin:"medium",padding:"xlarge",rounding:"medium"},e))}},x8tt:function(e,t,n){"use strict";n.d(t,"a",(function(){return i.gql})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return s.a})),n.d(t,"d",(function(){return d.a}));var i=n("AMm6"),a=n("pQ1H"),r=n("g6u8"),c=n("ERkP"),o=n("minz");function u(){var e=c.useContext(Object(o.a)()).client;return __DEV__?Object(a.b)(e,"No Apollo Client instance can be found. Please ensure that you have called `ApolloProvider` higher up in your tree."):Object(a.b)(e,36),e}var s=n("xiH9"),d=n("GBwV");__DEV__?Object(a.b)("boolean"===typeof r.a,r.a):Object(a.b)("boolean"===typeof r.a,37)}},[["jgqZ",0,1,3,2,4,5]]]);