self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
aDt(d){var x,w,v=new A.aK(new Float64Array(16))
v.cE()
for(x=d.length-1;x>0;--x){w=d[x]
if(w!=null)w.oV(d[x-1],v)}return v},
a4U(d,e,f,g){var x,w
if(d==null||e==null)return null
if(d===e)return d
x=d.a
w=e.a
if(x<w){x=y.m
g.push(x.a(A.K.prototype.ga7.call(e,e)))
return B.a4U(d,x.a(A.K.prototype.ga7.call(e,e)),f,g)}else if(x>w){x=y.m
f.push(x.a(A.K.prototype.ga7.call(d,d)))
return B.a4U(x.a(A.K.prototype.ga7.call(d,d)),e,f,g)}x=y.m
f.push(x.a(A.K.prototype.ga7.call(d,d)))
g.push(x.a(A.K.prototype.ga7.call(e,e)))
return B.a4U(x.a(A.K.prototype.ga7.call(d,d)),x.a(A.K.prototype.ga7.call(e,e)),f,g)},
tM:function tM(){this.a=null
this.b=0
this.c=null},
aoY:function aoY(d){this.a=d},
pA:function pA(d,e,f){var _=this
_.r2=d
_.rx=e
_.dx=_.db=_.ry=null
_.d=!1
_.e=f
_.f=0
_.r=!0
_.Q=_.z=_.y=_.x=null
_.a=0
_.c=_.b=null},
z3:function z3(d,e,f,g,h){var _=this
_.r2=d
_.rx=e
_.ry=f
_.x1=g
_.a0=_.y2=_.y1=_.x2=null
_.N=!0
_.dx=_.db=null
_.d=!1
_.e=h
_.f=0
_.r=!0
_.Q=_.z=_.y=_.x=null
_.a=0
_.c=_.b=null},
Ne:function Ne(d,e,f){var _=this
_.F=d
_.Y=null
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
Na:function Na(d,e,f,g,h,i,j){var _=this
_.F=d
_.Y=e
_.b4=f
_.bP=g
_.b5=h
_.q$=i
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
_.dx=j
_.dy=!1
_.fr=$
_.fx=!0
_.fy=null
_.go=!0
_.id=null
_.a=0
_.c=_.b=null},
acq:function acq(d){this.a=d},
oP(d){var x=0,w=A.A(y.v)
var $async$oP=A.w(function(e,f){if(e===1)return A.x(f,w)
while(true)switch(x){case 0:x=2
return A.B(D.bh.df("Clipboard.setData",A.X(["text",d.a],y.w,y.b),y.v),$async$oP)
case 2:return A.y(null,w)}})
return A.z($async$oP,w)},
l7:function l7(d){this.a=d},
aCQ(d,e,f,g){return new B.rV(e,g,f,d,null)},
oS:function oS(d,e,f){this.e=d
this.c=e
this.a=f},
rV:function rV(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.y=f
_.c=g
_.a=h},
ay3(d){var x=d.a_(y.p),w=x==null?null:x.f.c
return(w==null?D.bO:w).fk(d)}},A,D,J,C
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[9],B)
A=c[0]
D=c[2]
J=c[1]
C=c[22]
B.tM.prototype={
MU(){++this.b
return new B.aoY(this)},
j(d){var x="<optimized out>#"+A.ce(this)+"("
return x+(this.a!=null?"<linked>":"<dangling>")+")"}}
B.aoY.prototype={
m(d){--this.a.b
this.a=null}}
B.pA.prototype={
skH(d){var x=this.r2
if(x===d)return
x.a=null
this.r2=d},
sbH(d,e){var x=this
if(e.k(0,x.rx))return
x.rx=e
if(x.r2.b<=0)x.dH()},
glv(){return this.r2.b>0},
ah(d){var x=this
x.I2(d)
x.ry=null
x.r2.a=x},
a8(d){this.ry=this.r2.a=null
this.I3(0)},
fi(d,e,f,g){return this.k7(d,e.a4(0,this.rx),!0,g)},
fQ(d){var x=this,w=x.rx
x.ry=w
if(!w.k(0,D.j)){w=x.ry
x.sfT(d.yE(A.no(w.a,w.b,0).a,y.y.a(x.x)))}x.hI(d)
if(!J.e(x.ry,D.j))d.du(0)},
oV(d,e){var x
if(!J.e(this.ry,D.j)){x=this.ry
e.aO(0,x.a,x.b)}}}
B.z3.prototype={
ah(d){this.I2(d)
this.x2=this.r2.MU()},
a8(d){var x
this.I3(0)
x=this.x2
if(x!=null)x.m(0)
this.x2=null},
CY(d){var x,w,v,u,t=this
if(t.N){x=t.Hf()
x.toString
t.a0=A.A4(x)
t.N=!1}if(t.a0==null)return null
w=new A.iv(new Float64Array(4))
w.vd(d.a,d.b,0,1)
x=t.a0.T(0,w).a
v=x[0]
u=t.x1
return new A.m(v-u.a,x[1]-u.b)},
fi(d,e,f,g){var x,w=this
if(w.x2.a.a==null){if(w.rx)return w.k7(d,e.a4(0,w.ry),!0,g)
return!1}x=w.CY(e)
if(x==null)return!1
return w.k7(d,x,!0,g)},
Hf(){var x,w
if(this.y2==null)return null
x=this.y1
w=A.no(-x.a,-x.b,0)
x=this.y2
x.toString
w.cC(0,x)
return w},
a2O(){var x,w,v,u,t,s,r=this
r.y2=null
x=r.x2.a.a
if(x==null)return
w=y.A
v=A.b([x],w)
u=A.b([r],w)
B.a4U(x,r,v,u)
t=B.aDt(v)
x.oV(null,t)
w=r.x1
t.aO(0,w.a,w.b)
s=B.aDt(u)
if(s.lD(s)===0)return
s.cC(0,t)
r.y2=s
r.N=!0},
glv(){return!0},
fQ(d){var x,w,v=this
if(v.x2.a.a==null&&!v.rx){v.y1=v.y2=null
v.N=!0
v.sfT(null)
return}v.a2O()
x=v.y2
w=y.y
if(x!=null){v.sfT(d.yE(x.a,w.a(v.x)))
v.hI(d)
d.du(0)
v.y1=v.ry}else{v.y1=null
x=v.ry
v.sfT(d.yE(A.no(x.a,x.b,0).a,w.a(v.x)))
v.hI(d)
d.du(0)}v.N=!0},
oV(d,e){var x=this.y2
if(x!=null)e.cC(0,x)
else{x=this.ry
e.cC(0,A.no(x.a,x.b,0))}}}
B.Ne.prototype={
skH(d){var x=this,w=x.F
if(w===d)return
w.c=null
x.F=d
w=x.Y
if(w!=null)d.c=w
x.an()},
gaz(){return!0},
bK(){var x,w=this
w.vq()
x=w.rx
x.toString
w.Y=x
w.F.c=x},
aB(d,e){var x=this.dx,w=x.a,v=this.F
if(w==null)x.saN(0,new B.pA(v,e,A.ap()))
else{y.t.a(w)
w.skH(v)
w.sbH(0,e)}x=x.a
x.toString
d.qa(x,A.dJ.prototype.gf2.call(this),D.j)}}
B.Na.prototype={
skH(d){if(this.F===d)return
this.F=d
this.an()},
sVu(d){if(this.Y===d)return
this.Y=d
this.an()},
sbH(d,e){if(this.b4.k(0,e))return
this.b4=e
this.an()},
saif(d){if(this.bP.k(0,d))return
this.bP=d
this.an()},
sagy(d){if(this.b5.k(0,d))return
this.b5=d
this.an()},
a8(d){this.dx.saN(0,null)
this.ob(0)},
gaz(){return!0},
Ha(){var x=y.s.a(A.t.prototype.gaN.call(this,this))
x=x==null?null:x.Hf()
if(x==null){x=new A.aK(new Float64Array(16))
x.cE()}return x},
c9(d,e){if(this.F.a==null&&!this.Y)return!1
return this.cZ(d,e)},
cZ(d,e){return d.rV(new B.acq(this),e,this.Ha())},
aB(d,e){var x,w,v,u,t=this,s=t.F.c
if(s==null)x=t.b4
else{w=t.bP.Dq(s)
v=t.b5
u=t.rx
u.toString
x=w.a4(0,v.Dq(u)).X(0,t.b4)}w=y.s
if(w.a(A.t.prototype.gaN.call(t,t))==null)t.dx.saN(0,new B.z3(t.F,t.Y,e,x,A.ap()))
else{v=w.a(A.t.prototype.gaN.call(t,t))
if(v!=null){u=t.F
if(u!==v.r2&&v.x2!=null){v.x2.m(0)
v.x2=u.MU()}v.r2=u
v.rx=t.Y
v.x1=x
v.ry=e}}w=w.a(A.t.prototype.gaN.call(t,t))
w.toString
d.mc(w,A.dJ.prototype.gf2.call(t),D.j,C.ME)},
dz(d,e){e.cC(0,this.Ha())}}
B.l7.prototype={}
B.oS.prototype={
aH(d){var x=new B.Ne(this.e,null,A.ap())
x.gat()
x.gaz()
x.fr=!0
x.sb8(null)
return x},
aT(d,e){e.skH(this.e)}}
B.rV.prototype={
aH(d){var x=new B.Na(this.e,this.f,this.y,C.c8,C.c8,null,A.ap())
x.gat()
x.gaz()
x.fr=!0
x.sb8(null)
return x},
aT(d,e){e.skH(this.e)
e.sVu(this.f)
e.sbH(0,this.y)
e.saif(C.c8)
e.sagy(C.c8)}}
var z=a.updateTypes([])
B.acq.prototype={
$2(d,e){return this.a.qV(d,e)},
$S:16};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.E,[B.tM,B.aoY,B.l7])
x(A.dS,[B.pA,B.z3])
x(A.uv,[B.Ne,B.Na])
w(B.acq,A.jV)
x(A.b7,[B.oS,B.rV])})()
A.hU(b.typeUniverse,JSON.parse('{"pA":{"dS":[],"K":[]},"z3":{"dS":[],"K":[]},"Ne":{"I":[],"aL":["I"],"t":[],"K":[],"an":[]},"Na":{"I":[],"aL":["I"],"t":[],"K":[],"an":[]},"oS":{"b7":[],"au":[],"h":[]},"rV":{"b7":[],"au":[],"h":[]}}'))
var y={A:A.a0("r<dS>"),t:A.a0("pA"),w:A.a0("j"),p:A.a0("wb"),b:A.a0("@"),m:A.a0("dS?"),s:A.a0("z3?"),y:A.a0("azT?"),v:A.a0("~")};(function constants(){C.c8=new A.dG(-1,-1)
C.jI=new A.ls(A.aIk(),A.a0("ls<L>"))
C.Ah=new A.i(167772160)
C.ME=new A.D(-1/0,-1/0,1/0,1/0)})()}
$__dart_deferred_initializers__["Lu/wx/vhU1VJ9c/agMgx1cdLQK4="] = $__dart_deferred_initializers__.current
