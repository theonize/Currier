father(F,C) :- man(F), parent(F,C).
mother(M,C) :- woman(M), parent(M,C).

is_father(F) :- father(F,_).
is_mother(M) :- mother(M,_).

son(S,P) :- man(S), parent(P,S).
daughter(D,P) :- woman(D), parent(P, D).

siblings(A,B) :- parent(P,A), parent(P,B), A\=B. % one common parent
full_siblings(A,B) :- father(F,A), father(F,B), % same father
	mother(M,A), mother(M,B), % same mother
	A\=B.
brother(A,B) :- siblings(A,B), man(A), A\=B.
sister(A,B) :- siblings(A,B), woman(A), A\=B.

uncle(U,N) :- man(U), siblings(U,P), parent(P,N).
aunt(A,N) :- woman(A), siblings(A,P), parent(P,N).

descendant(D,A) :- parent(A,D).
descendant(D,A) :- parent(P,D), descendant(P,A).
ancestor(A,D) :- descendant(D,A).

man(adam).
man(cain).
man(abel).
man(enoch).
man(irad).
man(mehujael).
man(methushael).
man(lamech).
man(tubalCain).

woman(eve).
woman(adah).
woman(zillah).
woman(naamah).

spouse(adam,eve).
spouse(lamech,adah).
spouse(lamech,zillah).

parent(adam,cain).
parent(eve,cain).
parent(adam,abel).
parent(eve,abel).
parent(cain,enoch).
parent(enoch,irad).
parent(irad,mehujael).
parent(mehujael,methushael).
parent(methushael,lamech).
parent(lamech,jabal).
parent(adah,jabal).
parent(lamech,jubal).
parent(zillah,jubal).
parent(lamech,tubalCain).
parent(zillah,tubalCain).
parent(lamech,naamah).
parent(zillah,naamah).


