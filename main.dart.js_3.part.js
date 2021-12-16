self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={zc:function zc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},a5C:function a5C(d,e,f,g,h,i,j,k){var _=this
_.r=d
_.x=e
_.a=f
_.b=g
_.c=h
_.d=i
_.e=j
_.f=k},IZ:function IZ(){},KQ:function KQ(){},ai0:function ai0(){},aaY:function aaY(d){this.a=d},Ml:function Ml(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},lN:function lN(){},ab0:function ab0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},ab_:function ab_(d,e,f){this.a=d
this.b=e
this.c=f},ab1:function ab1(d,e,f){this.a=d
this.b=e
this.c=f},aaZ:function aaZ(d,e){this.a=d
this.b=e},l2:function l2(d,e,f){this.a=d
this.b=e
this.c=f},HK:function HK(){},Zo:function Zo(d,e){this.a=d
this.b=e},yM:function yM(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.f=f
_.b=g
_.a=h},
aOW(d,e){var w=new A.LB(B.b([],x.i))
w.a_i(d,e)
return w},
oq:function oq(d,e){this.a=d
this.b=e},
je:function je(d,e,f){this.a=d
this.b=e
this.c=f},
ab2:function ab2(){this.b=this.a=null},
ab4:function ab4(d){this.a=d},
nG:function nG(){},
ab3:function ab3(d){this.a=d},
LB:function LB(d){this.a=d
this.b=null},
aag:function aag(d){this.a=d},
Ue:function Ue(){},
Ud:function Ud(){},
aIO(d,e,f,g){var w,v,u,t=f.c-f.a,s=f.d-f.b
if(!e.k(0,new B.P(t,s))){w=Math.min(e.a/t,e.b/s)
v=new B.P(t,s).Z(0,w).bB(0,2)
u=e.bB(0,2)
d.aO(0,u.a-v.a,u.b-v.b)
d.d2(0,w,w)}},
MS:function MS(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.a=g},
Nq:function Nq(d,e,f,g,h){var _=this
_.C=d
_.q=e
_.w=f
_.L=g
_.r1=_.k4=null
_.r2=!1
_.ry=_.rx=null
_.x1=0
_.d=!1
_.f=_.e=null
_.x=_.r=!1
_.y=null
_.z=!1
_.Q=!0
_.ch=null
_.cx=!1
_.cy=null
_.db=!1
_.dx=h
_.dy=!1
_.fr=$
_.fx=!0
_.fy=null
_.go=!0
_.id=null
_.a=0
_.c=_.b=null},
aBe(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d==null||d.length===0)return null
if(d==="none")return null
if(d[0]==="#"){if(d.length===4){w=d[1]
v=d[2]
u=d[3]
d="#"+w+w+v+v+u+u}t=B.eN(J.aLZ(d,1),16)
s=d.length
if(s===7)return new B.i((t|4278190080)>>>0)
if(s===9)return new B.i(t>>>0)}if(D.b.bv(d.toLowerCase(),"rgba")){s=x.e
r=B.au(new B.a7(B.b(D.b.K(d,J.Hq(d,"(")+1,D.b.dG(d,")")).split(","),x.s),new A.awY(),s),!0,s.i("aZ.E"))
s=A.aQ(D.c.e6(r),!1)
s.toString
q=B.ag(r).i("a7<1,o>")
p=B.au(new B.a7(r,new A.awZ(),q),!0,q.i("aZ.E"))
return B.Iz(p[0],p[1],p[2],s)}if(D.b.bv(d.toLowerCase(),"hsl")){s=x.x
o=B.au(new B.a7(B.b(D.b.K(d,J.Hq(d,"(")+1,D.b.dG(d,")")).split(","),x.s),new A.ax_(),s),!0,s.i("aZ.E"))
n=D.d.cL(o[0]/360,1)
s=o[1]
m=o[2]/100
l=o.length>3?o[3]:255
p=B.b([0,0,0],x.n)
if(n<0.16666666666666666){p[0]=1
p[1]=n*6}else if(n<0.3333333333333333){p[0]=2-n*6
p[1]=1}else if(n<0.5){p[1]=1
p[2]=n*6-2}else if(n<0.6666666666666666){p[1]=4-n*6
p[2]=1}else{q=n*6
if(n<0.8333333333333334){p[0]=q-4
p[2]=1}else{p[0]=1
p[2]=6-q}}q=x.K
p=B.au(new B.a7(p,new A.ax0(s/100),q),!0,q.i("aZ.E"))
s=B.ag(p).i("a7<1,L>")
p=m<0.5?B.au(new B.a7(p,new A.ax1(m),s),!0,s.i("aZ.E")):B.au(new B.a7(p,new A.ax2(m),s),!0,s.i("aZ.E"))
s=B.ag(p).i("a7<1,L>")
p=B.au(new B.a7(p,new A.ax3(),s),!0,s.i("aZ.E"))
return B.aH(l,J.Z0(p[0]),J.Z0(p[1]),J.Z0(p[2]))}if(D.b.bv(d.toLowerCase(),"rgb")){s=x.x
p=B.au(new B.a7(B.b(D.b.K(d,J.Hq(d,"(")+1,D.b.dG(d,")")).split(","),x.s),new A.ax4(),s),!0,s.i("aZ.E"))
k=p.length>3?p[3]:255
return B.aH(k,p[0],p[1],p[2])}j=C.Ld.h(0,d)
if(j!=null)return j
throw B.c(B.V('Could not parse "'+B.d(d)+'" as a color.'))},
awY:function awY(){},
awZ:function awZ(){},
ax_:function ax_(){},
ax0:function ax0(d){this.a=d},
ax1:function ax1(d){this.a=d},
ax2:function ax2(d){this.a=d},
ax3:function ax3(){},
ax4:function ax4(){},
aRv(d,e){var w,v,u,t=null,s=A.aWv(d.x),r=A.ah(d.x,"id","",t)
if(d.f!=null){B.cJ(new B.bj(new B.vy("Unsupported nested <svg> element."),t,"SVG",B.aY("in _Element.svg"),new A.amC(d),!1))
w=B.b([],x.R)
v=d.x
u=s.b
d.e.dY(0,new A.G0("svg",new A.ll(r,w,A.rs(d.b,v,d.d,new B.E(0,0,0+u.a,0+u.b),t,t),t)))
return t}s.toString
w=d.d
v=s.b
v=new A.tg(s,r,t,B.b([],x.R),w,A.rs(d.b,d.x,w,new B.E(0,0,0+v.a,0+v.b),t,t))
d.f=v
w=d.y
w.toString
d.Di(w,v)
return t},
aRr(d,e){var w,v,u,t,s,r=null,q=d.e
q=q.gP(q).b
q.toString
w=A.ah(d.x,"id","",r)
v=B.b([],x.R)
u=d.x
t=d.f.a.b
t=A.rs(d.b,u,d.d,new B.E(0,0,0+t.a,0+t.b),q.gcS(q),r)
u=A.oy(A.ah(d.x,"transform",r,r))
s=new A.ll(w,v,t,u==null?r:u.a)
if(!d.r)D.c.B(q.geR(q),s)
q=d.y
q.toString
d.Di(q,s)
return r},
aRw(d,e){var w,v,u,t,s=null,r=d.e
r=r.gP(r).b
r.toString
w=A.ah(d.x,"id","",s)
v=B.b([],x.R)
r=A.rs(d.b,d.x,d.d,s,r.gcS(r),s)
u=A.oy(A.ah(d.x,"transform",s,s))
u=u==null?s:u.a
t=d.y
t.toString
d.Di(t,new A.ll(w,v,r,u))
return s},
aRy(d,e){var w,v,u,t,s,r,q,p=null,o=d.e,n=o.gP(o).b
o=d.x
w=A.ah(o,"href",A.ah(o,"href","",p),"http://www.w3.org/1999/xlink")
if(w.length===0)return p
o=d.x
v=d.d
u=d.f.a.b
t=A.rs(d.b,o,v,new B.E(0,0,0+u.a,0+u.b),n.gcS(n),p)
s=A.oy(A.ah(d.x,"transform",p,p))
if(s==null){s=new B.aL(new Float64Array(16))
s.cE()}o=A.aQ(A.ah(d.x,"x","0",p),!1)
u=A.aQ(A.ah(d.x,"y","0",p),!1)
u.toString
s.aO(0,o,u)
v=v.z6("url("+w+")")
v.toString
r=new A.ll(A.ah(d.x,"id","",p),B.b([v.pR(t)],x.R),t,s.a)
q=d.xc(r)
if(!d.r||!q)D.c.B(n.geR(n),r)
return p},
aGb(d,e,f){var w,v,u,t,s,r=null
for(w=new B.eb(d.rv().a());w.u();){v=w.gA(w)
if(v instanceof A.hT)continue
if(v instanceof A.h_){u=A.ah(d.x,"stop-opacity","1",r)
t=A.aBe(A.ah(d.x,"stop-color","",r))
if(t==null)t=D.p
v=A.aQ(u,!1)
v.toString
s=t.a
e.push(B.aH(D.d.aE(255*v),s>>>16&255,s>>>8&255,s&255))
s=A.ah(d.x,"offset","0%",r)
s.toString
f.push(A.mB(s))}}return r},
aRu(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=A.ah(a6.x,"gradientUnits",j,j),h=i!=="userSpaceOnUse",g=A.ah(a6.x,"cx","50%",j),f=A.ah(a6.x,"cy","50%",j),e=A.ah(a6.x,"r","50%",j),d=A.ah(a6.x,"fx",g,j),a0=A.ah(a6.x,"fy",f,j),a1=A.aIB(a6.x),a2="url(#"+B.d(A.ah(a6.x,"id","",j))+")",a3=A.oy(A.ah(a6.x,"gradientTransform",j,j)),a4=B.b([],x.n),a5=B.b([],x.Z)
if(a6.y.d){w=a6.x
v=A.ah(w,"href",A.ah(w,"href","",j),"http://www.w3.org/1999/xlink")
u=x.B.a(a6.d.a.h(0,"url("+B.d(v)+")"))
if(u==null)A.aBh(a6.b,v,"radialGradient")
else{if(i==null)h=u.d===C.ck
D.c.R(a5,u.b)
D.c.R(a4,u.a)}}else A.aGb(a6,a5,a4)
t=B.br("cx")
s=B.br("cy")
r=B.br("r")
q=B.br("fx")
p=B.br("fy")
if(h){g.toString
t.b=A.mB(g)
f.toString
s.b=A.mB(f)
e.toString
r.b=A.mB(e)
d.toString
q.b=A.mB(d)
a0.toString
p.b=A.mB(a0)}else{g.toString
if(D.b.dB(g,"%"))w=A.mC(g,1)*(0+a6.f.a.b.a-0)+0
else{w=A.aQ(g,!1)
w.toString}t.b=w
f.toString
if(D.b.dB(f,"%"))w=A.mC(f,1)*(0+a6.f.a.b.b-0)+0
else{w=A.aQ(f,!1)
w.toString}s.b=w
e.toString
if(D.b.dB(e,"%")){w=A.mC(e,1)
o=a6.f.a.b
o=w*((0+o.b-0+(0+o.a-0))/2)
w=o}else{w=A.aQ(e,!1)
w.toString}r.b=w
d.toString
if(D.b.dB(d,"%"))w=A.mC(d,1)*(0+a6.f.a.b.a-0)+0
else{w=A.aQ(d,!1)
w.toString}q.b=w
a0.toString
if(D.b.dB(a0,"%"))w=A.mC(a0,1)*(0+a6.f.a.b.b-0)+0
else{w=A.aQ(a0,!1)
w.toString}p.b=w}w=t.aD()
o=s.aD()
n=r.aD()
m=!J.e(q.aD(),t.aD())||!J.e(p.aD(),s.aD())?new B.m(q.aD(),p.aD()):new B.m(t.aD(),s.aD())
l=h?C.ck:C.kO
k=a3==null?j:a3.a
a6.d.a.t(0,a2,new A.Jh(new B.m(w,o),n,m,a4,a5,a1,l,k))
return j},
aRt(d,e){var w,v,u,t,s,r,q=null,p=A.ah(d.x,"gradientUnits",q,q),o=p!=="userSpaceOnUse",n=A.ah(d.x,"x1","0%",q),m=A.ah(d.x,"x2","100%",q),l=A.ah(d.x,"y1","0%",q),k=A.ah(d.x,"y2","0%",q),j="url(#"+B.d(A.ah(d.x,"id","",q))+")",i=A.oy(A.ah(d.x,"gradientTransform",q,q)),h=A.aIB(d.x),g=B.b([],x.Z),f=B.b([],x.n)
if(d.y.d){w=d.x
v=A.ah(w,"href",A.ah(w,"href","",q),"http://www.w3.org/1999/xlink")
u=x.B.a(d.d.a.h(0,"url("+B.d(v)+")"))
if(u==null)A.aBh(d.b,v,"linearGradient")
else{if(p==null)o=u.d===C.ck
D.c.R(g,u.b)
D.c.R(f,u.a)}}else A.aGb(d,g,f)
if(o){n.toString
w=A.mB(n)
l.toString
t=new B.m(w,A.mB(l))
m.toString
w=A.mB(m)
k.toString
s=new B.m(w,A.mB(k))}else{n.toString
if(D.b.dB(n,"%"))w=A.mC(n,1)*(0+d.f.a.b.a-0)+0
else{w=A.aQ(n,!1)
w.toString}l.toString
if(D.b.dB(l,"%"))r=A.mC(l,1)*(0+d.f.a.b.b-0)+0
else{r=A.aQ(l,!1)
r.toString}t=new B.m(w,r)
m.toString
if(D.b.dB(m,"%"))w=A.mC(m,1)*(0+d.f.a.b.a-0)+0
else{w=A.aQ(m,!1)
w.toString}k.toString
if(D.b.dB(k,"%"))r=A.mC(k,1)*(0+d.f.a.b.b-0)+0
else{r=A.aQ(k,!1)
r.toString}s=new B.m(w,r)}w=o?C.ck:C.kO
r=i==null?q:i.a
d.d.a.t(0,j,new A.Jg(t,s,f,g,h,w,r))
return q},
aRq(d,e){var w,v,u,t,s,r,q,p,o=null,n="url(#"+B.d(A.ah(d.x,"id","",o))+")",m=B.b([],x.F)
for(w=new B.eb(d.rv().a()),v=d.d,u=o;w.u();){t=w.gA(w)
if(t instanceof A.hT)continue
if(t instanceof A.h_){s=t.b
r=C.qm.h(0,s)
if(r!=null){t=A.aUv(r.$1(d.x),d.x)
t.toString
s=A.aIz(A.ah(d.x,"clip-rule","nonzero",o))
s.toString
t.spw(s)
s=u==null
if(!s&&t.gpw()!==u.gpw()){m.push(t)
u=t}else if(s){m.push(t)
u=t}else u.P0(0,t,D.j)}else if(s==="use"){t=d.x
new A.amA(m).$1(v.z6("url("+B.d(A.ah(t,"href",A.ah(t,"href","",o),"http://www.w3.org/1999/xlink"))+")"))}else{q="Unsupported clipPath child "+s
s=B.aY("in _Element.clipPath")
p=$.fx()
if(p!=null)p.$1(new B.bj(new B.vy(q),o,"SVG",s,new A.amz(t,d),!1))}}}v.b.t(0,n,m)
return o},
amB(d,e){return A.aRs(d,!1)},
aRs(d,e){var w=0,v=B.A(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$amB=B.w(function(f,a0){if(f===1)return B.x(a0,v)
while(true)switch(w){case 0:h=d.x
g=A.ah(h,"href",A.ah(h,"href","",null),"http://www.w3.org/1999/xlink")
if(g==null){w=1
break}h=A.aQ(A.ah(d.x,"x","0",null),!1)
h.toString
t=A.aQ(A.ah(d.x,"y","0",null),!1)
t.toString
s=A.aQ(A.ah(d.x,"width","0",null),!1)
s.toString
r=A.aQ(A.ah(d.x,"height","0",null),!1)
r.toString
w=3
return B.B(A.axd(g),$async$amB)
case 3:q=a0
p=d.e
o=p.gP(p).b
n=o.gcS(o)
m=A.ah(d.x,"id","",null)
l=d.x
k=d.f.a.b
k=A.rs(d.b,l,d.d,new B.E(0,0,0+k.a,0+k.b),n,null)
l=A.oy(A.ah(d.x,"transform",null,null))
l=l==null?null:l.a
j=new A.yq(m,q,new B.m(h,t),new B.P(s,r),l,k)
i=d.xc(j)
if(!d.r||!i){h=p.gP(p).b
D.c.B(h.geR(h),j)}case 1:return B.y(u,v)}})
return B.z($async$amB,v)},
aA7(d,e){return A.aRx(d,!1)},
aRx(d,e){var w=0,v=B.A(x.H),u,t,s,r,q,p,o
var $async$aA7=B.w(function(f,g){if(f===1)return B.x(g,v)
while(true)switch(w){case 0:o={}
if(d.y.d){w=1
break}t=B.hg(null,x.bM)
o.a=0
s=new A.amE(o,t,d)
r=new A.amD(o,t,d)
q=d.y
q.toString
r.$1(q)
for(q=new B.eb(d.rv().a());q.u();){p=q.gA(q)
if(p instanceof A.oc)s.$1(D.b.dk(p.b))
else if(p instanceof A.od)s.$1(D.b.dk(p.b))
if(p instanceof A.h_)r.$1(p)
else if(p instanceof A.hT)t.e6(0)}case 1:return B.y(u,v)}})
return B.z($async$aA7,v)},
aS0(d){var w,v,u,t=A.aQ(A.ah(d,"cx","0",null),!1)
t.toString
w=A.aQ(A.ah(d,"cy","0",null),!1)
w.toString
v=A.aQ(A.ah(d,"r","0",null),!1)
v.toString
u=B.jk(new B.m(t,w),v)
v=B.bO()
v.kg(0,u)
return v},
aS3(d){var w=A.ah(d,"d","",null)
w.toString
return A.aIA(w)},
aS6(d){var w,v,u,t,s,r,q=null,p=A.aQ(A.ah(d,"x","0",q),!1)
p.toString
w=A.aQ(A.ah(d,"y","0",q),!1)
w.toString
v=A.aQ(A.ah(d,"width","0",q),!1)
v.toString
u=A.aQ(A.ah(d,"height","0",q),!1)
u.toString
t=new B.E(p,w,p+v,w+u)
s=A.ah(d,"rx",q,q)
r=A.ah(d,"ry",q,q)
if(s==null)s=r
if(r==null)r=s
if(s!=null&&s!==""){p=A.aQ(s,!1)
p.toString
w=A.aQ(r,!1)
w.toString
v=B.bO()
v.fP(0,B.aF_(t,p,w))
return v}p=B.bO()
p.iz(0,t)
return p},
aS4(d){return A.aGo(d,!0)},
aS5(d){return A.aGo(d,!1)},
aGo(d,e){var w,v=A.ah(d,"points","",null)
if(v==="")return null
w="M"+B.d(v)
return A.aIA(w+(e?"z":""))},
aS1(d){var w,v,u,t,s=null,r=A.aQ(A.ah(d,"cx","0",s),!1)
r.toString
w=A.aQ(A.ah(d,"cy","0",s),!1)
w.toString
v=A.aQ(A.ah(d,"rx","0",s),!1)
v.toString
u=A.aQ(A.ah(d,"ry","0",s),!1)
u.toString
r-=v
w-=u
t=B.bO()
t.kg(0,new B.E(r,w,r+v*2,w+u*2))
return t},
aS2(d){var w,v,u,t,s=null,r=A.aQ(A.ah(d,"x1","0",s),!1)
r.toString
w=A.aQ(A.ah(d,"x2","0",s),!1)
w.toString
v=A.aQ(A.ah(d,"y1","0",s),!1)
v.toString
u=A.aQ(A.ah(d,"y2","0",s),!1)
u.toString
t=B.bO()
t.eC(0,r,v)
t.cB(0,w,u)
return t},
Wz:function Wz(d,e,f){this.a=d
this.b=e
this.c=f},
amC:function amC(d){this.a=d},
amA:function amA(d){this.a=d},
amz:function amz(d,e){this.a=d
this.b=e},
amE:function amE(d,e,f){this.a=d
this.b=e
this.c=f},
amD:function amD(d,e,f){this.a=d
this.b=e
this.c=f},
G0:function G0(d,e){this.a=d
this.b=e},
o3:function o3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=null
_.r=!1
_.y=_.x=null
_.z=0},
aWo(d,e){var w
if(d==null||d==="")return null
w=A.aQ(d,!0)
if(w!=null)return w
d=D.b.dk(d.toLowerCase())
w=$.aAO.h(0,d)
if(w!=null)return w
if(d==="larger"){if(e==null)return $.aAO.h(0,"large")
return e*1.2}if(d==="smaller"){if(e==null)return $.aAO.h(0,"small")
return e/1.2}throw B.c(B.V("Could not parse font-size: "+d))},
aWu(d){switch(d){case"inherit":return null
case"middle":return C.FB
case"end":return C.FC
case"start":default:return C.kq}},
oy(d){var w,v,u,t,s,r,q,p,o
if(d==null||d==="")return null
w=$.aKT().b
if(!w.test(d))throw B.c(B.V("illegal or unsupported transform: "+d))
w=$.aKS().n_(0,d)
w=B.au(w,!0,B.p(w).i("v.E"))
v=new B.cL(w,B.ag(w).i("cL<1>"))
u=new B.aL(new Float64Array(16))
u.cE()
for(w=new B.dq(v,v.gp(v)),t=B.p(w).c;w.u();){s=t.a(w.d)
r=s.nZ(1)
r.toString
q=D.b.dk(r)
p=s.nZ(2)
o=C.KO.h(0,q)
if(o==null)throw B.c(B.V("Unsupported transform: "+q))
u=o.$2(p,u)}return u},
aTY(d,e){var w,v,u,t,s,r,q,p
d.toString
w=D.b.eJ(D.b.dk(d),$.YU())
v=A.aQ(w[0],!1)
v.toString
u=A.aQ(w[1],!1)
u.toString
t=A.aQ(w[2],!1)
t.toString
s=A.aQ(w[3],!1)
s.toString
r=A.aQ(w[4],!1)
r.toString
q=A.aQ(w[5],!1)
q.toString
p=new B.aL(new Float64Array(16))
p.ht(v,u,0,0,t,s,0,0,0,0,1,0,r,q,0,1)
return p.fD(e)},
aU0(d,e){var w,v=A.aQ(d,!1)
v.toString
v=Math.tan(v)
w=new B.aL(new Float64Array(16))
w.ht(1,0,0,0,v,1,0,0,0,0,1,0,0,0,0,1)
return w.fD(e)},
aU1(d,e){var w,v=A.aQ(d,!1)
v.toString
v=Math.tan(v)
w=new B.aL(new Float64Array(16))
w.ht(1,v,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
return w.fD(e)},
aU2(d,e){var w,v,u,t
d.toString
w=D.b.eJ(d,$.YU())
v=A.aQ(w[0],!1)
v.toString
if(w.length<2)u=0
else{t=A.aQ(w[1],!1)
t.toString
u=t}t=new B.aL(new Float64Array(16))
t.ht(1,0,0,0,0,1,0,0,0,0,1,0,v,u,0,1)
return t.fD(e)},
aU_(d,e){var w,v,u,t
d.toString
w=D.b.eJ(d,$.YU())
v=A.aQ(w[0],!1)
v.toString
if(w.length<2)u=v
else{t=A.aQ(w[1],!1)
t.toString
u=t}t=new B.aL(new Float64Array(16))
t.ht(v,0,0,0,0,u,0,0,0,0,1,0,0,0,0,1)
return t.fD(e)},
aTZ(d,e){var w,v,u,t,s,r,q,p
d.toString
w=D.b.eJ(d,$.YU())
v=A.aQ(w[0],!1)
v.toString
u=v*0.017453292519943295
v=Math.cos(u)
t=Math.sin(u)
s=Math.sin(u)
r=Math.cos(u)
q=new B.aL(new Float64Array(16))
q.ht(v,t,0,0,-s,r,0,0,0,0,1,0,0,0,0,1)
if(w.length>1){v=A.aQ(w[1],!1)
v.toString
if(w.length===3){t=A.aQ(w[2],!1)
t.toString
p=t}else p=v
t=new B.aL(new Float64Array(16))
t.ht(1,0,0,0,0,1,0,0,0,0,1,0,v,p,0,1)
t=t.fD(e).fD(q)
s=new B.aL(new Float64Array(16))
s.ht(1,0,0,0,0,1,0,0,0,0,1,0,-v,-p,0,1)
return t.fD(s)}else return q.fD(e)},
aIz(d){if(d==="inherit"||d==null)return null
return d!=="evenodd"?D.b0:D.dm},
axd(d){var w=0,v=B.A(x.I),u,t,s,r,q
var $async$axd=B.w(function(e,f){if(e===1)return B.x(f,v)
while(true)switch(w){case 0:r=new A.axe()
w=D.b.bv(d,"http")?3:4
break
case 3:q=r
w=5
return B.B(A.awu(d),$async$axd)
case 5:u=q.$1(f)
w=1
break
case 4:if(D.b.bv(d,"data:")){t=D.b.bg(d,D.b.dG(d,",")+1)
s=$.aKU()
u=r.$1(D.z7.dP(B.jW(t,s,"")))
w=1
break}throw B.c(B.S("Could not resolve image href: "+d))
case 1:return B.y(u,v)}})
return B.z($async$axd,v)},
aHZ(d,e,f){var w=null,v=B.aaB(B.aaC(w,w,w,w,w,w,w,w,w,w,w,w)),u=e.e,t=f==null?w:f.yS()
if(t==null)t=w
v.ui(0,B.azU(w,w,u.a,u.b,u.c,w,u.r,w,w,u.x,u.e,u.d,t,u.Q,w,u.y,u.ch,w,u.f,u.z))
v.oR(0,d)
u=v.c2(0)
u.fB(0,D.qM)
return u},
mB(d){var w
if(D.b.dB(d,"%"))return A.mC(d,1)
else{w=A.aQ(d,!1)
w.toString
return w}},
mC(d,e){var w=A.aQ(D.b.K(d,0,d.length-1),!1)
w.toString
return w/100*e},
axe:function axe(){},
aHr(d){var w
if(d==="100%"||d==="")return 1/0
d.toString
w=B.abF(B.jW(d,"px",""))
return w==null?1/0:w},
aWv(d){var w,v,u,t,s,r,q=null,p=A.ah(d,"viewBox","",q),o=A.ah(d,"width","",q),n=A.ah(d,"height","",q),m=p===""
if(m&&o===""&&n==="")throw B.c(B.V("SVG did not specify dimensions\n\nThe SVG library looks for a `viewBox` or `width` and `height` attribute to determine the viewport boundary of the SVG.  Note that these attributes, as with all SVG attributes, are case sensitive.\nDuring processing, the following attributes were found:\n  "+B.d(d)))
w=A.aHr(o)
v=A.aHr(n)
if(m)return new A.Jl(D.j,new B.P(w,v),new B.P(w,v))
p.toString
u=D.b.eJ(p,B.bV("[ ,]+",!0))
if(u.length<4)throw B.c(B.V("viewBox element must be 4 elements long"))
m=A.aQ(u[2],!1)
m.toString
t=A.aQ(u[3],!1)
t.toString
s=A.aQ(u[0],!1)
s.toString
r=A.aQ(u[1],!1)
r.toString
return new A.Jl(new B.m(-s,-r),new B.P(m,t),new B.P(w,v))},
aIB(d){switch(A.ah(d,"spreadMethod","pad",null)){case"pad":return D.b2
case"repeat":return D.x2
case"reflect":return D.SO
default:return D.b2}},
aWk(d){var w,v,u=A.ah(d,"stroke-dasharray","",null)
if(u==="")return null
else if(u==="none")return $.aBy()
u.toString
w=D.b.eJ(u,B.bV("[ ,]+",!0))
v=B.ag(w).i("a7<1,L>")
return new A.xQ(B.au(new B.a7(w,new A.ax5(),v),!0,v.i("aZ.E")))},
aWl(d){var w,v=A.ah(d,"stroke-dashoffset","",null)
if(v==="")return null
v.toString
if(D.b.dB(v,"%")){w=A.aQ(D.b.K(v,0,v.length-1),!1)
w.toString
return new A.y8(D.d.E(w/100,0,1),C.V0)}else{w=A.aQ(v,!1)
w.toString
return new A.y8(w,C.iZ)}},
aWs(d){var w,v=A.ah(d,"opacity",null,null)
if(v!=null){w=A.aQ(v,!1)
w.toString
return D.d.E(w,0,1)}return null},
aHh(d,e,f,g,h,i){var w,v=null,u=g.a.h(0,f),t=u!=null?u.Q5(0,h):v
if(t==null)A.aBh(d,f,"_getDefinitionPaint")
w=B.Iz(255,255,255,i)
return new A.n1(w,t,v,v,v,v,v,e,v,v,v,v)},
aWt(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=A.ah(e,"stroke","",l)
k.toString
w=A.ah(e,"stroke-opacity","1.0",l)
v=A.ah(e,"opacity","",l)
u=A.aQ(w,!1)
u.toString
t=D.d.E(u,0,1)
if(v!==""){u=A.aQ(v,!1)
u.toString
t*=D.d.E(u,0,1)}if(D.b.bv(k,"url")){f.toString
return A.aHh(d,D.X,k,g,f,t)}u=k===""
if(u)s=h==null||h===C.bP
else s=!1
if(s)return l
if(k==="none")return C.bP
r=A.ah(e,"stroke-linecap","",l)
q=A.ah(e,"stroke-linejoin","",l)
p=A.ah(e,"stroke-miterlimit","",l)
o=A.ah(e,"stroke-width","",l)
if(u){k=h==null?l:h.a
if(k==null)k=D.p
k=k.a
k=B.aH(D.d.aE(255*t),k>>>16&255,k>>>8&255,k&255)}else{k=A.aBe(k)
k.toString
k=k.a
k=B.aH(D.d.aE(255*t),k>>>16&255,k>>>8&255,k&255)}if(r==="null"){u=h==null?l:h.y
if(u==null)u=D.bj}else u=D.c.ky(C.Im,new A.ax6(r),new A.ax7())
if(q===""){s=h==null?l:h.z
if(s==null)s=D.cJ}else s=D.c.ky(C.I1,new A.ax8(q),new A.ax9())
if(p===""){n=h==null?l:h.Q
if(n==null)n=4}else n=A.aQ(p,!1)
if(o===""){m=h==null?l:h.ch
if(m==null)m=1}else m=A.aQ(o,!1)
return new A.n1(k,l,l,l,l,l,l,D.X,u,s,n,m)},
aWm(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.ah(e,"fill","",r)
q.toString
w=A.ah(e,"fill-opacity","1.0",r)
v=A.ah(e,"opacity","",r)
u=A.aQ(w,!1)
u.toString
t=D.d.E(u,0,1)
u=v===""
if(!u){s=A.aQ(v,!1)
s.toString
t*=D.d.E(s,0,1)}if(D.b.bv(q,"url")){f.toString
return A.aHh(d,D.aw,q,g,f,t)}if(q===""&&h===C.bP)return r
if(q==="none")return C.bP
s=h==null?r:h.a
return new A.n1(A.aT8(s,q,t,!u||w!=="",i),r,r,r,r,r,r,D.aw,r,r,r,r)},
aT8(d,e,f,g,h){var w,v=A.aBe(e),u=v==null?d:v
if(u==null)u=h
if(g&&u!=null){v=D.d.aE(255*f)
w=u.a
return B.aH(v,w>>>16&255,w>>>8&255,w&255)}return u},
aUv(d,e){var w=A.oy(A.ah(e,"transform",null,null))
if(w!=null)return d.T(0,w.a)
else return d},
aWi(d,e){var w=A.ah(d,"clip-path","",null)
if(w!==""){w.toString
return e.b.h(0,w)}return null},
aWr(d,e){var w=A.ah(d,"mask","",null)
if(w!==""){w.toString
return e.z6(w)}return null},
aWp(d){if(d==null)return null
switch(d){case"100":return D.ci
case"200":return D.kI
case"300":return D.ef
case"normal":case"400":return D.v
case"500":return D.af
case"600":return D.kJ
case"bold":case"700":return D.aF
case"800":return D.kK
case"900":return D.hb}throw B.c(B.S('Attribute value for font-weight="'+d+'" is not supported'))},
rs(d,e,f,g,h,i){var w,v,u=null,t=h==null,s=A.aWt(d,e,g,f,t?u:h.a),r=A.aWk(e),q=A.aWl(e),p=A.aWm(d,e,g,f,t?u:h.d,i),o=A.aIz(A.ah(e,"fill-rule",!t?u:"nonzero",u)),n=A.aWs(e),m=A.aWr(e,f),l=A.aWi(e,f),k=A.ah(e,"font-family","",u),j=A.ah(e,"font-size","",u)
if(t)t=u
else t=h.e.x
t=A.aWo(j,t)
j=A.aWp(A.ah(e,"font-weight",u,u))
w=A.aWu(A.ah(e,"text-anchor","inherit",u))
v=A.ah(e,"mix-blend-mode","",u)
v.toString
return A.Ji(h,C.LB.h(0,v),l,r,q,p,n,m,o,s,new A.Jk(u,u,u,j,u,u,k,t,u,u,u,u,u,u,w))},
ax5:function ax5(){},
ax6:function ax6(d){this.a=d},
ax7:function ax7(){},
ax8:function ax8(d){this.a=d},
ax9:function ax9(){},
PD:function PD(d,e,f){this.e=d
this.c=e
this.a=f},
X9:function X9(d,e,f){var _=this
_.F=d
_.q$=e
_.r1=_.k4=null
_.r2=!1
_.ry=_.rx=null
_.x1=0
_.d=!1
_.f=_.e=null
_.x=_.r=!1
_.y=null
_.z=!1
_.Q=!0
_.ch=null
_.cx=!1
_.cy=null
_.db=!1
_.dx=f
_.dy=!1
_.fr=$
_.fx=!0
_.fy=null
_.go=!0
_.id=null
_.a=0
_.c=_.b=null},
ah(d,e,f,g){var w,v
d.toString
w=D.b.dk(A.aHg(d,"style",null))
if(w!==""&&!0){v=D.c.ky(B.b(w.split(";"),x.s),new A.awp(e),new A.awq())
if(v!=="")v=D.b.dk(D.b.bg(v,D.b.dG(v,":")+1))}else v=""
if(v==="")v=D.b.dk(A.aHg(d,e,g))
return v===""?f:v},
aHg(d,e,f){var w,v,u,t
for(w=J.ab(d);w.u();){v=w.gA(w)
u=v.a
t=D.b.dG(u,":")
if((t>0?D.b.bg(u,t+1):u)===e)return v.b}return""},
awp:function awp(d){this.a=d},
awq:function awq(){},
Ji(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=null,s=d==null,r=A.aDj(i,s?t:d.d),q=A.aDj(m,s?t:d.a)
if(g==null)w=s?t:d.b
else w=g
if(h==null)v=s?t:d.c
else v=h
u=A.aNt(n,s?t:d.e)
if(l==null)s=s?t:d.f
else s=l
return new A.a33(q,w,v,r,u,s,f,k,j,e)},
aDj(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=d==null
if(l&&e==null)return null
if(e==null&&!l)return d
if(d===C.bP||e===C.bP)return l?e:d
if(l)return e
l=d.x
if(l==null)l=e.x
w=d.a
if(w==null)w=e.a
v=d.b
if(v==null)v=e.b
u=e.c
t=e.d
s=e.e
r=e.f
q=e.r
p=d.y
if(p==null)p=e.y
o=d.z
if(o==null)o=e.z
n=d.Q
if(n==null)n=e.Q
m=d.ch
return new A.n1(w,v,u,t,s,r,q,l,p,o,n,m==null?e.ch:m)},
aNt(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(e==null)return d
w=e.a
v=e.b
u=e.c
t=d.d
if(t==null)t=e.d
s=e.e
r=e.f
q=d.r
if(q==null)q=e.r
p=d.x
if(p==null)p=e.x
o=e.y
n=e.z
m=e.Q
l=e.ch
k=e.cx
j=e.cy
i=d.db
return new A.Jk(w,v,u,t,s,r,q,p,o,n,m,l,k,j,i==null?e.db:i)},
aDk(d,e,f){switch(e.a){case 1:return new B.m(f.a-d.gS6()/2,f.b-d.gjk(d))
case 2:return new B.m(f.a-d.gS6(),f.b-d.gjk(d))
case 0:return new B.m(f.a,f.b-d.gjk(d))
default:return f}},
a33:function a33(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.x=k
_.y=l
_.z=m},
n1:function n1(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.ch=o},
Jk:function Jk(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.ch=o
_.cx=p
_.cy=q
_.db=r},
yr:function yr(d,e){this.a=d
this.b=e},
Jj:function Jj(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
a2Z:function a2Z(d,e,f){this.a=d
this.b=e
this.c=f},
K9:function K9(d,e){this.a=d
this.b=e},
p2:function p2(){},
Jg:function Jg(d,e,f,g,h,i,j){var _=this
_.f=d
_.r=e
_.a=f
_.b=g
_.c=h
_.d=i
_.e=j},
Jh:function Jh(d,e,f,g,h,i,j,k){var _=this
_.f=d
_.r=e
_.x=f
_.a=g
_.b=h
_.c=i
_.d=j
_.e=k},
Jl:function Jl(d,e,f){this.a=d
this.b=e
this.c=f},
tg:function tg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a31:function a31(d){this.a=d},
ll:function ll(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a3_:function a3_(d,e,f){this.a=d
this.b=e
this.c=f},
a30:function a30(d){this.a=d},
yq:function yq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
th:function th(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a32:function a32(d,e,f){this.a=d
this.b=e
this.c=f},
qu(d,e,f){var w,v=null,u=$.aJG()
$.aC0().toString
w=e==null?v:new B.rT(e,D.yI)
return new A.Cv(f,new A.yM(d,v,v,u,v),w,v)},
ai_:function ai_(){},
Cv:function Cv(d,e,f,g){var _=this
_.c=d
_.r=e
_.cy=f
_.a=g},
ai3:function ai3(){},
G1:function G1(d){var _=this
_.e=_.d=null
_.f=!1
_.a=null
_.b=d
_.c=null},
at9:function at9(d,e){this.a=d
this.b=e},
aVe(d,e,f){var w,v,u,t,s,r,q,p,o,n
if(f==null)f=C.Fm
w=B.bO()
for(v=d.adT(),v=v.ga2(v),u=e.a,t=f.a,s=f.b===C.iZ;v.u();){r=v.gA(v)
q=r.gp(r)
p=s?t:q*t
for(o=!0;p<r.gp(r);){q=e.b
if(q>=u.length)q=e.b=0
e.b=q+1
n=u[q]
if(o)w.P0(0,r.ag7(p,p+n),D.j)
p+=n
o=!o}}return w},
aMS(d){return new A.xQ(d)},
Rs:function Rs(d,e){this.a=d
this.b=e},
y8:function y8(d,e){this.a=d
this.b=e},
xQ:function xQ(d){this.a=d
this.b=0},
aIA(d){var w,v,u,t,s,r,q,p,o,n,m,l,k
if(d==="")return B.bO()
w=new A.ai2(d,C.c2,d.length)
w.rD()
v=B.bO()
u=new A.a4O(v)
t=new A.ai1(C.cM,C.cM,C.cM,C.c2)
for(s=new B.eb(w.Sp().a());s.u();){r=s.gA(s)
switch(r.a.a){case 9:q=1
break
case 7:q=2
break
case 17:q=3
break
case 3:case 5:case 13:case 15:case 19:case 11:q=4
break
case 12:q=5
break
case 14:q=6
break
case 1:q=7
break
default:q=8
break}c$0:for(;!0;)switch(q){case 1:p=r.c
o=t.a
n=o.a
o=o.b
r.c=new A.ce(p.a+n,p.b+o)
p=r.b
r.b=new A.ce(p.a+n,p.b+o)
break c$0
case 2:p=r.c
o=t.a
r.c=new A.ce(p.a+o.a,p.b+o.b)
q=3
continue c$0
case 3:p=r.d
o=t.a
r.d=new A.ce(p.a+o.a,p.b+o.b)
q=4
continue c$0
case 4:p=r.b
o=t.a
r.b=new A.ce(p.a+o.a,p.b+o.b)
break c$0
case 5:r.b=new A.ce(r.b.a,t.a.b)
break c$0
case 6:r.b=new A.ce(t.a.a,r.b.b)
break c$0
case 7:r.b=t.b
break c$0
case 8:break c$0}switch(r.a.a){case 3:case 2:q=1
break
case 5:case 4:case 13:case 12:case 15:case 14:q=2
break
case 1:q=3
break
case 17:case 16:q=4
break
case 7:case 6:q=5
break
case 19:case 18:q=6
break
case 9:case 8:q=7
break
case 11:case 10:q=8
break
default:q=9
break}c$3:for(;!0;)switch(q){case 1:p=t.b=r.b
v.eC(0,p.a,p.b)
break c$3
case 2:p=r.b
v.cB(0,p.a,p.b)
break c$3
case 3:v.bo(0)
break c$3
case 4:p=t.d
p=p===C.iB||p===C.iC||p===C.iv||p===C.iw
o=t.a
if(!p)r.c=o
else{p=t.c
r.c=new A.ce(2*o.a-p.a,2*o.b-p.b)}q=5
continue c$3
case 5:p=t.c=r.d
o=r.c
n=r.b
v.pc(0,o.a,o.b,p.a,p.b,n.a,n.b)
break c$3
case 6:p=t.d
p=p===C.iD||p===C.iE||p===C.ix||p===C.iy
o=t.a
if(!p)r.c=o
else{p=t.c
r.c=new A.ce(2*o.a-p.a,2*o.b-p.b)}q=7
continue c$3
case 7:p=t.c=r.c
o=t.a
n=2*p.a
m=(o.a+n)*0.3333333333333333
p=2*p.b
o=(o.b+p)*0.3333333333333333
r.c=new A.ce(m,o)
l=r.b
k=l.a
n=(k+n)*0.3333333333333333
l=l.b
p=(l+p)*0.3333333333333333
r.d=new A.ce(n,p)
v.pc(0,m,o,n,p,k,l)
break c$3
case 8:if(!t.a1Q(t.a,r,u)){p=r.b
v.cB(0,p.a,p.b)}break c$3
case 9:B.W(B.V("Invalid command type in path"))
break c$3}p=r.b
t.a=p
r=r.a
if(!(r===C.iB||r===C.iC||r===C.iv||r===C.iw))o=!(r===C.iD||r===C.iE||r===C.ix||r===C.iy)
else o=!1
if(o)t.c=p
t.d=r}return v},
a4O:function a4O(d){this.a=d},
aaI:function aaI(){},
ce:function ce(d,e){this.a=d
this.b=e},
ai2:function ai2(d,e,f){var _=this
_.a=d
_.b=e
_.c=0
_.d=f},
M6:function M6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=!1},
ai1:function ai1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dt:function dt(d,e){this.a=d
this.b=e},
y_:function y_(d,e){this.a=d
this.b=e},
c7:function c7(d,e,f,g){var _=this
_.e=d
_.a=e
_.b=f
_.$ti=g},
NJ:function NJ(){},
et:function et(d,e,f){this.e=d
this.a=e
this.b=f},
M3:function M3(d){this.a=d},
c1:function c1(){},
aFL(d,e){var w,v,u,t,s,r
for(w=$.aJJ(),v=B.b([],x.G),A.un(A.hw(A.hi(new A.CY(w,x.S),D.c.grO(v),!0,x.f,x.H),new A.l1("input expected")),0,9007199254740991,x.z).cA(d,0),w=v.length,u=1,t=0,s=0;s<w;++s,t=r){r=v[s].d
if(e<r)return B.b([u,e-t+1],x.t);++u}return B.b([u,e-t+1],x.t)},
Pu(d,e){var w=A.aFL(d,e)
return""+w[0]+":"+w[1]},
iy:function iy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.$ti=h},
a5E:function a5E(){},
bP:function bP(d,e,f){this.a=d
this.b=e
this.$ti=f},
k5:function k5(d,e,f){this.b=d
this.a=e
this.$ti=f},
hi(d,e,f,g,h){return new A.A2(e,f,d,g.i("@<0>").ak(h).i("A2<1,2>"))},
A2:function A2(d,e,f,g){var _=this
_.b=d
_.c=e
_.a=f
_.$ti=g},
ui:function ui(d,e,f){this.b=d
this.a=e
this.$ti=f},
CY:function CY(d,e){this.a=d
this.$ti=e},
Ha(d,e){var w=A.YJ(d),v=new B.a7(new B.fE(d),A.aHR(),x.V.i("a7<a_.E,j>")).pM(0)
v='"'+v+'" expected'
return new A.oR(new A.C4(w),v)},
C4:function C4(d){this.a=d},
xY:function xY(d){this.a=d},
KZ:function KZ(d,e,f){this.a=d
this.b=e
this.c=f},
Lt:function Lt(d){this.a=d},
aWf(d){var w,v,u,t,s,r,q,p,o=B.au(d,!1,x.d)
D.c.dX(o,new A.awV())
w=B.b([],x.r)
for(v=o.length,u=0;u<v;++u){t=o[u]
if(w.length===0)w.push(t)
else{s=D.c.gP(w)
if(s.b+1>=t.a){r=s.a
q=t.b
if(r>q)B.W(B.bn("Invalid range: "+r+"-"+q,null))
w[w.length-1]=new A.eV(r,q)}else w.push(t)}}p=D.c.xM(w,0,new A.awW())
if(p===0)return C.Ff
else if(p-1===65535)return C.Fg
else if(w.length===1){v=w[0]
r=v.a
return r===v.b?new A.C4(r):v}else{v=D.c.gO(w)
r=D.c.gP(w)
q=D.e.dw(D.c.gP(w).b-D.c.gO(w).a+1+31,5)
v=new A.KZ(v.a,r.b,new Uint32Array(q))
v.a_c(w)
return v}},
awV:function awV(){},
awW:function awW(){},
oR:function oR(d,e){this.a=d
this.b=e},
aIH(d,e){var w,v=$.aKD().cQ(new A.y_(d,0))
v=v.gl(v)
w=new B.a7(new B.fE(d),A.aHR(),x.V.i("a7<a_.E,j>")).pM(0)
w="["+w+"] expected"
return new A.oR(v,w)},
avS:function avS(){},
avD:function avD(){},
avR:function avR(){},
avC:function avC(){},
fa:function fa(){},
aF1(d,e){if(d>e)B.W(B.bn("Invalid range: "+d+"-"+e,null))
return new A.eV(d,e)},
eV:function eV(d,e){this.a=d
this.b=e},
PX:function PX(){},
hw(d,e){var w,v
if(d instanceof A.rS){w=B.au(d.a,!0,x.X)
w.push(e)
v=d.b
w=A.aCR(w,v,x.z)}else w=A.aCR(B.b([d,e],x.C),null,x.z)
return w},
aCR(d,e,f){var w=e==null?B.aVW(A.aVv(),f):e,v=B.au(d,!1,f.i("c1<0>"))
if(d.length===0)B.W(B.bn("Choice parser cannot be empty.",null))
return new A.rS(w,v,f.i("rS<0>"))},
rS:function rS(d,e,f){this.b=d
this.a=e
this.$ti=f},
dz:function dz(){},
lD:function lD(){},
aEv(d,e){return new A.pU(null,d,e.i("pU<0?>"))},
pU:function pU(d,e,f){this.b=d
this.a=e
this.$ti=f},
bW(d,e){var w,v=x.X,u=x.T
if(d instanceof A.lY){w=B.au(d.a,!0,v)
w.push(e)
u=new A.lY(B.au(w,!1,v),u)
v=u}else v=new A.lY(B.au(B.b([d,e],x.C),!1,v),u)
return v},
lY:function lY(d,e){this.a=d
this.$ti=e},
yF:function yF(d,e){this.a=d
this.$ti=e},
aAX(){return new A.l1("input expected")},
l1:function l1(d){this.a=d},
Mz:function Mz(d,e,f){this.a=d
this.b=e
this.c=f},
d6(d){var w=d.length
if(w===0)return new A.yF(d,x.p)
else if(w===1){w=A.Ha(d,null)
return w}else{w=A.aX4(d,null)
return w}},
aX4(d,e){var w=d+" expected"
return new A.Mz(d.length,new A.axr(d),w)},
axr:function axr(d){this.a=d},
a8f(d,e,f,g,h){var w=new A.zM(e,f,g,d,h.i("zM<0>"))
w.IH(d,f,g)
return w},
zM:function zM(d,e,f,g,h){var _=this
_.e=d
_.b=e
_.c=f
_.a=g
_.$ti=h},
zQ:function zQ(){},
aPj(d,e){return A.un(d,0,9007199254740991,e)},
un(d,e,f,g){var w=new A.B4(e,f,d,g.i("B4<0>"))
w.IH(d,e,f)
return w},
B4:function B4(d,e,f,g){var _=this
_.b=d
_.c=e
_.a=f
_.$ti=g},
Bz:function Bz(){},
aQ_(d,e,f,g){var w=x.C,v=x.X,u=x.T,t=x.j
w=B.b([d,A.un(new A.lY(B.au(B.b([e,d],w),!1,v),u),0,9007199254740991,t)],w)
return A.hi(new A.lY(B.au(w,!1,v),u),new A.aeA(!0,!1,g),!1,t,g.i("u<0>"))},
aeA:function aeA(d,e,f){this.a=d
this.b=e
this.c=f},
pK:function pK(d){this.a=d},
ob:function ob(d){this.a=d},
aUj(d){switch(d.nZ(0)){case"<":return"&lt;"
case"&":return"&amp;"
case"]]>":return"]]&gt;"}throw B.c(B.dT(d,"match",null))},
aUe(d){switch(d.nZ(0)){case"'":return"&apos;"
case"&":return"&amp;"
case"<":return"&lt;"
case"\n":return"&#xA;"
case"\r":return"&#xD;"
case"\t":return"&#x9;"}throw B.c(B.dT(d,"match",null))},
aT9(d){switch(d.nZ(0)){case'"':return"&quot;"
case"&":return"&amp;"
case"<":return"&lt;"
case"\n":return"&#xA;"
case"\r":return"&#xD;"
case"\t":return"&#x9;"}throw B.c(B.dT(d,"match",null))},
Q3:function Q3(){},
vD:function vD(){},
Dj:function Dj(){},
Dh:function Dh(d,e){this.a=d
this.b=e},
Q2:function Q2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
vC:function vC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Q7:function Q7(){},
Q9:function Q9(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
me:function me(d,e){this.a=d
this.b=e},
Q5:function Q5(d){this.a=d},
auh:function auh(d,e){this.a=d
this.b=e},
Yh:function Yh(){},
f1:function f1(){},
Xr:function Xr(){},
oc:function oc(d,e){this.b=d
this.lR$=e},
qK:function qK(d,e){this.b=d
this.lR$=e},
qL:function qL(d,e){this.b=d
this.lR$=e},
qM:function qM(d,e){this.b=d
this.lR$=e},
hT:function hT(d,e){this.b=d
this.lR$=e},
Xo:function Xo(){},
qN:function qN(d,e,f){this.b=d
this.c=e
this.lR$=f},
h_:function h_(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.lR$=g},
Xs:function Xs(){},
od:function od(d,e){this.b=d
this.lR$=e},
aR4(d,e){return new A.ajT($.aL1().h(0,e),new A.et(null,d,0))},
ajT:function ajT(d,e){this.a=d
this.b=e
this.c=$},
Q4:function Q4(d){this.a=d},
ajM:function ajM(){},
ajS:function ajS(){},
ajK:function ajK(){},
ajQ:function ajQ(){},
ajN:function ajN(){},
ajL:function ajL(){},
ajO:function ajO(){},
ajR:function ajR(){},
ajP:function ajP(){},
awk:function awk(){},
IF:function IF(d){this.a=d},
hU:function hU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.lR$=g},
Xp:function Xp(){},
Xq:function Xq(){},
Di:function Di(){},
Q8:function Q8(){},
Q6:function Q6(){},
aO3(d,e,f,g,h,i,j,k){var w,v
if(f.length!==g.length)B.W(B.bn('"colors" and "colorStops" arguments must have equal length.',null))
w=B.YK(i)
v=j.k(0,d)&&k===0
if(v)return new A.zc(d,e,f,g,h,w)
else return new A.a5C(j,k,d,e,f,g,h,w)},
awu(d){var w=0,v=B.A(x.k),u,t
var $async$awu=B.w(function(e,f){if(e===1)return B.x(f,v)
while(true)switch(w){case 0:w=3
return B.B(B.aDK(d,null,null),$async$awu)
case 3:t=f.responseText
t.toString
u=new Uint8Array(B.iJ(D.N.glO().dP(t)))
w=1
break
case 1:return B.y(u,v)}})
return B.z($async$awu,v)},
aBh(d,e,f){var w=$.fx()
w.toString
w.$1(new B.bj(new B.nb(B.b([B.p6("Failed to find definition for "+B.d(e)),B.aY("This library only supports <defs> and xlink:href references that are defined ahead of their references."),B.yH("This error can be caused when the desired definition is defined after the element referring to it (e.g. at the end of the file), or defined in another file."),B.aY("This error is treated as non-fatal, but your SVG file will likely not render as intended")],x.E)),null,"SVG",B.aY("while parsing "+d+" in "+f),null,!1))},
aQ(d,e){if(d==null)return null
d=D.b.dk(D.b.Gy(D.b.dk(d),"px",""))
if(e)return B.abF(d)
return B.awh(d)},
aWZ(d,e){var w,v,u,t,s,r,q,p,o=x.W,n=x.X,m=B.I(o,n)
d=A.aH6(d,m,e)
w=B.b([d],x.C)
v=B.dp([d],n)
for(n=x.z;w.length!==0;){u=w.pop()
for(t=u.geR(u),s=t.length,r=0;r<t.length;t.length===s||(0,B.a0)(t),++r){q=t[r]
if(o.b(q)){p=A.aH6(q,m,n)
u.qd(0,q,p)
q=p}if(v.B(0,q))w.push(q)}}return d},
aH6(d,e,f){var w,v=f.i("acU<0>"),u=B.bH(v)
for(;v.b(d);){if(e.aA(0,d)){v=e.h(0,d)
v.toString
return f.i("c1<0>").a(v)}else if(!u.B(0,d))throw B.c(B.V("Recursive references detected: "+u.j(0)))
d=B.aEU(d.a,d.b,null)}if(x.W.b(d))throw B.c(B.V("Type error in reference parser: "+d.j(0)))
for(v=B.cW(u,u.r),w=B.p(v).c;v.u();)e.t(0,w.a(v.d),d)
return d},
YJ(d){var w
if(typeof d=="number")return D.d.aE(d)
w=J.cF(d)
if(w.length!==1)throw B.c(B.bn('"'+w+'" is not a character',null))
return D.b.ag(w,0)},
aUl(d){switch(d){case 8:return"\\b"
case 9:return"\\t"
case 10:return"\\n"
case 11:return"\\v"
case 12:return"\\f"
case 13:return"\\r"
case 34:return'\\"'
case 39:return"\\'"
case 92:return"\\\\"}if(d<32)return"\\x"+D.b.ma(D.e.i3(d,16),2,"0")
return B.fl(d)},
aIQ(d,e){return e}},D,B,J,C,F,E
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[19],A)
D=c[2]
B=c[0]
J=c[1]
C=c[41]
F=c[20]
E=c[42]
A.zc.prototype={
E9(d,e,f){var w=this.e
if(w===D.b2||w===D.dF)return this.JY(d,e,f)
else return this.JZ(d,e,f)},
JY(d,e,f){var w,v=this,u=v.a,t=u.a-e.a
u=u.b-e.b
w=d.createRadialGradient(t,u,0,t,u,v.b)
B.aGT(w,v.c,v.d,v.e===D.dF)
return w},
E8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=d.c,j=d.a
k-=j
w=D.d.e_(k)
v=d.d
u=d.b
v-=u
t=D.d.e_(v)
if($.ro==null)$.ro=new B.Gr()
s=B.aDF(B.aEs(w,t))
s.k2=w
s.k3=t
r=B.aEr(l.c,l.d)
q=s.Pu(B.aG0(),l.AU(r,d,l.e))
p=s.a
o=q.a
B.bZ(p,"useProgram",[o])
n=l.a
B.bZ(p,"uniform2f",[s.jT(0,o,"u_tile_offset"),2*(k*((n.a-j)/k-0.5)),2*(v*((n.b-u)/v-0.5))])
B.bZ(p,"uniform1f",[s.jT(0,o,"u_radius"),l.b])
r.HO(s,q)
m=s.jT(0,o,"m_gradient")
j=l.f
B.bZ(p,"uniformMatrix4fv",[m,!1,j==null?B.fj().a:j])
j=$.ro
k=j.Qu(0,new B.E(0,0,0+k,0+v),s,q,r,w,t)
k.toString
return k},
JZ(d,e,f){var w=d.createPattern(this.E8(e,f,!1),"no-repeat")
w.toString
return w},
AU(d,e,f){var w,v,u,t=$.mt,s=B.azL(t==null?$.mt=B.Yp():t)
s.e=1
s.rR(11,"v_color")
s.fc(9,"u_resolution")
s.fc(9,"u_tile_offset")
s.fc(2,"u_radius")
s.fc(14,"m_gradient")
w=s.gF8()
v=new B.qo("main",B.b([],x.s))
s.c.push(v)
v.cU(y.e)
v.cU(y.b)
v.cU("float dist = length(localCoord);")
v.cU("float st = abs(dist / u_radius);")
u=B.aAV(s,v,d,f)
v.cU(w.a+" = "+u+" * scale + bias;")
return s.c2(0)}}
A.a5C.prototype={
E9(d,e,f){var w=this,v=w.e
if((v===D.b2||v===D.dF)&&w.x===0&&w.r.k(0,D.j))return w.JY(d,e,f)
else{if($.ro==null)$.ro=new B.Gr()
return w.JZ(d,e,f)}},
AU(d,e,f){var w,v,u,t,s,r=this,q=r.a,p=r.r,o=q.a-p.a,n=q.b-p.b,m=o*o+n*n
if(m<14210854822304103e-30)return r.Wm(d,e,f)
Math.sqrt(m)
q=$.mt
w=B.azL(q==null?$.mt=B.Yp():q)
w.e=1
w.rR(11,"v_color")
w.fc(9,"u_resolution")
w.fc(9,"u_tile_offset")
w.fc(2,"u_radius")
w.fc(14,"m_gradient")
v=w.gF8()
u=new B.qo("main",B.b([],x.s))
w.c.push(u)
u.cU(y.e)
u.cU(y.b)
u.cU("float dist = length(localCoord);")
q=r.x
t=D.d.alC(q/(Math.min(e.c-e.a,e.d-e.b)/2),8)
u.cU(q===0?"float st = dist / u_radius;":"float st = ((dist / u_radius) - "+t+") / (1.0 - "+t+");")
if(f===D.b2)u.cU("if (st < 0.0) { st = -1.0; }")
s=B.aAV(w,u,d,f)
u.cU(v.a+" = "+s+" * scale + bias;")
return w.c2(0)}}
A.IZ.prototype={}
A.KQ.prototype={
QD(d,e){var w,v,u,t
if(d===e)return!0
w=J.O(d)
v=w.gp(d)
u=J.O(e)
if(v!==u.gp(e))return!1
for(t=0;t<v;++t)if(!J.e(w.h(d,t),u.h(e,t)))return!1
return!0},
Ri(d,e){var w,v,u
for(w=J.O(e),v=0,u=0;u<w.gp(e);++u){v=v+J.cm(w.h(e,u))&2147483647
v=v+(v<<10>>>0)&2147483647
v^=v>>>6}v=v+(v<<3>>>0)&2147483647
v^=v>>>11
return v+(v<<15>>>0)&2147483647}}
A.ai0.prototype={
yu(d,e,f){return this.akb(0,e,f)},
akb(d,e,f){var w=0,v=B.A(x.U),u,t,s
var $async$yu=B.w(function(g,h){if(g===1)return B.x(h,v)
while(true)switch(w){case 0:t=x.N
s=B.hg(10,x.D)
w=3
return B.B(new A.o3(A.aR4(e,C.jS),f,!1,new A.a2Z(B.I(t,x.q),B.I(t,x.a),B.I(t,x.v)),s).yt(0),$async$yu)
case 3:u=h
w=1
break
case 1:return B.y(u,v)}})
return B.z($async$yu,v)}}
A.aaY.prototype={}
A.Ml.prototype={
k(d,e){var w,v=this
if(e==null)return!1
if(J.a5(e)!==B.F(v))return!1
if(e instanceof A.Ml)if(e.a==v.a)if(J.e(e.b,v.b))if(e.c==v.c)w=e.e==v.e&&J.e(e.f,v.f)
else w=!1
else w=!1
else w=!1
else w=!1
return w},
gv(d){var w=this
return B.a6(w.a,w.b,w.d,w.e,w.f,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)},
j(d){var w,v=this,u=""+"PictureConfiguration(",t=v.a
if(t!=null){u+="bundle: "+t.j(0)
w=!0}else w=!1
t=v.b
if(t!=null){if(w)u+=", "
t=u+("locale: "+t.j(0))
u=t
w=!0}t=v.c
if(t!=null){if(w)u+=", "
t=u+("textDirection: "+t.j(0))
u=t
w=!0}t=v.e
if(t!=null){if(w)u+=", "
t=u+("platform: "+B.aB3(t))
u=t
w=!0}t=v.f
if(t!=null){if(w)u+=", "
t=u+("colorFilter: "+t.j(0))
u=t}u+=")"
return u.charCodeAt(0)==0?u:u}}
A.lN.prototype={
a3(d){var w,v=this,u={},t=new A.ab2()
u.a=null
w=d.a
if(w==null)w=$.ru()
new B.cr(new A.l2(w,v.geB(),v.a),x.c).bb(0,new A.ab0(u,v,t,null),x.H).fe(new A.ab1(u,v,null))
return t},
j(d){return B.F(this).j(0)+"()"}}
A.l2.prototype={
k(d,e){var w=this
if(e==null)return!1
if(J.a5(e)!==B.F(w))return!1
return e instanceof A.l2&&w.a===e.a&&w.b===e.b&&J.e(w.c,e.c)},
gv(d){return B.a6(this.a,this.b,this.c,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)},
j(d){var w=this
return B.F(w).j(0)+"(bundle: "+w.a.j(0)+', name: "'+w.b+'", colorFilter: '+B.d(w.c)+")"},
gar(d){return this.b}}
A.HK.prototype={
ail(d,e,f){return A.aOW(this.wm(e,f),new A.Zo(this,e))},
wm(d,e){return this.a7b(d,e)},
a7b(d,e){var w=0,v=B.A(x.g),u,t=this,s
var $async$wm=B.w(function(f,g){if(f===1)return B.x(g,v)
while(true)switch(w){case 0:w=3
return B.B(d.a.aiu(d.b),$async$wm)
case 3:s=g
u=t.b.$3(s,d.c,d.j(0))
w=1
break
case 1:return B.y(u,v)}})
return B.z($async$wm,v)}}
A.yM.prototype={
geB(){return this.d},
k(d,e){var w
if(e==null)return!1
if(J.a5(e)!==B.F(this))return!1
if(e instanceof A.yM)if(this.geB()===e.geB())w=J.e(this.a,e.a)
else w=!1
else w=!1
return w},
gv(d){return B.a6(this.geB(),this.e,this.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)},
j(d){var w=this
return B.F(w).j(0)+'(name: "'+w.geB()+'", bundle: '+B.d(w.e)+", colorFilter: "+B.d(w.a)+")"}}
A.oq.prototype={
aik(d,e,f){return this.a.$2(e,f)}}
A.je.prototype={
gv(d){return B.a6(this.a,this.b,this.c,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)},
k(d,e){var w=this
if(e==null)return!1
if(J.a5(e)!==B.F(w))return!1
return e instanceof A.je&&e.a===w.a&&e.b.k(0,w.b)&&e.c.k(0,w.c)}}
A.ab2.prototype={
qD(d){var w,v,u,t,s,r=this
r.a=d
w=r.b
if(w!=null){r.b=null
for(v=w.length,u=0;u<w.length;w.length===v||(0,B.a0)(w),++u){t=w[u]
s=r.a
s.toString
s.P_(0,t.a,t.b)}}},
a1(d,e){var w=this.a
if(w!=null)return w.P_(0,e,null)
w=this.b
if(w==null)w=this.b=B.b([],x.i)
w.push(new A.oq(e,null))},
U(d,e){var w=this.a
if(w!=null)return w.U(0,e)
w=this.b
if(!!w.fixed$length)B.W(B.S("removeWhere"))
D.c.mY(w,new A.ab4(e),!0)}}
A.nG.prototype={
P_(d,e,f){var w,v,u,t
this.a.push(new A.oq(e,f))
u=this.b
if(u!=null)try{e.$2(u,!0)}catch(t){w=B.a4(t)
v=B.ai(t)
u=B.aY("by a synchronously-called image listener")
B.cJ(new B.bj(w,x.l.a(v),"SVG",u,null,!1))}},
U(d,e){var w=this.a
if(!!w.fixed$length)B.W(B.S("removeWhere"))
D.c.mY(w,new A.ab3(e),!0)},
V_(d){var w,v,u,t,s,r,q,p,o,n,m
this.b=d
t=this.a
if(t.length===0)return
s=B.cl(t,!0,x.bp)
for(t=s.length,r=x.l,q=0;q<t;++q){w=s[q]
try{J.aLF(w,d,!1)}catch(p){v=B.a4(p)
u=B.ai(p)
w.toString
o=B.aY("by a picture listener")
n=r.a(u)
m=$.fx()
if(m!=null)m.$1(new B.bj(v,n,"SVG",o,null,!1))}}}}
A.LB.prototype={
a_i(d,e){d.e7(0,this.gUZ(),new A.aag(e),x.H)}}
A.Ue.prototype={}
A.Ud.prototype={}
A.MS.prototype={
aH(d){var w=new A.Nq(!1,null,this.d,!1,B.ap())
w.gat()
w.gaz()
w.fr=!1
return w},
aT(d,e){e.syx(this.d)
e.stW(!1)
e.sacB(!1)
e.sbG(0,null)}}
A.Nq.prototype={
stW(d){return},
sbG(d,e){if(this.q==e)return
this.q=e
this.an()},
syx(d){if(J.e(d,this.w))return
this.w=d
this.an()},
sacB(d){return},
fA(d){return!0},
gfJ(){return!0},
c7(d){return new B.P(D.e.E(0,d.a,d.b),D.e.E(0,d.c,d.d))},
aB(d,e){var w,v,u,t=this
if(t.w==null||t.rx.k(0,D.x))return
d.gbO(d).bT(0)
d.gbO(d).aO(0,e.a,e.b)
w=d.gbO(d)
v=t.rx
v.toString
u=t.w
A.aIO(w,v,u.b,u.c)
u=t.w.b
d.gbO(d).he(0,new B.E(0,0,0+(u.c-u.a),0+(u.d-u.b)))
d.gbO(d).pn(0,t.w.a)
d.gbO(d).bz(0)}}
A.Wz.prototype={
j(d){var w=this
return B.F(w).j(0)+"{"+w.b.j(0)+", "+w.a.j(0)+", "+B.d(w.c)+"}"}}
A.G0.prototype={
gar(d){return this.a}}
A.o3.prototype={
Ke(){var w,v,u,t=this,s=t.z
for(w=t.a,v=x.m;w.u();){u=B.a(w.c,"_current")
if(u instanceof A.h_&&!u.d)++t.z
else if(u instanceof A.hT)--t.z
t.x=B.b([],v)
t.y=null
if(t.z<s)return}},
rv(){var w=this
return B.cw(function(){var v=0,u=2,t,s,r,q,p,o,n,m,l
return function $async$rv(d,e){if(d===1){t=e
v=u}while(true)switch(v){case 0:l=w.z
s=w.a,r=x.m
case 3:if(!s.u()){v=4
break}q=B.a(s.c,"_current")
if(q instanceof A.h_){p=q.c
if(A.ah(p,"display","",null)==="none"||A.ah(p,"visibility","",null)==="hidden"){o="SVG Warning: Discarding:\n\n  "+q.j(0)+"\n\nand any children it has since it is not visible.\nIf that element is meant to be visible, the `display` or `visibility` attributes should be removed.\nIf that element is not meant to be visible, it would be better to remove it from the SVG file."
n=$.axa
if(n==null)B.YE(o)
else n.$1(o)
if(!q.d){++w.z
w.Ke()}v=3
break}w.x=p
w.y=q;++w.z
m=q.d}else m=!1
v=5
return q
case 5:if(m||q instanceof A.hT){--w.z
w.x=B.b([],r)
w.y=null}if(w.z<l){v=1
break}v=3
break
case 4:case 1:return B.ct()
case 2:return B.cu(t)}}},x.Q)},
yt(d){var w=0,v=B.A(x.U),u,t=this,s,r,q,p,o
var $async$yt=B.w(function(e,f){if(e===1)return B.x(f,v)
while(true)switch(w){case 0:s=new B.eb(t.rv().a()),r=t.e
case 3:if(!s.u()){w=4
break}q=s.gA(s)
w=q instanceof A.h_?5:7
break
case 5:if(t.VN(q)){w=3
break}p=C.Lf.h(0,q.b)
o=p==null
w=8
return B.B(o?null:p.$2(t,!1),$async$yt)
case 8:if(o)if(!q.d)t.Ke()
w=6
break
case 7:if(q instanceof A.hT){q=q.b
if(q===r.gP(r).a)r.e6(0)
if(q==="defs")t.r=!1}case 6:w=3
break
case 4:s=t.f
if(s==null)throw B.c(B.V("Invalid SVG data"))
u=s
w=1
break
case 1:return B.y(u,v)}})
return B.z($async$yt,v)},
xc(d){var w="url(#"+B.d(A.ah(this.x,"id","",null))+")"
if(w!=="url(#)"){d.toString
this.d.c.t(0,w,d)
return!0}return!1},
Di(d,e){this.e.dY(0,new A.G0(d.b,e))
this.xc(e)},
act(d){var w,v,u,t,s,r,q,p,o=this,n=C.qm.h(0,d.b)
if(n==null)return!1
w=o.e
v=w.gP(w).b
u=v.gcS(v)
w=n.$1(o.x)
w.toString
t=A.ah(o.x,"id","",null)
s=A.rs(o.b,o.x,o.d,w.dV(0),u,D.p)
r=A.oy(A.ah(o.x,"transform","",null))
q=new A.th(t,r==null?null:r.a,s,w)
p=o.xc(q)
if(!o.r||!p)D.c.B(v.geR(v),q)
return!0},
VN(d){if(d.b==="defs"){this.r=!d.d
return!0}return this.act(d)}}
A.PD.prototype={
aH(d){var w=new A.X9(this.e,null,B.ap())
w.gat()
w.gaz()
w.fr=!1
w.sb8(null)
return w},
aT(d,e){e.sn8(this.e)}}
A.X9.prototype={
sn8(d){if(J.e(d,this.F))return
this.F=d
this.an()},
aB(d,e){var w,v,u,t,s=new B.b_(new B.b3())
s.sn8(this.F)
w=d.gbO(d)
v=this.rx
u=e.a
t=e.b
w.hq(0,new B.E(u,t,u+v.a,t+v.b),s)
w=this.q$
if(w!=null)d.dT(w,e)
d.gbO(d).bz(0)}}
A.a33.prototype={
j(d){var w=this
return"DrawableStyle{"+B.d(w.a)+","+B.d(w.b)+","+B.d(w.c)+","+B.d(w.d)+","+w.e.j(0)+","+B.d(w.f)+","+B.d(w.y)+","+B.d(w.r)+","+B.d(w.x)+"}"}}
A.n1.prototype={
yS(){var w=this,v=new B.b_(new B.b3()),u=w.a
if(u!=null)v.sav(0,u)
u=w.b
if(u!=null)v.sHP(u)
u=w.y
if(u!=null)v.szQ(u)
u=w.z
if(u!=null)v.sVR(u)
u=w.Q
if(u!=null)v.sVS(u)
u=w.ch
if(u!=null)v.sj5(u)
u=w.x
if(u!=null)v.scS(0,u)
return v},
j(d){var w=this
return"DrawablePaint{"+B.d(w.x)+", color: "+B.d(w.a)+", shader: "+B.d(w.b)+", blendMode: "+B.d(w.c)+", colorFilter: "+B.d(w.d)+", isAntiAlias: "+B.d(w.e)+", filterQuality: "+B.d(w.f)+", maskFilter: "+B.d(w.r)+", strokeCap: "+B.d(w.y)+", strokeJoin: "+B.d(w.z)+", strokeMiterLimit: "+B.d(w.Q)+", strokeWidth: "+B.d(w.ch)+"}"}}
A.Jk.prototype={
j(d){var w=this
return"DrawableTextStyle{"+B.d(w.a)+","+B.d(w.b)+","+B.d(w.c)+","+B.d(w.d)+","+B.d(w.r)+","+B.d(w.x)+","+B.d(w.e)+","+B.d(w.cy)+","+B.d(w.cx)+","+B.d(w.y)+","+B.d(w.z)+","+B.d(w.Q)+","+B.d(w.ch)+","+B.d(w.f)+","+B.d(w.db)+"}"}}
A.yr.prototype={
j(d){return"DrawableTextAnchorPosition."+this.b}}
A.Jj.prototype={
ko(d,e){var w,v,u,t=this,s=t.d,r=s.gaL(s)
if(r==null)r=0
w=t.e
v=w.gaL(w)
if(!(r+(v==null?0:v)>0))return
r=t.f
v=r!=null
if(v){d.bT(0)
d.T(0,r)}r=t.c
u=t.b
d.iD(0,s,A.aDk(s,r,u))
d.iD(0,w,A.aDk(w,r,u))
if(v)d.bz(0)},
$ieE:1}
A.a2Z.prototype={
z6(d){var w=this.c,v=w.h(0,d)
if(v==null&&!0)throw B.c(B.V("Expected to find Drawable with id "+d+".\nHave ids: "+w.gaM(w).j(0)))
return v}}
A.K9.prototype={
j(d){return"GradientUnitMode."+this.b}}
A.p2.prototype={}
A.Jg.prototype={
Q5(d,e){var w,v,u,t,s,r,q=this,p=q.e
if(p==null){w=new B.aL(new Float64Array(16))
w.cE()}else w=new B.aL(p)
if(q.d===C.ck){p=e.a
v=e.b
u=new B.aL(new Float64Array(16))
u.ht(e.c-p,0,0,0,0,e.d-v,0,0,0,0,1,0,0,0,0,1)
t=new B.aL(new Float64Array(16))
t.ht(1,0,0,0,0,1,0,0,0,0,1,0,p,v,0,1)
s=t.fD(u)
s.cC(0,w)
w=s}p=q.f
v=new B.dM(new Float64Array(3))
v.ie(p.a,p.b,0)
r=w.GN(v)
v=q.r
p=new B.dM(new Float64Array(3))
p.ie(v.a,v.b,0)
v=r.a
p=w.GN(p).a
return B.ayR(new B.m(v[0],v[1]),new B.m(p[0],p[1]),q.b,q.a,q.c)}}
A.Jh.prototype={
Q5(d,e){var w,v,u,t,s,r=this,q=r.e
if(q==null){w=new B.aL(new Float64Array(16))
w.cE()}else w=new B.aL(q)
if(r.d===C.ck){q=e.a
v=e.b
u=new B.aL(new Float64Array(16))
u.ht(e.c-q,0,0,0,0,e.d-v,0,0,0,0,1,0,0,0,0,1)
t=new B.aL(new Float64Array(16))
t.ht(1,0,0,0,0,1,0,0,0,0,1,0,q,v,0,1)
s=t.fD(u)
s.cC(0,w)
w=s}return A.aO3(r.f,r.r,r.b,r.a,r.c,w.a,r.x,0)}}
A.Jl.prototype={
j(d){return"DrawableViewport{"+this.c.j(0)+", viewBox: "+this.b.j(0)+", viewBoxOffset: "+this.a.j(0)+"}"}}
A.tg.prototype={
ko(d,e){var w,v,u,t,s,r=this.d
if(r.length!==0){w=this.a.b
w=!w.gS(w)}else w=!1
if(!w)return
w=this.a
v=w.a
if(!v.k(0,D.j))d.aO(0,v.a,v.b)
for(u=r.length,w=w.b,t=0+w.a,w=0+w.b,s=0;s<r.length;r.length===u||(0,B.a0)(r),++s)r[s].ko(d,new B.E(0,0,t,w))
if(!v.k(0,D.j))d.bz(0)},
pR(d){var w=this,v=A.Ji(w.f,null,d.r,d.b,d.c,d.d,null,d.x,d.f,d.a,d.e),u=w.d,t=B.ag(u).i("a7<1,eE>")
return new A.tg(w.a,w.b,w.c,B.au(new B.a7(u,new A.a31(v),t),!0,t.i("aZ.E")),w.e,v)},
$ieE:1,
$in2:1,
geR(d){return this.d},
gcS(d){return this.f}}
A.ll.prototype={
ko(d,e){var w,v,u,t,s=this.b,r=s.length
if(r===0)return
w=new A.a3_(this,d,e)
r=this.c.r
v=r==null?null:r.length!==0
if(v===!0)for(v=r.length,u=0;u<r.length;r.length===v||(0,B.a0)(r),++u){t=r[u]
d.bT(0)
d.fs(0,t)
if(s.length>1)d.hq(0,null,new B.b_(new B.b3()))
w.$0()
if(s.length>1)d.bz(0)
d.bz(0)}else w.$0()},
pR(d){var w=this,v=A.Ji(w.c,null,d.r,d.b,d.c,d.d,null,null,d.f,d.a,d.e),u=w.b,t=B.ag(u).i("a7<1,eE>")
return new A.ll(w.a,B.au(new B.a7(u,new A.a30(v),t),!0,t.i("aZ.E")),v,w.d)},
$ieE:1,
$in2:1,
geR(d){return this.b},
gcS(d){return this.c}}
A.yq.prototype={
ko(d,e){var w,v,u=this,t=u.b,s=t.gaL(t),r=t.gaS(t),q=u.d,p=t.gaL(t),o=Math.min(q.a/p,q.b/t.gaS(t))
p=o===1
if(!p||!u.c.k(0,D.j)||u.e!=null){w=q.bB(0,2)
v=new B.P(s,r).Z(0,o).bB(0,2)
d.bT(0)
s=u.c
d.aO(0,s.a+(w.a-v.a),s.b+(w.b-v.b))
d.d2(0,o,o)
s=u.e
if(s!=null)d.T(0,s)}d.lJ(0,t,D.j,new B.b_(new B.b3()))
if(!p||!u.c.k(0,D.j)||u.e!=null)d.bz(0)},
pR(d){var w=this
return new A.yq(w.a,w.b,w.c,w.d,w.e,A.Ji(w.f,null,d.r,d.b,d.c,d.d,null,d.x,d.f,d.a,d.e))},
$ieE:1,
$in2:1}
A.th.prototype={
ko(d,e){var w,v,u,t=this.d,s=t.dV(0),r=t.dV(0)
if(!(s.c-s.a+(r.d-r.b)>0))return
s=this.c
r=s.f
t.spw(r==null?D.b0:r)
w=new A.a32(this,d,e)
t=s.r
if((t==null?null:t.length!==0)===!0)for(s=t.length,v=0;v<t.length;t.length===s||(0,B.a0)(t),++v){u=t[v]
d.bT(0)
d.fs(0,u)
w.$0()
d.bz(0)}else w.$0()},
pR(d){var w=this
return new A.th(w.a,w.b,A.Ji(w.c,null,d.r,d.b,d.c,d.d,null,d.x,d.f,d.a,d.e),w.d)},
$ieE:1,
$in2:1}
A.ai_.prototype={
vu(d,e,f,g){return this.ZX(d,e,f,g)},
ZX(d,e,f,g){var w=0,v=B.A(x.g),u,t=this,s,r,q,p,o,n,m,l,k
var $async$vu=B.w(function(h,i){if(h===1)return B.x(i,v)
while(true)switch(w){case 0:w=3
return B.B(t.xN(d,g),$async$vu)
case 3:o=i
n=!e||!1
m=o.a
l=m.b
k=l.a
if(k===0)B.W(B.V("Cannot convert to picture with "+m.j(0)))
s=B.aEK()
k=0+k
r=0+l.b
q=B.aCN(s,new B.E(0,0,k,r))
if(f!=null){p=new B.b_(new B.b3())
p.sn8(f)
q.hq(0,null,p)}else q.bT(0)
m=m.c
A.aIO(q,l,new B.E(0,0,k,r),m)
if(n)q.he(0,new B.E(0,0,k,r))
o.ko(q,new B.E(0,0,k,r))
q.bz(0)
u=new A.je(s.QA(),new B.E(0,0,k,r),m)
w=1
break
case 1:return B.y(u,v)}})
return B.z($async$vu,v)},
xN(d,e){return this.agE(d,e)},
agE(d,e){var w=0,v=B.A(x.U),u
var $async$xN=B.w(function(f,g){if(f===1)return B.x(g,v)
while(true)switch(w){case 0:w=3
return B.B(new A.ai0().yu(0,d,e),$async$xN)
case 3:u=g
w=1
break
case 1:return B.y(u,v)}})
return B.z($async$xN,v)}}
A.Cv.prototype={
a5(){return new A.G1(D.l)}}
A.G1.prototype={
aj(){var w,v=this
v.NY()
w=v.c
w.toString
if(B.bX(w))v.ab1()
else v.NZ()
v.bq()},
b3(d){this.bx(d)
if(!this.a.r.k(0,d.r))this.NY()},
NY(){var w,v,u=this.a.r,t=this.c
t.toString
w=B.aD8(t)
v=B.A_(t)
t=B.ee(t)
this.ab2(u.a3(new A.Ml(w,v,t,null,B.hX(),null)))},
a4W(d,e){this.M(new A.at9(this,d))},
ab2(d){var w,v,u=this,t=u.e
if(t==null)w=null
else{w=t.a
w=w!=null?w:t}v=d.a
if(w===(v!=null?v:d))return
if(u.f)t.U(0,u.gw2())
u.e=d
if(u.f)d.a1(0,u.gw2())},
ab1(){var w=this
if(w.f)return
w.e.a1(0,w.gw2())
w.f=!0},
NZ(){var w=this
if(!w.f)return
w.e.U(0,w.gw2())
w.f=!1},
m(d){this.NZ()
this.aQ(0)},
J(d,e){var w,v,u,t,s,r=this,q=null,p=B.br("child"),o=r.d
if(o!=null){w=o.b
v=0+(w.c-w.a)
w=0+(w.d-w.b)
u=r.a
t=u.c
s=t/(v-0)*(w-0)
p.b=B.bq(B.aNP(D.C,F.Op(new A.MS(o,!1,!1,q),new B.P(v-0,w-0)),D.I,D.ca),s,t)
if(u.r.a==null&&u.cy!=null)p.b=new A.PD(u.cy,p.aD(),q)}else{o=r.a3E(e,r.a.c,q)
p.b=o}r.a.toString
p.b=B.c4(q,p.aD(),!1,q,q,!1,q,q,q,!0,"",q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
return p.aD()},
a3E(d,e,f){var w=B.bq(null,f,e)
return w}}
A.Rs.prototype={
j(d){return"_DashOffsetType."+this.b}}
A.y8.prototype={}
A.xQ.prototype={}
A.a4O.prototype={}
A.aaI.prototype={}
A.ce.prototype={
X(d,e){return new A.ce(this.a+e.a,this.b+e.b)},
a4(d,e){return new A.ce(this.a-e.a,this.b-e.b)},
Z(d,e){return new A.ce(this.a*e,this.b*e)},
j(d){return"PathOffset{"+B.d(this.a)+","+B.d(this.b)+"}"},
k(d,e){if(e==null)return!1
return e instanceof A.ce&&e.a===this.a&&e.b===this.b},
gv(d){return((391^D.d.gv(this.a))*23^D.d.gv(this.b))>>>0}}
A.ai2.prototype={
rD(){var w,v,u,t,s,r=this
for(w=r.a,v=r.d;!0;){u=r.c
if(u>=v)return-1
t=D.b.ai(w,u)
if(t<=32)s=t===32||t===10||t===9||t===13||t===12
else s=!1
if(!s)return t
r.c=u+1}},
NI(){if(this.rD()===44){++this.c
this.rD()}},
a7u(d,e){var w
if(!(d>=48&&d<=57||d===43||d===45||d===46)||this.b===C.iu)return e
w=this.b
if(w===C.iz)return C.wJ
if(w===C.iA)return C.wK
return w},
jf(){var w=this,v=w.c
if(v>=w.d)return-1
w.c=v+1
return D.b.ai(w.a,v)},
eN(){var w,v,u,t,s,r,q,p,o,n=this,m="Numeric overflow"
n.rD()
w=n.jf()
if(w===43){w=n.jf()
v=1}else if(w===45){w=n.jf()
v=-1}else v=1
if((w<48||w>57)&&w!==46)throw B.c(B.V("First character of a number must be one of [0-9+-.]."))
u=0
while(!0){if(!(48<=w&&w<=57))break
u=u*10+(w-48)
w=n.jf()}if(!(-17976931348623157e292<=u&&u<=17976931348623157e292))throw B.c(B.V(m))
if(w===46){w=n.jf()
if(w<48||w>57)throw B.c(B.V("There must be at least one digit following the ."))
t=0
s=1
while(!0){if(!(48<=w&&w<=57))break
s*=0.1
t+=(w-48)*s
w=n.jf()}}else t=0
r=(u+t)*v
q=n.c
if(q<n.d)if(w===101||w===69){q=D.b.ai(n.a,q)
q=q!==120&&q!==109}else q=!1
else q=!1
if(q){w=n.jf()
if(w===43){w=n.jf()
p=!1}else if(w===45){w=n.jf()
p=!0}else p=!1
if(w<48||w>57)throw B.c(B.V("Missing exponent"))
o=0
while(!0){if(!(w>=48&&w<=57))break
o=o*10+(w-48)
w=n.jf()}if(p)o=-o
if(!(-37<=o&&o<=38))throw B.c(B.V("Invalid exponent "+o))
if(o!==0)r*=Math.pow(10,o)}if(!(-17976931348623157e292<=r&&r<=17976931348623157e292))throw B.c(B.V(m))
if(w!==-1){--n.c
n.NI()}return r},
Mz(){var w,v=this,u=v.c
if(u>=v.d)throw B.c(B.V("Expected more data"))
v.c=u+1
w=D.b.ai(v.a,u)
v.NI()
if(w===48)return!1
else if(w===49)return!0
else throw B.c(B.V("Invalid flag value"))},
Sp(){var w=this
return B.cw(function(){var v=0,u=1,t,s,r,q,p,o,n,m
return function $async$Sp(d,e){if(d===1){t=e
v=u}while(true)switch(v){case 0:s=w.d,r=w.a
case 2:if(!(q=w.c,q<s)){v=3
break}p=new A.M6(C.c2,C.cM,C.cM,C.cM)
o=D.b.ai(r,q)
n=C.Lm.h(0,o)
if(n==null)n=C.c2
if(w.b===C.c2){if(n!==C.iA&&n!==C.iz)B.W(B.V("Expected to find moveTo command"));++w.c}else if(n===C.c2){n=w.a7u(o,n)
if(n===C.c2)B.W(B.V("Expected a path command"))}else ++w.c
p.a=w.b=n
switch(n.a){case 7:case 6:m=1
break
case 17:case 16:m=2
break
case 3:case 2:case 5:case 4:case 19:case 18:m=3
break
case 13:case 12:m=4
break
case 15:case 14:m=5
break
case 1:m=6
break
case 9:case 8:m=7
break
case 11:case 10:m=8
break
case 0:m=9
break
default:m=null
break}if(m)c$0:for(;!0;)switch(m){case 1:p.c=new A.ce(w.eN(),w.eN())
m=2
continue c$0
case 2:p.d=new A.ce(w.eN(),w.eN())
m=3
continue c$0
case 3:p.b=new A.ce(w.eN(),w.eN())
break c$0
case 4:p.b=new A.ce(w.eN(),p.b.b)
break c$0
case 5:p.b=new A.ce(p.b.a,w.eN())
break c$0
case 6:w.rD()
break c$0
case 7:p.c=new A.ce(w.eN(),w.eN())
p.b=new A.ce(w.eN(),w.eN())
break c$0
case 8:p.c=new A.ce(w.eN(),w.eN())
p.d=new A.ce(w.eN(),p.d.b)
p.f=w.Mz()
p.e=w.Mz()
p.b=new A.ce(w.eN(),w.eN())
break c$0
case 9:B.W(B.V("Unknown segment command"))
break c$0}v=4
return p
case 4:v=2
break
case 3:return B.ct()
case 1:return B.cu(t)}}},x.M)}}
A.M6.prototype={
j(d){var w=this
return"PathSegmentData{"+w.a.j(0)+" "+w.b.j(0)+" "+w.c.j(0)+" "+w.d.j(0)+" "+w.e+" "+w.f+"}"}}
A.ai1.prototype={
a1Q(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b2.c,a9=Math.abs(a8.a),b0=Math.abs(a8.b)
if(a9===0||b0===0)return!1
if(b2.b.k(0,b1))return!1
w=b2.d.a
v=b1.a4(0,b2.b).Z(0,0.5)
u=new A.pK(new Float32Array(16))
u.cE()
a8=-w
u.qi(a8)
t=a7.ox(u,new A.ce(v.a,v.b))
s=t.a
r=t.b
q=s*s/(a9*a9)+r*r/(b0*b0)
if(q>1){a9*=Math.sqrt(q)
b0*=Math.sqrt(q)}u.cE()
u.d2(0,1/a9,1/b0)
u.qi(a8)
p=a7.ox(u,b1)
o=a7.ox(u,b2.b)
n=o.a4(0,p)
a8=n.a
s=n.b
m=Math.sqrt(Math.max(1/(a8*a8+s*s)-0.25,0))
if(!isFinite(m))m=0
n=n.Z(0,b2.e===b2.f?-m:m)
a8=p.X(0,o).Z(0,0.5)
s=a8.a+-n.b
a8=a8.b+n.a
l=new A.ce(s,a8)
p=p.a4(0,l)
k=Math.atan2(p.b,p.a)
o=o.a4(0,l)
j=Math.atan2(o.b,o.a)-k
if(j<0&&b2.e)j+=6.283185307179586
else if(j>0&&!b2.e)j-=6.283185307179586
u.cE()
u.qi(w)
u.d2(0,a9,b0)
i=D.d.e_(Math.abs(j/1.5717963267948964))
for(r=b3.a,h=0;h<i;){g=k+h*j/i;++h
f=k+h*j/i
e=1.3333333333333333*Math.tan(0.25*(f-g))
if(!isFinite(e))return!1
d=Math.sin(g)
a0=Math.cos(g)
a1=Math.sin(f)
a2=Math.cos(f)
a3=a2+s
a4=a1+a8
a5=a7.ox(u,new A.ce(a0-e*d+s,d+e*a0+a8))
a6=a7.ox(u,new A.ce(a3+e*a1,a4+-e*a2))
a4=a7.ox(u,new A.ce(a3,a4))
r.pc(0,a5.a,a5.b,a6.a,a6.b,a4.a,a4.b)}return!0},
ox(d,e){var w=d.a,v=e.a,u=e.b
return new A.ce(w[0]*v+w[4]*u+w[12],w[1]*v+w[5]*u+w[13])}}
A.dt.prototype={
j(d){return"SvgPathSegType."+this.b}}
A.y_.prototype={
j(d){return"Context["+A.Pu(this.a,this.b)+"]"}}
A.c7.prototype={
gpL(){return!0},
gl(d){return B.W(new A.M3(this))},
d_(d,e,f){return new A.c7(this.e,this.a,this.b,f.i("c7<0>"))},
f0(d,e){return this.d_(d,e,x.z)},
j(d){return"Failure["+A.Pu(this.a,this.b)+"]: "+this.e},
ge4(d){return this.e}}
A.NJ.prototype={
gm_(){return!1},
gpL(){return!1}}
A.et.prototype={
gm_(){return!0},
ge4(d){return B.W(B.S("Successful parse results do not have a message."))},
d_(d,e){var w=e.$1(this.e)
return new A.et(w,this.a,this.b)},
f0(d,e){return this.d_(d,e,x.z)},
j(d){return"Success["+A.Pu(this.a,this.b)+"]: "+B.d(this.e)},
gl(d){return this.e}}
A.M3.prototype={
ge4(d){return this.a.e},
gbH(d){return this.a.b},
gqM(d){return this.a.a},
j(d){var w=this.a
return w.e+" at "+A.Pu(w.a,w.b)},
$ibd:1,
$ifh:1}
A.c1.prototype={
cA(d,e){var w=this.cQ(new A.y_(d,e))
return w.gm_()?w.b:-1},
geR(d){return C.Iy},
qd(d,e,f){}}
A.iy.prototype={
gp(d){return this.d-this.c},
d_(d,e,f){var w=this
return new A.iy(e.$1(w.a),w.b,w.c,w.d,f.i("iy<0>"))},
f0(d,e){return this.d_(d,e,x.z)},
j(d){return"Token["+A.Pu(this.b,this.c)+"]: "+B.d(this.a)},
k(d,e){if(e==null)return!1
return e instanceof A.iy&&J.e(this.a,e.a)&&this.c===e.c&&this.d===e.d},
gv(d){return J.cm(this.a)+D.e.gv(this.c)+D.e.gv(this.d)}}
A.a5E.prototype={
ad8(d,e){var w=this,v=x.y
v=A.aWZ(e.i("c1<0>").a(A.hw(A.hw(A.hw(A.hw(A.hw(A.hw(A.hw(new A.bP(w.gadr(),D.F,v),new A.bP(w.gVL(),D.F,v)),new A.bP(w.gafC(w),D.F,v)),new A.bP(w.gadK(),D.F,v)),new A.bP(w.gadp(),D.F,v)),new A.bP(w.gaeN(),D.F,v)),new A.bP(w.gaks(),D.F,v)),new A.bP(w.gafs(),D.F,v))),e)
return v}}
A.bP.prototype={
cQ(d){return B.W(B.S("References cannot be parsed."))},
cA(d,e){return B.W(B.S("References cannot be parsed."))},
k(d,e){if(e==null)return!1
if(e instanceof A.bP){if(!J.e(this.a,e.a)||!1)return!1
for(;!1;)return!1
return!0}return!1},
gv(d){return J.cm(this.a)},
$iacU:1}
A.k5.prototype={
cQ(d){var w,v=d.a,u=d.b,t=this.a.cA(v,u)
if(t<0)return new A.c7(this.b,v,u,x.u)
w=D.b.K(v,u,t)
return new A.et(w,v,t)},
cA(d,e){return this.a.cA(d,e)}}
A.A2.prototype={
cQ(d){var w,v=this.a.cQ(d),u=v.gm_(),t=v.a
if(u){u=this.b.$1(v.gl(v))
w=v.b
return new A.et(u,t,w)}else{u=v.ge4(v)
w=v.b
return new A.c7(u,t,w,this.$ti.i("c7<2>"))}},
cA(d,e){return this.c?this.WN(d,e):this.a.cA(d,e)}}
A.ui.prototype={
cQ(d){var w,v,u,t,s,r=this.a.cQ(d)
if(r.gm_()){w=r.gl(r)
v=J.n(w,this.b)
u=r.a
t=r.b
return new A.et(v,u,t)}else{u=r.ge4(r)
t=r.a
s=r.b
return new A.c7(u,t,s,this.$ti.i("c7<1>"))}},
cA(d,e){return this.a.cA(d,e)}}
A.CY.prototype={
cQ(d){var w,v=this.a.cQ(d),u=v.gm_(),t=this.$ti,s=v.a
if(u){u=v.gl(v)
w=v.b
return new A.et(new A.iy(u,d.a,d.b,w,t.i("iy<1>")),s,w)}else{u=v.ge4(v)
w=v.b
return new A.c7(u,s,w,t.i("c7<iy<1>>"))}},
cA(d,e){return this.a.cA(d,e)}}
A.C4.prototype={
mh(d){return this.a===d}}
A.xY.prototype={
mh(d){return this.a}}
A.KZ.prototype={
a_c(d){var w,v,u,t,s,r,q,p
for(w=d.length,v=this.a,u=this.c,t=0;t<w;++t){s=d[t]
for(r=s.a-v,q=s.b-v;r<=q;++r){p=D.e.dw(r,5)
u[p]=(u[p]|C.ln[r&31])>>>0}}},
mh(d){var w=this.a
if(w<=d)if(d<=this.b){w=d-w
w=(this.c[D.e.dw(w,5)]&C.ln[w&31])>>>0!==0}else w=!1
else w=!1
return w},
$ifa:1}
A.Lt.prototype={
mh(d){return!this.a.mh(d)}}
A.oR.prototype={
cQ(d){var w,v=d.a,u=d.b
if(u<v.length&&this.a.mh(D.b.ai(v,u))){w=v[u]
return new A.et(w,v,u+1)}return new A.c7(this.b,v,u,x.u)},
cA(d,e){return e<d.length&&this.a.mh(D.b.ai(d,e))?e+1:-1},
j(d){return this.c1(0)+"["+this.b+"]"}}
A.fa.prototype={}
A.eV.prototype={
mh(d){return this.a<=d&&d<=this.b},
$ifa:1}
A.PX.prototype={
mh(d){if(d<256)switch(d){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}else switch(d){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
$ifa:1}
A.rS.prototype={
cQ(d){var w,v,u,t,s,r,q
for(w=this.a,v=w.length,u=this.b,t=this.$ti.i("c7<1>"),s=null,r=0;r<v;++r){q=w[r].cQ(d)
if(t.b(q))s=s==null?q:u.$2(s,q)
else return q}s.toString
return s},
cA(d,e){var w,v,u,t
for(w=this.a,v=w.length,u=-1,t=0;t<v;++t){u=w[t].cA(d,e)
if(u>=0)return u}return u}}
A.dz.prototype={
geR(d){return B.b([this.a],x.C)},
qd(d,e,f){var w=this
w.Ih(0,e,f)
if(w.a.k(0,e))w.a=B.p(w).i("c1<dz.T>").a(f)}}
A.lD.prototype={
qd(d,e,f){var w,v,u,t
this.Ih(0,e,f)
for(w=this.a,v=w.length,u=B.p(this).i("c1<lD.T>"),t=0;t<v;++t)if(J.e(w[t],e))w[t]=u.a(f)},
geR(d){return this.a}}
A.pU.prototype={
cQ(d){var w=this.a.cQ(d)
if(w.gm_())return w
else return new A.et(this.b,d.a,d.b)},
cA(d,e){var w=this.a.cA(d,e)
return w<0?e:w}}
A.lY.prototype={
cQ(d){var w,v,u,t,s,r,q=this.$ti,p=B.b([],q.i("q<1>"))
for(w=this.a,v=w.length,u=d,t=0;t<v;++t,u=s){s=w[t].cQ(u)
if(s.gpL()){w=s.ge4(s)
v=s.a
r=s.b
return new A.c7(w,v,r,q.i("c7<u<1>>"))}p.push(s.gl(s))}return new A.et(p,u.a,u.b)},
cA(d,e){var w,v,u
for(w=this.a,v=w.length,u=0;u<v;++u){e=w[u].cA(d,e)
if(e<0)return e}return e}}
A.yF.prototype={
cQ(d){return new A.et(this.a,d.a,d.b)},
cA(d,e){return e}}
A.l1.prototype={
cQ(d){var w,v=d.a,u=d.b
if(u<v.length){w=v[u]
w=new A.et(w,v,u+1)}else w=new A.c7(this.a,v,u,x.u)
return w},
cA(d,e){return e<d.length?e+1:-1}}
A.Mz.prototype={
cQ(d){var w,v=d.b,u=v+this.a,t=d.a
if(u<=t.length){w=D.b.K(t,v,u)
if(this.b.$1(w))return new A.et(w,t,u)}return new A.c7(this.c,t,v,x.u)},
cA(d,e){var w=e+this.a
return w<=d.length&&this.b.$1(D.b.K(d,e,w))?w:-1},
j(d){return this.c1(0)+"["+this.c+"]"},
gp(d){return this.a}}
A.zM.prototype={
cQ(d){var w,v,u,t,s,r,q=this,p=q.$ti,o=B.b([],p.i("q<1>"))
for(w=q.b,v=d;o.length<w;v=u){u=q.a.cQ(v)
if(u.gpL()){w=u.ge4(u)
t=u.a
s=u.b
return new A.c7(w,t,s,p.i("c7<u<1>>"))}o.push(u.gl(u))}for(w=q.c;!0;v=u){r=q.e.cQ(v)
if(r.gm_())return new A.et(o,v.a,v.b)
else{if(o.length>=w){w=r.ge4(r)
t=r.a
s=r.b
return new A.c7(w,t,s,p.i("c7<u<1>>"))}u=q.a.cQ(v)
if(u.gpL()){w=r.ge4(r)
t=r.a
s=r.b
return new A.c7(w,t,s,p.i("c7<u<1>>"))}o.push(u.gl(u))}}},
cA(d,e){var w,v,u,t,s=this
for(w=s.b,v=e,u=0;u<w;v=t){t=s.a.cA(d,v)
if(t<0)return-1;++u}for(w=s.c;!0;v=t)if(s.e.cA(d,v)>=0)return v
else{if(u>=w)return-1
t=s.a.cA(d,v)
if(t<0)return-1;++u}}}
A.zQ.prototype={
geR(d){return B.b([this.a,this.e],x.C)},
qd(d,e,f){this.Wc(0,e,f)
if(this.e.k(0,e))this.e=f}}
A.B4.prototype={
cQ(d){var w,v,u,t,s,r=this,q=r.$ti,p=B.b([],q.i("q<1>"))
for(w=r.b,v=d;p.length<w;v=u){u=r.a.cQ(v)
if(u.gpL()){w=u.ge4(u)
t=u.a
s=u.b
return new A.c7(w,t,s,q.i("c7<u<1>>"))}p.push(u.gl(u))}for(q=r.c;p.length<q;v=u){u=r.a.cQ(v)
if(u.gpL())return new A.et(p,v.a,v.b)
p.push(u.gl(u))}return new A.et(p,v.a,v.b)},
cA(d,e){var w,v,u,t,s=this
for(w=s.b,v=e,u=0;u<w;v=t){t=s.a.cA(d,v)
if(t<0)return-1;++u}for(w=s.c;u<w;v=t){t=s.a.cA(d,v)
if(t<0)return v;++u}return v}}
A.Bz.prototype={
IH(d,e,f){var w=this.b,v=this.c
if(v<w)throw B.c(B.bn("Maximum repetitions must be larger than "+w+", but got "+v+".",null))},
j(d){var w=this.c1(0)+"["+this.b+"..",v=this.c
return w+B.d(v===9007199254740991?"*":v)+"]"}}
A.pK.prototype={
bc(d){var w=d.a,v=this.a
v[15]=w[15]
v[14]=w[14]
v[13]=w[13]
v[12]=w[12]
v[11]=w[11]
v[10]=w[10]
v[9]=w[9]
v[8]=w[8]
v[7]=w[7]
v[6]=w[6]
v[5]=w[5]
v[4]=w[4]
v[3]=w[3]
v[2]=w[2]
v[1]=w[1]
v[0]=w[0]},
j(d){var w=this
return"[0] "+w.h2(0).j(0)+"\n[1] "+w.h2(1).j(0)+"\n[2] "+w.h2(2).j(0)+"\n[3] "+w.h2(3).j(0)+"\n"},
h(d,e){return this.a[e]},
t(d,e,f){this.a[e]=f},
k(d,e){var w,v,u
if(e==null)return!1
if(e instanceof A.pK){w=this.a
v=w[0]
u=e.a
w=v===u[0]&&w[1]===u[1]&&w[2]===u[2]&&w[3]===u[3]&&w[4]===u[4]&&w[5]===u[5]&&w[6]===u[6]&&w[7]===u[7]&&w[8]===u[8]&&w[9]===u[9]&&w[10]===u[10]&&w[11]===u[11]&&w[12]===u[12]&&w[13]===u[13]&&w[14]===u[14]&&w[15]===u[15]}else w=!1
return w},
gv(d){return B.AB(this.a)},
h2(d){var w=new Float32Array(4),v=this.a
w[0]=v[d]
w[1]=v[4+d]
w[2]=v[8+d]
w[3]=v[12+d]
return new A.ob(w)},
Z(d,e){var w=new A.pK(new Float32Array(16))
w.bc(this)
w.jV(0,e,null,null)
return w},
X(d,e){var w,v=new Float32Array(16),u=new A.pK(v)
u.bc(this)
w=e.a
v[0]=v[0]+w[0]
v[1]=v[1]+w[1]
v[2]=v[2]+w[2]
v[3]=v[3]+w[3]
v[4]=v[4]+w[4]
v[5]=v[5]+w[5]
v[6]=v[6]+w[6]
v[7]=v[7]+w[7]
v[8]=v[8]+w[8]
v[9]=v[9]+w[9]
v[10]=v[10]+w[10]
v[11]=v[11]+w[11]
v[12]=v[12]+w[12]
v[13]=v[13]+w[13]
v[14]=v[14]+w[14]
v[15]=v[15]+w[15]
return u},
a4(d,e){var w,v=new Float32Array(16),u=new A.pK(v)
u.bc(this)
w=e.a
v[0]=v[0]-w[0]
v[1]=v[1]-w[1]
v[2]=v[2]-w[2]
v[3]=v[3]-w[3]
v[4]=v[4]-w[4]
v[5]=v[5]-w[5]
v[6]=v[6]-w[6]
v[7]=v[7]-w[7]
v[8]=v[8]-w[8]
v[9]=v[9]-w[9]
v[10]=v[10]-w[10]
v[11]=v[11]-w[11]
v[12]=v[12]-w[12]
v[13]=v[13]-w[13]
v[14]=v[14]-w[14]
v[15]=v[15]-w[15]
return u},
qi(d){var w=Math.cos(d),v=Math.sin(d),u=this.a,t=u[0],s=u[4],r=u[1],q=u[5],p=u[2],o=u[6],n=u[3],m=u[7],l=-v
u[0]=t*w+s*v
u[1]=r*w+q*v
u[2]=p*w+o*v
u[3]=n*w+m*v
u[4]=t*l+s*w
u[5]=r*l+q*w
u[6]=p*l+o*w
u[7]=n*l+m*w},
jV(d,e,f,g){var w=f==null?e:f,v=this.a
v[0]=v[0]*e
v[1]=v[1]*e
v[2]=v[2]*e
v[3]=v[3]*e
v[4]=v[4]*w
v[5]=v[5]*w
v[6]=v[6]*w
v[7]=v[7]*w
v[8]=v[8]*e
v[9]=v[9]*e
v[10]=v[10]*e
v[11]=v[11]*e
v[12]=v[12]
v[13]=v[13]
v[14]=v[14]
v[15]=v[15]},
d2(d,e,f){return this.jV(d,e,f,null)},
cE(){var w=this.a
w[0]=1
w[1]=0
w[2]=0
w[3]=0
w[4]=0
w[5]=1
w[6]=0
w[7]=0
w[8]=0
w[9]=0
w[10]=1
w[11]=0
w[12]=0
w[13]=0
w[14]=0
w[15]=1}}
A.ob.prototype={
bc(d){var w=d.a,v=this.a
v[3]=w[3]
v[2]=w[2]
v[1]=w[1]
v[0]=w[0]},
j(d){var w=this.a
return B.d(w[0])+","+B.d(w[1])+","+B.d(w[2])+","+B.d(w[3])},
k(d,e){var w,v,u
if(e==null)return!1
if(e instanceof A.ob){w=this.a
v=w[0]
u=e.a
w=v===u[0]&&w[1]===u[1]&&w[2]===u[2]&&w[3]===u[3]}else w=!1
return w},
gv(d){return B.AB(this.a)},
a4(d,e){var w,v=new Float32Array(4),u=new A.ob(v)
u.bc(this)
w=e.a
v[0]=v[0]-w[0]
v[1]=v[1]-w[1]
v[2]=v[2]-w[2]
v[3]=v[3]-w[3]
return u},
X(d,e){var w,v=new Float32Array(4),u=new A.ob(v)
u.bc(this)
w=e.a
v[0]=v[0]+w[0]
v[1]=v[1]+w[1]
v[2]=v[2]+w[2]
v[3]=v[3]+w[3]
return u},
bB(d,e){var w=new A.ob(new Float32Array(4))
w.bc(this)
w.bM(0,1/e)
return w},
Z(d,e){var w=new A.ob(new Float32Array(4))
w.bc(this)
w.bM(0,e)
return w},
h(d,e){return this.a[e]},
t(d,e,f){this.a[e]=f},
gp(d){var w=this.a,v=w[0],u=w[1],t=w[2]
w=w[3]
return Math.sqrt(v*v+u*u+t*t+w*w)},
bM(d,e){var w=this.a
w[0]=w[0]*e
w[1]=w[1]*e
w[2]=w[2]*e
w[3]=w[3]*e},
aE(d){var w=this.a
w[0]=D.d.fZ(w[0])
w[1]=D.d.fZ(w[1])
w[2]=D.d.fZ(w[2])
w[3]=D.d.fZ(w[3])}}
A.Q3.prototype={
aeQ(d){var w=d.length
if(w>1&&d[0]==="#"){if(w>2){w=d[1]
w=w==="x"||w==="X"}else w=!1
if(w)return B.fl(B.eN(D.b.bg(d,2),16))
else return B.fl(B.eN(D.b.bg(d,1),null))}else return C.KQ.h(0,d)},
afz(d,e){switch(e.a){case 0:return B.YI(d,$.aKK(),A.aVl(),null)
case 1:return B.YI(d,$.aKm(),A.aVk(),null)}}}
A.vD.prototype={}
A.Dj.prototype={
Dx(){var w=x.y,v=this.gqN()
return A.bW(A.bW(A.bW(A.bW(new A.bP(this.gGm(),D.F,w),new A.bP(v,D.F,w)),A.d6("=")),new A.bP(v,D.F,w)),new A.bP(this.gPf(),D.F,w))},
acO(){var w=x.y
return A.hw(new A.bP(this.gacP(),D.F,w),new A.bP(this.gacR(),D.F,w))},
acQ(){return A.bW(A.bW(A.d6('"'),new A.vC(this.a,'"',34,0)),A.d6('"'))},
acS(){return A.bW(A.bW(A.d6("'"),new A.vC(this.a,"'",39,0)),A.d6("'"))},
acY(d){var w=x.y
return A.un(new A.ui(1,A.bW(new A.bP(this.gzI(),D.F,w),new A.bP(this.gacN(),D.F,w)),x._),0,9007199254740991,x.z)},
DV(){return A.bW(A.bW(A.d6("<!--"),new A.k5("Expected comment content",A.a8f(new A.l1("input expected"),A.d6("-->"),0,9007199254740991,x.N),x.O)),A.d6("-->"))},
DJ(){return A.bW(A.bW(A.d6("<![CDATA["),new A.k5("Expected CDATA content",A.a8f(new A.l1("input expected"),A.d6("]]>"),0,9007199254740991,x.N),x.O)),A.d6("]]>"))},
Eh(){var w=x.y
return A.bW(A.bW(A.bW(A.d6("<?xml"),new A.bP(this.gwZ(this),D.F,w)),new A.bP(this.gqN(),D.F,w)),A.d6("?>"))},
EC(){var w=this,v=x.y,u=w.gqN(),t=x.z
return A.bW(A.bW(A.bW(A.bW(A.d6("<!DOCTYPE"),new A.bP(w.gzI(),D.F,v)),new A.k5("Expected doctype content",A.aQ_(A.hw(A.hw(new A.bP(w.gFR(),D.F,v),new A.bP(w.gPf(),D.F,v)),A.bW(A.bW(A.d6("["),A.a8f(new A.l1("input expected"),A.d6("]"),0,9007199254740991,x.N)),A.d6("]"))),new A.bP(u,D.F,v),t,t),x.w)),new A.bP(u,D.F,v)),A.d6(">"))},
Gl(){var w=x.y
return A.bW(A.bW(A.bW(A.d6("<?"),new A.bP(this.gFR(),D.F,w)),new A.pU("",new A.ui(1,A.bW(new A.bP(this.gzI(),D.F,w),new A.k5("Expected processing instruction content",A.a8f(new A.l1("input expected"),A.d6("?>"),0,9007199254740991,x.N),x.O)),x._),x.L)),A.d6("?>"))},
akE(){return new A.bP(this.gFR(),D.F,x.y)},
DO(){return new A.vC(this.a,"<",60,1)},
VG(){return A.un(new A.oR(C.jR,"whitespace expected"),1,9007199254740991,x.N)},
VH(){return A.un(new A.oR(C.jR,"whitespace expected"),0,9007199254740991,x.N)},
aj4(){var w=x.y
return new A.k5("Expected name",A.bW(new A.bP(this.gaj2(),D.F,w),A.un(new A.bP(this.gaj0(),D.F,w),0,9007199254740991,x.z)),x.w)},
aj3(){return A.aIH(":A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd",null)},
aj1(){return A.aIH(":A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd-.0-9\xb7\u0300-\u036f\u203f-\u2040",null)}}
A.Dh.prototype={
j(d){return"XmlAttributeType."+this.b}}
A.Q2.prototype={
h(d,e){var w,v,u,t=this.c
if(!t.aA(0,e)){t.t(0,e,this.a.$1(e))
for(w=this.b;t.gp(t)>w;){v=t.gaM(t)
u=v.ga2(v)
if(!u.u())B.W(B.cg())
t.D(0,u.gA(u))}}t=t.h(0,e)
t.toString
return t}}
A.vC.prototype={
cQ(d){var w,v,u,t,s,r,q,p,o=d.a,n=o.length,m=new B.bQ(""),l=d.b
for(w=this.c,v=this.a,u=l,t=u;t<n;){s=D.b.ai(o,t)
if(s===w)break
else{r=t+1
if(s===38){q=D.b.iM(o,";",r)
if(r<q){s=v.aeQ(D.b.K(o,r,q))
if(s!=null){p=m.a+=D.b.K(o,u,t)
m.a=p+s
t=q+1
u=t}else t=r}else t=r}else t=r}}w=m.a+=D.b.K(o,u,t)
if(w.length<this.d)w=new A.c7("Unable to parse character data.",o,l,x.u)
else w=new A.et(w.charCodeAt(0)==0?w:w,o,t)
return w},
cA(d,e){var w,v,u=d.length
for(w=this.c,v=e;v<u;)if(D.b.ai(d,v)===w)break
else ++v
return v-e<this.d?-1:v}}
A.Q7.prototype={
j(d){return"XmlException: "+this.a},
$ibd:1,
ge4(d){return this.a}}
A.Q9.prototype={
gqM(d){return this.b},
gbH(d){return this.c},
j(d){return"XmlParserException: "+this.a+" at "+this.d+":"+this.e},
$ifh:1}
A.me.prototype={
j(d){return"XmlNodeType."+this.b}}
A.Q5.prototype={
dP(d){var w,v=new B.bQ(""),u=new A.IF(v.gam9(v))
J.dH(d,new A.auh(u,this.a).gam0())
u.bo(0)
w=v.a
return w.charCodeAt(0)==0?w:w}}
A.auh.prototype={
OY(d){var w,v,u,t,s,r
for(w=J.ab(d),v=this.a,u=this.b;w.u();){t=w.gA(w)
v.B(0," ")
v.B(0,t.a)
v.B(0,"=")
s=t.b
t=t.c
r=C.KW.h(0,t)
v.B(0,B.d(r)+B.d(u.afz(s,t))+B.d(r))}}}
A.Yh.prototype={}
A.f1.prototype={
j(d){return new A.Q5(C.jS).dP(B.b([this],x.J))}}
A.Xr.prototype={}
A.oc.prototype={
ls(d,e){var w=e.a
w.B(0,"<![CDATA[")
w.B(0,this.b)
w.B(0,"]]>")
return null},
gv(d){return(B.e2(C.UI)^D.b.gv(this.b))>>>0},
k(d,e){if(e==null)return!1
return e instanceof A.oc&&e.b===this.b}}
A.qK.prototype={
ls(d,e){var w=e.a
w.B(0,"<!--")
w.B(0,this.b)
w.B(0,"-->")
return null},
gv(d){return(B.e2(C.UJ)^D.b.gv(this.b))>>>0},
k(d,e){if(e==null)return!1
return e instanceof A.qK&&e.b===this.b}}
A.qL.prototype={
ls(d,e){var w=e.a
w.B(0,"<?xml")
e.OY(this.b)
w.B(0,"?>")
return null},
gv(d){return(B.e2(C.UK)^C.dY.Ri(0,this.b))>>>0},
k(d,e){if(e==null)return!1
return e instanceof A.qL&&C.dY.QD(e.b,this.b)}}
A.qM.prototype={
ls(d,e){var w=e.a
w.B(0,"<!DOCTYPE")
w.B(0," ")
w.B(0,this.b)
w.B(0,">")
return null},
gv(d){return(B.e2(C.UL)^D.b.gv(this.b))>>>0},
k(d,e){if(e==null)return!1
return e instanceof A.qM&&e.b===this.b}}
A.hT.prototype={
ls(d,e){var w=e.a
w.B(0,"</")
w.B(0,this.b)
w.B(0,">")
return null},
gv(d){return(B.e2(C.xj)^D.b.gv(this.b))>>>0},
k(d,e){if(e==null)return!1
return e instanceof A.hT&&e.b===this.b},
gar(d){return this.b}}
A.Xo.prototype={}
A.qN.prototype={
ls(d,e){var w,v=e.a
v.B(0,"<?")
v.B(0,this.b)
w=this.c
if(w.length!==0){v.B(0," ")
v.B(0,w)}v.B(0,"?>")
return null},
gv(d){return(B.e2(C.UM)^D.b.gv(this.c)^D.b.gv(this.b))>>>0},
k(d,e){if(e==null)return!1
return e instanceof A.qN&&e.b===this.b&&e.c===this.c}}
A.h_.prototype={
ls(d,e){var w=e.a
w.B(0,"<")
w.B(0,this.b)
e.OY(this.c)
if(this.d)w.B(0,"/>")
else w.B(0,">")
return null},
gv(d){var w=B.e2(C.xj),v=D.b.gv(this.b),u=this.d?519018:218159
return(w^v^u^C.dY.Ri(0,this.c))>>>0},
k(d,e){if(e==null)return!1
return e instanceof A.h_&&e.b===this.b&&e.d===this.d&&C.dY.QD(e.c,this.c)},
gar(d){return this.b}}
A.Xs.prototype={}
A.od.prototype={
ls(d,e){e.a.B(0,B.YI(this.b,$.aKR(),A.aVm(),null))
return null},
gv(d){return(B.e2(C.UN)^D.b.gv(this.b))>>>0},
k(d,e){if(e==null)return!1
return e instanceof A.od&&e.b===this.b}}
A.ajT.prototype={
gA(d){return B.a(this.c,"_current")},
u(){var w,v,u,t,s,r=this,q=r.b
if(q!=null){w=r.a.cQ(q)
if(w.gm_()){r.b=w
r.c=w.gl(w)
return!0}else{v=q.b
u=q.a
if(v<u.length){t=w.ge4(w)
r.b=new A.c7(t,u,v+1,x.o)
v=w.a
u=w.b
s=A.aFL(v,u)
t=w.ge4(w)
throw B.c(new A.Q9(v,u,s[0],s[1],t))}else{r.b=null
return!1}}}return!1}}
A.Q4.prototype={
DO(){var w=x.z
return A.hi(this.Y0(),new A.ajM(),!1,w,w)},
VM(){var w=this,v=x.y
return A.hi(A.bW(A.bW(A.bW(A.bW(A.d6("<"),new A.bP(w.gGm(),D.F,v)),new A.bP(w.gwZ(w),D.F,v)),new A.bP(w.gqN(),D.F,v)),A.hw(A.d6(">"),A.d6("/>"))),new A.ajS(),!1,x.j,x.z)},
Dx(){var w=x.z
return A.hi(this.XZ(),new A.ajK(),!1,w,w)},
afD(d){var w=x.y
return A.hi(A.bW(A.bW(A.bW(A.d6("</"),new A.bP(this.gGm(),D.F,w)),new A.bP(this.gqN(),D.F,w)),A.d6(">")),new A.ajQ(),!1,x.j,x.z)},
DV(){var w=x.z
return A.hi(this.Y1(),new A.ajN(),!1,w,w)},
DJ(){var w=x.z
return A.hi(this.Y_(),new A.ajL(),!1,w,w)},
Eh(){var w=x.z
return A.hi(this.Y2(),new A.ajO(),!1,w,w)},
Gl(){var w=x.z
return A.hi(this.Y4(),new A.ajR(),!1,w,w)},
EC(){var w=x.z
return A.hi(this.Y3(),new A.ajP(),!1,w,w)}}
A.IF.prototype={
B(d,e){return this.a.$1(e)},
bo(d){}}
A.hU.prototype={
gv(d){return D.b.gv(this.a)^D.b.gv(this.b)},
k(d,e){if(e==null)return!1
return e instanceof A.hU&&e.a===this.a&&e.b===this.b&&e.c===this.c},
gar(d){return this.a}}
A.Xp.prototype={}
A.Xq.prototype={}
A.Di.prototype={}
A.Q8.prototype={}
A.Q6.prototype={
am1(d){return d.ls(0,this)}}
var z=a.updateTypes(["c1<@>()","ad<~>?(o3,J)","aL(j?,aL)","hJ(u<hU>?)","j(lG)","J(oq)","eE(eE)","fa(u<@>)","ad<~>(o3,J)","hJ?(u<hU>?)","nG()","~(je?)","~(eE?)","~(h_)","ad<je>(j,IA?,j)","~(je?,J)","o(eV,eV)","o(o,eV)","eV(j)","eV(u<@>)","od(@)","h_(u<@>)","hU(@)","hT(u<@>)","qK(@)","oc(@)","qL(@)","qN(@)","qM(@)","c1<@>(@)","~(f1)","j(o)","c7<0^>(c7<0^>,c7<0^>)<D?>"])
A.ab0.prototype={
$1(d){var w,v,u,t=this
t.a.a=d
w=$.aJp()
d.toString
w=w.a
v=w.h(0,d)
if(v!=null)w.D(0,d)
else{if(w.gp(w)===1000&&!0){u=w.gaM(w)
w.D(0,u.gO(u))}v=new A.ab_(t.b,d,t.d).$0()}w.t(0,d,v)
t.c.qD(v)},
$S(){return B.p(this.b).i("aA(lN.T)")}}
A.ab_.prototype={
$0(){return this.a.ail(0,this.b,this.c)},
$S:z+10}
A.ab1.prototype={
$2(d,e){return this.TE(d,e)},
TE(d,e){var w=0,v=B.A(x.b),u=this
var $async$$2=B.w(function(f,g){if(f===1)return B.x(g,v)
while(true)switch(w){case 0:B.cJ(new B.bj(d,e,"SVG",B.aY("while resolving a picture"),new A.aaZ(u.a,u.b),!0))
return B.y(null,v)}})
return B.z($async$$2,v)},
$S:456}
A.aaZ.prototype={
$0(){var w=this
return B.cw(function(){var v=0,u=1,t,s
return function $async$$0(d,e){if(d===1){t=e
v=u}while(true)switch(v){case 0:s=w.b
v=2
return B.fc("Picture provider",s,!0,D.aj,null,!1,null,null,D.a6,null,!1,!0,!0,D.aM,null,x.A)
case 2:v=3
return B.fc("Picture key",w.a.a,!0,null,null,!1,null,null,D.a6,null,!1,!0,!0,D.aM,null,B.p(s).i("lN.T"))
case 3:return B.ct()
case 1:return B.cu(t)}}},x.P)},
$S:11}
A.Zo.prototype={
$0(){var w=this
return B.cw(function(){var v=0,u=1,t
return function $async$$0(d,e){if(d===1){t=e
v=u}while(true)switch(v){case 0:v=2
return B.fc("Picture provider",w.a,!0,D.aj,null,!1,null,null,D.a6,null,!1,!0,!0,D.aM,null,x.A)
case 2:v=3
return B.fc("Picture key",w.b,!0,D.aj,null,!1,null,null,D.a6,null,!1,!0,!0,D.aM,null,x.h)
case 3:return B.ct()
case 1:return B.cu(t)}}},x.P)},
$S:11}
A.ab4.prototype={
$1(d){return J.e(d.a,this.a)},
$S:z+5}
A.ab3.prototype={
$1(d){return J.e(d.a,this.a)},
$S:z+5}
A.aag.prototype={
$2(d,e){B.cJ(new B.bj(d,e,"SVG",B.aY("resolving a single-frame picture stream"),this.a,!0))},
$S:7}
A.awY.prototype={
$1(d){return D.b.dk(d)},
$S:32}
A.awZ.prototype={
$1(d){return B.eN(d,null)},
$S:49}
A.ax_.prototype={
$1(d){var w
d=D.b.dk(d)
if(D.b.dB(d,"%"))d=D.b.K(d,0,d.length-1)
if(D.b.H(d,".")){w=A.aQ(d,!1)
w.toString
return D.d.aE(w*2.55)}return B.eN(d,null)},
$S:49}
A.ax0.prototype={
$1(d){return d+(1-this.a)*(0.5-d)},
$S:52}
A.ax1.prototype={
$1(d){return this.a*2*d},
$S:52}
A.ax2.prototype={
$1(d){return this.a*2*(1-d)+2*d-1},
$S:52}
A.ax3.prototype={
$1(d){return d*255},
$S:52}
A.ax4.prototype={
$1(d){var w
d=D.b.dk(d)
if(D.b.dB(d,"%")){w=A.aQ(D.b.K(d,0,d.length-1),!1)
w.toString
return D.d.aE(w*2.55)}return B.eN(d,null)},
$S:49}
A.amC.prototype={
$0(){var w=this
return B.cw(function(){var v=0,u=1,t
return function $async$$0(d,e){if(d===1){t=e
v=u}while(true)switch(v){case 0:v=2
return B.aY("The root <svg> element contained an unsupported nested SVG element.")
case 2:v=3
return B.aY("")
case 3:v=4
return B.fc("Picture key",w.a.b,!0,D.aj,null,!1,null,null,D.a6,null,!1,!0,!0,D.aM,null,x.N)
case 4:return B.ct()
case 1:return B.cu(t)}}},x.P)},
$S:11}
A.amA.prototype={
$1(d){if(d instanceof A.th)this.a.push(d.d)
else if(d instanceof A.ll)D.c.a6(d.b,this)},
$S:z+12}
A.amz.prototype={
$0(){var w=this
return B.cw(function(){var v=0,u=1,t
return function $async$$0(d,e){if(d===1){t=e
v=u}while(true)switch(v){case 0:v=2
return B.aY("The <clipPath> element contained an unsupported child "+w.a.b)
case 2:v=3
return B.aY("")
case 3:v=4
return B.fc("Picture key",w.b.b,!0,D.aj,null,!1,null,null,D.a6,null,!1,!0,!0,D.aM,null,x.N)
case 4:return B.ct()
case 1:return B.cu(t)}}},x.P)},
$S:11}
A.amE.prototype={
$1(d){var w,v,u,t,s,r,q
if(d.length===0)return
w=this.b
v=w.gP(w)
w=v.a
u=A.aHZ(d,w,w.d)
t=w.a
s=A.aHZ(d,w,t==null||t===C.bP?C.FA:t)
t=this.c
r=t.e
r=r.gP(r).b
r=r.geR(r)
A.ah(t.x,"id","",null)
t=v.b
w=w.e.db
if(w==null)w=C.kq
q=v.c
D.c.B(r,new A.Jj(t,w,u,s,q==null?null:q.a))
this.a.a=u.gS3()},
$S:34}
A.amD.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.b,n=!o.gS(o)?o.gP(o):p,m=this.c,l=n==null
if(l)w=p
else{w=n.b
w=new B.m(w.a+this.a.a,w.b+0)}v=A.ah(m.x,"x",p,p)
u=A.ah(m.x,"y",p,p)
if(v!=null){t=A.aQ(v,!1)
t.toString}else{t=A.aQ(A.ah(m.x,"dx","0",p),!1)
t.toString
s=w==null?p:w.a
t+=s==null?0:s}if(u!=null){w=A.aQ(u,!1)
w.toString}else{s=A.aQ(A.ah(m.x,"dy","0",p),!1)
s.toString
w=w==null?p:w.b
w=s+(w==null?0:w)}r=A.oy(A.ah(m.x,"transform",p,p))
if((l?p:n.c)!=null)r=r==null?n.c:n.c.fD(r)
s=m.x
q=m.f.a.b
l=l?p:n.a
if(l==null){l=m.e
l=l.gP(l).b
l=l.gcS(l)}o.dY(0,new A.Wz(A.rs(m.b,s,m.d,new B.E(0,0,0+q.a,0+q.b),l,p),new B.m(t,w),r))
if(d.d)o.e6(0)},
$S:z+13}
A.axe.prototype={
$1(d){return this.TH(d)},
TH(d){var w=0,v=B.A(x.I),u,t
var $async$$1=B.w(function(e,f){if(e===1)return B.x(f,v)
while(true)switch(w){case 0:w=4
return B.B(B.awB(d,!0,null,null),$async$$1)
case 4:w=3
return B.B(f.qx(),$async$$1)
case 3:t=f
u=t.geX(t)
w=1
break
case 1:return B.y(u,v)}})
return B.z($async$$1,v)},
$S:458}
A.ax5.prototype={
$1(d){var w=A.aQ(d,!1)
w.toString
return w},
$S:459}
A.ax6.prototype={
$1(d){return"StrokeCap."+d.b==="StrokeCap."+B.d(this.a)},
$S:460}
A.ax7.prototype={
$0(){return D.bj},
$S:461}
A.ax8.prototype={
$1(d){return"StrokeJoin."+d.b==="StrokeJoin."+B.d(this.a)},
$S:462}
A.ax9.prototype={
$0(){return D.cJ},
$S:463}
A.awp.prototype={
$1(d){return D.b.bv(D.b.GR(d),this.a+":")},
$S:14}
A.awq.prototype={
$0(){return""},
$S:8}
A.a31.prototype={
$1(d){if(x.v.b(d))return d.pR(this.a)
return d},
$S:z+6}
A.a3_.prototype={
$0(){var w,v,u,t,s,r,q,p=this,o=p.a,n=o.c,m=n.y
if(m===0)return
w=o.d
v=w!=null
if(v){u=p.b
u.bT(0)
u.T(0,w)}w=n.x
t=w!=null
s=new B.b_(new B.b3())
if(m!=null&&m!==1){m.toString
s.sav(0,B.Iz(0,0,0,m))
r=!0}else r=t
n=n.z
if(n!=null){s.sp0(n)
r=!0}if(r)p.b.hq(0,null,s)
for(o=o.b,n=o.length,m=p.b,u=p.c,q=0;q<o.length;o.length===n||(0,B.a0)(o),++q)o[q].ko(m,u)
if(t){m.hq(0,null,$.aBU())
w.ko(m,u)
m.bz(0)}if(r)m.bz(0)
if(v)m.bz(0)},
$S:3}
A.a30.prototype={
$1(d){if(x.v.b(d))return d.pR(this.a)
return d},
$S:z+6}
A.a32.prototype={
$0(){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.b,l=m!=null
if(l){w=p.b
w.bT(0)
w.T(0,m)}m=n.c
w=m.z
v=w!=null
if(v){u=new B.b_(new B.b3())
u.sp0(w)
p.b.hq(0,o,u)}w=m.x
u=w!=null
if(u)p.b.hq(0,o,new B.b_(new B.b3()))
t=m.d
if((t==null?o:t.x)!=null)p.b.cO(0,n.d,t.yS())
t=m.a
if((t==null?o:t.x)!=null){s=m.b
r=s!=null&&s!==$.aBy()
q=p.b
n=n.d
if(r){s.toString
q.cO(0,A.aVe(n,s,m.c),t.yS())}else q.cO(0,n,t.yS())}if(u){n=p.b
n.hq(0,o,$.aBU())
w.ko(n,p.c)
n.bz(0)
n.bz(0)}if(v)p.b.bz(0)
if(l)p.b.bz(0)},
$S:3}
A.ai3.prototype={
$3(d,e,f){return $.aC0().vu(d,!1,e,f)},
$S:z+14}
A.at9.prototype={
$0(){this.a.d=this.b},
$S:0}
A.awV.prototype={
$2(d,e){var w=d.a,v=e.a
return w!==v?w-v:d.b-e.b},
$S:z+16}
A.awW.prototype={
$2(d,e){return d+(e.b-e.a+1)},
$S:z+17}
A.avS.prototype={
$1(d){return A.aF1(A.YJ(d),A.YJ(d))},
$S:z+18}
A.avD.prototype={
$1(d){var w=J.O(d)
return A.aF1(A.YJ(w.h(d,0)),A.YJ(w.h(d,2)))},
$S:z+19}
A.avR.prototype={
$1(d){return A.aWf(J.mF(d,x.d))},
$S:z+7}
A.avC.prototype={
$1(d){var w=J.O(d)
return w.h(d,0)==null?w.h(d,1):new A.Lt(w.h(d,1))},
$S:z+7}
A.axr.prototype={
$1(d){return this.a===d},
$S:14}
A.aeA.prototype={
$1(d){var w,v,u=B.b([],this.c.i("q<0>")),t=J.O(d)
u.push(t.h(d,0))
for(t=J.ab(t.h(d,1));t.u();){w=t.gA(t)
v=J.O(w)
u.push(v.h(w,0))
u.push(v.h(w,1))}return u},
$S(){return this.c.i("u<0>(u<@>)")}}
A.ajM.prototype={
$1(d){return new A.od(d,null)},
$S:z+20}
A.ajS.prototype={
$1(d){var w=J.O(d)
return new A.h_(w.h(d,1),J.mF(w.h(d,2),x.Y),J.e(w.h(d,4),"/>"),null)},
$S:z+21}
A.ajK.prototype={
$1(d){var w=J.O(d),v=w.h(d,0),u=J.n(w.h(d,4),1)
return new A.hU(v,u,J.e(J.n(w.h(d,4),0),'"')?C.xi:C.xh,null)},
$S:z+22}
A.ajQ.prototype={
$1(d){return new A.hT(J.n(d,1),null)},
$S:z+23}
A.ajN.prototype={
$1(d){return new A.qK(J.n(d,1),null)},
$S:z+24}
A.ajL.prototype={
$1(d){return new A.oc(J.n(d,1),null)},
$S:z+25}
A.ajO.prototype={
$1(d){return new A.qL(J.mF(J.n(d,1),x.Y),null)},
$S:z+26}
A.ajR.prototype={
$1(d){var w=J.O(d)
return new A.qN(w.h(d,1),w.h(d,2),null)},
$S:z+27}
A.ajP.prototype={
$1(d){return new A.qM(J.n(d,2),null)},
$S:z+28}
A.awk.prototype={
$1(d){return new A.Q4(d).ad8(0,x.z)},
$S:z+29};(function aliases(){var w=A.zc.prototype
w.Wm=w.AU
w=A.c1.prototype
w.WN=w.cA
w.Ih=w.qd
w=A.dz.prototype
w.Wc=w.qd
w=A.Dj.prototype
w.XZ=w.Dx
w.Y1=w.DV
w.Y_=w.DJ
w.Y2=w.Eh
w.Y3=w.EC
w.Y4=w.Gl
w.Y0=w.DO})();(function installTearOffs(){var w=a._instance_1u,v=a._static_2,u=a._static_1,t=a._instance_2u,s=a._instance_0u,r=a._instance_0i,q=a.installStaticTearOff
w(A.nG.prototype,"gUZ","V_",11)
v(A,"aWA","aRv",1)
v(A,"aIC","aRr",1)
v(A,"aID","aRw",1)
v(A,"aWC","aRy",1)
v(A,"aWz","aRu",1)
v(A,"aWy","aRt",1)
v(A,"aWw","aRq",1)
v(A,"aWx","amB",8)
v(A,"aWB","aA7",8)
u(A,"aWD","aS0",3)
u(A,"aWG","aS3",3)
u(A,"aWJ","aS6",3)
u(A,"aWH","aS4",9)
u(A,"aWI","aS5",9)
u(A,"aWE","aS1",3)
u(A,"aWF","aS2",3)
v(A,"aWK","aTY",2)
v(A,"aWN","aU0",2)
v(A,"aWO","aU1",2)
v(A,"aWP","aU2",2)
v(A,"aWM","aU_",2)
v(A,"aWL","aTZ",2)
t(A.G1.prototype,"gw2","a4W",15)
u(A,"aVm","aUj",4)
u(A,"aVl","aUe",4)
u(A,"aVk","aT9",4)
var p
s(p=A.Dj.prototype,"gPf","acO",0)
s(p,"gacP","acQ",0)
s(p,"gacR","acS",0)
r(p,"gwZ","acY",0)
s(p,"gGm","akE",0)
s(p,"gzI","VG",0)
s(p,"gqN","VH",0)
s(p,"gFR","aj4",0)
s(p,"gaj2","aj3",0)
s(p,"gaj0","aj1",0)
s(p=A.Q4.prototype,"gadr","DO",0)
s(p,"gVL","VM",0)
s(p,"gacN","Dx",0)
r(p,"gafC","afD",0)
s(p,"gadK","DV",0)
s(p,"gadp","DJ",0)
s(p,"gaeN","Eh",0)
s(p,"gaks","Gl",0)
s(p,"gafs","EC",0)
w(A.Q6.prototype,"gam0","am1",30)
u(A,"aHR","aUl",31)
q(A,"aVv",2,null,["$1$2","$2"],["aIQ",function(d,e){return A.aIQ(d,e,x.z)}],32,1)})();(function inheritance(){var w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.zc,B.yy)
v(A.a5C,A.zc)
u(B.D,[A.IZ,A.KQ,A.ai0,A.aaY,A.Ml,A.lN,A.l2,A.oq,A.je,A.Ue,A.Ud,A.Wz,A.G0,A.o3,A.a33,A.n1,A.Jk,A.Jj,A.a2Z,A.p2,A.Jl,A.tg,A.ll,A.yq,A.th,A.ai_,A.y8,A.xQ,A.aaI,A.ce,A.ai2,A.M6,A.ai1,A.y_,A.M3,A.c1,A.iy,A.a5E,A.fa,A.KZ,A.eV,A.PX,A.pK,A.ob,A.vD,A.Q2,A.Q7,A.Xr,A.IF,A.Xp,A.Di,A.Q8,A.Q6])
u(B.bT,[A.ab0,A.ab4,A.ab3,A.awY,A.awZ,A.ax_,A.ax0,A.ax1,A.ax2,A.ax3,A.ax4,A.amA,A.amE,A.amD,A.axe,A.ax5,A.ax6,A.ax8,A.awp,A.a31,A.a30,A.ai3,A.avS,A.avD,A.avR,A.avC,A.axr,A.aeA,A.ajM,A.ajS,A.ajK,A.ajQ,A.ajN,A.ajL,A.ajO,A.ajR,A.ajP,A.awk])
u(B.fD,[A.ab_,A.aaZ,A.Zo,A.amC,A.amz,A.ax7,A.ax9,A.awq,A.a3_,A.a32,A.at9])
u(B.hx,[A.ab1,A.aag,A.awV,A.awW])
v(A.HK,A.lN)
v(A.yM,A.HK)
v(A.ab2,A.Ue)
v(A.nG,A.Ud)
v(A.LB,A.nG)
v(A.MS,B.tU)
v(A.Nq,B.G)
v(A.PD,B.b7)
v(A.X9,B.qd)
u(B.jL,[A.yr,A.K9,A.Rs,A.dt,A.Dh,A.me])
u(A.p2,[A.Jg,A.Jh])
v(A.Cv,B.R)
v(A.G1,B.a1)
v(A.a4O,A.aaI)
v(A.NJ,A.y_)
u(A.NJ,[A.c7,A.et])
u(A.c1,[A.bP,A.dz,A.oR,A.lD,A.yF,A.l1,A.Mz,A.vC])
u(A.dz,[A.k5,A.A2,A.ui,A.CY,A.pU,A.Bz])
u(A.fa,[A.C4,A.xY,A.Lt])
u(A.lD,[A.rS,A.lY])
u(A.Bz,[A.zQ,A.B4])
v(A.zM,A.zQ)
v(A.Q3,A.vD)
v(A.Dj,A.a5E)
v(A.Q9,A.Q7)
v(A.Q5,B.i8)
v(A.Yh,B.xO)
v(A.auh,A.Yh)
v(A.f1,A.Xr)
u(A.f1,[A.oc,A.qK,A.qL,A.qM,A.Xo,A.qN,A.Xs,A.od])
v(A.hT,A.Xo)
v(A.h_,A.Xs)
v(A.ajT,B.zz)
v(A.Q4,A.Dj)
v(A.Xq,A.Xp)
v(A.hU,A.Xq)
w(A.Ue,B.aI)
w(A.Ud,B.aI)
w(A.Yh,A.Q6)
w(A.Xr,A.Q8)
w(A.Xo,A.Di)
w(A.Xs,A.Di)
w(A.Xp,A.Di)
w(A.Xq,A.Q8)})()
B.dP(b.typeUniverse,JSON.parse('{"HK":{"lN":["l2"]},"yM":{"lN":["l2"],"lN.T":"l2"},"LB":{"nG":[]},"MS":{"at":[],"h":[]},"Nq":{"G":[],"t":[],"M":[],"an":[]},"PD":{"b7":[],"at":[],"h":[]},"X9":{"G":[],"aM":["G"],"t":[],"M":[],"an":[]},"n2":{"eE":[]},"tg":{"n2":[],"eE":[]},"Jj":{"eE":[]},"Jg":{"p2":[]},"Jh":{"p2":[]},"ll":{"n2":[],"eE":[]},"yq":{"n2":[],"eE":[]},"th":{"n2":[],"eE":[]},"Cv":{"R":[],"h":[]},"G1":{"a1":["Cv"]},"M3":{"fh":[],"bd":[]},"bP":{"acU":["1"],"c1":["1"]},"k5":{"dz":["1","j"],"c1":["j"],"dz.T":"1"},"A2":{"dz":["1","2"],"c1":["2"],"dz.T":"1"},"ui":{"dz":["u<1>","1"],"c1":["1"],"dz.T":"u<1>"},"CY":{"dz":["1","iy<1>"],"c1":["iy<1>"],"dz.T":"1"},"C4":{"fa":[]},"xY":{"fa":[]},"KZ":{"fa":[]},"Lt":{"fa":[]},"oR":{"c1":["j"]},"eV":{"fa":[]},"PX":{"fa":[]},"rS":{"lD":["1","1"],"c1":["1"],"lD.T":"1"},"dz":{"c1":["2"]},"lD":{"c1":["2"]},"pU":{"dz":["1","1"],"c1":["1"],"dz.T":"1"},"lY":{"lD":["1","u<1>"],"c1":["u<1>"],"lD.T":"1"},"yF":{"c1":["1"]},"l1":{"c1":["j"]},"Mz":{"c1":["j"]},"zM":{"dz":["1","u<1>"],"c1":["u<1>"],"dz.T":"1"},"zQ":{"dz":["1","u<1>"],"c1":["u<1>"]},"B4":{"dz":["1","u<1>"],"c1":["u<1>"],"dz.T":"1"},"Bz":{"dz":["1","u<1>"],"c1":["u<1>"]},"Q3":{"vD":[]},"vC":{"c1":["j"]},"Q7":{"bd":[]},"Q9":{"fh":[],"bd":[]},"Q5":{"i8":["u<f1>","j"],"eI":["u<f1>","j"]},"oc":{"f1":[]},"qK":{"f1":[]},"qL":{"f1":[]},"qM":{"f1":[]},"hT":{"f1":[]},"qN":{"f1":[]},"h_":{"f1":[]},"od":{"f1":[]},"acU":{"c1":["1"]}}'))
B.aAm(b.typeUniverse,JSON.parse('{"IZ":1,"KQ":1,"xQ":1,"NJ":1,"et":1,"zQ":1,"Bz":1,"IF":1}'))
var y={e:"vec2 center = 0.5 * (u_resolution + u_tile_offset);",b:"vec4 localCoord = vec4(gl_FragCoord.x - center.x, center.y - gl_FragCoord.y, 0, 1) * m_gradient;"}
var x=(function rtii(){var w=B.U
return{h:w("l2"),V:w("fE"),P:w("dm"),q:w("p2"),U:w("tg"),v:w("n2"),p:w("yF<j>"),u:w("c7<j>"),o:w("c7<@>"),O:w("k5<u<j>>"),w:w("k5<u<@>>"),I:w("a6U"),Z:w("q<i>"),E:w("q<dm>"),R:w("q<eE>"),C:w("q<c1<@>>"),F:w("q<hJ>"),r:w("q<eV>"),s:w("q<j>"),G:w("q<iy<@>>"),J:w("q<f1>"),m:w("q<hU>"),i:w("q<oq>"),n:w("q<L>"),t:w("q<o>"),a:w("u<hJ>"),j:w("u<@>"),e:w("a7<j,j>"),x:w("a7<j,o>"),K:w("a7<L,L>"),b:w("aA"),L:w("pU<@>"),X:w("c1<@>"),M:w("M6"),_:w("ui<@>"),g:w("je"),A:w("lN<@>"),d:w("eV"),y:w("bP<@>"),W:w("acU<@>"),T:w("lY<@>"),l:w("bx"),N:w("j"),c:w("cr<l2>"),S:w("CY<@>"),f:w("iy<@>"),k:w("bR"),Q:w("f1"),Y:w("hU"),bp:w("oq"),D:w("G0"),bM:w("Wz"),z:w("@"),B:w("p2?"),H:w("~")}})();(function constants(){var w=a.makeConstList
C.Wa=new A.IZ()
C.dY=new A.KQ()
C.jR=new A.PX()
C.Hf=B.b(w(["amp","apos","gt","lt","quot"]),x.s)
C.KQ=new B.b1(5,{amp:"&",apos:"'",gt:">",lt:"<",quot:'"'},C.Hf,B.U("b1<j,j>"))
C.jS=new A.Q3()
C.Ij=B.b(w([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2126,0.7152,0.0722,0,0]),x.n)
C.Aa=new B.rU(C.Ij)
C.Ff=new A.xY(!1)
C.Fg=new A.xY(!0)
C.iZ=new A.Rs(0,"Absolute")
C.Fm=new A.y8(0,C.iZ)
C.FA=new A.n1(D.ak,null,null,null,null,null,null,D.X,null,null,null,null)
C.bP=new A.n1(null,null,null,null,null,null,null,null,null,null,null,null)
C.kq=new A.yr(0,"start")
C.FB=new A.yr(1,"middle")
C.FC=new A.yr(2,"end")
C.ck=new A.K9(0,"objectBoundingBox")
C.kO=new A.K9(1,"userSpaceOnUse")
C.ln=B.b(w([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768,65536,131072,262144,524288,1048576,2097152,4194304,8388608,16777216,33554432,67108864,134217728,268435456,536870912,1073741824,2147483648]),x.t)
C.I1=B.b(w([D.cJ,D.Oz,D.OA]),B.U("q<kF>"))
C.Im=B.b(w([D.bj,D.Oy,D.it]),B.U("q<kE>"))
C.Iy=B.b(w([]),x.C)
C.Ix=B.b(w([]),x.n)
C.Ha=B.b(w(["circle","path","rect","polygon","polyline","ellipse","line"]),x.s)
C.qm=new B.b1(7,{circle:A.aWD(),path:A.aWG(),rect:A.aWJ(),polygon:A.aWH(),polyline:A.aWI(),ellipse:A.aWE(),line:A.aWF()},C.Ha,B.U("b1<j,hJ?(u<hU>?)>"))
C.Hd=B.b(w(["matrix","translate","scale","rotate","skewX","skewY"]),x.s)
C.KO=new B.b1(6,{matrix:A.aWK(),translate:A.aWP(),scale:A.aWM(),rotate:A.aWL(),skewX:A.aWN(),skewY:A.aWO()},C.Hd,B.U("b1<j,aL(j?,aL)>"))
C.xh=new A.Dh(0,"SINGLE_QUOTE")
C.xi=new A.Dh(1,"DOUBLE_QUOTE")
C.KW=new B.b9([C.xh,"'",C.xi,'"'],B.U("b9<Dh,j>"))
C.HV=B.b(w(["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","transparent","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"]),x.s)
C.DU=new B.i(4293982463)
C.Eb=new B.i(4294634455)
C.BZ=new B.i(4286578644)
C.DW=new B.i(4293984255)
C.E4=new B.i(4294309340)
C.ER=new B.i(4294960324)
C.EU=new B.i(4294962125)
C.Aq=new B.i(4278190335)
C.Ca=new B.i(4287245282)
C.Cw=new B.i(4289014314)
C.Dp=new B.i(4292786311)
C.BE=new B.i(4284456608)
C.BY=new B.i(4286578432)
C.D9=new B.i(4291979550)
C.Es=new B.i(4294934352)
C.BH=new B.i(4284782061)
C.F3=new B.i(4294965468)
C.Dl=new B.i(4292613180)
C.Ao=new B.i(4278190219)
C.Aw=new B.i(4278225803)
C.CN=new B.i(4290283019)
C.k7=new B.i(4289309097)
C.As=new B.i(4278215680)
C.CT=new B.i(4290623339)
C.Cc=new B.i(4287299723)
C.BA=new B.i(4283788079)
C.Ev=new B.i(4294937600)
C.Co=new B.i(4288230092)
C.Cb=new B.i(4287299584)
C.DF=new B.i(4293498490)
C.Cg=new B.i(4287609999)
C.Bq=new B.i(4282924427)
C.k0=new B.i(4281290575)
C.AC=new B.i(4278243025)
C.Cl=new B.i(4287889619)
C.El=new B.i(4294907027)
C.AB=new B.i(4278239231)
C.k3=new B.i(4285098345)
C.AU=new B.i(4280193279)
C.CI=new B.i(4289864226)
C.F7=new B.i(4294966e3)
C.AY=new B.i(4280453922)
C.Dm=new B.i(4292664540)
C.E7=new B.i(4294506751)
C.EL=new B.i(4294956800)
C.Dj=new B.i(4292519200)
C.At=new B.i(4278222848)
C.CC=new B.i(4289593135)
C.DV=new B.i(4293984240)
C.Ep=new B.i(4294928820)
C.D3=new B.i(4291648604)
C.Bt=new B.i(4283105410)
C.Fb=new B.i(4294967280)
C.DS=new B.i(4293977740)
C.DA=new B.i(4293322490)
C.EZ=new B.i(4294963445)
C.BW=new B.i(4286381056)
C.F6=new B.i(4294965965)
C.CB=new B.i(4289583334)
C.DR=new B.i(4293951616)
C.Ds=new B.i(4292935679)
C.Ed=new B.i(4294638290)
C.k8=new B.i(4292072403)
C.Cj=new B.i(4287688336)
C.ED=new B.i(4294948545)
C.Ey=new B.i(4294942842)
C.AV=new B.i(4280332970)
C.C8=new B.i(4287090426)
C.k5=new B.i(4286023833)
C.CG=new B.i(4289774814)
C.Fa=new B.i(4294967264)
C.B9=new B.i(4281519410)
C.Ec=new B.i(4294635750)
C.C_=new B.i(4286578688)
C.BL=new B.i(4284927402)
C.Ap=new B.i(4278190285)
C.CO=new B.i(4290401747)
C.Ck=new B.i(4287852763)
C.Bd=new B.i(4282168177)
C.BV=new B.i(4286277870)
C.AD=new B.i(4278254234)
C.Br=new B.i(4282962380)
C.D1=new B.i(4291237253)
C.AN=new B.i(4279834992)
C.E5=new B.i(4294311930)
C.ES=new B.i(4294960353)
C.EQ=new B.i(4294960309)
C.EN=new B.i(4294958765)
C.An=new B.i(4278190208)
C.Ek=new B.i(4294833638)
C.C1=new B.i(4286611456)
C.BP=new B.i(4285238819)
C.Ez=new B.i(4294944e3)
C.En=new B.i(4294919424)
C.Di=new B.i(4292505814)
C.DK=new B.i(4293847210)
C.Cn=new B.i(4288215960)
C.CE=new B.i(4289720046)
C.Dk=new B.i(4292571283)
C.EY=new B.i(4294963157)
C.EM=new B.i(4294957753)
C.D4=new B.i(4291659071)
C.EF=new B.i(4294951115)
C.Do=new B.i(4292714717)
C.CH=new B.i(4289781990)
C.C0=new B.i(4286578816)
C.CR=new B.i(4290547599)
C.Bh=new B.i(4282477025)
C.Cd=new B.i(4287317267)
C.Ea=new B.i(4294606962)
C.E_=new B.i(4294222944)
C.B6=new B.i(4281240407)
C.F2=new B.i(4294964718)
C.Cu=new B.i(4288696877)
C.CW=new B.i(4290822336)
C.C7=new B.i(4287090411)
C.BO=new B.i(4285160141)
C.k4=new B.i(4285563024)
C.F8=new B.i(4294966010)
C.AF=new B.i(4278255487)
C.Bp=new B.i(4282811060)
C.Da=new B.i(4291998860)
C.Au=new B.i(4278222976)
C.Dh=new B.i(4292394968)
C.Eo=new B.i(4294927175)
C.Bg=new B.i(4282441936)
C.DJ=new B.i(4293821166)
C.E3=new B.i(4294303411)
C.Cp=new B.i(4288335154)
C.Ld=new B.b1(148,{aliceblue:C.DU,antiquewhite:C.Eb,aqua:D.jZ,aquamarine:C.BZ,azure:C.DW,beige:C.E4,bisque:C.ER,black:D.p,blanchedalmond:C.EU,blue:C.Aq,blueviolet:C.Ca,brown:C.Cw,burlywood:C.Dp,cadetblue:C.BE,chartreuse:C.BY,chocolate:C.D9,coral:C.Es,cornflowerblue:C.BH,cornsilk:C.F3,crimson:C.Dl,cyan:D.jZ,darkblue:C.Ao,darkcyan:C.Aw,darkgoldenrod:C.CN,darkgray:C.k7,darkgreen:C.As,darkgrey:C.k7,darkkhaki:C.CT,darkmagenta:C.Cc,darkolivegreen:C.BA,darkorange:C.Ev,darkorchid:C.Co,darkred:C.Cb,darksalmon:C.DF,darkseagreen:C.Cg,darkslateblue:C.Bq,darkslategray:C.k0,darkslategrey:C.k0,darkturquoise:C.AC,darkviolet:C.Cl,deeppink:C.El,deepskyblue:C.AB,dimgray:C.k3,dimgrey:C.k3,dodgerblue:C.AU,firebrick:C.CI,floralwhite:C.F7,forestgreen:C.AY,fuchsia:D.kb,gainsboro:C.Dm,ghostwhite:C.E7,gold:C.EL,goldenrod:C.Dj,gray:E.k6,grey:E.k6,green:C.At,greenyellow:C.CC,honeydew:C.DV,hotpink:C.Ep,indianred:C.D3,indigo:C.Bt,ivory:C.Fb,khaki:C.DS,lavender:C.DA,lavenderblush:C.EZ,lawngreen:C.BW,lemonchiffon:C.F6,lightblue:C.CB,lightcoral:C.DR,lightcyan:C.Ds,lightgoldenrodyellow:C.Ed,lightgray:C.k8,lightgreen:C.Cj,lightgrey:C.k8,lightpink:C.ED,lightsalmon:C.Ey,lightseagreen:C.AV,lightskyblue:C.C8,lightslategray:C.k5,lightslategrey:C.k5,lightsteelblue:C.CG,lightyellow:C.Fa,lime:D.AE,limegreen:C.B9,linen:C.Ec,magenta:D.kb,maroon:C.C_,mediumaquamarine:C.BL,mediumblue:C.Ap,mediumorchid:C.CO,mediumpurple:C.Ck,mediumseagreen:C.Bd,mediumslateblue:C.BV,mediumspringgreen:C.AD,mediumturquoise:C.Br,mediumvioletred:C.D1,midnightblue:C.AN,mintcream:C.E5,mistyrose:C.ES,moccasin:C.EQ,navajowhite:C.EN,navy:C.An,oldlace:C.Ek,olive:C.C1,olivedrab:C.BP,orange:C.Ez,orangered:C.En,orchid:C.Di,palegoldenrod:C.DK,palegreen:C.Cn,paleturquoise:C.CE,palevioletred:C.Dk,papayawhip:C.EY,peachpuff:C.EM,peru:C.D4,pink:C.EF,plum:C.Do,powderblue:C.CH,purple:C.C0,red:D.ka,rosybrown:C.CR,royalblue:C.Bh,saddlebrown:C.Cd,salmon:C.Ea,sandybrown:C.E_,seagreen:C.B6,seashell:C.F2,sienna:C.Cu,silver:C.CW,skyblue:C.C7,slateblue:C.BO,slategray:C.k4,slategrey:C.k4,snow:C.F8,springgreen:C.AF,steelblue:C.Bp,tan:C.Da,teal:C.Au,thistle:C.Dh,tomato:C.Eo,transparent:D.fU,turquoise:C.Bg,violet:C.DJ,wheat:C.E3,white:D.k,whitesmoke:D.k9,yellow:D.kc,yellowgreen:C.Cp},C.HV,B.U("b1<j,i>"))
C.I9=B.b(w(["svg","g","a","use","symbol","mask","radialGradient","linearGradient","clipPath","image","text"]),x.s)
C.Lf=new B.b1(11,{svg:A.aWA(),g:A.aIC(),a:A.aIC(),use:A.aWC(),symbol:A.aID(),mask:A.aID(),radialGradient:A.aWz(),linearGradient:A.aWy(),clipPath:A.aWw(),image:A.aWx(),text:A.aWB()},C.I9,B.U("b1<j,ad<~>?(o3,J)>"))
C.iu=new A.dt(1,"close")
C.iz=new A.dt(2,"moveToAbs")
C.iA=new A.dt(3,"moveToRel")
C.wJ=new A.dt(4,"lineToAbs")
C.wK=new A.dt(5,"lineToRel")
C.iB=new A.dt(6,"cubicToAbs")
C.iC=new A.dt(7,"cubicToRel")
C.iD=new A.dt(8,"quadToAbs")
C.iE=new A.dt(9,"quadToRel")
C.OB=new A.dt(10,"arcToAbs")
C.OC=new A.dt(11,"arcToRel")
C.OD=new A.dt(12,"lineToHorizontalAbs")
C.OE=new A.dt(13,"lineToHorizontalRel")
C.OF=new A.dt(14,"lineToVerticalAbs")
C.OG=new A.dt(15,"lineToVerticalRel")
C.iv=new A.dt(16,"smoothCubicToAbs")
C.iw=new A.dt(17,"smoothCubicToRel")
C.ix=new A.dt(18,"smoothQuadToAbs")
C.iy=new A.dt(19,"smoothQuadToRel")
C.Lm=new B.b9([90,C.iu,122,C.iu,77,C.iz,109,C.iA,76,C.wJ,108,C.wK,67,C.iB,99,C.iC,81,C.iD,113,C.iE,65,C.OB,97,C.OC,72,C.OD,104,C.OE,86,C.OF,118,C.OG,83,C.iv,115,C.iw,84,C.ix,116,C.iy],B.U("b9<o,dt>"))
C.IU=B.b(w(["multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"]),x.s)
C.LB=new B.b1(15,{multiply:D.yE,screen:D.yu,overlay:D.yv,darken:D.yw,lighten:D.yx,"color-dodge":D.yy,"color-burn":D.yz,"hard-light":D.yA,"soft-light":D.yB,difference:D.yC,exclusion:D.yD,hue:D.yF,saturation:D.jA,color:D.yG,luminosity:D.yH},C.IU,B.U("b1<j,dx>"))
C.c2=new A.dt(0,"unknown")
C.UI=new A.me(1,"CDATA")
C.UJ=new A.me(2,"COMMENT")
C.UK=new A.me(3,"DECLARATION")
C.UL=new A.me(4,"DOCUMENT_TYPE")
C.xj=new A.me(7,"ELEMENT")
C.UM=new A.me(8,"PROCESSING")
C.UN=new A.me(9,"TEXT")
C.V0=new A.Rs(1,"Percentage")
C.cM=new A.ce(0,0)})();(function staticFields(){$.aAO=B.Y(["xx-small",10,"x-small",12,"small",14,"medium",18,"large",22,"x-large",26,"xx-large",32],x.N,B.U("L"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"aYt","aJp",()=>new A.aaY(B.I(B.U("D"),B.U("nG"))))
w($,"b_N","aKT",()=>B.bV("^( *,?([^(]+)\\(([^)]*)\\))*$",!0))
w($,"b_M","aKS",()=>B.bV(" *,?([^(]+)\\(([^)]*)\\)",!0))
w($,"b_P","YU",()=>B.bV("( *, *| +)",!0))
w($,"b_Q","aKU",()=>B.bV("\\s",!0))
w($,"b_b","aBU",()=>{var v=B.aP_()
v.sp0(D.yJ)
v.sn8(C.Aa)
return v})
w($,"aY9","aBy",()=>A.aMS(C.Ix))
w($,"b0f","aC0",()=>new A.ai_())
w($,"aYV","aJG",()=>new A.ai3())
w($,"aZ0","aJJ",()=>A.hw(A.Ha("\n",null),A.bW(A.Ha("\r",null),A.aEv(A.Ha("\n",null),x.N))))
w($,"b_D","aKL",()=>A.hi(A.aAX(),new A.avS(),!1,x.N,x.d))
w($,"b_y","aKG",()=>A.hi(A.bW(A.bW(A.aAX(),A.Ha("-",null)),A.aAX()),new A.avD(),!1,x.j,x.d))
w($,"b_B","aKJ",()=>A.hi(A.aPj(A.hw($.aKG(),$.aKL()),x.z),new A.avR(),!1,x.j,B.U("fa")))
w($,"b_v","aKD",()=>A.hi(A.bW(A.aEv(A.Ha("^",null),x.N),$.aKJ()),new A.avC(),!1,x.j,B.U("fa")))
w($,"b_L","aKR",()=>B.bV("[&<]|]]>",!0))
w($,"b_C","aKK",()=>B.bV("['&<\\n\\r\\t]",!0))
w($,"b_9","aKm",()=>B.bV('["&<\\n\\r\\t]',!0))
w($,"b01","aL1",()=>new A.Q2(new A.awk(),5,B.I(B.U("vD"),x.X),B.U("Q2<vD,c1<@>>")))})()}
$__dart_deferred_initializers__["XPkslDSgbsXqA7ELOO29nybEgZ8="] = $__dart_deferred_initializers__.current
