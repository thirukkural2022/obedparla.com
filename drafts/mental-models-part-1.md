I've been coding for more than a decade and something I've learned is that
_everyone_ is learning how to code in one way or another. Sometimes you're
learning the basics and sometimes how to do things in the most efficient way,
with the right tool, or under certain constraints.

The biggest difference between someone that has mastered a language, framework
or tool and someone who hasn't lies in the creation of _mental models_.

Mental models are born from deeper understanding of how tools work and help
solve hard problem by giving insight into how you can best use them. But not
only do they help solve problems, mental models also allow us to explain complex
systems to others and to ourselves, and most importantly, humans are naturally
wired to understand the world through mental models.

In this article I will show you the mental models I use with React every day
that help me to solve, explain and debug even the hardest of problems.

## What's a mental model and why is it so important?

A mental model is a thought process that represents the way something works in
the real world. It connects the relationships between various parts of a system
and makes sense of it so that anyone using that model will have an intuitive
understanding of the system.

In other words: a mental model helps you make sense of the world around you and
helps you to make the best use of it. It can be applied to tools, systems, and
even ideas. The best part is that we all have mental models of our own!

Imagine the way you think about cars. Most of us don't know the exact mechanical
principles that make a car work. I don't know what torque is, or remember the
equation for acceleration or velocity, and I don't need any of that knowledge in
order to drive my car every day.

That's because I intuitively understand how a car works. I have a mental model
of it. If I press the gas pedal it will accelerate, the harder I press it the
faster I'll move. The brakes do the opposite and decrease my speed. My driving
instructor didn't teach me how a motor works, but instead how to know when to
switch from first to second gear, how to "feel the car" and so on.

For me, a car is a box that moves in a certain way when I do certain inputs. The
car gives me feedback based on what I'm doing and that's how I know if I'm doing
it right or wrong.

We don't teach code this way. We focus on syntax, do-s and dont's, best
practices and how to glue things together. We should focus on creating a picture
in our minds about a piece of the puzzle so that we deeply and intuitively
understand it and can solve the puzzle in any way we want.

We've transported school rote-learning to coding, and most of the time it
doesn't stick.

Do you remember trying to learn something new, but it just didn't make sense and
after copying code from StackOverflow many times, and reading articles it slowly
"clicked" into place and you could understand it? That's your mind building a
mental model by using all the pieces of the puzzle you've encountered.

Once you build a mental model (even an incomplete one) hard
systems/tools/problems start to make sense to us.

## React Mental Models

React helps us build complex, interactive UIs in an easier way than we could do
without it. It does this by creating a system around our apps that makes them
simpler to understand.

This doesn't mean React itself is simple, but that it forces us (or guides us)
to create apps in such a way that they are generally simpler to navigate.

React itself is a great mental model with a simple idea at its core: encapsulate
portions of your app that rely on similar logic and UI, and React will make sure
that portion is always up kept up to date.

Whether you've been working with React for years or are just starting, having
useful mental models is, in my opinion, the fastest way to feel confident
working with a complex system.

So in order for me to transfer my mental models to you, I'll start with the
principles behind them and build them on each step.

## It's functions all the way down

In order to create clear and useful mental models we must start by understanding
the basic building blocks of our system, in the case of React (and JavaScript in
general) that's functions.

If you fully understand functions in JavaScript you will be closer to
understanding React. This applies closest to functional components (and Hooks
too) but the mental model I'll explain fits well for React classes too.

In React, a component is actually a function, and components containing other
components are functions calling other functions and props are the function's
arguments. Strip away JSX and React is really a bunch of functions calling one
another. JSX is in itself an applied mental model that makes using React simpler
and more intuitive.

That's a loaded paragraph, let's break it down.

### A component is a function that returns JSX

If we ignore class components we're left with functional components, which are
plain functions that behaves exactly like any other JavaScript function, but in
this case they return JSX, which is in turn transformed into HTML by React.

Under the hood JSX looks like the below. Ignoring that it's a mess to read, you
might notice they're bunch of functions calling one another. Now think in which
way would you rather write React?

--- Good place to show React with JSX and the output of it, which one do you
prefer to write? ---

### Props are the same as function arguments

A function can receive arguments when it's called, we use arguments to pass
information from wherever we're calling the function to the function itself. In
React components we call these arguments `props`, and that can cause confusion,
but under the hood they behave _exactly_ like function arguments, but we
interact with them through a nicer interface which is JSX.

### Turning this information into a mental model

