(this.webpackJsonpheeloworld=this.webpackJsonpheeloworld||[]).push([[0],{40:function(e,t,n){},52:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),r=n(9),a=n.n(r),i=(n(52),n(11)),s=n(12),d=n(14),l=n(13),u=n(27),j=n(91),b=n(92),h=n(90),p=n(3),O={},m=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{children:[Object(p.jsx)("br",{}),Object(p.jsx)(h.a,{required:!0,id:"outlined-email",label:"Email Address",defaultValue:"B0829000@cgu.edu.tw",variant:"outlined",color:"primary",style:O}),Object(p.jsx)("p",{}),Object(p.jsx)(h.a,{required:!0,id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"outlined"}),Object(p.jsx)("p",{})]})})},f=n(17),x=(n(40),n(30)),g=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,c=new Array(o),r=0;r<o;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleChange=function(t){var n=Object(f.a)(Object(f.a)({},e.props.todoItems),{},Object(x.a)({},t.currentTarget.name,t.currentTarget.value));console.log(t.currentTarget.value),e.props.updateTodos(e.props.index,n)},e.toggleCheckbox=function(t){var n=Object(f.a)(Object(f.a)({},e.props.todoItems),{},Object(x.a)({},t.currentTarget.name,t.currentTarget.checked));e.props.updateTodos(e.props.index,n)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("li",{className:this.props.todoItems.isCompleted?"done":null,children:[Object(p.jsx)("input",{type:"checkbox",name:"isCompleted",checked:this.props.todoItems.isCompleted,onChange:this.toggleCheckbox}),Object(p.jsx)("input",{type:"text",name:"todo",value:this.props.todoItems.todo,onChange:this.handleChange}),Object(p.jsx)("button",{className:"del-btn",onClick:function(){return e.props.removeToDoItem(e.props.index)},children:"x"})]})}}]),n}(c.a.Component),v=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).todoRef=c.a.createRef(),e.addItemOnList=function(t){t.preventDefault();var n={todo:e.todoRef.current.value,isCompleted:!1};e.props.addToDoItems(n),t.currentTarget.reset()},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{id:"todoList-form",onSubmit:this.addItemOnList,children:[Object(p.jsx)("input",{type:"text",name:"todosTxtbx",ref:this.todoRef,required:!0}),Object(p.jsx)("button",{children:"submit"})]})}}]),n}(c.a.Component),C=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(p.jsx)("h1",{style:I,children:"CGU Todo list"})}}]),n}(o.Component),I={background:"black",color:"#fff",textAlign:"center",padding:"10px"},k=C,y=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,c=new Array(o),r=0;r<o;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={todoItems:{}},e.addToDoItems=function(t){var n=Object(f.a)({},e.state.todoItems);console.log(n),n["item".concat(Date.now())]=t,e.setState({todoItems:n})},e.removeToDoItem=function(t){var n=Object(f.a)({},e.state.todoItems);delete n[t],e.setState({todoItems:n})},e.updateTodos=function(t,n){var o=Object(f.a)({},e.state.todoItems);o[t]=n,e.setState({todoItems:o})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(k,{}),Object(p.jsx)(v,{addToDoItems:this.addToDoItems}),Object(p.jsx)("ul",{children:Object.keys(this.state.todoItems).map((function(t){return Object(p.jsx)(g,{index:t,todoItems:e.state.todoItems[t],removeToDoItem:e.removeToDoItem,updateTodos:e.updateTodos},t)}))})]})}}]),n}(o.Component),T=function(){return Object(p.jsx)(y,{initItems:!0})};function L(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{style:w,children:" Hi CGUer, please sign in."}),Object(p.jsx)(m,{})]})}var w={background:"black",color:"#fff",textAlign:"center",padding:"10px"};function D(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{color:"red",children:" Welcome back, CGUER!"}),Object(p.jsx)(T,{})]})}function S(e){return e.isLoggedIn?Object(p.jsx)(D,{}):Object(p.jsx)(L,{})}a.a.render(Object(p.jsx)(S,{isLoggedIn:!1}),document.getElementById("root"));var A=S;function R(e){return Object(p.jsx)(j.a,{onClick:e.onClick,type:"submit",variant:"outlined",color:"primary",children:Object(p.jsx)(b.a,{color:"inherit",children:"Sign In"})})}function B(e){return Object(p.jsx)(j.a,{onClick:e.onClick,type:"submit",variant:"outlined",color:"secondary",children:Object(p.jsx)(b.a,{color:"inherit",children:"Logout"})})}var E=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).handleLoginClick=o.handleLoginClick.bind(Object(u.a)(o)),o.handleLogoutClick=o.handleLogoutClick.bind(Object(u.a)(o)),o.state={isLoggedIn:!1},o}return Object(s.a)(n,[{key:"handleLoginClick",value:function(){this.setState({isLoggedIn:!0})}},{key:"handleLogoutClick",value:function(){this.setState({isLoggedIn:!1})}},{key:"render",value:function(){var e=this.state.isLoggedIn,t=null;return t=e?Object(p.jsx)(B,{onClick:this.handleLogoutClick}):Object(p.jsx)(R,{onClick:this.handleLoginClick}),Object(p.jsxs)("div",{children:[Object(p.jsx)(A,{isLoggedIn:e}),t]})}}]),n}(c.a.Component),F=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("section",{children:Object(p.jsx)(E,{})})})}}]),n}(o.Component),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),o(e),c(e),r(e),a(e)}))};a.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(F,{})}),document.getElementById("root")),N()}},[[57,1,2]]]);
//# sourceMappingURL=main.1b0eefd6.chunk.js.map