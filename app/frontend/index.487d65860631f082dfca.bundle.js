!function(e){function t(t){for(var r,i,o=t[0],l=t[1],u=t[2],g=0,p=[];g<o.length;g++)i=o[g],a[i]&&p.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(c&&c(t);p.length;)p.shift()();return n.push.apply(n,u||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],r=!0,o=1;o<s.length;o++){var l=s[o];0!==a[l]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=s[0]))}return e}var r={},a={1:0},n=[];function i(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=r,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;n.push(["2YZa",0]),s()}({"+U8Q":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=s("q1tI"),a=s("vDqi"),n=s("LvDl"),i=s("xkgm"),o=s("eO8H"),l=s("6gJa"),u=s("aUEq"),c=s("H8RE"),g=s("FkmL"),p=s("SEEf"),h=s("85kl"),d=s("KU2F");t.default=o.withRouter(class extends r.Component{constructor(e){super(e),this.state={strings:[],isOpen:!1,isLoading:!1},this.loadSuggestions=this.loadSuggestions.bind(this),this.resultsReceived=this.resultsReceived.bind(this),this.refreshString=this.refreshString.bind(this)}componentDidMount(){a.default.post("/app/api/me").then(e=>this.setState({user:e.data})).catch(e=>this.setState({user:void 0})),a.default.get("/app/api/config").then(e=>this.setState({config:e.data})).catch(e=>this.showErrorMessage(e.response.status)),a.default.get("/app/api/strings/stats").then(e=>this.setState({stats:e.data})).catch(e=>this.showErrorMessage(e.response.status));const e=location.pathname.match(/^\/string\/([0-9]+)$/);e&&a.default.get(`/app/api/strings/${e[1]}`).then(e=>{this.setState({currentString:e.data})}).catch(e=>this.showErrorMessage(e.response.status))}renderLogInLogOut(){const e=encodeURIComponent(location.pathname+location.search);return this.state&&this.state.user?this.state.user?r.createElement(r.Fragment,null,r.createElement(i.NavItem,null,r.createElement(i.NavLink,{href:`/app/logout?returnUrl=${e}`},"Log out"))):void 0:r.createElement(i.NavItem,null,r.createElement(i.NavLink,{href:`/app/login?returnUrl=${e}`},"Log in!"))}loadSuggestions(e){this.setState({currentString:e})}refreshString(e){const t=n.findIndex(this.state.strings,t=>t.id==e);a.default.get(`/app/api/strings/${e}`).then(e=>{e.data.touched=!0;const s=this.state.strings.slice();s[t]=e.data,this.setState({strings:s,currentString:e.data}),a.default.get("/app/api/strings/stats").then(e=>this.setState({stats:e.data})).catch(e=>this.showErrorMessage(e.response.status))})}resultsReceived(e){this.setState({strings:e,isLoading:!1})}showErrorMessage(e){if("string"==typeof e)alert(e);else{const t=e;401==t?(alert("Your session has expired... you will be redirected to the log in page"),window.location.href=`/app/login?returnUrl=${encodeURIComponent(location.pathname+location.search)}`):alert("Unknown error. Code: "+t)}}toggle(){this.setState({isOpen:!this.state.isOpen})}isOpen(){return this.props.location.pathname.startsWith("/string/")}onToggle(){l.default.push("/filters")}render(){return r.createElement(r.Fragment,null,r.createElement(i.Navbar,{color:"dark",dark:!0,expand:"lg",className:"fixed-top"},r.createElement("div",{className:"container"},r.createElement(o.Link,{to:"/",className:"navbar-brand d-none d-lg-block"},this.state.config&&this.state.config.friendlyName," Translations 🦄",this.state.user&&` ${this.state.user.name} (${d.userTypeToString(this.state.user.userType)})`),r.createElement(o.Link,{to:"/",className:"navbar-brand d-lg-none"},this.state.config&&this.state.config.friendlyName," Translations 🦄"),r.createElement(i.NavbarToggler,{onClick:this.toggle}),r.createElement(i.Collapse,{isOpen:this.state.isOpen,navbar:!0},r.createElement(i.Nav,{className:"ml-auto",navbar:!0},r.createElement(i.NavItem,null,r.createElement(i.NavLink,{href:"https://github.com/g3rv4/Traducir",target:"_blank"},"Source Code")),r.createElement(i.UncontrolledDropdown,{nav:!0,inNavbar:!0},r.createElement(i.DropdownToggle,{nav:!0,caret:!0},"Database"),r.createElement(i.DropdownMenu,{right:!0},r.createElement(i.DropdownItem,null,r.createElement("a",{href:"https://db.traducir.win",className:"dropdown-item",target:"_blank"},"Access the Database")),r.createElement(i.DropdownItem,null,r.createElement("a",{href:"https://github.com/g3rv4/Traducir/blob/master/docs/USING_REDASH.md",className:"dropdown-item",target:"_blank"},"Instructions")))),this.state.user&&r.createElement(i.NavItem,null,r.createElement(o.Link,{to:"/users",className:"nav-link"},"Users")),this.renderLogInLogOut())))),r.createElement("div",{className:"container"},r.createElement(o.Switch,null,r.createElement(o.Route,{path:"/users",exact:!0,render:e=>this.state.config?r.createElement(h.default,{showErrorMessage:this.showErrorMessage,currentUser:this.state.user,config:this.state.config}):null}),r.createElement(o.Route,{render:e=>r.createElement(r.Fragment,null,r.createElement(u.default,{onResultsFetched:this.resultsReceived,onLoading:()=>this.setState({isLoading:!0}),showErrorMessage:this.showErrorMessage,location:e.location}),r.createElement(o.Switch,null,r.createElement(o.Route,{path:"/",exact:!0,render:e=>this.state.stats?r.createElement(p.default,{stats:this.state.stats}):null}),0==this.state.strings.length&&r.createElement(o.Route,{path:"/string/",render:e=>this.state.stats?r.createElement(p.default,{stats:this.state.stats}):null}),r.createElement(o.Route,{render:e=>r.createElement(c.default,{results:this.state.strings,loadSuggestions:this.loadSuggestions,isLoading:this.state.isLoading})})))})),r.createElement(i.Modal,{isOpen:this.isOpen(),toggle:this.onToggle,className:"w-95 mw-100"},r.createElement(i.ModalHeader,{toggle:this.onToggle},"Suggestions"),r.createElement(i.ModalBody,null,this.state.currentString&&this.state.config&&r.createElement(g.default,{config:this.state.config,user:this.state.user,str:this.state.currentString,refreshString:this.refreshString,showErrorMessage:this.showErrorMessage})))))}})},"2YZa":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=s("q1tI"),a=s("i8i4"),n=s("eO8H"),i=s("+U8Q"),o=s("6gJa");a.render(r.createElement(n.Router,{history:o.default},r.createElement(i.default,null)),document.getElementById("root"))},"6gJa":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=s("YHGo").createBrowserHistory();t.default=r},"85kl":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=s("q1tI"),a=s("vDqi"),n=s("6gJa"),i=s("hKZ4");t.default=class extends r.Component{constructor(e){super(e),this.state={users:[]}}componentDidMount(){this.refreshUsers()}refreshUsers(){a.default.get("/app/api/users").then(e=>{this.setState({users:e.data})}).catch(e=>{401==e.response.status?n.default.push("/"):this.props.showErrorMessage(e.response.status)})}updateUserType(e,t){a.default.put("/app/api/users/change-type",{UserId:e.id,UserType:t}).then(e=>{this.refreshUsers()}).catch(e=>{400==e.response.status?this.props.showErrorMessage("Error updating user type"):this.props.showErrorMessage(e.response.status)})}render(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"m-2 text-center"},r.createElement("h2",null,"Users")),r.createElement("table",{className:"table"},r.createElement("thead",{className:"thead-light"},r.createElement("tr",null,r.createElement("th",null,"User"),r.createElement("th",null,"Role"),r.createElement("th",null," "))),r.createElement("tbody",null,this.state.users.map(e=>r.createElement("tr",{key:e.id},r.createElement("td",null,r.createElement("a",{href:`https://${this.props.config.siteDomain}/users/${e.id}`,target:"_blank"},e.displayName," ",e.isModerator?"♦":"")),r.createElement("td",null,i.userTypeToString(e.userType)),r.createElement("td",null,this.props.currentUser&&this.props.currentUser.canManageUsers&&r.createElement("div",{className:"btn-group",role:"group"},e.userType==i.UserType.User&&r.createElement("button",{type:"button",className:"btn btn-sm btn-warning",onClick:t=>this.updateUserType(e,i.UserType.TrustedUser)},"Make trusted user"),e.userType==i.UserType.Banned&&r.createElement("button",{type:"button",className:"btn btn-sm btn-warning",onClick:t=>this.updateUserType(e,i.UserType.User)},"Lift Ban"),e.userType==i.UserType.TrustedUser&&r.createElement("button",{type:"button",className:"btn btn-sm btn-danger",onClick:t=>this.updateUserType(e,i.UserType.User)},"Make regular user"),e.userType!=i.UserType.Banned&&e.userType!=i.UserType.TrustedUser&&e.userType!=i.UserType.Reviewer&&!e.isModerator&&r.createElement("button",{type:"button",className:"btn btn-sm btn-danger",onClick:t=>this.updateUserType(e,i.UserType.Banned)},"Ban User"))))))))}}},FWOS:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=s("q1tI"),a=s("vDqi"),n=s("6gJa"),i=s("RBzv"),o=s("hKZ4");var l;!function(e){e[e.Accept=1]="Accept",e[e.Reject=2]="Reject"}(l||(l={})),t.default=class extends r.Component{constructor(e){super(e),this.state={isButtonDisabled:!1}}render(){return this.props.suggestions&&this.props.suggestions.length?r.createElement("table",{className:"table mt-2"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Suggestion"),r.createElement("th",null,"Approved By"),r.createElement("th",null,"Created by"),r.createElement("th",null),r.createElement("th",null))),r.createElement("tbody",null,this.props.suggestions.map(e=>r.createElement("tr",{key:e.id,className:e.state==i.StringSuggestionState.ApprovedByTrustedUser?"table-success":""},r.createElement("td",null,r.createElement("pre",null,e.suggestion)),r.createElement("td",null,e.lastStateUpdatedByName&&r.createElement("a",{href:`https://${this.props.config.siteDomain}/users/${e.lastStateUpdatedById}`,target:"_blank"},e.lastStateUpdatedByName)),r.createElement("td",null,r.createElement("a",{href:`https://${this.props.config.siteDomain}/users/${e.createdById}`,target:"_blank",title:"at "+e.creationDate+" UTC"},e.createdByName)),r.createElement("td",null,this.renderDeleteButton(e)),r.createElement("td",null,this.renderSuggestionActions(e)))))):null}renderSuggestionActions(e){return this.props.user&&this.props.user.canReview?e.state==i.StringSuggestionState.ApprovedByTrustedUser&&this.props.user.userType==o.UserType.TrustedUser?null:r.createElement("div",{className:"btn-group",role:"group"},r.createElement("button",{type:"button",className:"btn btn-sm btn-success",onClick:t=>this.processReview(e,l.Accept),disabled:this.state.isButtonDisabled},r.createElement("i",{className:"fas fa-thumbs-up"})),r.createElement("button",{type:"button",className:"btn btn-sm btn-danger",onClick:t=>this.processReview(e,l.Reject),disabled:this.state.isButtonDisabled},r.createElement("i",{className:"fas fa-thumbs-down"}))):null}processReview(e,t){this.setState({isButtonDisabled:!0}),a.default.put("/app/api/review",{SuggestionId:e.id,Approve:t==l.Accept}).then(t=>{this.props.refreshString(e.stringId),n.default.push("/filters")}).catch(e=>{400==e.response.status?this.props.showErrorMessage("Error reviewing the suggestion. Do you have enough rights?"):this.props.showErrorMessage(e.response.status),this.setState({isButtonDisabled:!1})})}renderDeleteButton(e){return this.props.user&&e.createdById==this.props.user.id?r.createElement("button",{type:"button",className:"btn btn-sm btn-danger",onClick:t=>this.processDeleteReview(e),disabled:this.state.isButtonDisabled},"DELETE"):null}processDeleteReview(e){this.setState({isButtonDisabled:!0}),a.default.delete("/app/api/suggestions/"+e.id).then(t=>{this.props.refreshString(e.stringId),this.setState({isButtonDisabled:!1})}).catch(e=>{400==e.response.status?this.props.showErrorMessage("Error deleting the suggestion. Do you have enough rights?"):this.props.showErrorMessage(e.response.status),this.setState({isButtonDisabled:!1})})}}},FkmL:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=s("q1tI"),a=s("vDqi"),n=s("6gJa"),i=s("FWOS"),o=s("GAHs");t.default=class extends r.Component{constructor(e){super(e),this.state={rawString:!1},this.onCheckboxChange=this.onCheckboxChange.bind(this)}updateUrgency(e){a.default.put("/app/api/manage-urgency",{StringId:this.props.str.id,IsUrgent:e}).then(e=>{this.props.str&&this.props.refreshString(this.props.str.id),n.default.push("/filters")}).catch(e=>{400==e.response.status?this.props.showErrorMessage("Failed updating the urgency... maybe a race condition?"):this.props.showErrorMessage(e.response.status)})}renderUrgency(){return this.props.user&&this.props.user.canSuggest?this.props.str.isUrgent?r.createElement("span",null,"Yes ",r.createElement("a",{href:"#",className:"btn btn-sm btn-warning",onClick:e=>this.updateUrgency(!1)},"Mark as non urgent")):r.createElement("span",null,"No ",r.createElement("a",{href:"#",className:"btn btn-sm btn-danger",onClick:e=>this.updateUrgency(!0)},"Mark as urgent")):r.createElement("span",null,this.props.str.isUrgent?"Yes":"No")}onCheckboxChange(){this.setState({rawString:!this.state.rawString})}render(){return r.createElement(r.Fragment,null,r.createElement("div",null,r.createElement("span",{className:"font-weight-bold"},"Key: "),r.createElement("a",{href:`https://www.transifex.com/${this.props.config.transifexPath}/$?q=key%3A${this.props.str.key}`,target:"_blank"},this.props.str.key)),r.createElement("div",null,r.createElement("span",{className:"font-weight-bold"},"This string needs a new translation ASAP: ")," ",this.renderUrgency()),this.props.user&&this.props.user.canReview&&r.createElement("div",null,r.createElement("span",{className:"font-weight-bold"},"Raw string?: ")," ",r.createElement("input",{type:"checkbox",checked:this.state.rawString,onChange:this.onCheckboxChange})),r.createElement("div",null,r.createElement("span",{className:"font-weight-bold"},"Original String:")," ",r.createElement("pre",{className:"d-inline"},this.props.str.originalString)),this.props.str.variant&&r.createElement("div",null,r.createElement("span",{className:"font-weight-bold"},"Variant:")," ",this.props.str.variant.replace("VARIANT: ","")),r.createElement("div",null,r.createElement("span",{className:"font-weight-bold"},"Current Translation:")," ",this.props.str.translation?r.createElement("pre",{className:"d-inline"},this.props.str.translation):r.createElement("i",null,"Missing translation")),r.createElement(i.default,{user:this.props.user,config:this.props.config,suggestions:this.props.str.suggestions,refreshString:this.props.refreshString,showErrorMessage:this.props.showErrorMessage}),r.createElement(o.default,{user:this.props.user,stringId:this.props.str.id,rawString:this.state.rawString,refreshString:this.props.refreshString,showErrorMessage:this.props.showErrorMessage}))}}},GAHs:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=s("q1tI"),a=s("vDqi"),n=s("6gJa"),i=s("hKZ4");var o;!function(e){e[e.CreationOk=1]="CreationOk",e[e.InvalidStringId=2]="InvalidStringId",e[e.SuggestionEqualsOriginal=3]="SuggestionEqualsOriginal",e[e.EmptySuggestion=4]="EmptySuggestion",e[e.SuggestionAlreadyThere=5]="SuggestionAlreadyThere",e[e.TooFewVariables=6]="TooFewVariables",e[e.TooManyVariables=7]="TooManyVariables",e[e.DatabaseError=8]="DatabaseError"}(o||(o={})),t.default=class extends r.Component{constructor(e){super(e),this.state={suggestion:""}}postSuggestion(e){a.default.put("/app/api/suggestions",{StringId:this.props.stringId,Suggestion:this.state.suggestion,Approve:e,RawString:this.props.rawString}).then(e=>{this.props.refreshString(this.props.stringId),n.default.push("/filters")}).catch(e=>{if(400==e.response.status)switch(e.response.data){case o.DatabaseError:this.props.showErrorMessage("A database error has ocurred, please try again.");break;case o.EmptySuggestion:this.props.showErrorMessage("You send an empty suggestion, please try to send a suggestion next time");break;case o.InvalidStringId:this.props.showErrorMessage("We couldn't find the id you send, did you need to refresh your page?");break;case o.TooFewVariables:this.props.showErrorMessage("Failed sending the suggestion. You are missing some variables");break;case o.TooManyVariables:this.props.showErrorMessage("Failed sending the suggestion. You have included unrecognized variables");break;case o.SuggestionAlreadyThere:this.props.showErrorMessage("The suggestion you are sending is already suggested. Maybe you need to refresh?");break;case o.SuggestionEqualsOriginal:this.props.showErrorMessage("The suggestion you are sending is the same as the actual translation");break;default:this.props.showErrorMessage("The server encountered an error, but we don't know what happened")}else this.props.showErrorMessage(e.response.status)})}render(){return this.props.user&&this.props.user.canSuggest?r.createElement("form",null,r.createElement("div",{className:"row"},r.createElement("div",{className:"col"},r.createElement("div",{className:"form-group"},r.createElement("label",{htmlFor:"suggestion",className:"font-weight-bold"},"New Suggestion"),r.createElement("textarea",{className:"form-control",id:"suggestion",value:this.state.suggestion,onChange:e=>this.setState({suggestion:e.target.value})})))),r.createElement("div",null,r.createElement("div",{className:"mt-1"},r.createElement("div",{className:"btn-group",role:"group"},r.createElement("button",{type:"button",className:"btn btn-primary float-left",onClick:e=>this.postSuggestion(!1)},"Send new suggestion"),this.props.user.userType>=i.UserType.Reviewer&&r.createElement("button",{type:"button",className:"btn btn-warning float-left",onClick:e=>this.postSuggestion(!0)},"Send final translation"))))):null}}},H8RE:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=s("q1tI"),a=s("LvDl"),n=s("6gJa"),i=s("RBzv");t.default=class extends r.Component{constructor(e){super(e)}renderSuggestions(e){if(!e.suggestions||0==e.suggestions.length)return null;const t=a.filter(e.suggestions,e=>e.state==i.StringSuggestionState.ApprovedByTrustedUser).length,s=a.filter(e.suggestions,e=>e.state==i.StringSuggestionState.Created).length;return r.createElement(r.Fragment,null,t>0&&r.createElement("span",{className:"text-success"},t),t>0&&s>0&&r.createElement("span",null," - "),s>0&&r.createElement("span",{className:"text-danger"},s))}goToString(e){this.props.loadSuggestions(e),n.default.push("/string/"+e.id)}renderRows(e){return this.props.isLoading?r.createElement("tr",null,r.createElement("td",{colSpan:3,className:"text-center"},"Loading...")):0==e.length?r.createElement("tr",null,r.createElement("td",{colSpan:3,className:"text-center"},"No results (sad trombone)")):r.createElement(r.Fragment,null,e.map(e=>r.createElement("tr",{key:e.id,onClick:t=>this.goToString(e),className:e.isUrgent?"table-danger":e.touched?"table-success":""},r.createElement("td",null,e.originalString),r.createElement("td",null,e.translation),r.createElement("td",null,this.renderSuggestions(e)))))}render(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"m-2 text-center"},r.createElement("h2",null,"Results ",this.props.results&&this.props.results.length>0&&!this.props.isLoading&&`(${this.props.results.length})`)),r.createElement("table",{className:"table"},r.createElement("thead",{className:"thead-light"},r.createElement("tr",null,r.createElement("th",null,"String"),r.createElement("th",null,"Translation"),r.createElement("th",null,"Suggestions"))),r.createElement("tbody",null,this.renderRows(this.props.results))))}}},KU2F:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=s("hKZ4");t.userTypeToString=function(e){switch(e){case r.UserType.Banned:return"Banned";case r.UserType.User:return"User";case r.UserType.TrustedUser:return"Trusted User";case r.UserType.Reviewer:return"Reviewer"}}},RBzv:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Created=1]="Created",e[e.ApprovedByTrustedUser=2]="ApprovedByTrustedUser",e[e.ApprovedByReviewer=3]="ApprovedByReviewer",e[e.Rejected=4]="Rejected",e[e.DeletedByOwner=5]="DeletedByOwner",e[e.DismissedByOtherString=6]="DismissedByOtherString"}(t.StringSuggestionState||(t.StringSuggestionState={}))},SEEf:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=s("q1tI"),a=s("eO8H");t.default=class extends r.Component{render(){return r.createElement("div",{className:"row text-center"},r.createElement("div",{className:"col d-none d-lg-block"},r.createElement("div",{className:"btn-group",role:"group","aria-label":"Basic example"},r.createElement("button",{type:"button",className:"btn btn-outline-secondary",disabled:!0},this.props.stats.totalStrings," total strings"),this.props.stats.urgentStrings>0&&r.createElement(a.Link,{to:"/filters?urgencyStatus=1",className:"btn btn-danger"},this.props.stats.urgentStrings," marked as urgent"),r.createElement(a.Link,{to:"/filters?translationStatus=2",className:"btn btn-outline-danger"},this.props.stats.withoutTranslation," without translation"),r.createElement(a.Link,{to:"/filters?suggestionsStatus=3",className:"btn btn-outline-primary"},this.props.stats.waitingApproval," suggestions awaiting approval"),r.createElement(a.Link,{to:"/filters?suggestionsStatus=4",className:"btn btn-outline-success"},this.props.stats.waitingReview," approved suggestions awaiting review"))),r.createElement("div",{className:"col d-lg-none"},r.createElement("div",{className:"btn-group-vertical",role:"group","aria-label":"Basic example"},r.createElement("button",{type:"button",className:"btn btn-outline-secondary",disabled:!0},this.props.stats.totalStrings," total strings"),this.props.stats.urgentStrings>0&&r.createElement(a.Link,{to:"/filters?urgencyStatus=1",className:"btn btn-danger"},this.props.stats.urgentStrings," marked as urgent"),r.createElement(a.Link,{to:"/filters?translationStatus=2",className:"btn btn-outline-danger"},this.props.stats.withoutTranslation," without translation"),r.createElement(a.Link,{to:"/filters?suggestionsStatus=3",className:"btn btn-outline-primary"},this.props.stats.waitingApproval," suggestions awaiting approval"),r.createElement(a.Link,{to:"/filters?suggestionsStatus=4",className:"btn btn-outline-success"},this.props.stats.waitingReview," approved suggestions awaiting review"))))}}},aUEq:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=s("q1tI"),a=s("LvDl"),n=s("vDqi"),i=s("6gJa"),o=s("cr+I"),l=s("eO8H");var u,c,g,p;!function(e){e[e.AnyStatus=0]="AnyStatus",e[e.DoesNotHaveSuggestions=1]="DoesNotHaveSuggestions",e[e.HasSuggestionsNeedingReview=2]="HasSuggestionsNeedingReview",e[e.HasSuggestionsNeedingApproval=3]="HasSuggestionsNeedingApproval",e[e.HasSuggestionsNeedingReviewApprovedByTrustedUser=4]="HasSuggestionsNeedingReviewApprovedByTrustedUser"}(u||(u={})),function(e){e[e.AnyStatus=0]="AnyStatus",e[e.WithTranslation=1]="WithTranslation",e[e.WithoutTranslation=2]="WithoutTranslation"}(c||(c={})),function(e){e[e.AnyStatus=0]="AnyStatus",e[e.NeedsPush=1]="NeedsPush",e[e.DoesNotNeedPush=2]="DoesNotNeedPush"}(g||(g={})),function(e){e[e.AnyStatus=0]="AnyStatus",e[e.IsUrgent=1]="IsUrgent",e[e.IsNotUrgent=2]="IsNotUrgent"}(p||(p={})),t.default=class extends r.Component{constructor(e){super(e),this.submitForm=a.debounce(()=>{this.props.onLoading(),n.default.post("/app/api/strings/query",this.state).then(e=>{this.setState({hasError:!1}),this.props.onResultsFetched(e.data)}).catch(e=>{400==e.response.status?(this.setState({hasError:!0}),this.props.onResultsFetched([])):this.props.showErrorMessage(e.response.status)})},1e3),this.state=this.getStateFromLocation(this.props.location),this.hasFilter()||e.location.pathname.startsWith("/string")||i.default.replace("/")}hasFilter(){return this.state.sourceRegex||this.state.translationRegex||this.state.key||this.state.translationStatus||this.state.suggestionsStatus||this.state.pushStatus||this.state.urgencyStatus}componentDidMount(){this.hasFilter()&&this.submitForm()}componentWillReceiveProps(e,t){"/filters"!=e.location.pathname||e.location.search||this.hasFilter()?this.props.location.search!=e.location.search&&"/filters"!=this.props.location.pathname&&this.setState(this.getStateFromLocation(e.location),()=>{this.hasFilter()||e.location.pathname.startsWith("/string")?this.submitForm():i.default.replace("/")}):i.default.replace("/")}getStateFromLocation(e){this.props.onLoading();const t=o.parse(e.search);return{sourceRegex:t.sourceRegex||"",translationRegex:t.translationRegex||"",key:t.key||"",translationStatus:t.translationStatus||c.AnyStatus,suggestionsStatus:t.suggestionsStatus||u.AnyStatus,pushStatus:t.pushStatus||g.AnyStatus,urgencyStatus:t.urgencyStatus||p.AnyStatus}}handleField(e){this.setState(Object.assign({},e,{hasError:!1}),()=>{if(!this.hasFilter())return void i.default.replace("/");this.submitForm();const e="/filters?"+this.currentPath();location.pathname.startsWith("/filters")?i.default.replace(e):i.default.push(e)})}reset(){this.setState({sourceRegex:"",translationRegex:"",key:"",translationStatus:c.AnyStatus,suggestionsStatus:u.AnyStatus,pushStatus:g.AnyStatus,urgencyStatus:p.AnyStatus},()=>{this.props.onResultsFetched([])})}currentPath(){return o.stringify(a.pickBy(this.state,e=>e))}render(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"m-2 text-center"},r.createElement("h2",null,"Filters")),r.createElement("div",{className:"row"},r.createElement("div",{className:"col"},r.createElement("div",{className:"form-group"},r.createElement("label",{htmlFor:"sourceRegex"},"Source Regex"),r.createElement("input",{type:"text",className:"form-control",id:"sourceRegex",placeholder:"^question",value:this.state.sourceRegex,onChange:e=>this.handleField({sourceRegex:e.target.value})}))),r.createElement("div",{className:"col"},r.createElement("div",{className:"form-group"},r.createElement("label",{htmlFor:"translationRegex"},"Translation Regex"),r.createElement("input",{type:"text",className:"form-control",id:"translationRegex",placeholder:"(?i)pregunta$",value:this.state.translationRegex,onChange:e=>this.handleField({translationRegex:e.target.value})})))),r.createElement("div",{className:"row"},r.createElement("div",{className:"col"},r.createElement("div",{className:"form-group"},r.createElement("label",{htmlFor:"withoutTranslation"},"Strings without translation"),r.createElement("select",{className:"form-control",id:"withoutTranslation",value:this.state.translationStatus,onChange:e=>this.handleField({translationStatus:parseInt(e.target.value)})},r.createElement("option",{value:c.AnyStatus},"Any string"),r.createElement("option",{value:c.WithoutTranslation},"Only strings without translation"),r.createElement("option",{value:c.WithTranslation},"Only strings with translation")))),r.createElement("div",{className:"col"},r.createElement("div",{className:"form-group"},r.createElement("label",{htmlFor:"suggestionsStatus"},"Strings with pending suggestions"),r.createElement("select",{className:"form-control",id:"suggestionsStatus",value:this.state.suggestionsStatus,onChange:e=>this.handleField({suggestionsStatus:parseInt(e.target.value)})},r.createElement("option",{value:u.AnyStatus},"Any string"),r.createElement("option",{value:u.DoesNotHaveSuggestions},"Strings without suggestions"),r.createElement("option",{value:u.HasSuggestionsNeedingApproval},"Strings with suggestions awaiting approval"),r.createElement("option",{value:u.HasSuggestionsNeedingReview},"Strings with suggestions awaiting review"),r.createElement("option",{value:u.HasSuggestionsNeedingReviewApprovedByTrustedUser},"Strings with approved suggestions awaiting review"))))),r.createElement("div",{className:"row"},r.createElement("div",{className:"col"},r.createElement("div",{className:"form-group"},r.createElement("label",{htmlFor:"key"},"Key"),r.createElement("input",{type:"text",className:"form-control",id:"key",value:this.state.key,onChange:e=>this.handleField({key:e.target.value})}))),r.createElement("div",{className:"col"},r.createElement("div",{className:"form-group"},r.createElement("label",{htmlFor:"suggestionsStatus"},"Strings with urgency status"),r.createElement("select",{className:"form-control",id:"urgencyStatus",value:this.state.urgencyStatus,onChange:e=>this.handleField({urgencyStatus:parseInt(e.target.value)})},r.createElement("option",{value:p.AnyStatus},"Any string"),r.createElement("option",{value:p.IsUrgent},"Is urgent"),r.createElement("option",{value:p.IsNotUrgent},"Is not urgent"))))),this.state.hasError&&r.createElement("div",{className:"row"},r.createElement("div",{className:"col"},r.createElement("div",{className:"alert alert-danger",role:"alert"},"Error when performing the filter... are the regular expressions ok?"))),r.createElement("div",{className:"row text-center mb-5"},r.createElement("div",{className:"col"},r.createElement(l.Link,{to:"/",className:"btn btn-secondary",onClick:e=>this.reset()},"Reset"))),"/filters"==location.pathname&&""==location.search&&this.hasFilter()&&r.createElement(l.Redirect,{to:{pathname:"/filters",search:this.currentPath()}}))}}},hKZ4:function(e,t,s){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Unknown=0]="Unknown",e[e.Banned=1]="Banned",e[e.User=2]="User",e[e.TrustedUser=3]="TrustedUser",e[e.Reviewer=4]="Reviewer"}(r=t.UserType||(t.UserType={})),t.userTypeToString=function(e){switch(e){case r.Unknown:return"Unknown";case r.Banned:return"Banned";case r.User:return"User";case r.TrustedUser:return"Trusted User";case r.Reviewer:return"Reviewer"}}}});