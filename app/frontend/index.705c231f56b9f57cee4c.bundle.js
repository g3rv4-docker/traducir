!function(e){function t(t){for(var n,l,o=t[0],i=t[1],u=t[2],g=0,p=[];g<o.length;g++)l=o[g],a[l]&&p.push(a[l][0]),a[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(c&&c(t);p.length;)p.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,o=1;o<s.length;o++){var i=s[o];0!==a[i]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=s[0]))}return e}var n={},a={1:0},r=[];function l(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=e,l.c=n,l.d=function(e,t,s){l.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var o=window.webpackJsonp=window.webpackJsonp||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=i;r.push(["2YZa",0]),s()}({"+U8Q":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s("q1tI"),a=s("vDqi"),r=s("LvDl"),l=s("xkgm"),o=s("eO8H"),i=s("aUEq"),u=s("H8RE"),c=s("FkmL"),g=s("KU2F");t.default=class extends n.Component{constructor(e){super(e),this.loadSuggestions=(e=>{this.setState({currentString:e})}),this.goBackToResults=(e=>{if(e){const t=r.findIndex(this.state.strings,t=>t.id==e);a.default.get(`/app/api/strings/${e}`).then(e=>{let s={strings:this.state.strings};s.strings[t]=e.data,this.setState(s)})}}),this.resultsReceived=(e=>{this.setState({strings:e})}),this.showErrorMessage=((e,t)=>{e?alert(e):401==t?(alert("Your session has expired... you will be redirected to the log in page"),window.location.href="/app/login"):alert("Unknown error. Code: "+t)}),this.toggle=(()=>{this.setState({isOpen:!this.state.isOpen})}),this.state={user:void 0,strings:[],currentString:null,config:null,isOpen:!1}}componentDidMount(){const e=this;a.default.post("/app/api/me",this.state).then(t=>e.setState({user:t.data})).catch(t=>e.setState({user:null})),a.default.get("/app/api/config").then(t=>e.setState({config:t.data})).catch(e=>this.showErrorMessage(null,e.response.status));const t=location.pathname.match(/^\/string\/([0-9]+)$/);t&&a.default.get(`/app/api/strings/${t[1]}`).then(e=>{this.setState({currentString:e.data})}).catch(e=>this.showErrorMessage(null,e.response.status))}renderUser(){return this.state&&null!==this.state.user?this.state.user?n.createElement(n.Fragment,null,n.createElement(l.NavItem,{className:"navbar-text"},this.state.user.name," (",g.userTypeToString(this.state.user.userType),") - ",n.createElement("a",{href:"/app/logout"},"Log out"))):void 0:n.createElement(l.NavItem,null,n.createElement("a",{href:"/app/login",className:"nav-link"},"Anonymous - Log in!"))}render(){return n.createElement(n.Fragment,null,n.createElement(l.Navbar,{color:"dark",dark:!0,expand:"lg",className:"fixed-top"},n.createElement("div",{className:"container"},n.createElement("div",{className:"navbar-brand"},this.state.config&&this.state.config.friendlyName," Translations"),n.createElement(l.NavbarToggler,{onClick:this.toggle,className:"mr-5"}),n.createElement(l.Collapse,{isOpen:this.state.isOpen,navbar:!0},n.createElement(l.Nav,{className:"ml-auto",navbar:!0},this.renderUser())))),n.createElement("div",{className:"container"},n.createElement(i.default,{onResultsFetched:this.resultsReceived,goBackToResults:this.goBackToResults,showErrorMessage:this.showErrorMessage}),n.createElement(o.Route,{path:"/filters",render:e=>n.createElement(u.default,{user:this.state.user,results:this.state.strings,loadSuggestions:this.loadSuggestions})}),n.createElement(o.Route,{path:"/string",render:e=>this.state.currentString?n.createElement(c.default,{config:this.state.config,user:this.state.user,str:this.state.currentString,goBackToResults:this.goBackToResults,showErrorMessage:this.showErrorMessage}):null})))}}},"2YZa":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s("q1tI"),a=s("i8i4"),r=s("eO8H"),l=s("+U8Q"),o=s("6gJa");a.render(n.createElement(r.Router,{history:o.default},n.createElement(l.default,null)),document.getElementById("root"))},"6gJa":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s("YHGo").createBrowserHistory();t.default=n},FWOS:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s("q1tI"),a=s("vDqi"),r=s("6gJa"),l=s("RBzv"),o=s("KU2F");var i;!function(e){e[e.Accept=1]="Accept",e[e.Reject=2]="Reject"}(i||(i={})),t.default=class extends n.Component{constructor(e){super(e),this.state={aboutToReviewId:null,actionToPerform:null}}render(){return this.props.suggestions&&this.props.suggestions.length&&this.props.config?n.createElement("table",{className:"table mt-2"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Suggestion"),n.createElement("th",null,"Approved By"),n.createElement("th",null,"Created by"),n.createElement("th",null))),n.createElement("tbody",null,this.props.suggestions.map(e=>n.createElement("tr",{key:e.id,className:e.state==l.StringSuggestionState.ApprovedByTrustedUser?"table-success":""},n.createElement("td",null,n.createElement("pre",null,e.suggestion)),n.createElement("td",null,e.lastStateUpdatedByName?n.createElement("a",{href:`https://${this.props.config.siteDomain}/users/${e.createdById}`,target:"_blank"},e.lastStateUpdatedByName):null),n.createElement("td",null,n.createElement("a",{href:`https://${this.props.config.siteDomain}/users/${e.createdById}`,target:"_blank",title:"at "+e.creationDate+" UTC"},e.createdByName)),n.createElement("td",null,this.renderSuggestionActions(e)))))):null}renderSuggestionActions(e){return this.props.user&&this.props.user.canReview?e.state==l.StringSuggestionState.ApprovedByTrustedUser&&this.props.user.userType==o.UserType.TrustedUser?null:this.state.actionToPerform?this.state.aboutToReviewId!=e.id?null:n.createElement("div",{className:"text-center"},n.createElement("div",null,this.state.actionToPerform==i.Accept?"Approve":"Reject"," this suggestion?"),n.createElement("div",{className:"btn-group",role:"group"},n.createElement("button",{type:"button",className:"btn btn-sm btn-primary",onClick:t=>this.processReview(e)},"Yes"),n.createElement("button",{type:"button",className:"btn btn-sm btn-secondary",onClick:e=>this.setState({actionToPerform:null,aboutToReviewId:null})},"No"))):n.createElement("div",{className:"btn-group",role:"group"},n.createElement("button",{type:"button",className:"btn btn-sm btn-success",onClick:t=>this.setState({actionToPerform:i.Accept,aboutToReviewId:e.id})},"Approve"),n.createElement("button",{type:"button",className:"btn btn-sm btn-danger",onClick:t=>this.setState({actionToPerform:i.Reject,aboutToReviewId:e.id})},"Reject")):null}processReview(e){if(!this.state.aboutToReviewId||!this.state.actionToPerform)return;const t=this;a.default.put("/app/api/review",{SuggestionId:this.state.aboutToReviewId,Approve:this.state.actionToPerform==i.Accept}).then(s=>{t.props.goBackToResults(e.stringId),r.default.push("/filters")}).catch(e=>{400==e.response.status?this.props.showErrorMessage("Error reviewing the suggestion. Do you have enough rights?"):this.props.showErrorMessage(null,e.response.status)})}}},FkmL:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s("q1tI"),a=s("eO8H"),r=s("FWOS"),l=s("GAHs");t.default=class extends n.Component{constructor(e){super(e)}render(){return n.createElement(n.Fragment,null,n.createElement("div",{className:"m-2 text-center"},n.createElement("h2",null,"Suggestions")),n.createElement("div",null,n.createElement("span",{className:"font-weight-bold"},"Key:")," ",n.createElement("pre",{className:"d-inline"},this.props.str.key)),this.props.config?n.createElement("div",null,n.createElement("span",{className:"font-weight-bold"},"Transifex:")," ",n.createElement("a",{href:`https://www.transifex.com/${this.props.config.transifexPath}/$?q=key%3A${this.props.str.key}`,target:"_blank"},"View it on Transifex")):null,n.createElement("div",null,n.createElement("span",{className:"font-weight-bold"},"Original String:")," ",n.createElement("pre",{className:"d-inline"},this.props.str.originalString)),this.props.str.variant?n.createElement("div",null,n.createElement("span",{className:"font-weight-bold"},"Variant:")," ",this.props.str.variant.replace("VARIANT: ","")):null,n.createElement("div",null,n.createElement("span",{className:"font-weight-bold"},"Current Translation:")," ",this.props.str.translation?n.createElement("pre",{className:"d-inline"},this.props.str.translation):n.createElement("i",null,"Missing translation")),n.createElement(r.default,{user:this.props.user,config:this.props.config,suggestions:this.props.str.suggestions,goBackToResults:this.props.goBackToResults,showErrorMessage:this.props.showErrorMessage}),n.createElement("div",{className:"mt-1 text-right"},n.createElement(a.Link,{to:"/filters",className:"btn btn-secondary"},"Go Back")),n.createElement(l.default,{user:this.props.user,stringId:this.props.str.id,goBackToResults:this.props.goBackToResults,showErrorMessage:this.props.showErrorMessage}))}}},GAHs:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s("q1tI"),a=s("vDqi"),r=s("eO8H"),l=s("6gJa"),o=s("KU2F");t.default=class extends n.Component{constructor(e){super(e),this.postSuggestion=(e=>{a.default.put("/app/api/suggestions",{StringId:this.props.stringId,Suggestion:this.state.suggestion,Approve:e}).then(e=>{this.props.goBackToResults(this.props.stringId),l.default.push("/filters")}).catch(e=>{400==e.response.status?this.props.showErrorMessage("Failed sending the suggestion. Are you missing a variable?"):this.props.showErrorMessage(null,e.response.status)})}),this.state={suggestion:""}}render(){return this.props.user&&this.props.user.canSuggest?n.createElement("form",null,n.createElement("div",{className:"row"},n.createElement("div",{className:"col"},n.createElement("div",{className:"form-group"},n.createElement("label",{htmlFor:"suggestion",className:"font-weight-bold"},"New Suggestion"),n.createElement("textarea",{className:"form-control",id:"suggestion",value:this.state.suggestion,onChange:e=>this.setState({suggestion:e.target.value})})))),n.createElement("div",null,n.createElement("div",{className:"mt-1"},n.createElement("div",{className:"btn-group",role:"group"},n.createElement("button",{type:"button",className:"btn btn-primary float-left",onClick:e=>this.postSuggestion(!1)},"Send new suggestion"),this.props.user.userType>=o.UserType.Reviewer?n.createElement("button",{type:"button",className:"btn btn-warning float-left",onClick:e=>this.postSuggestion(!0)},"Send final translation"):null),n.createElement(r.Link,{to:"/filters",className:"btn btn-secondary float-right"},"Go Back")))):null}}},H8RE:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s("q1tI"),a=s("LvDl"),r=s("eO8H"),l=s("RBzv");t.default=class extends n.Component{constructor(e){super(e)}renderSuggestions(e){if(null==e.suggestions||0==e.suggestions.length)return n.createElement(n.Fragment,null);const t=a.filter(e.suggestions,e=>e.state==l.StringSuggestionState.ApprovedByTrustedUser).length,s=a.filter(e.suggestions,e=>e.state==l.StringSuggestionState.Created).length;return n.createElement(n.Fragment,null,t>0?n.createElement("span",{className:"text-success"},t):null,t>0&&s>0?n.createElement("span",null," - "):null,s>0?n.createElement("span",{className:"text-danger"},s):null)}renderActions(e){const t=a.filter(e.suggestions,e=>e.state==l.StringSuggestionState.ApprovedByTrustedUser).length,s=a.filter(e.suggestions,e=>e.state==l.StringSuggestionState.Created).length;return this.props.user&&this.props.user.canSuggest||t+s>0?n.createElement(r.Link,{to:`/string/${e.id}`,className:"btn btn-sm btn-primary",onClick:t=>this.props.loadSuggestions(e)},"Suggestions"):null}renderRows(e){return 0==e.length?n.createElement("tr",null,n.createElement("td",{colSpan:4,className:"text-center"},"No results (sad trombone)")):n.createElement(n.Fragment,null,e.map(e=>n.createElement("tr",{key:e.id},n.createElement("td",null,e.originalString),n.createElement("td",null,e.translation),n.createElement("td",null,this.renderSuggestions(e)),n.createElement("td",null,this.renderActions(e)))))}render(){return n.createElement(n.Fragment,null,n.createElement("div",{className:"m-2 text-center"},n.createElement("h2",null,"Results")),n.createElement("table",{className:"table table-hover"},n.createElement("thead",{className:"thead-light"},n.createElement("tr",null,n.createElement("th",null,"String"),n.createElement("th",null,"Translation"),n.createElement("th",null,"Suggestions"),n.createElement("th",null))),n.createElement("tbody",null,this.renderRows(this.props.results))))}}},KU2F:function(e,t,s){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Unknown=0]="Unknown",e[e.Banned=1]="Banned",e[e.User=2]="User",e[e.TrustedUser=3]="TrustedUser",e[e.Reviewer=4]="Reviewer"}(n=t.UserType||(t.UserType={})),t.userTypeToString=function(e){switch(e){case n.Banned:return"Banned";case n.User:return"User";case n.TrustedUser:return"Trusted User";case n.Reviewer:return"Reviewer"}}},RBzv:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Created=1]="Created",e[e.ApprovedByTrustedUser=2]="ApprovedByTrustedUser",e[e.ApprovedByReviewer=3]="ApprovedByReviewer",e[e.Rejected=4]="Rejected",e[e.DeletedByOwner=5]="DeletedByOwner",e[e.DismissedByOtherString=6]="DismissedByOtherString"}(t.StringSuggestionState||(t.StringSuggestionState={}))},aUEq:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s("q1tI"),a=s("LvDl"),r=s("vDqi"),l=s("6gJa"),o=s("cr+I"),i=s("eO8H");var u,c,g;!function(e){e[e.AnyStatus=0]="AnyStatus",e[e.DoesNotHaveSuggestionsNeedingApproval=1]="DoesNotHaveSuggestionsNeedingApproval",e[e.HasSuggestionsNeedingApproval=2]="HasSuggestionsNeedingApproval",e[e.HasSuggestionsNeedingApprovalApprovedByTrustedUser=3]="HasSuggestionsNeedingApprovalApprovedByTrustedUser"}(u||(u={})),function(e){e[e.AnyStatus=0]="AnyStatus",e[e.WithTranslation=1]="WithTranslation",e[e.WithoutTranslation=2]="WithoutTranslation"}(c||(c={})),function(e){e[e.AnyStatus=0]="AnyStatus",e[e.NeedsPush=1]="NeedsPush",e[e.DoesNotNeedPush=2]="DoesNotNeedPush"}(g||(g={})),t.default=class extends n.Component{constructor(e){super(e),this.hasFilter=(()=>this.state.sourceRegex||this.state.translationRegex||this.state.key||this.state.translationStatus||this.state.suggestionsStatus||this.state.pushStatus),this.handleField=(e=>{this.setState(e,()=>{this.submitForm();const e="/filters?"+this.currentPath();location.pathname.startsWith("/filters")?l.default.replace(e):l.default.push(e)})}),this.reset=(()=>{this.setState({sourceRegex:"",translationRegex:"",key:"",translationStatus:c.AnyStatus,suggestionsStatus:u.AnyStatus,pushStatus:g.AnyStatus},()=>{this.props.onResultsFetched([])})}),this.submitForm=a.debounce(()=>{const e=this;r.default.post("/app/api/strings/query",this.state).then(function(t){e.props.onResultsFetched(t.data)}).catch(function(t){e.props.showErrorMessage(null,t.response.status)})},1e3),this.currentPath=(()=>o.stringify(a.pickBy(this.state,e=>e)));const t=o.parse(location.search);this.state={sourceRegex:t.sourceRegex||"",translationRegex:t.translationRegex||"",key:t.key||"",translationStatus:t.translationStatus||c.AnyStatus,suggestionsStatus:t.suggestionsStatus||u.AnyStatus,pushStatus:t.pushStatus||g.AnyStatus}}componentDidMount(){this.hasFilter()&&this.submitForm()}render(){return n.createElement(n.Fragment,null,n.createElement("div",{className:"m-2 text-center"},n.createElement("h2",null,"Filters")),n.createElement("div",{className:"row"},n.createElement("div",{className:"col"},n.createElement("div",{className:"form-group"},n.createElement("label",{htmlFor:"sourceRegex"},"Source Regex"),n.createElement("input",{type:"text",className:"form-control",id:"sourceRegex",placeholder:"^question",value:this.state.sourceRegex,onChange:e=>this.handleField({sourceRegex:e.target.value})}))),n.createElement("div",{className:"col"},n.createElement("div",{className:"form-group"},n.createElement("label",{htmlFor:"translationRegex"},"Translation Regex"),n.createElement("input",{type:"text",className:"form-control",id:"translationRegex",placeholder:"(?i)pregunta$",value:this.state.translationRegex,onChange:e=>this.handleField({translationRegex:e.target.value})})))),n.createElement("div",{className:"row"},n.createElement("div",{className:"col"},n.createElement("div",{className:"form-group"},n.createElement("label",{htmlFor:"withoutTranslation"},"Strings without translation"),n.createElement("select",{className:"form-control",id:"withoutTranslation",value:this.state.translationStatus,onChange:e=>this.handleField({translationStatus:parseInt(e.target.value)})},n.createElement("option",{value:c.AnyStatus},"Any string"),n.createElement("option",{value:c.WithoutTranslation},"Only strings without translation"),n.createElement("option",{value:c.WithTranslation},"Only strings with translation")))),n.createElement("div",{className:"col"},n.createElement("div",{className:"form-group"},n.createElement("label",{htmlFor:"suggestionsStatus"},"Strings with pending suggestions"),n.createElement("select",{className:"form-control",id:"suggestionsStatus",value:this.state.suggestionsStatus,onChange:e=>this.handleField({suggestionsStatus:parseInt(e.target.value)})},n.createElement("option",{value:u.AnyStatus},"Any string"),n.createElement("option",{value:u.HasSuggestionsNeedingApproval},"Strings with pending suggestions"),n.createElement("option",{value:u.HasSuggestionsNeedingApprovalApprovedByTrustedUser},"Strings with pending suggestions approved by a trusted user"),n.createElement("option",{value:u.DoesNotHaveSuggestionsNeedingApproval},"Strings without pending suggestions"))))),n.createElement("div",{className:"row"},n.createElement("div",{className:"col"},n.createElement("div",{className:"form-group"},n.createElement("label",{htmlFor:"key"},"Key"),n.createElement("input",{type:"text",className:"form-control",id:"key",value:this.state.key,onChange:e=>this.handleField({key:e.target.value})}))),n.createElement("div",{className:"col"},n.createElement("div",{className:"form-group"},n.createElement("label",{htmlFor:"suggestionsStatus"},"Strings with pending push"),n.createElement("select",{className:"form-control",id:"pushStatus",value:this.state.pushStatus,onChange:e=>this.handleField({pushStatus:parseInt(e.target.value)})},n.createElement("option",{value:g.AnyStatus},"Any string"),n.createElement("option",{value:g.NeedsPush},"Needs push"),n.createElement("option",{value:g.DoesNotNeedPush},"Is updated"))))),n.createElement("div",{className:"row text-center mb-5"},n.createElement("div",{className:"col"},n.createElement(i.Link,{to:"/",className:"btn btn-secondary",onClick:this.reset},"Reset"))),"/filters"==location.pathname&&""==location.search&&this.hasFilter()?n.createElement(i.Redirect,{to:{pathname:"/filters",search:this.currentPath()}}):null)}}}});