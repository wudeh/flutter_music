self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={mJ:function mJ(d,e){this.a=d
this.b=e},
aCp(d,e,f,g,h,i,j,k){var x,w,v=null
if(g==null)x=e!=null?new B.bL(e,v,v,v,v,v,C.D):v
else x=g
if(k!=null||i!=null)w=B.jY(i,k)
else w=v
return new A.xa(d,j,x,w,f,h,v,v)},
oK:function oK(d,e){this.a=d
this.b=e},
pH:function pH(d,e){this.a=d
this.b=e},
xa:function xa(d,e,f,g,h,i,j,k){var _=this
_.r=d
_.y=e
_.z=f
_.ch=g
_.c=h
_.d=i
_.e=j
_.a=k},
Qj:function Qj(d,e){var _=this
_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=null
_.e=_.d=$
_.c6$=d
_.a=null
_.b=e
_.c=null},
ak3:function ak3(){},
ak4:function ak4(){},
ak5:function ak5(){},
ak6:function ak6(){},
ak7:function ak7(){},
ak8:function ak8(){},
ak9:function ak9(){},
aka:function aka(){},
aEY(){var x=new Float64Array(4)
x[3]=1
return new A.nK(x)},
nK:function nK(d){this.a=d}},B,C
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[11],A)
B=c[0]
C=c[2]
A.mJ.prototype={
eg(d){return B.axT(this.a,this.b,d)}}
A.oK.prototype={
eg(d){var x=B.rG(this.a,this.b,d)
x.toString
return x}}
A.pH.prototype={
eg(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.dM(new Float64Array(3)),a3=new B.dM(new Float64Array(3)),a4=A.aEY(),a5=A.aEY(),a6=new B.dM(new Float64Array(3)),a7=new B.dM(new Float64Array(3))
this.a.Qe(a2,a4,a6)
this.b.Qe(a3,a5,a7)
x=1-a8
w=a2.j1(x).X(0,a3.j1(a8))
v=a4.j1(x).X(0,a5.j1(a8))
u=new Float64Array(4)
t=new A.nK(u)
t.bc(v)
t.u2(0)
s=a6.j1(x).X(0,a7.j1(a8))
x=new Float64Array(16)
v=new B.aL(x)
r=u[0]
q=u[1]
p=u[2]
o=u[3]
n=r+r
m=q+q
l=p+p
k=r*n
j=r*m
i=r*l
h=q*m
g=q*l
f=p*l
e=o*n
d=o*m
a0=o*l
a1=w.a
x[0]=1-(h+f)
x[1]=j+a0
x[2]=i-d
x[3]=0
x[4]=j-a0
x[5]=1-(k+f)
x[6]=g+e
x[7]=0
x[8]=i+d
x[9]=g-e
x[10]=1-(k+h)
x[11]=0
x[12]=a1[0]
x[13]=a1[1]
x[14]=a1[2]
x[15]=1
v.bM(0,s)
return v}}
A.xa.prototype={
a5(){return new A.Qj(null,C.l)}}
A.Qj.prototype={
lT(d){var x,w,v,u=this,t=null,s=u.dx
u.a.toString
x=y.b
u.dx=x.a(d.$3(s,t,new A.ak3()))
s=y.f
u.dy=s.a(d.$3(u.dy,u.a.y,new A.ak4()))
w=y.d
u.fr=w.a(d.$3(u.fr,u.a.z,new A.ak5()))
v=u.fx
u.a.toString
u.fx=w.a(d.$3(v,t,new A.ak6()))
u.fy=y.e.a(d.$3(u.fy,u.a.ch,new A.ak7()))
v=u.go
u.a.toString
u.go=s.a(d.$3(v,t,new A.ak8()))
v=u.id
u.a.toString
u.id=y.w.a(d.$3(v,t,new A.ak9()))
v=u.k1
u.a.toString
u.k1=x.a(d.$3(v,t,new A.aka()))},
J(d,e){var x,w,v,u,t,s,r,q=this,p=null,o=q.gej(),n=q.dx
n=n==null?p:n.T(0,o.gl(o))
x=q.dy
x=x==null?p:x.T(0,o.gl(o))
w=q.fr
w=w==null?p:w.T(0,o.gl(o))
v=q.fx
v=v==null?p:v.T(0,o.gl(o))
u=q.fy
u=u==null?p:u.T(0,o.gl(o))
t=q.go
t=t==null?p:t.T(0,o.gl(o))
s=q.id
s=s==null?p:s.T(0,o.gl(o))
r=q.k1
r=r==null?p:r.T(0,o.gl(o))
return B.a3(n,q.a.r,C.h,p,u,w,v,p,t,x,s,r,p)}}
A.nK.prototype={
bc(d){var x=d.a,w=this.a
w[0]=x[0]
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
UT(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
if(o>0){x=Math.sqrt(o+1)
r=this.a
r[3]=x*0.5
x=0.5/x
r[0]=(s[5]-s[7])*x
r[1]=(s[6]-s[2])*x
r[2]=(s[1]-s[3])*x}else{if(r<q)w=q<p?2:1
else w=r<p?2:0
v=(w+1)%3
u=(w+2)%3
r=w*3
q=v*3
p=u*3
x=Math.sqrt(s[r+w]-s[q+v]-s[p+u]+1)
t=this.a
t[w]=x*0.5
x=0.5/x
t[3]=(s[q+u]-s[p+v])*x
t[v]=(s[r+v]+s[q+w])*x
t[u]=(s[r+u]+s[p+w])*x}},
u2(d){var x,w,v=Math.sqrt(this.gnw())
if(v===0)return 0
x=1/v
w=this.a
w[0]=w[0]*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return v},
gnw(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gp(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
j1(d){var x=new Float64Array(4),w=new A.nK(x)
w.bc(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
Z(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gamr(),a1=a0.h(0,3),a2=a0.h(0,2),a3=a0.h(0,1),a4=a0.h(0,0)
h=C.d.Z(g,a4)
x=C.d.Z(d,a1)
w=C.d.Z(e,a2)
v=C.d.Z(f,a3)
u=C.d.Z(g,a3)
t=C.d.Z(e,a1)
s=C.d.Z(f,a4)
r=C.d.Z(d,a2)
q=C.d.Z(g,a2)
p=C.d.Z(f,a1)
o=C.d.Z(d,a3)
n=C.d.Z(e,a4)
m=C.d.Z(g,a1)
l=C.d.Z(d,a4)
k=C.d.Z(e,a3)
j=C.d.Z(f,a2)
i=new Float64Array(4)
i[0]=h+x+w-v
i[1]=u+t+s-r
i[2]=q+p+o-n
i[3]=m-l-k-j
return new A.nK(i)},
X(d,e){var x,w=new Float64Array(4),v=new A.nK(w)
v.bc(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
return v},
a4(d,e){var x,w=new Float64Array(4),v=new A.nK(w)
v.bc(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
return v},
h(d,e){return this.a[e]},
t(d,e,f){this.a[e]=f},
j(d){var x=this.a
return B.d(x[0])+", "+B.d(x[1])+", "+B.d(x[2])+" @ "+B.d(x[3])}}
var z=a.updateTypes(["mJ(@)","oK(@)","pH(@)"])
A.ak3.prototype={
$1(d){return new A.mJ(y.k.a(d),null)},
$S:z+0}
A.ak4.prototype={
$1(d){return new B.k3(y.m.a(d),null)},
$S:72}
A.ak5.prototype={
$1(d){return new B.lh(y.r.a(d),null)},
$S:141}
A.ak6.prototype={
$1(d){return new B.lh(y.r.a(d),null)},
$S:141}
A.ak7.prototype={
$1(d){return new A.oK(y.a.a(d),null)},
$S:z+1}
A.ak8.prototype={
$1(d){return new B.k3(y.m.a(d),null)},
$S:72}
A.ak9.prototype={
$1(d){return new A.pH(y.E.a(d),null)},
$S:z+2}
A.aka.prototype={
$1(d){return new A.mJ(y.k.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.al,[A.mJ,A.oK,A.pH])
w(A.xa,B.tA)
w(A.Qj,B.mM)
x(B.bT,[A.ak3,A.ak4,A.ak5,A.ak6,A.ak7,A.ak8,A.ak9,A.aka])
w(A.nK,B.D)})()
B.dP(b.typeUniverse,JSON.parse('{"mJ":{"al":["i1?"],"ao":["i1?"],"ao.T":"i1?","al.T":"i1?"},"oK":{"al":["aG"],"ao":["aG"],"ao.T":"aG","al.T":"aG"},"pH":{"al":["aL"],"ao":["aL"],"ao.T":"aL","al.T":"aL"},"xa":{"U":[],"h":[]},"Qj":{"a1":["xa"]}}'))
var y=(function rtii(){var x=B.T
return{k:x("i1"),a:x("aG"),r:x("fH"),m:x("d5"),E:x("aL"),b:x("mJ?"),e:x("oK?"),d:x("lh?"),f:x("k3?"),w:x("pH?")}})()}
$__dart_deferred_initializers__["3n1OlwjAhwwUdrL/vNb8ER7U3L8="] = $__dart_deferred_initializers__.current
