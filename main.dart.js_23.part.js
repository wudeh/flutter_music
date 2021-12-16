self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
aQ9(d,e,f,g,h,i){var x=e==null&&i===C.a_
return new B.Ol(i,g,e,x,h,d,f,null)},
Ol:function Ol(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.a=k},
aeU:function aeU(d,e,f){this.a=d
this.b=e
this.c=f},
wJ:function wJ(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
Fu:function Fu(d,e,f,g,h,i){var _=this
_.C=d
_.q=e
_.L=f
_.af=g
_.q$=h
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
_.dx=i
_.dy=!1
_.fr=$
_.fx=!0
_.fy=null
_.go=!0
_.id=null
_.a=0
_.c=_.b=null},
aqS:function aqS(d,e){this.a=d
this.b=e},
aqR:function aqR(d,e){this.a=d
this.b=e},
GP:function GP(){}},A,C,D
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[16],B)
A=c[0]
C=c[2]
D=c[36]
B.Ol.prototype={
J(d,e){var x,w,v,u=this,t={},s=A.aIa(e,u.c,!1)
t.a=u.y
x=u.r
w=x?A.B3(e):u.f
v=A.adY(s,w,u.z,!1,u.x,null,null,null,new B.aeU(t,u,s))
return x&&w!=null?A.aES(v):v}}
B.wJ.prototype={
aH(d){var x=new B.Fu(this.e,this.f,this.r,A.ap(),null,A.ap())
x.gat()
x.fr=!0
x.sb8(null)
return x},
aT(d,e){var x
e.sjo(this.e)
e.sbH(0,this.f)
x=this.r
if(x!==e.L){e.L=x
e.an()
e.ay()}}}
B.Fu.prototype={
sjo(d){if(d===this.C)return
this.C=d
this.W()},
sbH(d,e){var x=this,w=x.q
if(e===w)return
if(x.b!=null)w.U(0,x.gw6())
x.q=e
if(x.b!=null)e.a1(0,x.gw6())
x.W()},
a6v(){this.an()
this.ay()},
ew(d){if(!(d.e instanceof A.kl))d.e=new A.kl()},
ah(d){this.ZH(d)
this.q.a1(0,this.gw6())},
a8(d){this.q.U(0,this.gw6())
this.ZI(0)},
gat(){return!0},
gac6(){switch(A.bF(this.C).a){case 0:return this.rx.a
case 1:return this.rx.b}},
ga7o(){var x=this,w=x.q$
if(w==null)return 0
switch(A.bF(x.C).a){case 0:return Math.max(0,w.rx.a-x.rx.a)
case 1:return Math.max(0,w.rx.b-x.rx.b)}},
KV(d){switch(A.bF(this.C).a){case 0:return new A.aG(0,1/0,d.c,d.d)
case 1:return new A.aG(d.a,d.b,0,1/0)}},
c7(d){var x=this.q$
if(x==null)return new A.P(C.e.E(0,d.a,d.b),C.e.E(0,d.c,d.d))
return d.bX(x.i7(this.KV(d)))},
bK(){var x=this,w=y.a.a(A.t.prototype.gV.call(x)),v=x.q$
if(v==null)x.rx=new A.P(C.e.E(0,w.a,w.b),C.e.E(0,w.c,w.d))
else{v.ct(0,x.KV(w),!0)
v=x.q$.rx
v.toString
x.rx=w.bX(v)}x.q.oW(x.gac6())
x.q.oU(0,x.ga7o())},
rs(d){var x=this
switch(x.C.a){case 0:return new A.m(0,d-x.q$.rx.b+x.rx.b)
case 2:return new A.m(0,-d)
case 3:return new A.m(d-x.q$.rx.a+x.rx.a,0)
case 1:return new A.m(-d,0)}},
Nz(d){var x,w,v,u,t=d.a
if(!(t<0)){x=d.b
if(!(x<0)){w=this.q$.rx
v=w.a
u=this.rx
t=t+v>u.a||x+w.b>u.b}else t=!0}else t=!0
return t},
aB(d,e){var x,w,v,u,t=this
if(t.q$!=null){x=t.q.cx
x.toString
x=t.rs(x)
w=new B.aqS(t,x)
x=t.Nz(x)&&t.L!==C.h
v=t.af
if(x){x=A.a(t.fr,"_needsCompositing")
u=t.rx
v.saN(0,d.jK(x,e,new A.E(0,0,0+u.a,0+u.b),w,t.L,v.a))}else{v.saN(0,null)
w.$2(d,e)}}},
m(d){this.af.saN(0,null)
this.l8(0)},
dz(d,e){var x=this.q.cx
x.toString
x=this.rs(x)
e.aO(0,x.a,x.b)},
js(d){var x=this,w=x.q.cx
w.toString
w=x.Nz(x.rs(w))
if(w){w=x.rx
return new A.E(0,0,0+w.a,0+w.b)}return null},
cZ(d,e){var x,w=this
if(w.q$!=null){x=w.q.cx
x.toString
return d.lt(new B.aqR(w,e),w.rs(x),e)}return!1},
nT(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.ghY()
if(!(d instanceof A.G)){x=q.q.cx
x.toString
return new A.kw(x,f)}w=A.nt(d.dW(0,q.q$),f)
x=q.q$.rx
x.toString
switch(q.C.a){case 0:v=q.rx.b
u=w.d
t=x.b-u
s=u-w.b
break
case 1:v=q.rx.a
t=w.a
s=w.c-t
break
case 2:v=q.rx.b
t=w.b
s=w.d-t
break
case 3:v=q.rx.a
u=w.c
t=x.a-u
s=u-w.a
break
default:t=null
s=null
v=null}r=t-(v-s)*e
return new A.kw(r,w.cn(q.rs(r)))},
d4(d,e,f,g){var x=this
if(!x.q.f.gn0())return x.o7(d,e,f,g)
x.o7(d,null,f,A.aF9(d,e,f,x.q,g,x))},
jY(){return this.d4(C.ab,null,C.t,null)},
j3(d){return this.d4(C.ab,null,C.t,d)},
j4(d,e,f){return this.d4(d,null,e,f)},
Eq(d){var x
switch(A.bF(this.C).a){case 1:x=this.rx
return new A.E(0,-250,0+x.a,0+x.b+250)
case 0:x=this.rx
return new A.E(-250,0,0+x.a+250,0+x.b)}},
$iMX:1}
B.GP.prototype={
ah(d){var x
this.dn(d)
x=this.q$
if(x!=null)x.ah(d)},
a8(d){var x
this.d5(0)
x=this.q$
if(x!=null)x.a8(0)}}
var z=a.updateTypes(["wJ(M,fq)","~()","~({curve:eD,descendant:t?,duration:aF,rect:E?})"])
B.aeU.prototype={
$2(d,e){return new B.wJ(this.c,e,C.I,this.a.a,null)},
$S:z+0}
B.aqS.prototype={
$2(d,e){var x=this.a.q$
x.toString
d.dT(x,e.X(0,this.b))},
$S:19}
B.aqR.prototype={
$2(d,e){return this.a.q$.c9(d,e)},
$S:15};(function aliases(){var x=B.GP.prototype
x.ZH=x.ah
x.ZI=x.a8})();(function installTearOffs(){var x=a._instance_0u,w=a.installInstanceTearOff
var v
x(v=B.Fu.prototype,"gw6","a6v",1)
w(v,"gmy",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect"],["d4","jY","j3","j4"],2,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.Ol,A.aK)
v(A.hx,[B.aeU,B.aqS,B.aqR])
w(B.wJ,A.b7)
w(B.GP,A.G)
w(B.Fu,B.GP)
x(B.GP,A.aM)})()
A.dP(b.typeUniverse,JSON.parse('{"wJ":{"b7":[],"at":[],"h":[]},"Ol":{"aK":[],"h":[]},"Fu":{"G":[],"aM":["G"],"MX":[],"t":[],"L":[],"an":[]}}'))
var y={a:A.T("aG")};(function constants(){D.kd=new A.i(452984831)})()}
$__dart_deferred_initializers__["tV2WkBzPjRkbGP4b4RiCo5GHtbM="] = $__dart_deferred_initializers__.current