When I think about a function, I imagine it as a self-enclosed box. Whenever
it's called it will do something and usually return a result.

--- a simple graphic with 2 + 2 = 4 return 4 in a box ---

Since a component is a fancy function, I imagine a fancy box (in truth I imagine
it something like this 📦), with `props` as the ingredients the box needs to
create the output. Sometimes you care about what the box is doing, and sometimes
it behaves more like a blackbox, where you only care about what you give it and
what it returns.

https://lh3.googleusercontent.com/proxy/aGxUBL4uzZaGghiO3gNJx9LbFpaJHrjNMGbn67Y7WfnGF_DekKxfpmhWfXoLqkGhJUDS9bZIz1zlzKjqAZyOyX6AY0b_nEeJVfGuX-_AUW6pKBDQ2HjyPPHX2SXLeGsTk0Zn3CuEf-2E2NXgaTFM-os
https://cdn.dribbble.com/users/1986644/screenshots/4141673/dribbble_gsn118_cardboard_box.png

When a component is executed, it will run whatever logic it has (if any) and
return JSX. That JSX can be composed of pure elements that turn into HTML, or
other components that will also return something. A component can have many
children, but only one parent.

HTML made the concept of each element having a single parent and many children
part of all websites.

--- Image of boxes inside boxes ---

??? I'm a visual person so when I think about a problem I see it visually in my
mind and I try to solve it visually, as if my code was made of gears turning and
fitting together. I'll show you a visual representation of how I imagine code to
work, and I hope it helps you build your own mental models to tackle the
difficulties of everyday React.

## JSX as a mental model

In the early days of React, JSX was controvertial, but nowadays it has become an
important aspect in React's success. That's because JSX offers a great applied
mental model for using nested functions in a way that feels intuitive.

HTML made the concept of each element having a single parent and many children
part of all websites. This concept translates perfectly to JSX and components,
where each parent can have many children.

For me, each component is a box, and since all components are children to a
parent, I imagine them as many boxes one inside another. I developed this idea
first with HTML, and since JSX follows the same principles it was easy to
re-purpose.

https://share.getcloudapp.com/7KuRGj2b

--- Image with boxes inside of boxes, maybe animated? ---

But the mental model of a box being a component is not complete without
understanding how it can interact with other components.

## How To Think About Closures

--- start with some code for some closures ---

Closures are a core concept in JavaScript. Nearly all complex functionality in
the language is enabled by them, so understanding how they work is important.

--- Add a visual of a closure being a box ---

A closure is a box that keeps whatever is inside of it from spilling out while
allowing whatever is outside from entering. Spilling out where? Well, to the
_bigger_, container box. With the biggest box being the `global` scope (which is
the `window` object in the browser). If something lives in the global scope, all
other boxes can access it, but if something lives inside a box, only itself and
its children can have access to it.

This is the reason I like to imagine the functions/boxes as _open_ boxes. The
parent can send information down to its children, but not the other way around.
This information is sent as `arguments` to our functions.

Sounds familiar? A React component is a closure, a box. You can only pass props
down from parent to child. It's boxes all the way down!

