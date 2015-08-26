$wnd.GwtBootstrap3Demo.runAsyncCallback40("function WEc(){}\nfunction $Ec(){}\nfunction aFc(){}\nfunction bFc(){bFc=w9;ZEc=new aFc}\nfunction VEc(){IBb(this,XEc(new YEc))}\nfunction Dkc(a){pqb.call(this,a);Ckc(this)}\nfunction PEc(a,b,c){ZAb();tBb.call(this,a,b,c,(Ykc(),Xkc))}\nfunction YEc(){this.a=(new $Ec,bFc(),ZEc);_Ec(this.a)}\nfunction YIc(a){var b;if(!a.L){b=new VEc(new WEc);a.L=b}return a.L}\nfunction XIc(a){var b;if(!a.K){b=new PEc(yAb(XBb(a.a)),YIc(a),WIc(a));RAb(($Bb(a.a),b),kCb($Bb(a.a)));a.K=b}return a.K}\nfunction _Ec(a){if(!a.a){a.a=true;Du((DA(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction XEc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new hYb;lSb(a,(b=new wUb(Ujd),lSb(b,(c=new $Wb,c.a='Offline',ZWb(c),c)),lSb(b,(d=new jTb,lSb(d,(e=new fVb((M4b(),J4b)),zdb((Pkb(),e.db),'GPBYFDECM',true),Qkc(e.b,dqd),mSb(e,e.b,0),e)),lSb(d,new Kkc((j=new RHb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new qbb(j.a)).a)),lSb(d,(f=new $Oc,YXb(f,(k=new RHb,k.a+=eqd,new qbb(k.a)).a),zdb(f.db,Zjd,true),f)),lSb(d,new Kkc((l=new RHb,l.a+=fqd,new qbb(l.a)).a)),lSb(d,(g=new $Oc,YXb(g,(m=new RHb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new qbb(m.a)).a),zdb(g.db,Zjd,true),g)),zdb(d.db,'GPBYFDEBM',true),d)),lSb(b,(h=new kXb,lSb(h,(n=new zXb,lSb(n,(o=new fVb(I4b),Qkc(o.b,'What is Offline?'),mSb(o,o.b,0),o)),n)),lSb(h,(p=new mXb,lSb(p,new Dkc((q=new RHb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new qbb(q.a)).a)),p)),lSb(h,new wXb),h)),lSb(b,(i=new kXb,lSb(i,(r=new zXb,lSb(r,(s=new fVb(I4b),Qkc(s.b,'How to configure?'),mSb(s,s.b,0),s)),r)),lSb(i,(t=new mXb,lSb(t,new Kkc((u=new RHb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new qbb(u.a)).a)),lSb(t,(v=new $Oc,YXb(v,(w=new RHb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new qbb(w.a)).a),zdb(v.db,Zjd,true),v)),lSb(t,new Kkc((A=new RHb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new qbb(A.a)).a)),lSb(t,(B=new $Oc,YXb(B,(C=new RHb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new qbb(C.a)).a),zdb(B.db,Zjd,true),B)),lSb(t,new Kkc((D=new RHb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new qbb(D.a)).a)),lSb(t,(F=new $Oc,YXb(F,(G=new RHb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new qbb(G.a)).a),zdb(F.db,Zjd,true),F)),t)),lSb(i,new wXb),i)),b));return a}\nv9(378,216,hid,Dkc);v9(894,48,Vgd,PEc);var D0=gGb(Jjd,'OfflinePresenter',894);v9(1129,Wgd,Xgd,VEc);var I0=gGb(Jjd,'OfflineView',1129);v9(1358,1,{},WEc);var H0=gGb(Jjd,'OfflineView_BinderImpl',1358);v9(1359,1,{},YEc);var E0=gGb(Jjd,'OfflineView_BinderImpl/Widgets',1359);v9(1685,1,{},$Ec);var ZEc;var G0=gGb(Jjd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1685);v9(1686,1,{},aFc);_.a=false;var F0=gGb(Jjd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1686);v9(818,1,fjd);_.Ob=function uJc(){uDb(this.b,XIc(this.a.a))};Hed(mm)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")