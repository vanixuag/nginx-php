!function(t){function i(i){for(var o,r,a=i[0],c=i[1],h=i[2],f=0,l=[];f<a.length;f++)r=a[f],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&l.push(n[r][0]),n[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);for(u&&u(i);l.length;)l.shift()();return s.push.apply(s,h||[]),e()}function e(){for(var t,i=0;i<s.length;i++){for(var e=s[i],o=!0,a=1;a<e.length;a++){var c=e[a];0!==n[c]&&(o=!1)}o&&(s.splice(i--,1),t=r(r.s=e[0]))}return t}var o={},n={4:0},s=[];function r(i){if(o[i])return o[i].exports;var e=o[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=o,r.d=function(t,i,e){r.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,i){if(1&i&&(t=r(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var o in t)r.d(e,o,function(i){return t[i]}.bind(null,o));return e},r.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(i,"a",i),i},r.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},r.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=i,a=a.slice();for(var h=0;h<a.length;h++)i(a[h]);var u=c;s.push([68,0]),e()}({4:function(t,i,e){"use strict";var o=e(0),n=e.n(o),s=e(1),r="jenkins-loaded-"+(new Date).getTime();function a(t){return n()(t).height()}i.a={onload:function(t,i,e){function o(){setTimeout(s,50)}function s(){var s=n()(t,e).not(r);s.length>0?(s.addClass(r),!0===i(s)&&o()):o()}s()},winScrollTop:function(){return n()(Object(s.getWindow)()).scrollTop()},onWinScroll:function(t){n()(Object(s.getWindow)()).on("scroll",t)},pageHeaderHeight:function(){return a("#page-head")},breadcrumbBarHeight:function(){return a("#breadcrumbBar")},fireBottomStickerAdjustEvent:function(){Event.fire(window,"jenkins:bottom-sticker-adjust")},removeTextHighlighting:function(t){n()("span.highlight-split",t).each((function(){var t=n()(this);t.before(t.text()),t.remove()}))}}},6:function(t,i,e){"use strict";var o=e(1),n=Object(o.getWindow)().localStorage;function s(){n={storage:{},setItem:function(t,i){this.storage[t]=i},getItem:function(t){return this.storage[t]},removeItem:function(t){delete this.storage[t]}}}void 0===n&&(console.warn("HTML5 localStorage not supported by this browser."),s());var r={setMock:s,setItem:function(t,i){n.setItem(t,i)},getItem:function(t,i){var e=n.getItem(t);return e||(e=i),e},removeItem:function(t){return n.removeItem(t)}};i.a={setGlobalItem:function(t,i){r.setItem("jenkins:"+t,i)},getGlobalItem:function(t,i){return r.getItem("jenkins:"+t,i)},setPageItem:function(t,i){t="jenkins:"+t+":"+Object(o.getWindow)().location.href,r.setItem(t,i)},getPageItem:function(t,i){return t="jenkins:"+t+":"+Object(o.getWindow)().location.href,r.getItem(t,i)}}},68:function(t,i,e){e(69),t.exports=e(70)},69:function(t,i,e){"use strict";e.r(i),e.d(i,"tabs",(function(){return c}));var o=e(0),n=e.n(o),s=e(6),r=e(4),a=e(8),c=[];n()((function(){a.b(".config-table.tabbed",(function(t){c.push(t);var i=t.getSection("config_general");if(i&&i.adoptSection("config_advanced_project_options"),a.a(t),t.onShowSection((function(){r.a.fireBottomStickerAdjustEvent()})),t.hasSections()){var e="config:"+t.configForm.attr("name")+":last-tab",o=s.a.getPageItem(e,t.sections[0].id);t.onShowSection((function(){s.a.setPageItem(e,this.id)})),t.showSection(o)}}))}))},70:function(t,i,e){var o=e(9),n=e(71);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var s={insert:"head",singleton:!1};o(n,s);t.exports=n.locals||{}},71:function(t,i,e){},8:function(t,i,e){"use strict";e.d(i,"b",(function(){return S})),e.d(i,"a",(function(){return k}));var o,n=e(0),s=e.n(n),r=e(1),a=e.n(r),c=e(4),h=function(){return o||u(),o};function u(){(o=s.a).expr[":"].containsci=o.expr.createPseudo((function(t){return function(i){return-1!==o(i).text().toUpperCase().indexOf(t.toUpperCase())}}))}function f(t){return"config_"+(t=t.trim()).replace(/[\W_]+/g,"_").toLowerCase()}function l(t,i){this.startRow=t,this.parentRowGroupContainer=i,this.endRow=void 0,this.rows=[],this.rowGroups=[],this.toggleWidget=void 0,this.label=void 0}a.a.getWindow((function(){o=void 0})),u(),l.prototype.getRowCount=function(t){var i=this.rows.length;if(void 0===t||!0===t)for(var e=0;e<this.rowGroups.length;e++)i+=this.rowGroups[e].getRowCount();return i},l.prototype.getLabels=function(){var t=[];this.label&&t.push(this.label);for(var i=0;i<this.rowGroups.length;i++){var e=this.rowGroups[i];t.push(e.getLabels())}return t},l.prototype.updateVisibility=function(){if(void 0!==this.toggleWidget)for(var t=this.toggleWidget.is(":checked"),i=0;i<this.rows.length;i++)t?this.rows[i].show():this.rows[i].not(".help-area").hide();for(var e=0;e<this.rowGroups.length;e++){this.rowGroups[e].updateVisibility()}},l.prototype.findToggleWidget=function(t){var i=h()(":input.block-control",t);1===i.length&&(this.toggleWidget=i,this.label=i.next().text(),i.addClass("disable-behavior"))};var d=l,g=c.a.pageHeaderHeight();function v(t,i){this.headerRow=t,this.parentCMD=i,this.title=t.attr("title"),this.id=f(this.title),this.rowGroups=void 0,this.activator=void 0,this.subSections=[],this.headerRow.addClass(this.id)}v.prototype.isTopLevelSection=function(){return void 0!==this.parentCMD.getSection(this.id)},v.prototype.isVisible=function(){return this.headerRow.is(":visible")},v.prototype.getViewportEntryOffset=function(){return this.headerRow.offset().top-g},v.prototype.getSibling=function(t){for(var i=this.parentCMD.sections,e=i.length-1,o=0;o<e;o++){var n=o+t;if(!(n<0)){if(n>e)return;if(i[o]===this)return i[n]}}},v.prototype.adoptSection=function(t){if(this.isTopLevelSection()){var i=this.parentCMD.getSection(t);i&&this.parentCMD.removeSection(i.id)&&this.subSections.push(i)}},v.prototype.getRows=function(){var t=this.headerRow.next(),i=[],e=0;for(i.push(t);1===t.length&&!t.hasClass("section-header-row");)i.push(t),t.hasClass(this.id)||(e++,t.addClass(this.id)),t=t.next();return e>0&&void 0!==this.rowGroups&&this.gatherRowGroups(i),i},v.prototype.setActivator=function(t){this.activator=t;var i=this;i.activator.click((function(){i.parentCMD.showSection(i)}))},v.prototype.activate=function(){this.activator?this.activator.click():console.warn("No activator attached to config section object.")},v.prototype.markAsActive=function(){this.parentCMD.hideSection(),this.activator.addClass("active"),this.markRowsAsActive()},v.prototype.markRowsAsActive=function(){for(var t=this.getRows(),i=0;i<t.length;i++)t[i].addClass("active");for(var e=0;e<this.subSections.length;e++)this.subSections[e].markRowsAsActive();this.updateRowGroupVisibility()},v.prototype.hasText=function(t){for(var i=h(),e=":containsci('"+t+"')",o=this.getRows(),n=0;n<o.length;n++){if(i(e,o[n]).length>0)return!0}for(var s=0;s<this.subSections.length;s++)if(this.subSections[s].hasText(t))return!0;return!1},v.prototype.activeRowCount=function(){for(var t=0,i=this.getRows(),e=0;e<i.length;e++)i[e].hasClass("active")&&t++;return t},v.prototype.updateRowGroupVisibility=function(){void 0===this.rowGroups&&this.gatherRowGroups();for(var t=0;t<this.rowGroups.length;t++){this.rowGroups[t].updateVisibility()}for(var i=0;i<this.subSections.length;i++)this.subSections[i].updateRowGroupVisibility()},v.prototype.gatherRowGroups=function(t){if(this.rowGroups=[],void 0===t&&(t=this.getRows()),t.length>0){var i=new d(t[0],void 0);this.rowGroups=i.rowGroups;for(var e=0;e<t.length;e++){var o=t[e];if(o.hasClass("row-group-start")){var n=new d(o,i);i&&i.rowGroups.push(n),i=n,n.findToggleWidget(o)}else i&&(o.hasClass("row-group-end")?(i.endRow=o,i=i.parentRowGroupContainer):void 0===i.toggleWidget?i.findToggleWidget(o):i.rows.push(o))}}},v.prototype.getRowGroupLabels=function(){for(var t=[],i=0;i<this.rowGroups.length;i++){var e=this.rowGroups[i];t.push(e.getLabels())}return t},v.prototype.highlightText=function(t){for(var i=h(),e=":containsci('"+t+"')",o=this.getRows(),n=0;n<o.length;n++){var s=o[n];if(c.a.removeTextHighlighting(s),""!==t){var r=new RegExp("("+t+")","gi");i(e,s).find(":not(:input)").each((function(){i(this).contents().each((function(){if(3===this.nodeType){var t=i(this),e=t.text().replace(r,'<span class="highlight">$1</span>');t.replaceWith('<span class="highlight-split">'+e+"</span>")}}))}))}}for(var a=0;a<this.subSections.length;a++)this.subSections[a].highlightText(t)};var p=v;function w(t){var i=t.closest("form");return i.addClass("jenkins-config"),i}function b(t,i){this.$=h(),this.configForm=t,this.configTable=i,this.configTableBody="DIV"===i[0].nodeName?i:this.$("> tbody",i),this.activatorContainer=void 0,this.sections=[],this.findInput=void 0,this.showListeners=[],this.configWidgets=void 0,this.addWidgetsContainer(),this.addFindWidget()}b.prototype.getTopRows=function(){return this.configTableBody.find("tr, .tr, .jenkins-section > .jenkins-section__title")},b.prototype.getFirstRow=function(){return this.getTopRows().first()},b.prototype.addWidgetsContainer=function(){var t=h();this.configWidgets=t('<div class="jenkins-config-widgets"></div>'),this.configWidgets.insertBefore(this.configForm)},b.prototype.addFindWidget=function(){var t,i=h(),e=this,o=i('<div class="find-container"><div class="find"><span title="Clear" class="clear">x</span><input placeholder="find"/></div></div>');e.findInput=i("input",o),i(".clear",o).click((function(){e.findInput.val(""),e.showSections(""),e.findInput.focus()})),e.findInput.keydown((function(){t&&(clearTimeout(t),t=void 0),t=setTimeout((function(){t=void 0,e.showSections(e.findInput.val())}),300)})),i(".jenkins-config-widgets .find-container input").focus((function(){c.a.fireBottomStickerAdjustEvent()})),this.configWidgets.append(o)},b.prototype.sectionCount=function(){return this.sections.length},b.prototype.hasSections=function(){var t=this.sectionCount()>0;return t||console.warn("Jenkins configuration without sections?"),t},b.prototype.sectionIds=function(){for(var t=[],i=0;i<this.sections.length;i++)t.push(this.sections[i].id);return t},b.prototype.activateSection=function(t){if(!t)throw'Invalid section id "'+t+'"';var i=this.getSection(t);i&&i.activate()},b.prototype.activeSection=function(){if(this.hasSections())for(var t=0;t<this.sections.length;t++){var i=this.sections[t];if(i.activator.hasClass("active"))return i}},b.prototype.getSection=function(t){if(this.hasSections())if("number"==typeof t){if(t>=0&&t<=this.sections.length-1)return this.sections[t]}else for(var i=0;i<this.sections.length;i++){var e=this.sections[i];if(e.id===t)return e}},b.prototype.removeSection=function(t){if(this.hasSections())for(var i=0;i<this.sections.length;i++){var e=this.sections[i];if(e.id===t)return this.sections.splice(i,1),e.activator&&e.activator.remove(),!0}return!1},b.prototype.activateFirstSection=function(){this.hasSections()&&this.activateSection(this.sections[0].id)},b.prototype.activeSectionCount=function(){var t=0;if(this.hasSections())for(var i=0;i<this.sections.length;i++){this.sections[i].activator.hasClass("active")&&t++}return t},b.prototype.showSection=function(t){if("string"==typeof t&&(t=this.getSection(t)),t){var i=this.getTopRows();t.markAsActive(),i.filter(".config_buttons").show(),t.highlightText(this.findInput.val()),function(t,i){for(var e=0;e<t.length;e++)o(t[e],i);function o(t,i){setTimeout((function(){t.call(i)}),1)}}(this.showListeners,t)}},b.prototype.hideSection=function(){var t=this.getTopRows();h()(".config-section-activator.active",this.activatorContainer).removeClass("active"),t.filter(".active").removeClass("active")},b.prototype.onShowSection=function(t){this.showListeners.push(t)},b.prototype.showSections=function(t){if(this.removeTextHighlighting(),""===t){if(this.hasSections()){for(var i=0;i<this.sections.length;i++)this.sections[i].activator.removeClass("hidden");var e=this.activeSection();e?e.highlightText(this.findInput.val()):this.showSection(this.sections[0])}}else if(this.hasSections()){for(var o=[],n=0;n<this.sections.length;n++){var s=this.sections[n];s.hasText(t)?(s.activator.removeClass("hidden"),o.push(s)):s.activator.addClass("hidden")}o.length>0?this.showSection(o[0]):this.hideSection()}},b.prototype.trackSectionVisibility=function(){if(!function(){if(void 0===window)return!0;if(void 0===window.navigator)return!0;if(void 0===window.navigator.userAgent)return!0;if("JasmineTest"===window.navigator.userAgent)return!0;if("JenkinsTest"===window.navigator.userAgent)return!0;if(-1!==window.navigator.userAgent.toLowerCase().indexOf("jsdom"))return!0;return!1}()){var t=this;try{for(var i=0;i<this.sections.length;i++){var e=this.sections[i];e.isVisible()?e.activator.show():e.activator.hide()}}finally{var o=t.trackSectionVisibilityTO||0;o+=10,o=Math.min(o,500),t.trackSectionVisibilityTO=o,setTimeout((function(){t.trackSectionVisibility()}),o)}}},b.prototype.removeTextHighlighting=function(){c.a.removeTextHighlighting(this.configForm)};var m={markConfigTableParentForm:w,findConfigTables:function(){return h()('form[name="config"] > div')},fromConfigTable:function(t){var i=h(),e=i(".jenkins-section__title",t),o=w(t);e.each((function(){var t=i(this),e=t.text();0===e.indexOf("#")&&(e=e.substring(1)),t.addClass("section-header-row"),t.attr("title",e)}));var n,s=new b(o,t),r=s.getTopRows(),a=s.getFirstRow();if(!a.hasClass("section-header-row")){var c;c="TR"===t[0].nodeName?"tr":"div";var u=i("<"+c+' class="section-header-row insert first tr" title="General"><div class="jenkins-section__title"><a class="section-anchor">#</a>General</div></'+c+">");a.before(u),a=s.getFirstRow();var l=i.makeArray(r);l.unshift(u[0]),r=i(l)}a.addClass("section-header-row"),a.attr("title","General"),r.each((function(){var t=i(this);t.hasClass("section-header-row")&&(n=new p(t,s),s.sections.push(n))}));var d=i("#bottom-sticker",t).closest("tr, .tr");return d.removeClass(n.id),d.addClass(f("buttons")),s}},y=e(6),S=function(t,i,e){s()((function(){c.a.onload(".block-control",(function(){var o=s()(t);o.length>0&&("yes"===y.a.getGlobalItem("config:usetabs","yes")?o.each((function(){var t=s()(this),o=C(t,e);i.call(t,o),o.deactivator.click((function(){y.a.setGlobalItem("config:usetabs","no"),Object(r.getWindow)().location.reload()}))})):o.each((function(){var t=s()(this),i=T(t);m.markConfigTableParentForm(t),i.click((function(){y.a.setGlobalItem("config:usetabs","yes"),Object(r.getWindow)().location.reload()}))})))}),t)}))},C=function(t,i){var e,o=(i||{}).trackSectionVisibility||!1;if(s.a.isArray(t))e=t;else if("string"==typeof t){var n=s()(t);if(0===n.length)throw"No config table found using selector '"+t+"'";e=m.fromConfigTable(n)}else e=m.fromConfigTable(t);var r,a=s()('<div class="tabBar config-section-activators"></div>');function c(t){var i=s()('<div class="tab config-section-activator"></div>');return i.text(t.title),i.addClass(t.id),i}e.activatorContainer=a;for(var h=0;h<e.sections.length;h++){var u=c(r=e.sections[h]);a.append(u),r.setActivator(u)}var f=s()('<div class="form-config tabBarFrame"></div>'),l=s()('<div class="noTabs" title="Remove configuration tabs and revert to the &quot;classic&quot; configuration view">Remove tabs</div>');return e.configWidgets.append(f),e.configWidgets.prepend(l),f.append(a),f.mouseenter((function(){f.addClass("mouse-over")})),f.mouseleave((function(){f.removeClass("mouse-over")})),e.deactivator=l,e.activateFirstSection(),!0===o&&e.trackSectionVisibility(),e},T=function(t){var i=s()('<div class="jenkins-config-widgets"><div class="showTabs" title="Add configuration section tabs">Add tabs</div></div>');return i.insertBefore(t.parent()),i},k=function(t){var i=s()('<div class="find-toggle" title="Find"></div>');i.click((function(){var i=s()(".find-container",t.configWidgets);i.hasClass("visible")?(i.removeClass("visible"),y.a.setGlobalItem("config:showfinder","no")):(i.addClass("visible"),s()("input",i).focus(),y.a.setGlobalItem("config:showfinder","yes"))})),"yes"===y.a.getGlobalItem("config:showfinder","yes")&&i.click()}}});
//# sourceMappingURL=config-tabbar.js.map