In more technical terms, a closure enables a function to keep its own state
isolated (variables, function declarations, logic), only usable to within
itself. Any function created in such a function can use the enclosing function's
state (children can access the parent's information).

In React this usage is common: a good example is declaring a "handle" method
that uses the enclosing function's React state. This is possible due to
closures. If the handle method was _outsite_ of the component, it wouldn't be
able to gain access to the `state` variable.

--- Show code about a handle function ---

In mental model words: a box can access the state of the parent, or share it
with its children, but never share it or access it to other boxes outside of
itself such as siblings or other parents.

--- Show image with no sharing between sibling boxes ---

## Fitting React's State and Props Into Our Mental Model

What happens when we add state to a component? It will behave in a different way
than what we'd expect from a normal function, but how does it change, exactly?

Whenever we create a component, it will be executed and rendered by React into
HTML (or whatever other platform you're running React on), but that will happen
only once, at the very first render. With state we can control when React should
re-render the components (and therefore re-execute all the code within).

The idea at the core of React is simple and elegant: let it handle all
rendering, so it can make it efficient and easy to deal with. After all,
everything we do in any kind of app is with the purpose of showing something to
the end-user. It does this by offering a simple api: state.

In my mental model, state is like a especial property in the box. It's
independent from everything else that happens within it. It will get whatever
value you start it with and then store subsequent ones without caring what's
going on around it.

State follows a simple rule, whenever it changes it will re-rendered the
component and its children. This means on every render everything in the
component is executed again, which includes functions and variables. Props
follow the exact same logic, if a prop changes, the component will re-render.

Rendering is React's most confusing part and where having a clear mental model
really helps. It's confusing because there are a lot of things that happen
during rendering and a lot of pitfalls that come with them.

The way I imagine rendering with my mental model boxes is two fold: the first
render brings the box into existence. That's when state is initialized. The
second part is when it re-renders. I imagine it as the box being thrown away and
an almost-brand-new-one being created. It sorts of recycles the box.

Whenever a re-render happens, everything inside the box is re-created, including
variables and functions. Everything except for state which is maintained from
render to render. That's why the box is "recycled". React keeps track of each
box and that's why state is always reliable, because its value is maintained
whatever happens.

We call it a "render" because it ultimately renders (shows) something to the
screen, but it's equal to a function being executed, and when you execute a
function everything inside of it is run from scratch; variables are initialized,
functions are called, memory is allocated, the whole deal. Component work the
same way and that's why we can have logic like this:

--- show basic code that relies on some state to render something ---

The above will give a different result depending on the props the component
receives. Whenever props or state changes, a new render happens and the function
is executed again.

By imagining a box being recycled, I can understand what's going on inside of
it. For simple components it's easy to guess, but the more complex a group of
components gets, the more useful a clear mental model becomes.

A very common situation in React is when you have state in a component and
suddenly you need to share that state to another component that isn't a child.
The way to solve this is by "lifting state up" to the closest parent that
contains both components needing such state. Like this:

--- image of lifting state up with boxes ---

I've seen many of my students struggling with this idea, I believe it's because
without a good mental model you can't imagine how each component connects to
another.

Another great example of this mental model in action is updating a parent's
state from a child. It's very common to want to update some state whenever a
button is clicked, so we sent props with a function that will update state. In
under to understand this we need to remember that a parent box can share
information to any of its children. When we send down a function, the parent is
telling its child "hey, here's a function you can use to give me some
intructions". Like:

--- Visual representation of the above ---

### Conclusion

Here's the complete mental model I use for React components, directly translated
from how I imagine them into words.

I imagine a React component as a box.

The box contains not only its own information but also all of its children. A
box, like a real world box, can have other boxes inside of it as well as many
other things, and the boxes can in turn contain other boxes. Either side by side
or inside each other. I use a similar mental model for recursion and HTML.

The boxes are self-contained, impermeable. They never leak anything outside of
themselves, but they can share things to its children, or whatever is inside of
them. In React the way to share things between boxes is called `props`, the same
idea applies to function and then it's called `arguments`.

Since information can only travel _down_ from parents to children, whenever I
need to share something between them, I imagine that piece as moving _up_ into a
bigger box that contains all the boxes that need such information, in React
jargon we're "lifting state up", but this can be applied to other things too,
such as variables or functions (this is a great way to think about Context, see
the upcoming PART 3).

The box is created on the first _render_ and that's when _state_ (and a few
other things, see the upcoming PART 2) is initialized, the box is only _created_
once, so state is also only initialized once.

Since a component is a function, on every render it gets executed again and the
box is re-created, but since it contained some important information, that's
kept safe, so I imagine it as being recycled rather than fully destroyed and
remade.

Whenever a box is recycled, so are all of its children. This can happen because
of a state change in itself, or a props change from the parent. Most
optimizations are about avoiding unnecessary renders (see PART 2).

By using these mental models I feel confident when working with React. They help
me visualize what can be a maze of code into a comprehensive mental map. It also
dimistifies React and brings it to a level I'm much more comfortable with, that
is simple JavaScript functions.

React is not that complex once you start understanding the core principles
behind it and create some ways to imagine how your code works.

?? question, if props don't change, does React still re renders? because of a
parent re-render ??

---

This was a long post with a lot of useful information. I didn't set myself to
write a "learn React basics" article but that's the article it wanted to be. I
hope it's useful to you and it was as enjoyable to read as it was to write!

I'm working on PART 2 which will go more in-depth into React's API such as
useMemo, useCallback and of course, useEffect, as well as how to use a more
advanced mental model to improve your app's performance. PART 3 will focus in
high-level features such as Context and I'll write about the exact mental model
I use for all of React.

If you'd like to read the next 2 parts please consider subscribing to my
newsletter, I only email for new articles and will never spam you.
