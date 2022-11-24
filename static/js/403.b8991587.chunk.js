"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[403],{3403:function(e,n,r){r.r(n),r.d(n,{default:function(){return X}});var a,t=r(885),s=r(5048),i=r(2791),o=r(5629),c=r(3095),d=r(5206),l=r(7689),u=r(2087),m=r(9562),h=r(4346),x=r(3978),p=r(7247),b=r(8619),j=r(2510),f=r(1286),Z=r(1413),g=r(5861),v=r(7757),C=r.n(v),y=r(168),w=r(7691).ZP.form(a||(a=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 10px;\n  color: midnightblue;\n\n  & > label {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    font-size: 16px;\n    gap: 5px;\n  }\n\n  & > button {\n    align-self: center;\n    padding: 10px;\n    background-color: inherit;\n    color: white;\n    background-color: #0a49f5;\n    border-color: inherit;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 20px;\n    border-radius: 6px;\n  }\n\n"]))),k=r(5705),A=r(7103),z=r(4772),S=r(9365),F=r(1898),q=r(6580),P=r(6582),L=r(4565),E=r(7924),_=r(1091),N=r(184),I=A.Ry().shape({name:A.Z_().required("Please enter a name"),number:A.Z_().required("Please enter a number")}),R=function(e){var n=e.handleClose,r=(e.id,e.name),a=e.number,s=(0,c.wv)(),o=(0,t.Z)(s,2),u=o[0],m=o[1],h=m.isLoading,x=m.isError,p=m.isSuccess,b=(0,c.Jx)().data,f=(0,k.TA)({initialValues:{name:r,number:a},validate:function(e){var n={};return e.number?/^[0-9\b\s+().*-\s++]+$/.test(e.number)?e.name?/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/.test(e.name)||(n.name="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"):n.name="Required":n.number="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +":n.number="Required",n},validationSchema:I,onSubmit:function(){var e=(0,g.Z)(C().mark((function e(r,a){var t;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.resetForm,!b.map((function(e){return e.name.toLowerCase()})).includes(r.name.toLowerCase())){e.next=6;break}return e.abrupt("return",d.Am.error("".concat(r.name," or ").concat(r.number," is already in a list")));case 6:return e.next=8,u((0,Z.Z)({},r));case 8:t(),n();case 10:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()});return(0,i.useEffect)((function(){p&&d.Am.success("Contact successfully updated"),x&&d.Am.error(x.data)}),[p,x]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(L.Z,{variant:"h6",component:"h2",children:"Update contact"}),(0,N.jsx)(L.Z,{sx:{mt:2,color:"rgba(0, 0, 0, 0.6)"},children:'To update contact please enter new name or phone number below and click "Update contact".'}),(0,N.jsxs)(w,{onSubmit:f.handleSubmit,children:[(0,N.jsxs)(F.Z,{error:f.errors.name,sx:{m:1,width:"30ch"},variant:"standard",children:[(0,N.jsx)(S.Z,{htmlFor:"name",children:"Name"}),(0,N.jsx)(z.Z,{required:!0,id:"name",type:"text",value:f.values.name,onChange:f.handleChange}),f.errors.name&&(0,N.jsx)(E.Z,{color:"red",children:f.errors.name})]}),(0,N.jsxs)(F.Z,{error:f.errors.number,sx:{m:1,width:"30ch"},variant:"standard",children:[(0,N.jsx)(S.Z,{htmlFor:"number",children:"Number"}),(0,N.jsx)(z.Z,{id:"number",type:"text",value:f.values.number,onChange:f.handleChange,required:!0}),f.errors.number&&(0,N.jsx)(E.Z,{color:"red",children:f.errors.number}),(0,N.jsxs)(P.Z,{fullWidth:!0,sx:{mt:3},children:[(0,N.jsx)(j.Z,{sx:{mr:.3},variant:"contained",size:"large",type:"submit",loading:h,loadingPosition:"center",loadingIndicator:(0,N.jsx)(q.Z,{color:"primary",size:24}),children:"Update"}),(0,N.jsx)(_.Z,{variant:"contained",size:"large",type:"button",onClick:n,children:"Cancel"})]})]})]}),(0,N.jsx)(l.j3,{})]})},T=r(4015),J=r(6015);function $(e){var n=e.id,r=e.name,a=e.number,s=(0,c.Nt)(),o=(0,t.Z)(s,2),Z=o[0],g=o[1],v=g.isLoading,C=g.isSuccess,y=g.isError,w=(0,i.useState)(!1),k=(0,t.Z)(w,2),A=k[0],z=k[1],S=function(){return z((function(e){return!e}))};return(0,i.useEffect)((function(){C&&d.Am.warning("".concat(r," removed from your contacts")),y&&d.Am.error(y.data)}),[y,C,r]),(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(u.ZP,{children:[(0,N.jsx)(m.Z,{children:(0,N.jsx)(x.Z,{sx:{bgcolor:"inherit"},children:(0,N.jsx)(b.Z,{color:"primary"})})}),(0,N.jsx)(h.Z,{primary:r,secondary:a}),(0,N.jsx)(_.Z,{size:"small",onClick:S,children:(0,N.jsx)(f.Z,{})}),(0,N.jsx)(j.Z,{size:"small",onClick:function(){return Z(n)},loading:v,loadingPosition:"center",loadingIndicator:(0,N.jsx)(q.Z,{color:"primary",size:16}),children:(0,N.jsx)(p.Z,{})}),A&&(0,N.jsx)(T.Z,{disableEscapeKeyDown:!0,open:A,onClose:function(e,n){n&&"backdropClick"===n||S()},children:(0,N.jsxs)(J.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",boxShadow:24,p:4},children:[(0,N.jsx)(R,{handleClose:S,id:n,name:r,number:a}),(0,N.jsx)(l.j3,{})]})}),(0,N.jsx)(l.j3,{})]},n)})}var U=r(3743),B=r(8254),D=r(1703),G=function(){var e=(0,s.I0)(),n=(0,s.v9)((function(e){return e.contacts.query}));return(0,N.jsx)(J.Z,{sx:{"& > :not(style)":{m:1}},children:(0,N.jsxs)(F.Z,{variant:"standard",children:[(0,N.jsx)(S.Z,{htmlFor:"filter",children:"Find contacts by name"}),(0,N.jsx)(z.Z,{id:"filter",name:"filter",type:"text",value:n,onChange:function(n){return e((0,U.xO)(n.currentTarget.value))},startAdornment:(0,N.jsx)(B.Z,{position:"start",children:(0,N.jsx)(D.Z,{})})})]})})},K=A.Ry().shape({name:A.Z_().required("Please enter a name"),number:A.Z_().required("Please enter a number")}),M=function(e){var n=e.handleClose,r=(0,c.Tn)(),a=(0,t.Z)(r,2),s=a[0],o=a[1],u=o.isLoading,m=o.isError,h=o.isSuccess,x=(0,c.Jx)().data,p=(0,k.TA)({initialValues:{name:"",number:""},validate:function(e){var n={};return e.number?/^[0-9\b\s+().*-\s++]+$/.test(e.number)?e.name?/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/.test(e.name)||(n.name="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"):n.name="Required":n.number="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +":n.number="Required",n},validationSchema:K,onSubmit:function(){var e=(0,g.Z)(C().mark((function e(r,a){var t;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.resetForm,!x.map((function(e){return e.name.toLowerCase()})).includes(r.name.toLowerCase())){e.next=6;break}return e.abrupt("return",d.Am.error("".concat(r.name," is already in a list")));case 6:return e.next=8,s((0,Z.Z)({},r));case 8:t(),n();case 10:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()});return console.log(p.errors),(0,i.useEffect)((function(){h&&d.Am.success("Contact successfully added"),m&&d.Am.error(m.data)}),[h,m]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(w,{onSubmit:p.handleSubmit,children:[(0,N.jsxs)(F.Z,{error:p.errors.name,sx:{m:1,width:"30ch"},variant:"standard",children:[(0,N.jsx)(S.Z,{htmlFor:"name",children:"Name"}),(0,N.jsx)(z.Z,{id:"name",type:"text",value:p.values.name,onChange:p.handleChange,required:!0}),p.errors.name&&(0,N.jsx)(E.Z,{color:"red",children:p.errors.name})]}),(0,N.jsxs)(F.Z,{error:p.errors.number,sx:{m:1,width:"30ch"},variant:"standard",children:[(0,N.jsx)(S.Z,{htmlFor:"number",children:"Number"}),(0,N.jsx)(z.Z,{id:"number",type:"text",value:p.values.number,onChange:p.handleChange,required:!0}),p.errors.number&&(0,N.jsx)(E.Z,{color:"red",children:p.errors.number}),(0,N.jsxs)(P.Z,{fullWidth:!0,sx:{mt:3},children:[(0,N.jsx)(j.Z,{sx:{mr:.3},variant:"contained",size:"large",type:"submit",loading:u,loadingPosition:"center",loadingIndicator:(0,N.jsx)(q.Z,{color:"primary",size:24}),children:"Add"}),(0,N.jsx)(_.Z,{variant:"contained",size:"large",type:"button",onClick:n,children:"Cancel"})]})]})]}),(0,N.jsx)(l.j3,{})]})},V=r(788),W=r(8440),O=r(9571),H=r(464),Q=r(7750);function X(){var e=(0,s.v9)((function(e){return e.contacts.filter})),n=(0,c.Jx)().data,r=(0,i.useState)(!1),a=(0,t.Z)(r,2),d=a[0],u=a[1],m=function(e,n){n&&"backdropClick"===n||u(!1)};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(J.Z,{sx:{flexGrow:1,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,N.jsx)(G,{}),(0,N.jsxs)(_.Z,{variant:"contained",endIcon:(0,N.jsx)(Q.Z,{fontSize:"inherit"}),onClick:function(){u(!0)},sx:{width:"200px",height:"42px","&:hover":{backgroundColor:"#1976d2ed"}},color:"primary",children:[" ","Add contact"]}),(0,N.jsxs)(V.Z,{disableEscapeKeyDown:!0,open:d,onClose:m,children:[(0,N.jsx)(H.Z,{children:"Create contact"}),(0,N.jsxs)(W.Z,{children:[(0,N.jsx)(O.Z,{children:'To create new contact please enter the name and the phone number in corresponding field below and click "Add".'}),(0,N.jsx)(M,{handleClose:m})]})]})]}),(0,N.jsx)(J.Z,{sx:{flexGrow:1},children:(0,N.jsx)(o.Z,{children:n&&n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())||n.number.includes(e)})).map((function(e){var n=e.name,r=e.number,a=e.id;return(0,N.jsx)($,{name:n,number:r,id:a},a)}))})}),(0,N.jsx)(l.j3,{})]})}}}]);
//# sourceMappingURL=403.b8991587.chunk.js.map