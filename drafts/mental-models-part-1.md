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
working with React for years or are just starting, I will show you the Mental
Models I use with React every day that help me to solve, explain and debug even
the hardest of problems.

Something important I've learned is that having a _mostly_ correct overall
picture is enough to be great at what you do. Trying to learn the ins and outs
of a system can lead you into a rabbit hole without offering much return of
investment on your time. Instead focus on understanding just enough to
_correctly_ solve a problem, and then subsequently polish that knowledge.

I think the best example of this is when I started learning React. First I was
overwhelmed by how many things I supposedly had to learn: Webpack, Babel, React,
Redux. Back then every single React guide had Redux slapped on its title as
well. I was lucky to learn only React, and I was working with React
profesionally for over a year before ever having to touch anything close to
Redux. To this day I don't really know Redux and I don't need to. I have a
close-enough mental model of how it works that I can jump into a project with
Redux and be effective at it. If I had to implement it in my team's app for some
reason, then I should improve my mental models, but until then, why bother? I
rather learn X State or something.

## It's functions all the way down

There once was a famous astronomer, one day after giving one of his lectures, an
elderly lady told him that he had it all wrong, that the world actually rested
on top of a tortoise. When the astronomer cleverly replied "and what supports
the tortoise?" she replied: "very clever, but it's obviously turtles all the way
down!"

React is functions all the way down! Every component is a function, that calls
more functions, that can in turn ... well ... call more functions! And props are
functions' arguments that you access in a more fancy way. Strip away JSX and
React is really a bunch of functions calling one another. JSX is in itself an
applied mental model to make using React simpler.

--- Good place to show React with JSX and the output of it, which one do you
prefer to write? ---

So in order for me to "transfer" the mental models I use with react to you, I'll
have to build them up from the ground up.

Something important to note: I'm a visual person, and we all are to different
levels, so when I think about a problem I see it visually in my mind and I try
to solve it visually, as if my code was made of machine gears turning and
fitting together. I'll show you a visual representation of how I imagine code
works, and I hope it helps you build your own mental models to tackle the
difficulties of everyday React.

## Closures are fancy boxes

--- start with some code for some closures ---

I don't know how many times I've read or been asked about closures. It's one of
those things you have to learn about JavaScript but it really doesn't like being
understood, almost like me as a teenager.

Why are closures important? Because without them we wouldn't be able to do a lot
of complex things, and React wouldn't work the way it does, or even be possible.
Here's how I imagine a closure: it's a box. That's it.

--- Add a visual of a closure being a box ---

A closure is a box that keeps whatever is inside of it from spilling out while
allowing whatever is outside from entering. Spilling out where? Well, to the
_bigger_ box. With the biggest box being the global scope. If something lives in
the global scope, other boxes can access it, but if something lives inside a
box, only whatever is inside of it can access it.

Sounds familiar? A React component is a closure, a box. You can only pass props
down from parent to child. It's boxes all the way down!

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
