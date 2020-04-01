In this article I will show you the Mental Models I use with React every day
that help me to solve, explain and debug even the hardest of problems.

## The real difference between experts and newcomers

I started coding in 2009, more than a decade ago (omg what) and something I've
learned is that _everyone_ is learning how to code, in one way or another.
Newcomers to the field are learning the basics, and seasoned developers are
learning how to do the basics the best way possible, and polishing their
skillset.

The biggest difference between someone that has mastered a language, framework
or tool and someone who hasn't lies not in the fact that they know the
language's syntax, have read the source code, or know all the uses of such tool,
but instead their deeper understanding lies in the _mental models_ they have at
their disposal.

## What's a mental model and why is it so important?

A mental model is someone's thought process that represents the way something
works in the real world. It connects the relationships between various parts of
a system and makes sense of it, so that they have an intuitive understanding of
that system.

In other words: a mental model helps you make sense of the world around you and
helps you to make the best use of it.

Imagine the way you think about cars. Most of us don't know the exact mechanical
principles that make a car work. I don't know what torque is, or remember the
equation for acceleration or velocity. I could google it, but I don't need any
of that knowledge in order to drive my car every day.

That's because I intuitively understand how a car works. I have a mental model
of it. I know that if I press the gas pedal it will accelerate, the harder I
press it the faster I'll move. The brakes do the opposite and decrease my speed.
My driving instructor didn't teach me how a motor works, but instead how to know
when to switch from first to second gear, how to "feel the car" and so on.

We don't teach code this way. We focus on syntax, do-s and dont's, best
practices and gluing things together, rather than focusing on creating a picture
in our minds about a piece of the puzzle so that we deeply and intuitively
understand it and can solve the puzzle in any way we want.

Do you remember trying to learn something new, but it just didn't make sense and
you ended up copying some code from StackOverflow instead? And slowly, as you
used it more and more, you somehow got to understand it? It "clicked" into
place. That's your mind building a mental model by using all the pieces of the
puzzle you've encountered. Everything we understand we do through mental models,
from code, to physics.

## React and Mental Models

React is a great library that simplifies web development a lot. It helps us
build complex, interactive UIs, but most importantly it changes how we write
code. It creates a system around our apps that makes it so our apps are simpler
to understand.

React itself is a great mental model. At its core it relies on a simple idea:
you encapsulate portions of your app that rely on similar logic, and React will
make sure that portion is always up to date with whatever data it relies on.
However, sometimes it's not obvious how it's doing this or why.

This is where a good mental model about React will help. Whether you've been
working with React for years or are just starting, in this article I will show
you the mental models I use with React every day that help me to solve, explain
and debug even the hardest of problems.

So in order for me to transfer the mental models I use with React and JavaScript
to you, I'll have to build them up from the ground up, starting from a simple
idea and building on top of it until it's a complete house.

## It's functions all the way down

In order to create clear and useful mental models we must start by understanding
the basic building blocks of our system, in the case of React (and JavaScript in
general) that's functions.

If you fully understand functions in JavaScript you will be closer to
understanding React. This is even more true since the React Hooks revolution,
but the mental model I'll explain fits well enough for React classes too.

In fact, React is functions all the way down. A component is actually a
function, and component containing other components are functions calling other
functions. Props are the functions' arguments. Strip away JSX and React is
really a bunch of functions calling one another. JSX is in itself an applied
mental model to make using React simpler.

That's a loaded paragraph, let's slow down and break it down.

### A component is a function

If we ignore class components we're left with "functional" components, which are
plain functions that behaves exactly like any other JavaScript function. React's
magic comes from JSX, which allows us to use components (functions) in a way
that feels like HTML.

Under the hood JSX is transformed into the below. Ignoring that it's a mess to
read, they're a bunch of functions calling one another.

--- Good place to show React with JSX and the output of it, which one do you
prefer to write? ---

In turn, a component's props are the function's arguments. We use them the
"React" way by calling them `props`, but they could as well be called `args`.

So how can we turn this knowledge into a useful mental model? When I think about
a function, I imagine it as a box. And since a component is a fancy function, I
imagine a fancy box (in truth I imagine it something like this 📦). Sometimes
goes into the magic box, and what comes out is what the user sees. I imagine
`props` as being the ingredients the box needs to create the output.

https://cdn.dribbble.com/users/1986644/screenshots/4141673/dribbble_gsn118_cardboard_box.png

Something important to note: I'm a visual person so when I think about a problem
I see it visually in my mind and I try to solve it visually, as if my code was
made of machine gears turning and fitting together. I'll show you a visual
representation of how I imagine code to work, and I hope it helps you build your
own mental models to tackle the difficulties of everyday React.

### JSX as a mental model

In the early days of React, JSX was controvertial, but nowadays it has become an
important aspect in React's success. That's because JSX offers a great applied
mental model for using nested functions in a way that feels intuitive.

We've all used HTML, and the concept of each element having a single parent and
many children and siblings is easy to understand and relate to. It also
translates nicely to functions, with each "parent" calling all its children.

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
(variables, function declarations, logic) isolated, only usable to with itself.
Any function created within such a function (an inner function) allows it to use
the enclosing function's (the parent) state.

In React this usage is common: declaring a "handle" method that uses the
enclosing function's React state. This is possible due to closures. If the
handle method was _outsite_ of the component, it wouldn't be able to gain access
to the `state` variable.

--- Show code about a handle function ---

In mental model words: a box can access the state of the parent, or share it
with its children, but never share it or access it to other boxes outside of
itself such as siblings or other parents.

--- Show image with no sharing between sibling boxes ---

## Giving our boxes a name: Component.

Now let's advance our mental model: let's think about React components. What is
a component? Another box. Seriously, if you take anything from this talk it's
that I _love_ boxes.

--- change visual to show "component" rather than "function's closure" ---

As you can see, the mental model didn't change that much. A basic React
component is a cube that gets data from its parent and can pass it down to its
children. Eventually that information will be used to render something, to
create HTML.

--- Good place to show data

Let's make our component more complex. What happens when we add state? Our
component has some instrinsic functionality now, it will behave in a different
way.

If state changes our component is re-rendered. Which means everything inside of
it gets re-created, including functions and variables. This is why updating
state inside the render method will cause your component to explode, since it's
updating, re-creating, updating again and so son, you overload everything by
recreating so many boxes!

The way I think about this is that whenever state changes, the original box is
"washed" so that everything inside of it gets clean, but the box is not thrown
away, it's still there. JavaScript or React might optimize the washing, but I
don't care about that because it doesn't affect the way I have to think about
it.

Imagining it this way helps me a lot when coding new features, fixing bugs, or
optimizing performance. It also help to grasp complex components.
